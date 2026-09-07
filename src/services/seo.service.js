import { connectDB } from "@/config/database";
import { specialtyToService } from "@/lib/content/specialtyToService";
import SEO from "@/models/seo.model";

// helper functions
const clean = (value) => {
    if (value === null || value === undefined) {
        return "";
    }

    return String(value)
        .trim()
        .replace(/\s+/g, " ");
};

const cleanArray = (array) => {
    if (!Array.isArray(array)) {
        return [];
    }

    return array
        .map(clean)
        .filter(Boolean);
};

const unique = (array) => {
    return [...new Set(array.filter(Boolean))];
};

// limit text
const truncate = (text, maxLength) => {
    const value = clean(text);

    if (!value || value.length <= maxLength) {
        return value;
    }

    return (
        value
            .slice(0, maxLength)
            .replace(/\s+\S*$/, "")
            .trim()
    );
};

// convert MBBS, FCPS tonatural
const joinNatural = (items) => {
    const values = unique(items);

    if (values.length === 0) {
        return "";
    }

    if (values.length === 1) {
        return values[0];
    }

    if (values.length === 2) {
        return `${values[0]} and ${values[1]}`;
    }

    return `${values.slice(0, -1).join(", ")} and ${values.at(-1)}`;
};


//    specialty => service

const getServiceName = (specialty) => {
    return (
        specialtyToService[specialty] ||
        specialty
    );
};

const getProfessionalTitle = (specialty) => {
    const professionalTitles = {
        "Allergy and Immunology": "Allergist and Immunologist",
        Anesthesiology: "Anesthesiologist",
        "Cardiothoracic Surgery": "Cardiothoracic Surgeon",
        "Colorectal Surgery": "Colorectal Surgeon",
        "Critical Care Medicine": "Critical Care Specialist",
        "Emergency Medicine": "Emergency Medicine Specialist",
        "Family Medicine": "Family Medicine Specialist",
        "General Surgery": "General Surgeon",
        "Internal Medicine": "Internal Medicine Specialist",
        "Interventional Radiologist": "Interventional Radiologist",
        "Neurosurgeon": "Neurosurgeon",
        "Obstetrician and Gynecologist": "Obstetrician and Gynecologist",
        "Physical Medicine and Rehabilitation": "Physical Medicine and Rehabilitation Specialist",
        "Thoracic Surgeon": "Thoracic Surgeon",
    };

    if (professionalTitles[specialty]) {
        return professionalTitles[specialty];
    }

    if (specialty.endsWith(" Surgery")) {
        return `${specialty.slice(0, -" Surgery".length)} Surgeon`;
    }

    return specialty;
};


// primary location

const getPrimaryLocation = (clinicAddress) => {
    const primaryChamber = Array.isArray(clinicAddress)
        ? clinicAddress[0]
        : null;

    if (!primaryChamber) {
        return {
            city: "",
            district: "",
            country: "",
            zipCode: "",
        };
    }

    return {
        city: clean(primaryChamber.city),
        district: "",
        country: clean(primaryChamber.country),
        zipCode: "",
    };
};

// keyword generation

const generateKeywords = ({
    name,
    specialty,
    service,
    city,
    treatments,
}) => {
    const keywords = [];

    // Doctor identity

    if (name) {
        keywords.push(name);
    }

    if (name && specialty) {
        keywords.push(
            `${name} ${specialty}`
        );
    }

    // Specialty

    if (specialty && city) {
        keywords.push(
            `${specialty} in ${city}`
        );

        keywords.push(
            `${specialty} doctor in ${city}`
        );
    }

    // Doctor + location

    if (name && city) {
        keywords.push(
            `${name} in ${city}`
        );

        keywords.push(
            `${name} ${city}`
        );
    }

    // Service

    if (service && city) {
        keywords.push(
            `${service} in ${city}`
        );

        keywords.push(
            `${service} services in ${city}`
        );
    }

    // Treatments

    for (const treatment of treatments) {
        if (city) {
            keywords.push(
                `${treatment} in ${city}`
            );
        }

        if (name) {
            keywords.push(
                `${name} ${treatment}`
            );
        }
    }

    return unique(keywords);
};

const generatePageKeywords = ({
    name,
    specialty,
    service,
    city,
    treatments,
    page,
    qualifications = [],
}) => {
    const locationSuffix = city ? ` in ${city}` : "";
    const keywords = [];

    if (page === "home") {
        keywords.push(
            name,
            specialty,
            `${specialty}${locationSuffix}`,
            `${name}${locationSuffix}`,
            `${service}${locationSuffix}`,
            ...treatments.slice(0, 4).map((treatment) => `${treatment}${locationSuffix}`),
        );
    }

    if (page === "about") {
        keywords.push(
            `about ${name}`,
            `${name} ${specialty}`,
            `${specialty}${locationSuffix}`,
            `${name} experience`,
            ...qualifications.slice(0, 3).map((qualification) => `${name} ${qualification}`),
        );
    }

    if (page === "services") {
        keywords.push(
            service,
            `${service} services`,
            `${service} services${locationSuffix}`,
            ...treatments.flatMap((treatment) => [
                treatment,
                `${treatment}${locationSuffix}`,
                `${name} ${treatment}`,
            ]),
        );
    }

    if (page === "appointment") {
        keywords.push(
            `${name} appointment`,
            `book appointment with ${name}`,
            `${specialty} consultation${locationSuffix}`,
            `${service} appointment${locationSuffix}`,
            `contact ${name}`,
        );
    }

    return unique(keywords);
};

// MAIN FUNCTION

const generateSeoContent = (user) => {

    if (!user) {
        throw new Error(
            "generateSeoContent: user is required"
        );
    }

    // Basic information

    const name = clean(user.name);

    const specialty = clean(
        user.specialization
    );

    if (!name) {
        throw new Error(
            "generateSeoContent: user.name is required"
        );
    }

    if (!specialty) {
        throw new Error(
            "generateSeoContent: user.specialization is required"
        );
    }

    // Specialty => Service

    const service = getServiceName(
        specialty
    );
    const professionalTitle = getProfessionalTitle(specialty);

    // Primary location

    const location = getPrimaryLocation(
        user.clinicAddress
    );

    const city = location.city;
    const country = location.country;

    // Treatments

    const treatments = cleanArray(
        user.treatments
    );

    const primaryTreatments =
        treatments.slice(0, 4);

    const treatmentPhrase =
        joinNatural(primaryTreatments);

    // Qualifications

    const qualifications = cleanArray(
        user.qualifications?.map(
            (qualification) =>
                qualification?.degree
        )
    );

    // Experience

    const experience =
        Number.isFinite(Number(user.experience)) &&
            Number(user.experience) > 0
            ? Number(user.experience)
            : null;


    // titles
    const defaultTitle = city
        ? `${name} | ${specialty} in ${city}`
        : `${name} | ${specialty}`;

    const homeTitle = defaultTitle;

    // about tutle

    const aboutTitle = city
        ? `About ${name} | ${specialty} in ${city}`
        : `About ${name} | ${specialty}`;

    // service title
    const servicesTitle = city
        ? `${service} Services in ${city} | ${name}`
        : `${service} Services | ${name}`;

    // Appointment

    const appointmentTitle = city
        ? `Book an Appointment | ${name} in ${city}`
        : `Book an Appointment | ${name}`;


    // Default description

    let defaultDescription;

    if (treatmentPhrase && city) {

        defaultDescription =
            `${name} is a ${professionalTitle} in ${city}, ${country}. Services include ${treatmentPhrase}.`;

    } else if (city) {

        defaultDescription =
            `${name} is a ${professionalTitle} in ${city}, ${country}. Explore professional services and appointment options.`;

    } else {

        defaultDescription =
            `${name} is a ${professionalTitle}. Explore professional services and appointment options.`;
    }


    // Home description

    let homeDescription;

    if (treatmentPhrase && city) {

        homeDescription =
            `Meet ${name}, a ${professionalTitle} in ${city}, ${country}. Explore ${service.toLowerCase()} services including ${treatmentPhrase}.`;

    } else if (city) {

        homeDescription =
            `Meet ${name}, a ${professionalTitle} in ${city}, ${country}. Explore professional services and appointment options.`;

    } else {

        homeDescription =
            `Meet ${name}, a ${professionalTitle}. Explore professional services and appointment options.`;
    }

    // About description

    const aboutParts = [
        `Learn about ${name}, a ${professionalTitle}`,
    ];

    if (city) {
        aboutParts.push(
            `in ${city}`
        );
    }

    if (experience) {
        aboutParts.push(
            `with ${experience}+ years of experience`
        );
    }

    if (qualifications.length) {
        aboutParts.push(
            `and qualifications including ${joinNatural(
                qualifications.slice(0, 3)
            )}`
        );
    }

    let aboutDescription =
        `${aboutParts.join(" ")}.`;


    // Services description

    let servicesDescription;

    if (treatmentPhrase && city) {

        servicesDescription =
            `Explore ${service.toLowerCase()} services provided by ${name} in ${city}, including ${treatmentPhrase}.`;

    } else if (city) {

        servicesDescription =
            `Explore ${service.toLowerCase()} services provided by ${name} in ${city}.`;

    } else {

        servicesDescription =
            `Explore ${service.toLowerCase()} services provided by ${name}.`;
    }

    // appointment description
    let appointmentDescription;

    if (city) {

        appointmentDescription =
            `Contact ${name}, a ${professionalTitle} in ${city}, to inquire about appointments and consultation options.`;

    } else {

        appointmentDescription =
            `Contact ${name}, a ${professionalTitle}, to inquire about appointments and consultation options.`;
    }

    // keywords
    const keywords = generateKeywords({
        name,
        specialty,
        service,
        city,
        treatments,
    });

    const pageKeywords = {
        home: generatePageKeywords({
            name,
            specialty,
            service,
            city,
            treatments,
            page: "home",
        }),
        about: generatePageKeywords({
            name,
            specialty,
            service,
            city,
            treatments,
            qualifications,
            page: "about",
        }),
        services: generatePageKeywords({
            name,
            specialty,
            service,
            city,
            treatments,
            page: "services",
        }),
        appointment: generatePageKeywords({
            name,
            specialty,
            service,
            city,
            treatments,
            page: "appointment",
        }),
    };

    // social media Open Graph (og) title and description

    const ogTitle = homeTitle;

    const ogDescription = city
        ? `${name} is a ${specialty} in ${city}. Explore services, professional information and appointment options.`
        : `${name} is a ${specialty}. Explore services, professional information and appointment options.`;


    return {
        userId: user?._id,
        siteName: name,

        defaultTitle: truncate(
            defaultTitle,
            70
        ),

        defaultDescription: truncate(
            defaultDescription,
            160
        ),

        keywords,

        defaultSpecialty: specialty,

        pages: {

            home: {
                title: truncate(
                    homeTitle,
                    70
                ),

                description: truncate(
                    homeDescription,
                    160
                ),

                keywords: pageKeywords.home,
            },

            about: {
                title: truncate(
                    aboutTitle,
                    70
                ),

                description: truncate(
                    aboutDescription,
                    160
                ),

                keywords: pageKeywords.about,
            },

            services: {
                title: truncate(
                    servicesTitle,
                    70
                ),

                description: truncate(
                    servicesDescription,
                    160
                ),

                keywords: pageKeywords.services,
            },

            appointment: {
                title: truncate(
                    appointmentTitle,
                    70
                ),

                description: truncate(
                    appointmentDescription,
                    160
                ),

                keywords: pageKeywords.appointment,
            },
        },

        social: {

            ogTitle: truncate(
                ogTitle,
                90
            ),

            ogDescription: truncate(
                ogDescription,
                200
            ),
        },

        location,
    };
};

export const createSeo = async (user, session) => {
    await connectDB();
    try {
        const content = generateSeoContent(user);
        const result = await SEO.create([content], { session });
        return result[0];
    } catch (error) {
        throw new Error("error creating seo content")
    }
}

export const updateSeo = async (userId, updates, session) => {
    await connectDB();
    const options = {
        new: true,
        upsert: false,
        runValidators: true,
        ...(session && { session })
    }
    try {
        const updatedSeo = await SEO.findOneAndUpdate(
            { userId },
            { $set: updates },
            options
        )
        return updatedSeo;
    } catch (error) {
        throw new Error("failed to update SEO content")
    }
}

export const getSeoByUserId = async (userId) => {
    await connectDB();
    try {
        const result = await SEO.findOne({ userId }).lean();
        return result;
    } catch (error) {
        throw new Error("failed to get SEO content")
    }

};