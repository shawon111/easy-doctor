export const generateStructuredData = ({ user, baseUrl }) => {
    const clinics = user.clinicAddress || [];

    const data = {
        "@context": "https://schema.org",
        "@type": "Physician",

        name: user.name,

        url: baseUrl,

        ...(user.profilePicture && {
            image: user.profilePicture,
        }),

        ...(user.phone && {
            telephone: user.phone,
        }),

        ...(user.email && {
            email: user.email,
        }),

        ...(user.specialization && {
            medicalSpecialty: user.specialization,
        }),

        ...(user.bio && {
            description: user.bio,
        }),

        ...(clinics.length > 0 && {
            worksFor: clinics.map((clinic) => ({
                "@type": "MedicalClinic",

                ...(clinic.chamberName && {
                    name: clinic.chamberName,
                }),

                ...(clinic.city && {
                    address: {
                        "@type": "PostalAddress",

                        streetAddress: clinic.address,

                        ...(clinic.city && {
                            addressLocality: clinic.city,
                        }),

                        ...(clinic.country && {
                            addressCountry: clinic.country,
                        }),
                    },
                }),
            })),
        }),

        ...(user.socialLinks?.length > 0 && {
            sameAs: user.socialLinks
                .map((item) => item.url)
                .filter(Boolean),
        }),
    };

    return data;
};