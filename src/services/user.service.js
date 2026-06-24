import { verifyAccessToken } from "@/lib/jwt";
import User from "@/models/user.model";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";

export const createUser = async (userData) => {
    const { name, email, password, phone, specialization, qualifications, experience, clinicAddress, bio, bookingPreferences, treatments, languages, socialLinks, profilePicture, } = userData;

    const checkUserExists = await User.findOne({ email: email.toLowerCase() });
    if (checkUserExists && checkUserExists.email === email.toLowerCase()) {
        throw new Error("User with this email already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
        name,
        email: email.toLowerCase(),
        password: hashedPassword,
        phone,
        specialization,
        qualifications,
        experience,
        clinicAddress,
        bio,
        bookingPreferences,
        treatments,
        languages,
        socialLinks,
        profilePicture,
    });

    const savedUser = await newUser.save();
    return savedUser;
}

export const getCurrentUser = async () => {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    if (!accessToken) {
        return null;
    }

    try {
        const payload = verifyAccessToken(accessToken);
        // if token is invalid or token type is not access, return null
        if (!payload || payload.type !== "access") {
            return null;
        }
        const user = await User.findById(payload.sub).select({
            name: 1,
            email: 1,
            _id: 1
        }).lean(); 
        return user;
    } catch {
        return null;
    }
}