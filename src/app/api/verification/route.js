import { withUser } from "@/lib/withUser";
import { logError } from "@/lib/logger";
import {
    getVerificationSettings,
    updateVerificationSettings,
} from "@/services/seo.service";
import { getWebsiteByUserId } from "@/services/website.service";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

const MAX_VERIFICATION_LENGTH = 500;
const verificationFields = ["google", "bing"];
const doctorWebsitePages = ["", "/about", "/services", "/appointment", "/privacy-policy"];

function normalizeVerification(payload) {
    const verification = payload?.verification;

    if (!verification || typeof verification !== "object" || Array.isArray(verification)) {
        throw new Error("Verification settings are required.");
    }

    return Object.fromEntries(
        verificationFields.map((field) => {
            const value = verification[field];
            if (typeof value !== "string") {
                throw new Error(`Enter a valid ${field} verification code.`);
            }

            const normalizedValue = value.trim();
            if (normalizedValue.length > MAX_VERIFICATION_LENGTH) {
                throw new Error(`${field} verification code must be ${MAX_VERIFICATION_LENGTH} characters or fewer.`);
            }

            return [field, normalizedValue];
        })
    );
}

export const GET = withUser(async (request, context, currentUser) => {
    try {
        const verification = await getVerificationSettings(currentUser._id);
        if (!verification) {
            return NextResponse.json(
                { success: false, message: "SEO settings were not found." },
                { status: 404 }
            );
        }

        return NextResponse.json({ success: true, data: verification });
    } catch (error) {
        logError("Failed to load site verification settings.", error);
        return NextResponse.json(
            { success: false, message: "Failed to load site verification settings." },
            { status: 500 }
        );
    }
});

export const PATCH = withUser(async (request, context, currentUser) => {
    let verification;
    try {
        verification = normalizeVerification(await request.json());
    } catch (error) {
        return NextResponse.json(
            { success: false, message: error.message || "Invalid verification settings." },
            { status: 400 }
        );
    }

    try {
        const updatedSeo = await updateVerificationSettings(currentUser._id, verification);
        if (!updatedSeo) {
            return NextResponse.json(
                { success: false, message: "SEO settings were not found." },
                { status: 404 }
            );
        }

        const website = await getWebsiteByUserId(currentUser._id);
        if (website?.subdomain) {
            doctorWebsitePages.forEach((page) => {
                revalidatePath(`/doctor/${website.subdomain}${page}`);
            });
        }

        return NextResponse.json({
            success: true,
            data: {
                google: updatedSeo.verification?.google || "",
                bing: updatedSeo.verification?.bing || "",
            },
        });
    } catch (error) {
        logError("Failed to save site verification settings.", error);
        return NextResponse.json(
            { success: false, message: "Failed to save site verification settings." },
            { status: 500 }
        );
    }
});
