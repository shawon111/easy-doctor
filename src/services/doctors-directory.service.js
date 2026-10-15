import { connectDB } from "@/config/database";
import User from "@/models/user.model";
import slugify from "slugify";

export const toSlug = (string) =>
    slugify(String(string || "").trim(), {
        lower: true,
        strict: true,
        trim: true,
    });

const escapeRegex = (string) =>
    String(string || "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export const getDoctorsDirectory = async ({
    query: rawQuery = "",
    q: rawQ = "",
    specialty: rawSpecialty = "",
    location: rawLocation = "",
} = {}) => {
    await connectDB();

    const query = String(rawQuery || rawQ || "").trim();
    const specialty = String(rawSpecialty || "").trim();
    const location = String(rawLocation || "").trim();

    const conditions = [{ role: "user" }];

    if (specialty) {
        conditions.push({
            specialization: { $regex: escapeRegex(specialty), $options: "i" },
        });
    }

    if (location) {
        const locRegex = { $regex: escapeRegex(location), $options: "i" };
        conditions.push({
            $or: [
                { "clinicAddress.city": locRegex },
                { "clinicAddress.country": locRegex },
                { "clinicAddress.address": locRegex },
            ],
        });
    }

    if (query) {
        const queryRegex = { $regex: escapeRegex(query), $options: "i" };
        conditions.push({
            $or: [
                { name: queryRegex },
                { specialization: queryRegex },
                { bio: queryRegex },
                { "clinicAddress.city": queryRegex },
                { "clinicAddress.country": queryRegex },
                { "qualifications.degree": queryRegex },
            ],
        });
    }

    const filter = conditions.length === 1 ? conditions[0] : { $and: conditions };

    const doctors = await User.find(filter)
        .select("-password")
        .sort({ createdAt: -1 })
        .lean();

    return doctors;
};

export const getDoctorBySlug = async (slug) => {
    await connectDB();
    if (!slug) return null;

    const normalizedSlug = String(slug).trim().toLowerCase();

    const doctor = await User.findOne({
        $or: [
            { slug: normalizedSlug },
            { subdomain: normalizedSlug },
        ],
        role: "user",
    })
        .select("-password")
        .lean();

    return doctor;
};

/**
 * Returns all active locations (towns/cities) that have at least 1 registered doctor
 */
export const getAvailableLocationsWithDoctors = async () => {
    await connectDB();

    const doctors = await User.find({
        role: "user",
        "clinicAddress.city": { $exists: true, $ne: "" },
    })
        .select("clinicAddress specialization")
        .lean();

    const locationMap = new Map();

    for (const doc of doctors) {
        if (!Array.isArray(doc.clinicAddress)) continue;
        for (const clinic of doc.clinicAddress) {
            const city = clinic?.city?.trim();
            if (!city) continue;
            const slug = toSlug(city);
            if (!slug) continue;

            if (!locationMap.has(slug)) {
                locationMap.set(slug, {
                    city,
                    slug,
                    count: 0,
                    specialties: new Set(),
                });
            }
            const entry = locationMap.get(slug);
            entry.count += 1;
            if (doc.specialization?.trim()) {
                entry.specialties.add(doc.specialization.trim());
            }
        }
    }

    return Array.from(locationMap.values())
        .map((loc) => ({
            city: loc.city,
            slug: loc.slug,
            count: loc.count,
            specialtiesCount: loc.specialties.size,
        }))
        .sort((a, b) => b.count - a.count || a.city.localeCompare(b.city));
};

/**
 * Returns all distinct (city, specialty) pairs that currently have at least 1 doctor
 */
export const getAvailableLocationSpecialtyPairs = async () => {
    await connectDB();

    const doctors = await User.find({
        role: "user",
        specialization: { $exists: true, $ne: "" },
        "clinicAddress.city": { $exists: true, $ne: "" },
    })
        .select("clinicAddress specialization")
        .lean();

    const pairsMap = new Map();

    for (const doc of doctors) {
        const specialty = doc.specialization?.trim();
        if (!specialty) continue;
        const specialtySlug = toSlug(specialty);
        if (!specialtySlug) continue;

        if (!Array.isArray(doc.clinicAddress)) continue;
        for (const clinic of doc.clinicAddress) {
            const city = clinic?.city?.trim();
            if (!city) continue;
            const citySlug = toSlug(city);
            if (!citySlug) continue;

            const key = `${citySlug}::${specialtySlug}`;
            if (!pairsMap.has(key)) {
                pairsMap.set(key, {
                    city,
                    citySlug,
                    specialty,
                    specialtySlug,
                    count: 0,
                });
            }
            pairsMap.get(key).count += 1;
        }
    }

    return Array.from(pairsMap.values()).sort(
        (a, b) => b.count - a.count || a.city.localeCompare(b.city)
    );
};

/**
 * Fetches doctors by city slug and optional specialty slug
 */
export const getDoctorsByLocationAndSpecialty = async ({
    citySlug,
    specialtySlug = "",
} = {}) => {
    await connectDB();
    if (!citySlug) return null;

    const allDoctors = await User.find({
        role: "user",
        "clinicAddress.city": { $exists: true, $ne: "" },
    })
        .select("-password")
        .sort({ createdAt: -1 })
        .lean();

    let cityName = "";
    let specialtyName = "";
    const matchingDoctors = [];
    const citySpecialtiesMap = new Map();
    const otherLocationsMap = new Map();
    const otherCitiesForSpecialtyMap = new Map();

    for (const doc of allDoctors) {
        if (!Array.isArray(doc.clinicAddress)) continue;

        const docCityMatch = doc.clinicAddress.some((clinic) => {
            const cName = clinic?.city?.trim();
            if (cName && toSlug(cName) === citySlug) {
                if (!cityName) cityName = cName;
                return true;
            }
            return false;
        });

        // Collect other locations with doctors
        for (const clinic of doc.clinicAddress) {
            const cName = clinic?.city?.trim();
            if (cName) {
                const cSlug = toSlug(cName);
                if (cSlug !== citySlug && !otherLocationsMap.has(cSlug)) {
                    otherLocationsMap.set(cSlug, { city: cName, slug: cSlug });
                }
            }
        }

        if (docCityMatch) {
            // Track available specialties in this city
            if (doc.specialization?.trim()) {
                const spec = doc.specialization.trim();
                const specSlug = toSlug(spec);
                if (!citySpecialtiesMap.has(specSlug)) {
                    citySpecialtiesMap.set(specSlug, {
                        specialty: spec,
                        slug: specSlug,
                        count: 0,
                    });
                }
                citySpecialtiesMap.get(specSlug).count += 1;
            }

            // Check specialty match if specialtySlug is requested
            if (specialtySlug) {
                if (toSlug(doc.specialization) === specialtySlug) {
                    if (!specialtyName && doc.specialization) {
                        specialtyName = doc.specialization.trim();
                    }
                    matchingDoctors.push(doc);
                }
            } else {
                matchingDoctors.push(doc);
            }
        } else if (specialtySlug && toSlug(doc.specialization) === specialtySlug) {
            // Find other cities that have this specialty
            for (const clinic of doc.clinicAddress) {
                const cName = clinic?.city?.trim();
                if (cName) {
                    const cSlug = toSlug(cName);
                    if (!otherCitiesForSpecialtyMap.has(cSlug)) {
                        otherCitiesForSpecialtyMap.set(cSlug, { city: cName, slug: cSlug });
                    }
                }
            }
        }
    }

    if (!cityName || matchingDoctors.length === 0) {
        return null;
    }

    return {
        doctors: matchingDoctors,
        cityName,
        citySlug,
        specialtyName: specialtyName || (specialtySlug ? specialtySlug : ""),
        specialtySlug,
        availableSpecialties: Array.from(citySpecialtiesMap.values()).sort(
            (a, b) => b.count - a.count || a.specialty.localeCompare(b.specialty)
        ),
        otherLocations: Array.from(otherLocationsMap.values()).slice(0, 12),
        otherCitiesWithSpecialty: Array.from(otherCitiesForSpecialtyMap.values()).slice(0, 8),
    };
};

