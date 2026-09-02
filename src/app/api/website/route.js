import { connectDB } from "@/config/database";
import { requireUser } from "@/lib/requireUser";
import User from "@/models/user.model";
import Website from "@/models/website.model";
import { createOrUpdateContent } from "@/services/content.service";
import { createWebsite } from "@/services/website.service";
import { NextResponse } from "next/server";

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

// create a new website
export const POST = async (request) => {
    const { templateType, subdomain } = await request.json();
    const templateVariant = templateTypeToVariantmap[templateType];
    const contentType = templateTypeToContentTypeMap[templateType];
    try {
        await connectDB();
        // get user info
        const user = await requireUser();

        // check if the user already has a website
        const existingWebsite = await Website.findOne({ userId: user?._id });
        if (existingWebsite) {
            return NextResponse.json({ error: 'User already has a website' }, { status: 400 });
        }

        // create content first based on selected template type
        const generateContentDoc = await createOrUpdateContent(user, templateType, {});

        // now create the website with the generated content
        const newWebsite = await createWebsite(user?._id, {
            templateType,
            templateVariant: templateVariant,
            contentType,
            content: generateContentDoc._id
        })

        // update the user document with the new website info
        if (newWebsite) {
            const updatedUser = await User.findByIdAndUpdate(
                user?._id,
                {
                    $set: {
                        subdomain,
                        websiteCreated: true,
                        "websitePreferences.website": newWebsite._id,
                    },
                }
            );

            if (!updatedUser) {
                throw new Error("Unable to update user with website information");
            }
        }

        return NextResponse.json({ success: true, data: newWebsite }, { status: 201 });

    } catch (error) {
        return NextResponse.json({ error: 'Failed to create website' }, { status: 500 });
    }
}