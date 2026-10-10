import { resolvePublicImageUrl } from "@/lib/seo/urls";

const safePublicUrl = (value) => {
    try {
        const url = new URL(String(value || ""));
        return ["http:", "https:"].includes(url.protocol)
            ? url.toString()
            : undefined;
    } catch {
        return undefined;
    }
};

export const generateStructuredData = ({ user = {}, baseUrl }) => {
    const clinics = Array.isArray(user.clinicAddress)
        ? user.clinicAddress
        : [];
    const canonicalUrl = safePublicUrl(baseUrl);
    const imageUrl = resolvePublicImageUrl(user.profilePicture, baseUrl);
    const sameAs = Array.isArray(user.socialLinks)
        ? user.socialLinks.map((item) => safePublicUrl(item?.url)).filter(Boolean)
        : [];
    const workLocations = clinics
        .filter((clinic) => clinic?.chamberName || clinic?.address || clinic?.city)
        .map((clinic) => ({
            "@type": "MedicalClinic",
            ...(clinic.chamberName && { name: clinic.chamberName }),
            ...(clinic.address || clinic.city || clinic.country
                ? {
                      address: {
                          "@type": "PostalAddress",
                          ...(clinic.address && { streetAddress: clinic.address }),
                          ...(clinic.city && { addressLocality: clinic.city }),
                          ...(clinic.country && { addressCountry: clinic.country }),
                      },
                  }
                : {}),
        }));

    return {
        "@context": "https://schema.org",
        "@type": "Physician",
        ...(user.name && { name: user.name }),
        ...(canonicalUrl && {
            "@id": `${canonicalUrl.replace(/\/$/, "")}/#physician`,
            url: canonicalUrl,
        }),
        ...(imageUrl && { image: imageUrl }),
        ...(user.phone && { telephone: user.phone }),
        ...(user.specialization && {
            medicalSpecialty: user.specialization,
        }),
        ...(user.bio && { description: user.bio }),
        ...(workLocations.length > 0 && { workLocation: workLocations }),
        ...(sameAs.length > 0 && { sameAs }),
    };
};