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

    const qualifications = Array.isArray(user.qualifications)
        ? user.qualifications
              .map((q) => (typeof q === "string" ? q.trim() : q?.degree?.trim()))
              .filter(Boolean)
        : [];

    const treatments = Array.isArray(user.treatments)
        ? user.treatments.map((t) => String(t || "").trim()).filter(Boolean)
        : [];

    const languages = Array.isArray(user.languages)
        ? user.languages.map((l) => String(l || "").trim()).filter(Boolean)
        : [];

    const openingHours = clinics
        .filter((c) => c?.visitingDays || c?.visitingHours)
        .map((clinic) => ({
            "@type": "OpeningHoursSpecification",
            ...(clinic.visitingDays && { description: `${clinic.visitingDays}: ${clinic.visitingHours || ""}`.trim() }),
        }));

    const workLocations = clinics
        .filter((clinic) => clinic?.chamberName || clinic?.address || clinic?.city)
        .map((clinic) => ({
            "@type": "MedicalClinic",
            ...(clinic.chamberName && { name: clinic.chamberName }),
            ...(clinic.whatsapp && { telephone: clinic.whatsapp }),
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
        "@type": ["Physician", "MedicalBusiness"],
        ...(user.name && { name: `Dr. ${user.name}`.replace(/^Dr\.\s*Dr\.\s*/i, "Dr. ") }),
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
        priceRange: "$$",
        ...(qualifications.length > 0 && {
            hasCredential: qualifications.map((deg) => ({
                "@type": "EducationalOccupationalCredential",
                credentialCategory: "degree",
                name: deg,
            })),
        }),
        ...(treatments.length > 0 && {
            availableService: treatments.map((treatment) => ({
                "@type": "MedicalProcedure",
                name: treatment,
            })),
        }),
        ...(languages.length > 0 && { knowsLanguage: languages }),
        ...(openingHours.length > 0 && { openingHoursSpecification: openingHours }),
        ...(workLocations.length > 0 && { workLocation: workLocations }),
        ...(sameAs.length > 0 && { sameAs }),
    };
};