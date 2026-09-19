import { logError, logger } from "../logger";

export function readGeminiJson(response, label) {
    if (!response?.text) {
        logger.error(
            {
                label,
                model: process.env.GEMINI_MODEL,
                promptFeedback: response?.promptFeedback,
                finishReason: response?.candidates?.[0]?.finishReason,
                safetyRatings: response?.candidates?.[0]?.safetyRatings,
            },
            `${label}: Gemini returned an empty response`
        );

        throw new Error(`${label}: Gemini returned an empty response`);
    }

    try {
        return JSON.parse(response.text);
    } catch (error) {
        logError(`${label}: Gemini returned invalid JSON`, error, {
            responsePreview: String(response.text).slice(0, 1000),
        });

        throw new Error(`${label}: Gemini returned invalid JSON`);
    }
}
