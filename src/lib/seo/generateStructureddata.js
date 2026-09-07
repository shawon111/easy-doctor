export const generateStructuredData = ({ user, baseUrl }) => {
    const primaryClinic = user.clinicAddress?.[0];

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

        ...(primaryClinic && {
            address: {
                "@type": "PostalAddress",

                ...(primaryClinic.address && {
                    streetAddress: primaryClinic.address,
                }),

                ...(primaryClinic.city && {
                    addressLocality: primaryClinic.city,
                }),

                ...(primaryClinic.country && {
                    addressCountry: primaryClinic.country,
                }),
            },
        }),

        ...(user.socialLinks?.length > 0 && {
            sameAs: user.socialLinks
                .map((item) => item.url)
                .filter(Boolean),
        }),
    };

    return data;
};