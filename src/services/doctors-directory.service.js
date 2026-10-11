import { connectDB } from "@/config/database";
import { getDoctorCanonicalBaseUrl } from "@/lib/seo/urls";
import { isWebsiteActive } from "@/lib/subscription";
import User from "@/models/user.model";
import Website from "@/models/website.model";

const PAGE_SIZE = 6;
const CUSTOM_DOMAIN_STATUSES = new Set(["connected", "verified"]);

const normalizeSearchValue = (value, maxLength = 100) =>
    String(value || "").trim().slice(0, maxLength);

const getWebsiteUrl = (website) => {
    if (
        website.domain &&
        CUSTOM_DOMAIN_STATUSES.has(website.domainStatus)
    ) {
        try {
            const domain = String(website.domain).trim();
            const domainUrl = new URL(
                domain.includes("://") ? domain : `https://${domain}`
            );
            if (domainUrl.protocol === "https:" || domainUrl.protocol === "http:") {
                return `https://${domainUrl.host}`;
            }
        } catch {
            // Fall back to the platform subdomain when the saved domain is invalid.
        }
    }

    return (
        getDoctorCanonicalBaseUrl(website)?.toString().replace(/\/$/, "") ||
        (website.subdomain
            ? `/doctor/${encodeURIComponent(website.subdomain)}`
            : null)
    );
};

const getSafeImageUrl = (value) => {
    if (!value) {
        return null;
    }

    try {
        const imageUrl = new URL(String(value));
        return ["https:", "http:"].includes(imageUrl.protocol)
            ? imageUrl.toString()
            : null;
    } catch {
        return null;
    }
};

const toPublicDoctor = (website, user) => {
    if (!user || !isWebsiteActive(user.expiresAt)) {
        return null;
    }

    const primaryLocation = user.clinicAddress?.[0];
    const city = String(primaryLocation?.city || "").trim();
    const country = String(primaryLocation?.country || "").trim();

    return {
        slug: website.subdomain,
        name: user.name,
        specialty: user.specialization,
        qualifications: (user.qualifications || [])
            .map(({ degree }) => degree)
            .filter(Boolean)
            .join(", "),
        location: [city, country].filter(Boolean).join(", "),
        experience: Number.isFinite(user.experience) ? user.experience : null,
        bio: user.bio || "",
        image: getSafeImageUrl(user.profilePicture),
        websiteUrl: getWebsiteUrl(website),
    };
};

const matchesDirectoryFilters = (doctor, { query, specialty, location }) => {
    const normalizedQuery = query.toLowerCase();
    const matchesQuery =
        !normalizedQuery ||
        [
            doctor.name,
            doctor.specialty,
            doctor.qualifications,
            doctor.location,
            doctor.bio,
        ]
            .join(" ")
            .toLowerCase()
            .includes(normalizedQuery);

    return (
        matchesQuery &&
        (!specialty || doctor.specialty === specialty) &&
        (!location || doctor.location === location)
    );
};

export const getDoctorsDirectory = async ({
    query: rawQuery = "",
    specialty: rawSpecialty = "",
    location: rawLocation = "",
    page: rawPage = 1,
} = {}) => {
    await connectDB();

    const query = normalizeSearchValue(rawQuery).toLowerCase();
    const specialty = normalizeSearchValue(rawSpecialty, 80);
    const location = normalizeSearchValue(rawLocation, 120);
    const parsedPage = Number.parseInt(rawPage, 10);
    const page = Number.isFinite(parsedPage) && parsedPage > 0 ? parsedPage : 1;

    const websites = await Website.find({
        status: "ready",
        content: { $ne: null },
    })
        .select({
            userId: 1,
            subdomain: 1,
            domain: 1,
            domainStatus: 1,
        })
        .lean();

    const users = await User.find({
        _id: { $in: websites.map((website) => website.userId) },
    })
        .select(
            "name specialization qualifications experience clinicAddress bio profilePicture expiresAt"
        )
        .lean();
    const usersById = new Map(users.map((user) => [String(user._id), user]));
    const publicDoctors = websites
        .map((website) =>
            toPublicDoctor(website, usersById.get(String(website.userId)))
        )
        .filter(Boolean);
    const specialties = [...new Set(publicDoctors.map((doctor) => doctor.specialty))]
        .filter(Boolean)
        .sort((first, second) => first.localeCompare(second));
    const locations = [...new Set(publicDoctors.map((doctor) => doctor.location))]
        .filter(Boolean)
        .sort((first, second) => first.localeCompare(second));
    const filteredDoctors = publicDoctors
        .filter((doctor) =>
            matchesDirectoryFilters(doctor, { query, specialty, location })
        )
        .sort((first, second) => first.name.localeCompare(second.name));
    const total = filteredDoctors.length;
    const totalPages = Math.ceil(total / PAGE_SIZE);
    const currentPage = totalPages ? Math.min(page, totalPages) : 1;
    const doctors = filteredDoctors.slice(
        (currentPage - 1) * PAGE_SIZE,
        currentPage * PAGE_SIZE
    );

    return {
        doctors,
        filters: { specialties, locations },
        pagination: {
            page: currentPage,
            pageSize: PAGE_SIZE,
            total,
            totalPages,
        },
        search: { query, specialty, location },
    };
};
