import { connectDB } from "@/config/database";
import "@/models/template-one-content.model";
import "@/models/template-three-content.model";
import "@/models/template-two-content.model";
import Website from "@/models/website.model";
import User from "@/models/user.model";
import { unstable_cache } from "next/cache";
import { replaceTemplateVariables } from "@/lib/content/resolve-template-content";
import SEO from "@/models/seo.model";
import { isWebsiteActive } from "@/lib/subscription";
import { getDoctorCanonicalBaseUrl } from "@/lib/seo/urls";

// create website
export const createWebsite = async (userId, websiteData, session) => {
    const { templateType, templateVariant, contentType, content, subdomain, status } = websiteData;
    const findSeo = await SEO.findOne({ userId }).session(session).select({
        _id: 1
    })
    if (!findSeo) {
        throw new Error("SEO settings not found for user");
    }

    const canonicalBaseUrl = getDoctorCanonicalBaseUrl({ subdomain });
    if (!canonicalBaseUrl) {
        throw new Error("A production domain is required to create the website");
    }
    const canonicalUrl = canonicalBaseUrl.toString().replace(/\/$/, "");
    const user = await User.findById(userId).select("profilePicture").session(session);
    if (!user) {
        throw new Error("User not found");
    }

    const updatedSeo = await SEO.findOneAndUpdate(
        { _id: findSeo._id },
        {
            $set: {
                canonicalUrl,
                subdomain,
                "pages.home.ogImage": user.profilePicture,
                "pages.about.ogImage": user.profilePicture,
                "pages.services.ogImage": user.profilePicture,
                "pages.appointment.ogImage": user.profilePicture,
                "social.ogImage": user.profilePicture,
            },
        },
        {
            session,
            new: true,
            runValidators: true,
        }
    );
    if (!updatedSeo) {
        throw new Error("Unable to update SEO canonical URL");
    }

    const [newWebsite] = await Website.create([{
        userId,
        templateType,
        variant: templateVariant,
        contentType,
        content,
        subdomain,
        seo: findSeo._id,
        status,
    }], { session });

    return newWebsite;
}

// get website by userId
export const getWebsiteByUserId = async (userId) => {
    await connectDB();
    try {
        const website = await Website.findOne({ userId })
            .populate('content')
            .populate('seo');
        return website;
    } catch (error) {
        console.log("Error fetching website:", error);
        throw new Error('Failed to fetch website');
    }
}

export const getPublicWebsiteUrl = (website) => {
    const customDomainConnected =
        website?.domain &&
        website.domainStatus === "connected";
    const baseDomain = process.env.NEXT_PUBLIC_BASE_DOMAIN;
    const websiteHost = customDomainConnected
        ? website.domain
        : website?.subdomain && baseDomain
          ? `${website.subdomain}.${baseDomain}`
          : null;

    return websiteHost ? `https://${websiteHost}` : null;
};

export const getWebsiteUrlForUser = async (userId) => {
    await connectDB();

    const website = await Website.findOne({ userId })
        .select({
            subdomain: 1,
            domain: 1,
            domainStatus: 1,
        })
        .lean();

    return getPublicWebsiteUrl(website);
};

export const getMyWebsiteDetails = async (userId) => {
    await connectDB();

    const [user, website] = await Promise.all([
        User.findById(userId)
            .select({
                name: 1,
                phone: 1,
                email: 1,
                specialization: 1,
                qualifications: 1,
                experience: 1,
                bio: 1,
                profilePicture: 1,
                expiresAt: 1,
            })
            .lean(),
        Website.findOne({ userId })
            .select({
                subdomain: 1,
                domain: 1,
                domainStatus: 1,
                templateType: 1,
                variant: 1,
                status: 1,
            })
            .lean(),
    ]);

    if (!user) {
        throw new Error("User not found");
    }

    const baseDomain = process.env.NEXT_PUBLIC_BASE_DOMAIN;

    return {
        doctor: {
            name: user.name,
            phone: user.phone || null,
            email: user.email,
            specialization: user.specialization,
            qualifications: user.qualifications || [],
            experience: user.experience ?? null,
            bio: user.bio || "",
            profilePicture: user.profilePicture || null,
            expiresAt: user.expiresAt,
        },
        website: website
            ? {
                  url: getPublicWebsiteUrl(website),
                  subdomainUrl: website.subdomain && baseDomain
                      ? `https://${website.subdomain}.${baseDomain}`
                      : null,
                  customDomain: website.domain || null,
                  customDomainStatus: website.domainStatus || null,
                  templateType: website.templateType,
                  variant: website.variant,
                  status: website.status || null,
              }
            : null,
    };
};

export const persistCustomDomainState = async (
    {
        userId,
        websiteId,
        seoId,
        domain,
        subdomain,
        verified = false,
        connected = false,
        dnsRecords = [],
        verification = [],
    },
    session
) => {
    const canonicalSubdomainUrl = getDoctorCanonicalBaseUrl({ subdomain });
    if (!canonicalSubdomainUrl) {
        throw new Error("A production domain is required to save website domain state");
    }
    const canonicalSubdomain = canonicalSubdomainUrl.toString().replace(/\/$/, "");
    const websiteUpdate = domain
        ? {
              $set: {
                  domain,
                  domainStatus: connected ? "connected" : "pending",
                  domainVerified: verified,
                  dnsRecords,
                  vercelVerification: verification,
                  dnsConfigCheckedAt: new Date(),
              },
          }
        : {
              $unset: {
                  domain: 1,
                  domainStatus: 1,
                  dnsConfigCheckedAt: 1,
              },
              $set: {
                  domainVerified: false,
                  dnsRecords: [],
                  vercelVerification: [],
              },
          };

    const updatedWebsite = await Website.findOneAndUpdate(
        { _id: websiteId, userId },
        websiteUpdate,
        { session, new: true }
    );

    if (!updatedWebsite) {
        throw new Error("Website not found while saving custom domain state");
    }

    await User.findByIdAndUpdate(
        userId,
        connected && domain
            ? { $set: { domain } }
            : { $unset: { domain: 1 } },
        { session }
    );

    await SEO.findByIdAndUpdate(
        seoId,
        connected && domain
            ? {
                  $set: {
                      domain,
                      canonicalUrl: canonicalSubdomain,
                  },
              }
            : {
                  $unset: { domain: 1 },
                  $set: { canonicalUrl: canonicalSubdomain },
              },
        { session }
    );

    return updatedWebsite.toObject();
};

// get website lists
export const getWebsiteLists = async () => {
    await connectDB();
    try {
        const websites = await Website.find({}).lean();
        return websites;
    }
    catch (error) {
        console.log("Error fetching website lists:", error);
        throw new Error('Failed to fetch website lists');
    }
}

export const getPublicWebsiteSeoByIdentifier = async (identifier) => {
    await connectDB();

    const normalizedIdentifier = identifier?.trim().toLowerCase().replace(/\.$/, "");
    if (!normalizedIdentifier) {
        return null;
    }

    const isDomain = normalizedIdentifier.includes(".");
    const populatePublicFields = (query) =>
        query
            .populate("seo")
            .populate({
                path: "userId",
                select: "name phone specialization bio clinicAddress socialLinks subdomain domain expiresAt profilePicture treatments qualifications",
            })
            .lean();
    let website = await populatePublicFields(Website.findOne(
        isDomain
            ? {
                  domain: normalizedIdentifier,
                  domainStatus: { $in: ["connected", "verified"] },
              }
            : { subdomain: normalizedIdentifier }
    ));

    if (!website && !isDomain) {
        const user = await User.findOne({ slug: normalizedIdentifier })
            .select("_id")
            .lean();
        if (user) {
            website = await populatePublicFields(
                Website.findOne({ userId: user._id })
            );
        }
    }

    if (!website?.seo || !website?.userId) {
        return null;
    }

    const canonicalBaseUrl = getDoctorCanonicalBaseUrl(website);
    if (!canonicalBaseUrl) {
        return {
            website,
            seo: website.seo,
            user: website.userId,
            canonicalUrl: null,
            isPublished: false,
        };
    }

    return {
        website,
        seo: website.seo,
        user: website.userId,
        canonicalUrl: canonicalBaseUrl.toString().replace(/\/$/, ""),
        isPublished:
            website.status === "ready" &&
            Boolean(website.content) &&
            isWebsiteActive(website.userId.expiresAt),
    };
};

// Resolve either the platform subdomain or a connected custom domain to its website.
export const getWebsiteBySubdomain = async (subdomainOrDomain, pageName) => {
    await connectDB();
    const identifier = subdomainOrDomain?.trim().toLowerCase().replace(/\.$/, "");

    if (!identifier) {
        return null;
    }

    let websiteLookup = await Website.findOne({
        $or: [
            { subdomain: identifier },
            {
                domain: identifier,
                domainStatus: { $in: ["connected", "verified"] },
            },
        ],
    })
        .select({ subdomain: 1 })
        .lean();

    if (!websiteLookup && !identifier.includes(".")) {
        const user = await User.findOne({ slug: identifier })
            .select("_id")
            .lean();
        if (user) {
            websiteLookup = await Website.findOne({ userId: user._id })
                .select({ subdomain: 1 })
                .lean();
        }
    }

    if (!websiteLookup) {
        return null;
    }

    const canonicalSubdomain = websiteLookup.subdomain;
    const getCachedWebsite = unstable_cache(
        async () => {
            const website = await Website.findOne({
                subdomain: canonicalSubdomain,
            })
                .populate({
                    path: "content",
                    select: `pages.${pageName} header footer`
                })
                .populate("userId", "name phone clinicAddress bookingPreferences")
                .lean();

            if (website?.content) {
                const clinics = website.userId?.clinicAddress || [];
                const clinicItems = clinics.map(clinic => ({
                    location: clinic.chamberName,
                    address: clinic.address,
                    city: clinic.city,
                    country: clinic.country,
                    day: clinic.visitingDays,
                    hours: clinic.visitingHours,
                    whatsappUrl: clinic.whatsapp ? `https://wa.me/${clinic.whatsapp.replace(/[^0-9]/g, "")}` : "#"
                }));

                const firstClinicWhatsapp = clinicItems[0]?.whatsappUrl || "#";

                website.content = replaceTemplateVariables(website.content, {
                    name: website.userId?.name || "Doctor",
                    phone: website.userId?.phone || "",
                    whatsappUrl: firstClinicWhatsapp,
                });

                if (website.content?.pages?.appointment?.schedule) {
                    website.content.pages.appointment.schedule.items = clinicItems;
                }
                if (website.content?.pages?.appointment?.schedules) { // template-two
                    website.content.pages.appointment.schedules.items = clinicItems;
                }
            }

            return website;
        },
        ["website-by-subdomain", canonicalSubdomain, pageName],
        { tags: [`website-content:${canonicalSubdomain}`] }
    );

    return getCachedWebsite();
}

// domain connect with website hosted in vercel
const VERCEL_API = "https://api.vercel.com";

const getHeaders = () => ({
    Authorization: `Bearer ${process.env.VERCEL_TOKEN}`,
    "Content-Type": "application/json",
});

const getTeamQuery = () => {
    const teamId = process.env.VERCEL_TEAM_ID;

    return teamId
        ? `?teamId=${encodeURIComponent(teamId)}`
        : "";
};

const handleResponse = async (response) => {
    const data = await response.json().catch(() => null);

    if (!response.ok) {
        const message =
            data?.error?.message ||
            data?.message ||
            `Vercel API request failed with status ${response.status}`;

        const error = new Error(message);
        error.status = response.status;
        error.data = data;

        throw error;
    }

    return data;
};

export const addDomain = async (domain) => {
    const projectId = process.env.VERCEL_PROJECT_ID;

    const response = await fetch(
        `${VERCEL_API}/v10/projects/${projectId}/domains${getTeamQuery()}`,
        {
            method: "POST",
            headers: getHeaders(),
            body: JSON.stringify({
                name: domain,
            }),
        }
    );

    return handleResponse(response);
};

export const getDomain = async (domain) => {
    const projectId = process.env.VERCEL_PROJECT_ID;

    const response = await fetch(
        `${VERCEL_API}/v9/projects/${projectId}/domains/${encodeURIComponent(domain)}${getTeamQuery()}`,
        {
            method: "GET",
            headers: getHeaders(),
            cache: "no-store",
        }
    );

    return handleResponse(response);
};

export const getDomainConfig = async (domain) => {
    const teamQuery = getTeamQuery();

    const response = await fetch(
        `${VERCEL_API}/v6/domains/${encodeURIComponent(domain)}/config${teamQuery}`,
        {
            method: "GET",
            headers: getHeaders(),
            cache: "no-store",
        }
    );

    return handleResponse(response);
};

export const verifyDomain = async (domain) => {
    const projectId = process.env.VERCEL_PROJECT_ID;

    const response = await fetch(
        `${VERCEL_API}/v9/projects/${projectId}/domains/${encodeURIComponent(domain)}/verify${getTeamQuery()}`,
        {
            method: "POST",
            headers: getHeaders(),
        }
    );

    return handleResponse(response);
};

export const removeDomain = async (domain) => {
    const projectId = process.env.VERCEL_PROJECT_ID;

    const response = await fetch(
        `${VERCEL_API}/v9/projects/${projectId}/domains/${encodeURIComponent(domain)}${getTeamQuery()}`,
        {
            method: "DELETE",
            headers: getHeaders(),
        }
    );

    return handleResponse(response);
};