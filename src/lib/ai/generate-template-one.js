import { ai } from "./gemini";
import { generateWithRetry } from "./generate-with-retry";
import { readGeminiJson } from "./gemini-response";
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
            contents: buildTemplateOnePrompt(doctorData, seoData),
            config: {
                temperature: 0.7,
                responseMimeType: "application/json",
                responseSchema: templateOneResponseSchema,
            },
        });

        return readGeminiJson(response, "Template One");
    }, 3);
}
