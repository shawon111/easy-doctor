import { connectDB } from "@/config/database";
import "@/models/template-one-content.model";
import "@/models/template-three-content.model";
import "@/models/template-two-content.model";
import Website from "@/models/website.model";
import User from "@/models/user.model";
import { unstable_cache } from "next/cache";
import { replaceTemplateVariables } from "@/lib/content/resolve-template-content";
import SEO from "@/models/seo.model";

// create website
export const createWebsite = async (userId, websiteData, session) => {
    const { templateType, templateVariant, contentType, content, subdomain } = websiteData;
    const findSeo = await SEO.findOne({ userId }).session(session).select({
        _id: 1
    })
    if (!findSeo) {
        throw new Error("SEO settings not found for user");
    }

    const canonicalUrl = `https://${subdomain}.${process.env.NEXT_PUBLIC_BASE_DOMAIN}`;
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
        seo: findSeo._id
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

    const customDomainConnected =
        website?.domain &&
        website.domainStatus === "connected";
    const baseDomain = process.env.NEXT_PUBLIC_BASE_DOMAIN;
    const websiteHost = customDomainConnected
        ? website.domain
        : website?.subdomain && baseDomain
          ? `${website.subdomain}.${baseDomain}`
          : null;

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
                  url: websiteHost ? `https://${websiteHost}` : null,
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