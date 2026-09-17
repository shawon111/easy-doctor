import { logger } from "../logger";
import { ai } from "./gemini";
import { generateWithRetry } from "./generate-with-retry";
import { buildTemplateOnePrompt } from "./prompts/template-one";
import { templateOneResponseSchema } from "./schemas/template-one";

export async function generateTemplateOneContent(
    doctorData,
    seoData
) {
    if (!doctorData) {
        throw new Error("Doctor data is required");
    }

    if (!seoData) {
        throw new Error("SEO data is required");
    }

    return generateWithRetry(async () => {
        const response = await ai.models.generateContent({
            model: process.env.GEMINI_MODEL,

            contents: buildTemplateOnePrompt(
                doctorData,
                seoData
            ),

            config: {
                temperature: 0.7,

                responseMimeType: "application/json",

                responseSchema: templateOneResponseSchema,
            },
        });

        if (!response?.text) {
            throw new Error(
                "Gemini returned an empty Template One response"
            );
        }

        try {
            return JSON.parse(response.text);
        } catch (error) {
            logger.error(
                "Template One JSON parse error:",
                error
            );

            throw new Error(
                "Invalid JSON returned by Gemini for Template One"
            );
        }
    }, 3)
}