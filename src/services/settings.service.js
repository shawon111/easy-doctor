import { connectDB } from "@/config/database";
import Appointment from "@/models/appointment.model";
import GoogleBusiness from "@/models/googleBusiness.model";
import SEO from "@/models/seo.model";
import Session from "@/models/session.model";
import TemplateOneContent from "@/models/template-one-content.model";
import TemplateThreeContent from "@/models/template-three-content.model";
import TemplateTwoContent from "@/models/template-two-content.model";
import User from "@/models/user.model";
import Website from "@/models/website.model";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";

const DEFAULT_NOTIFICATION_PREFERENCES = {
    emailNotifications: true,
    appointmentReminders: true,
};

export class SettingsError extends Error {
    constructor(message, status = 400) {
        super(message);
        this.name = "SettingsError";
        this.status = status;
    }
}

function toSettingsUser(user) {
    return {
        name: user.name,
        email: user.email,
        phone: user.phone || "",
        profilePicture: user.profilePicture || "",
        qualifications: (user.qualifications || []).map(({ degree, institution, year }) => ({
            degree,
            institution,
            year,
        })),
        clinicAddress: (user.clinicAddress || []).map((clinic) => ({
            chamberName: clinic.chamberName,
            address: clinic.address,
            city: clinic.city,
            country: clinic.country,
            visitingHours: clinic.visitingHours,
            visitingDays: clinic.visitingDays,
            whatsapp: clinic.whatsapp,
            mapUrl: clinic.mapUrl || "",
        })),
        bookingPreferences: user.bookingPreferences || "whatsapp",
        treatments: user.treatments || [],
        socialLinks: (user.socialLinks || []).map(({ platform, url }) => ({
            platform,
            url,
        })),
        notificationPreferences: {
            ...DEFAULT_NOTIFICATION_PREFERENCES,
            ...(user.notificationPreferences?.toObject?.() ?? user.notificationPreferences),
        },
    };
}

export async function getSettings(userId) {
    await connectDB();
    const user = await User.findById(userId)
        .select("name email phone profilePicture qualifications clinicAddress bookingPreferences treatments socialLinks notificationPreferences")
        .lean();

    if (!user) {
        throw new SettingsError("Account not found.", 404);
    }

    return toSettingsUser(user);
}

export async function updateAccountSettings(userId, accountData) {
    await connectDB();

    const name = typeof accountData.name === "string" ? accountData.name.trim() : "";
    const email = typeof accountData.email === "string" ? accountData.email.trim().toLowerCase() : "";
    const phone = typeof accountData.phone === "string" ? accountData.phone.trim() : "";
    const profilePicture = typeof accountData.profilePicture === "string"
        ? accountData.profilePicture.trim()
        : "";

    if (!name || name.length > 120) {
        throw new SettingsError("Enter a name between 1 and 120 characters.");
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
        throw new SettingsError("Enter a valid email address.");
    }
    if (phone.length > 40) {
        throw new SettingsError("Phone number must be 40 characters or fewer.");
    }
    if (profilePicture && !/^https?:\/\/\S+$/i.test(profilePicture)) {
        throw new SettingsError("Profile photo must be a valid web URL.");
    }

    const existingAccount = await User.findOne({
        email,
        _id: { $ne: userId },
    }).select("_id").lean();
    if (existingAccount) {
        throw new SettingsError("That email address is already in use.", 409);
    }

    const user = await User.findById(userId);
    if (!user) {
        throw new SettingsError("Account not found.", 404);
    }

    const emailChanged = user.email !== email;
    user.name = name;
    user.email = email;
    if (emailChanged) {
        user.emailVerified = false;
    }
    user.phone = phone;
    user.profilePicture = profilePicture || undefined;
    await user.save();

    return toSettingsUser(user);
}

export async function updateProfileSettings(userId, profileData) {
    await connectDB();

    if (!profileData || typeof profileData !== "object" || Array.isArray(profileData)) {
        throw new SettingsError("Provide valid profile details.");
    }

    const { qualifications, clinicAddress, bookingPreferences, treatments, socialLinks } = profileData;
    const currentYear = new Date().getFullYear();
    const visitingDays = new Set([
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ]);
    const isRecord = (value) => value && typeof value === "object" && !Array.isArray(value);
    const cleanText = (value) => typeof value === "string" ? value.trim() : "";
    const isValidHours = (value) => {
        if (!/^\d{2}:\d{2} - \d{2}:\d{2}$/.test(value)) {
            return false;
        }
        return value.split(" - ").every((time) => {
            const [hours, minutes] = time.split(":").map(Number);
            return hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59;
        });
    };

    if (
        !Array.isArray(qualifications) ||
        qualifications.length === 0 ||
        qualifications.length > 30
    ) {
        throw new SettingsError("Add at least one qualification.");
    }
    const cleanQualifications = qualifications.map((item) => {
        if (!isRecord(item)) {
            throw new SettingsError("Enter valid qualification details.");
        }
        const degree = cleanText(item.degree);
        const institution = cleanText(item.institution);
        const year = Number(item.year);
        if (!degree || degree.length > 120 || !institution || institution.length > 200) {
            throw new SettingsError("Degree and institution are required.");
        }
        if (!Number.isInteger(year) || year < 1950 || year > currentYear) {
            throw new SettingsError("Enter a valid qualification year.");
        }
        return { degree, institution, year };
    });

    if (!Array.isArray(clinicAddress) || clinicAddress.length === 0 || clinicAddress.length > 20) {
        throw new SettingsError("Add at least one clinic or chamber.");
    }
    const cleanClinics = clinicAddress.map((clinic) => {
        if (!isRecord(clinic)) {
            throw new SettingsError("Enter valid clinic details.");
        }
        const cleanedClinic = {
            chamberName: cleanText(clinic.chamberName),
            address: cleanText(clinic.address),
            city: cleanText(clinic.city),
            country: cleanText(clinic.country),
            visitingHours: cleanText(clinic.visitingHours),
            visitingDays: cleanText(clinic.visitingDays),
            whatsapp: cleanText(clinic.whatsapp),
            mapUrl: cleanText(clinic.mapUrl),
        };
        if (
            !cleanedClinic.chamberName ||
            !cleanedClinic.address ||
            !cleanedClinic.city ||
            !cleanedClinic.country ||
            !cleanedClinic.whatsapp
        ) {
            throw new SettingsError("Complete all required clinic details.");
        }
        if (!isValidHours(cleanedClinic.visitingHours)) {
            throw new SettingsError("Select valid opening and closing times.");
        }
        const selectedDays = cleanedClinic.visitingDays
            .split(",")
            .map((day) => day.trim())
            .filter(Boolean);
        if (
            selectedDays.length === 0 ||
            selectedDays.length > visitingDays.size ||
            selectedDays.some((day) => !visitingDays.has(day)) ||
            new Set(selectedDays).size !== selectedDays.length
        ) {
            throw new SettingsError("Select at least one visiting day.");
        }
        cleanedClinic.visitingDays = selectedDays.join(", ");
        if (
            cleanedClinic.chamberName.length > 120 ||
            cleanedClinic.address.length > 300 ||
            cleanedClinic.city.length > 100 ||
            cleanedClinic.country.length > 100 ||
            cleanedClinic.whatsapp.length > 40 ||
            cleanedClinic.mapUrl.length > 2048
        ) {
            throw new SettingsError("Clinic details are longer than the allowed limit.");
        }
        if (cleanedClinic.mapUrl && !/^https?:\/\/\S+$/i.test(cleanedClinic.mapUrl)) {
            throw new SettingsError("Enter a valid Google Maps URL.");
        }
        return cleanedClinic;
    });

    if (!["whatsapp", "bookingForm", "both"].includes(bookingPreferences)) {
        throw new SettingsError("Select a valid booking preference.");
    }
    if (!Array.isArray(treatments) || treatments.length === 0 || treatments.length > 100) {
        throw new SettingsError("Add at least one treatment or service.");
    }
    const cleanTreatments = treatments.map((treatment) => {
        const value = cleanText(treatment);
        if (!value || value.length > 120) {
            throw new SettingsError("Each treatment must be between 1 and 120 characters.");
        }
        return value;
    });

    if (!Array.isArray(socialLinks) || socialLinks.length > 30) {
        throw new SettingsError("Enter valid social links.");
    }
    const cleanSocialLinks = socialLinks.map((link) => {
        if (!isRecord(link)) {
            throw new SettingsError("Enter valid social link details.");
        }
        const platform = cleanText(link.platform);
        const url = cleanText(link.url);
        if (!platform || platform.length > 50) {
            throw new SettingsError("Select a social platform.");
        }
        if (url.length > 2048) {
            throw new SettingsError("Social profile URL is too long.");
        }
        let parsedUrl;
        try {
            parsedUrl = new URL(url);
        } catch {
            throw new SettingsError("Enter a valid social profile URL.");
        }
        if (!["http:", "https:"].includes(parsedUrl.protocol)) {
            throw new SettingsError("Social profile URLs must use HTTP or HTTPS.");
        }
        return { platform, url: parsedUrl.toString() };
    });

    const user = await User.findById(userId);
    if (!user) {
        throw new SettingsError("Account not found.", 404);
    }

    user.qualifications = cleanQualifications;
    user.clinicAddress = cleanClinics;
    user.bookingPreferences = bookingPreferences;
    user.treatments = cleanTreatments;
    user.socialLinks = cleanSocialLinks;
    await user.save();

    return toSettingsUser(user);
}

export async function updateNotificationPreferences(userId, preferences) {
    await connectDB();

    const allowedKeys = Object.keys(DEFAULT_NOTIFICATION_PREFERENCES);
    if (
        !preferences ||
        typeof preferences !== "object" ||
        Array.isArray(preferences) ||
        Object.keys(preferences).length !== 1 ||
        !allowedKeys.includes(Object.keys(preferences)[0]) ||
        typeof Object.values(preferences)[0] !== "boolean"
    ) {
        throw new SettingsError("Provide one valid notification preference.");
    }

    const user = await User.findById(userId);
    if (!user) {
        throw new SettingsError("Account not found.", 404);
    }

    user.notificationPreferences = {
        ...DEFAULT_NOTIFICATION_PREFERENCES,
        ...(user.notificationPreferences?.toObject?.() ?? user.notificationPreferences),
        ...preferences,
    };
    await user.save();

    return toSettingsUser(user);
}

export async function changeAccountPassword(userId, currentPassword, newPassword) {
    await connectDB();

    if (typeof currentPassword !== "string" || !currentPassword) {
        throw new SettingsError("Enter your current password.");
    }
    if (typeof newPassword !== "string" || newPassword.length < 8 || newPassword.length > 128) {
        throw new SettingsError("New password must be between 8 and 128 characters.");
    }

    const user = await User.findById(userId).select("+password");
    if (!user) {
        throw new SettingsError("Account not found.", 404);
    }
    if (!(await bcrypt.compare(currentPassword, user.password))) {
        throw new SettingsError("Current password is incorrect.", 403);
    }

    user.password = await bcrypt.hash(newPassword, 12);
    await user.save();
}

export async function deleteAccount(userId, currentPassword, confirmation) {
    await connectDB();

    if (confirmation !== "DELETE") {
        throw new SettingsError("Type DELETE to confirm account removal.");
    }
    if (typeof currentPassword !== "string" || !currentPassword) {
        throw new SettingsError("Enter your current password to delete your account.");
    }

    const session = await mongoose.startSession();
    try {
        await session.withTransaction(async () => {
            const user = await User.findById(userId).select("+password").session(session);
            if (!user) {
                throw new SettingsError("Account not found.", 404);
            }
            if (!(await bcrypt.compare(currentPassword, user.password))) {
                throw new SettingsError("Current password is incorrect.", 403);
            }

            await Appointment.deleteMany({ userId }, { session });
            await Session.deleteMany({ userId }, { session });
            await Website.deleteMany({ userId }, { session });
            await SEO.deleteMany({ userId }, { session });
            await TemplateOneContent.deleteMany({ userId }, { session });
            await TemplateTwoContent.deleteMany({ userId }, { session });
            await TemplateThreeContent.deleteMany({ userId }, { session });
            await GoogleBusiness.deleteMany({ userId }, { session });
            await User.deleteOne({ _id: userId }, { session });
        });
    } finally {
        await session.endSession();
    }
}