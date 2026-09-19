import { ai } from "./gemini";
import { generateWithRetry } from "./generate-with-retry";
import { readGeminiJson } from "./gemini-response";
import { buildTemplateThreePrompt } from "./prompts/template-three";
import { templateThreeResponseSchema } from "./schemas/template-three";

export async function generateTemplateThreeContent(
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
            contents: buildTemplateThreePrompt(doctorData, seoData),
            config: {
                temperature: 0.7,
                responseMimeType: "application/json",
                responseSchema: templateThreeResponseSchema,
            },
        });

        return readGeminiJson(response, "Template Three");
    }, 3);
}
