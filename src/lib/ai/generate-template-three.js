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

            contents: buildTemplateThreePrompt(
                doctorData,
                seoData
            ),

            config: {
                temperature: 0.7,
                responseMimeType: "application/json",
                responseSchema: templateThreeResponseSchema,
            },
        });

        if (!response?.text) {
            throw new Error(
                "Gemini returned an empty response"
            );
        }

        try {
            return JSON.parse(response.text);
        } catch (error) {
            logger.error(
                "Template Three JSON parse error:",
                error
            );

            throw new Error(
                "Gemini returned invalid JSON"
            );
        }
    }, 3);
}