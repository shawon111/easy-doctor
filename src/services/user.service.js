import { connectDB } from "@/config/database";
import { verifyAccessToken } from "@/lib/jwt";
import User from "@/models/user.model";
import Website from "@/models/website.model";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { createSeo } from "./seo.service";
import mongoose from "mongoose";

// create a new user
export const createUser = async (userData) => {
    await connectDB();
    const { name, email, password, phone, specialization, qualifications, experience, clinicAddress, bio, bookingPreferences, treatments, languages, socialLinks, profilePicture, } = userData;
    const session = await mongoose.startSession();
    console.log("clinic from service", clinicAddress)
    try {
        const result = await session.withTransaction(async () => {
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

            const savedUser = await newUser.save({ session });

            // create seo for the user website
            const generateSeo = await createSeo(savedUser, session);

            return savedUser;
        })
        return result;
    } catch (error) {
        console.log("checking error", error)
        throw new Error("Failed to create user")
    } finally {
        await session.endSession();
    }
}

// get current user from access token in cookies
export const getCurrentUser = async () => {
    await connectDB();
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
        let userInfoToReturn = {
            name: 1,
            email: 1,
            websiteCreated: 1,
            profileCompleted: 1,
            userLevel: 1,
            subscription: 1,
            profilePicture: 1,
            _id: 1,
            expiresAt: 1,
            googleBusinessSetup: 1,
            clinicAddress: 1,
        };
        const user = await User.findById(payload.sub).select(userInfoToReturn).lean();
        return {
            ...user,
            _id: user._id.toString(),
        };
    } catch (error) {
        console.error("Error occurred while fetching current user:", error);
        return null;
    }
}

// login user by checking email and password
export const loginUser = async (email, password) => {
    await connectDB();
    const user = await User.findOne({ email: email.toLowerCase() }).select({ password: 1, _id: 1 }).lean();
    if (!user) {
        throw new Error("User not found");
    }
    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword) {
        throw new Error("Invalid password");
    }
    return user;
}

// get user by id
export const getUserById = async (id) => {
    await connectDB();
    const user = await User.findById(id).select({
        password: 0,
    }).lean();
    if (!user) {
        throw new Error("User not found");
    }
    return user;
}

// get user by id public
export const getUserByIdPublic = async (id) => {
    await connectDB();
    const user = await User.findById(id).select({
        clinicAddress: 1,
        name: 1,
        phone: 1
    }).lean();
    if (!user) {
        throw new Error("User not found");
    }
    return user;
}

// get user by slug
export const getUserBySlug = async (slug) => {
    await connectDB();
    const user = await User.findOne({ slug }).select({
        name: 1,
        slug: 1,
        phone: 1,
        specialization: 1,
        qualifications: 1,
        experience: 1,
        clinicAddress: 1,
        bookingPreferences: 1,
        bio: 1,
        treatments: 1,
        languages: 1,
        socialLinks: 1,
        profilePicture: 1,
    }).lean()
    if (!user) {
        throw new Error("User not found");
    }
    return user;
}

// get user by platform subdomain or connected custom domain
export const getUserBySubdomain = async (subdomainOrDomain) => {
    const identifier = subdomainOrDomain?.trim().toLowerCase().replace(/\.$/, "");

    if (!identifier) {
        return null;
    }

    await connectDB()
    try {
        const website = identifier.includes(".")
            ? await Website.findOne({
                  domain: identifier,
                  domainStatus: { $in: ["connected", "verified"] },
              })
                  .select({ userId: 1 })
                  .lean()
            : null;

        if (identifier.includes(".") && !website) {
            return null;
        }

        const userQuery = website
            ? User.findById(website.userId)
            : User.findOne({ subdomain: identifier });

        return userQuery.select({
            name: 1,
            phone: 1,
            specialization: 1,
            bio: 1,
            clinicAddress: 1,
            socialLinks: 1,
            profilePicture: 1,
            subdomain: 1,
            domain: 1,
            expiresAt: 1
        }).lean();
    } catch (error) {
        console.log("the error is from layout", error)
        throw new Error("Failed to get user")
    }
}

// get doctors list
export const getDoctorsList = async () => {
    await connectDB();
    const users = await User.find({}).select({
        slug: 1,
        _id: 1,
    }).lean();

    return users;
}

// logout
export const logoutuser = async () => {
    const cookieStore = await cookies();
    try {
        cookieStore.delete("accessToken")
        cookieStore.delete("refreshToken")
        return true;
    } catch (error) {
        throw new Error("failed to logout user")
    }
}