import SEO from "@/models/seo.model";
import User from "@/models/user.model";
import Website from "@/models/website.model";


import {
    prepareDoctorData,
    prepareSeoData,
} from "./prepare-data";
import TemplateOneContent from "@/models/template-one-content.model";
import TemplateTwoContent from "@/models/template-two-content.model";
import TemplateThreeContent from "@/models/template-three-content.model";
import { generateTemplateOneContent } from "./generate-template-one";
import { generateTemplateTwoContent } from "./generate-template-two";
import { generateTemplateThreeContent } from "./generate-template-three";
import { sanitizeGeneratedContent } from "./sanitize-generated-content";
import { logError } from "../logger";

const templateModels = {
    "template-one": TemplateOneContent,
    "template-one-dark": TemplateOneContent,

    "template-two": TemplateTwoContent,
    "template-two-dark": TemplateTwoContent,

    "template-three": TemplateThreeContent,
    "template-three-dark": TemplateThreeContent,
};

const templateGenerators = {
    "template-one": generateTemplateOneContent,
    "template-one-dark": generateTemplateOneContent,

    "template-two": generateTemplateTwoContent,
    "template-two-dark": generateTemplateTwoContent,

    "template-three": generateTemplateThreeContent,
    "template-three-dark": generateTemplateThreeContent,
};

export async function generateWebsiteContent(
    userId,
    templateType,
    websiteId
) {
    try {
        const [user, seo] = await Promise.all([
            User.findById(userId).lean(),
            SEO.findOne({ userId }).lean(),
        ]);

        if (!user) {
            throw new Error("User not found");
        }

        if (!seo) {
            throw new Error("SEO data not found");
        }

        const Template = templateModels[templateType];
        const generateContent =
            templateGenerators[templateType];

        if (!Template || !generateContent) {
            throw new Error(
                `Unsupported template type: ${templateType}`
            );
        }

        const doctorData = prepareDoctorData(user);
        const seoData = prepareSeoData(seo);

        // Generate AI content
        const generatedContent = sanitizeGeneratedContent(
            await generateContent(
                doctorData,
                seoData
            )
        );

        if (!generatedContent) {
            throw new Error(
                "Generated website content is empty"
            );
        }

        // Save content in the appropriate content model
        const content = await Template.findOneAndUpdate(
            { userId },
            {
                $set: generatedContent,
                $unset: {
                    header: "",
                    footer: "",
                },
            },
            {
                upsert: true,
                runValidators: true,
            }
        );

        if (!content) {
            throw new Error(
                "Failed to save generated website content"
            );
        }

        // Update Website
        await Website.findByIdAndUpdate(
            {_id: websiteId},
            {
                $set: {
                    content: content._id,
                    status: "ready",
                    generationError: null,
                },
            },
            {
                new: true,
                runValidators: true,
            }
        );

        return content;
    } catch (error) {
        logError("Website content generation failed", error, {
            userId,
            templateType,
            websiteId,
        });

        // Mark website generation as failed
        await Website.findByIdAndUpdate(
            websiteId,
            {
                $set: {
                    status: "failed",
                    generationError:
                        error?.message ||
                        "Website generation failed",
                },
            }
        );

        throw error;
    }
}