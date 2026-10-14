import { connectDB } from "@/config/database";
import User from "@/models/user.model";

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
