const sleep = (ms) =>
    new Promise((resolve) => setTimeout(resolve, ms));

export async function generateWithRetry(
    generateFn,
    maxAttempts = 3
) {
    let lastError;

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            return await generateFn();
        } catch (error) {
            lastError = error;

            console.error(
                `AI generation failed (attempt ${attempt}/${maxAttempts}):`,
                error
            );

            if (attempt < maxAttempts) {
                await sleep(attempt * 1000);
            }
        }
    }

    throw lastError;
}