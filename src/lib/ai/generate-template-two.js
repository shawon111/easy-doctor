
import { logger } from "../logger";
import { ai } from "./gemini";
import { generateWithRetry } from "./generate-with-retry";
import { buildTemplateTwoPrompt } from "./prompts/template-two";
import { templateTwoResponseSchema } from "./schemas/template-two";

export async function generateTemplateTwoContent(
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

            contents: buildTemplateTwoPrompt(
                doctorData,
                seoData
            ),

            config: {
                temperature: 0.7,

                responseMimeType: "application/json",

                responseSchema: templateTwoResponseSchema,
            },
        });

        if (!response?.text) {
            throw new Error(
                "Gemini returned an empty Template Two response"
            );
        }

        try {
            return JSON.parse(response.text);
        } catch (error) {
            logger.error(
                "Template Two JSON parse error:",
                error
            );

            throw new Error(
                "Invalid JSON returned by Gemini for Template Two"
            );
        }
    }, 3)
}