import { logger } from "./logger";

export async function asyncHandler(fn) {
    try {
        return await fn();
    } catch (error) {
        logger.error({ error: error.message });
        return Response.json(
            {
                success: false,
                data: {
                    message: 'An error occurred while processing your request.',
                }
            },
            { status: 500 }
        );
    }
}