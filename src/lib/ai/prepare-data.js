export const prepareDoctorData = (user) => {
    return {
        name: user.name || "",
        specialization: user.specialization || "",
        qualifications: user.qualifications || [],
        experience: user.experience ?? null,
        phone: user.phone || "",
        bio: user.bio || "",
        clinicAddress: user.clinicAddress || [],
        treatments: user.treatments || [],
        languages: user.languages || [],
        socialLinks: user.socialLinks || [],
        profilePicture: user.profilePicture || "",
    };
};

export const prepareSeoData = (seo) => {
    return {
        siteName: seo.siteName || "",
        defaultTitle: seo.defaultTitle || "",
        defaultDescription: seo.defaultDescription || "",
        defaultSpecialty: seo.defaultSpecialty || "",
        keywords: seo.keywords || [],
        location: seo.location || {},

        pages: {
            home: {
                title: seo.pages?.home?.title || "",
                description: seo.pages?.home?.description || "",
                keywords: seo.pages?.home?.keywords || [],
            },

            about: {
                title: seo.pages?.about?.title || "",
                description: seo.pages?.about?.description || "",
                keywords: seo.pages?.about?.keywords || [],
            },

            services: {
                title: seo.pages?.services?.title || "",
                description: seo.pages?.services?.description || "",
                keywords: seo.pages?.services?.keywords || [],
            },

            appointment: {
                title: seo.pages?.appointment?.title || "",
                description: seo.pages?.appointment?.description || "",
                keywords: seo.pages?.appointment?.keywords || [],
            },
        },
    };
};