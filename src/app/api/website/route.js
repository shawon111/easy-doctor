import { connectDB } from "@/config/database";
import User from "@/models/user.model";
import Website from "@/models/website.model";
import { createOrUpdateContent } from "@/services/content.service";
import { createWebsite } from "@/services/website.service";
import { NextResponse } from "next/server";
import { withUser } from "@/lib/withUser";
import { getWebsiteByUserId } from "@/services/website.service";
import mongoose from "mongoose";

const templateTypeToVariantmap = {
    "template-one": "light",
    "template-one-dark": "dark",
    "template-two": "light",
    "template-two-dark": "dark",
    "template-three": "light",
    "template-three-dark": "dark"
}

const templateTypeToContentTypeMap = {
    "template-one": "TemplateOneContent",
    "template-one-dark": "TemplateOneContent",
    "template-two": "TemplateTwoContent",
    "template-two-dark": "TemplateTwoContent",
    "template-three": "TemplateThreeContent",
    "template-three-dark": "TemplateThreeContent"
}

export const GET = withUser(async (request, context, currentUser) => {
    try {
        const website = await getWebsiteByUserId(currentUser._id);
        return NextResponse.json({ success: true, data: website });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: "Failed to fetch website" },
            { status: 500 }
        );
    }
});

// create a new website
export const POST = withUser(async (request, context, currentUser) => {
    const { templateType, subdomain } = await request.json();
    if (
        !templateType ||
        !templateTypeToVariantmap[templateType] ||
        !subdomain?.trim()
    ) {
        return NextResponse.json(
            { error: "A valid template type and subdomain are required" },
            { status: 400 }
        );
    }
    const templateVariant = templateTypeToVariantmap[templateType];
    const contentType = templateTypeToContentTypeMap[templateType];
    let session;

    try {
        await connectDB();
        session = await mongoose.startSession();
        const newWebsite = await session.withTransaction(async () => {
            const existingWebsite = await Website.findOne(
                { userId: currentUser._id },
                null,
                { session }
            );
            if (existingWebsite) {
                throw new Error("User already has a website");
            }

            const generateContentDoc = await createOrUpdateContent(
                currentUser,
                templateType,
                {},
                session
            );

            const website = await createWebsite(currentUser._id, {
                templateType,
                templateVariant,
                contentType,
                content: generateContentDoc._id,
                subdomain
            }, session);

            const updatedUser = await User.findByIdAndUpdate(
                currentUser._id,
                {
                    $set: {
                        subdomain,
                        websiteCreated: true,
                        "websitePreferences.website": website._id,
                    },
                },
                { session, new: true }
            );

            if (!updatedUser) {
                throw new Error("Unable to update user with website information");
            }

            return website;
        });

        return NextResponse.json({ success: true, data: newWebsite }, { status: 201 });

    } catch (error) {
        const status = error.message === "User already has a website" ? 400 : 500;
        return NextResponse.json({ error: error.message || 'Failed to create website' }, { status });
    } finally {
        if (session) {
            await session.endSession();
        }
    }
});