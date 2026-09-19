import { ai } from "./gemini";
import { generateWithRetry } from "./generate-with-retry";
import { readGeminiJson } from "./gemini-response";
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
            contents: buildTemplateTwoPrompt(doctorData, seoData),
            config: {
                temperature: 0.7,
                responseMimeType: "application/json",
                responseSchema: templateTwoResponseSchema,
            },
        });

        return readGeminiJson(response, "Template Two");
    }, 3);
}
