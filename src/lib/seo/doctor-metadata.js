import { cache } from "react";
import { isWebsiteActive } from "@/lib/subscription";
import { resolvePublicImageUrl } from "@/lib/seo/urls";
import { getPublicWebsiteSeoByIdentifier } from "@/services/website.service";

const clean = (value) =>
    String(value ?? "")
        .trim()
        .replace(/\b(?:undefined|null)\b/gi, "")
        .replace(/\s+/g, " ")
        .replace(/^\s*[|—–-]\s*|\s*[|—–-]\s*$/g, "")
        .trim();

const truncate = (value, maxLength) => {
    const text = clean(value);
    if (text.length <= maxLength) return text;
    return `${text.slice(0, maxLength - 1).replace(/\s+\S*$/, "").trim()}…`;
};

const getDoctorFields = (context) => {
    const user = context.user || {};
    const clinics = Array.isArray(user.clinicAddress) ? user.clinicAddress : [];
    const primaryClinic = clinics[0] || {};

    return {
        name: clean(user.name || context.seo?.siteName) || "Doctor",
        specialty: clean(user.specialization || context.seo?.defaultSpecialty),
        city: clean(primaryClinic.city || context.seo?.location?.city),
        treatments: Array.isArray(user.treatments)
            ? user.treatments.map(clean).filter(Boolean)
            : [],
        qualifications: Array.isArray(user.qualifications)
            ? user.qualifications
                  .map((item) => clean(item?.degree || item))
                  .filter(Boolean)
            : [],
    };
};

const pageFallbacks = (page, doctor) => {
    const location = doctor.city ? ` in ${doctor.city}` : "";
    const identity = [doctor.specialty, location].filter(Boolean).join("");

    if (page === "privacy-policy") {
        return {
            title: `Privacy Policy | ${doctor.name}`,
            description: `Learn how this website handles information submitted through its public pages and appointment features.`,
        };
    }

    if (page === "about") {
        return {
            title: `About ${doctor.name}${identity ? ` | ${identity.trim()}` : ""}`,
            description: `Learn about ${doctor.name}${identity ? `, a ${identity.trim()}` : ""} and the professional background provided on this website.`,
        };
    }

    if (page === "services") {
        return {
            title: `${doctor.specialty || "Medical"} Services${location} | ${doctor.name}`,
            description: `Explore ${doctor.specialty ? `${doctor.specialty.toLowerCase()} ` : ""}services provided by ${doctor.name}${location}.`,
        };
    }

    if (page === "appointment") {
        return {
            title: `Book an Appointment | ${doctor.name}${location}`,
            description: `Contact ${doctor.name}${identity ? `, ${identity.trim()}` : ""}, to ask about appointments and consultation options.`,
        };
    }

    return {
        title: [doctor.name, identity].filter(Boolean).join(" | "),
        description: `Meet ${doctor.name}${identity ? `, ${identity.trim()}` : ""}. Explore the doctor's professional information, services, and appointment options.`,
    };
};

export const getDoctorSiteContext = cache(async (identifier) =>
    getPublicWebsiteSeoByIdentifier(identifier)
);

export const createDoctorMetadata = async (identifier, page = "home") => {
    const context = await getDoctorSiteContext(identifier);

    if (!context?.seo || !context.canonicalUrl) {
        return {
            title: { absolute: "Doctor Website" },
            robots: { index: false, follow: false },
        };
    }

    const doctor = getDoctorFields(context);
    const seo = context.seo;
    const pageSeo = seo.pages?.[page] || {};
    const fallback = pageFallbacks(page, doctor);
    const title = truncate(clean(pageSeo.title) || fallback.title, 70);
    const description = truncate(
        clean(pageSeo.description) || fallback.description,
        160
    );
    const canonicalUrl = new URL(
        page === "home" ? "/" : `/${page}`,
        context.canonicalUrl
    ).toString();
    const image = resolvePublicImageUrl(
        pageSeo.ogImage || seo.social?.ogImage || context.user?.profilePicture,
        context.canonicalUrl
    );
    const isIndexable =
        context.isPublished &&
        isWebsiteActive(context.user?.expiresAt) &&
        seo.robots?.index !== false;
    const follow = seo.robots?.follow !== false;
    const socialTitle =
        page === "home" ? clean(seo.social?.ogTitle) || title : title;
    const socialDescription =
        page === "home"
            ? clean(seo.social?.ogDescription) || description
            : description;

    return {
        title: { absolute: title || "Doctor Website" },
        ...(description && { description }),
        metadataBase: new URL(context.canonicalUrl),
        alternates: { canonical: canonicalUrl },
        robots: { index: isIndexable, follow },
        openGraph: {
            type: "website",
            siteName: doctor.name || clean(seo.siteName),
            title: socialTitle,
            description: socialDescription,
            url: canonicalUrl,
            ...(image && { images: [image] }),
        },
        twitter: {
            card: image ? seo.social?.twitterCard || "summary_large_image" : "summary",
            title: socialTitle,
            description: socialDescription,
            ...(image && { images: [image] }),
        },
        verification: {
            ...(seo.verification?.google && { google: seo.verification.google }),
            ...(seo.verification?.bing && {
                other: { "msvalidate.01": seo.verification.bing },
            }),
        },
    };
};
