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
import { applyDoctorLocations } from "@/lib/content/apply-doctor-locations";
import {
    templateOneDefaults,
    templateTwoDefaults,
    templateThreeDefaults,
} from "@/content/defaults";
import { getSystemSettings } from "@/services/admin.service";

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

const templateDefaults = {
    "template-one": templateOneDefaults,
    "template-one-dark": templateOneDefaults,

    "template-two": templateTwoDefaults,
    "template-two-dark": templateTwoDefaults,

    "template-three": templateThreeDefaults,
    "template-three-dark": templateThreeDefaults,
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

        // Fetch configured AI model from platform settings
        const settings = await getSystemSettings().catch(() => null);
        const aiModel = settings?.aiSettings?.model || process.env.GEMINI_MODEL || "gemini-3.1-flash-lite";

        // Generate AI content
        const generatedContent = sanitizeGeneratedContent(
            await generateContent(
                doctorData,
                seoData,
                aiModel
            )
        );

        if (!generatedContent) {
            throw new Error(
                "Generated website content is empty"
            );
        }

        applyDoctorLocations(
            generatedContent,
            templateType,
            user.clinicAddress || []
        );

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

        // Always fall back to default template content so the website is guaranteed to load
        try {
            const defaults = templateDefaults[templateType];
            const Template = templateModels[templateType];

            if (defaults && Template) {
                const fallbackContent = await Template.findOneAndUpdate(
                    { userId },
                    { $set: defaults },
                    { upsert: true, new: true, runValidators: false }
                );

                if (fallbackContent) {
                    await Website.findByIdAndUpdate(
                        websiteId,
                        {
                            $set: {
                                content: fallbackContent._id,
                                status: "ready",
                                generationError:
                                    error?.message ||
                                    "Website generation failed (using default content)",
                            },
                        }
                    );

                    return fallbackContent;
                }
            }
        } catch (fallbackError) {
            logError("Failed to save default fallback content", fallbackError, {
                userId,
                templateType,
                websiteId,
            });
        }

        // If fallback also failed, mark the website as failed
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