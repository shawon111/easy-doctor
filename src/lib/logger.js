import pino from "pino";

const isBrowser = typeof window !== "undefined";
const isProduction = process.env.NODE_ENV === "production";

const baseOptions = {
    level: isProduction ? "info" : "debug",
    base: {
        env: process.env.NODE_ENV,
    },
    timestamp: pino.stdTimeFunctions.isoTime,
    browser: {
        asObject: true,
    },
};

function createServerStream() {
    const path = require("path");
    const logFile = path.join(process.cwd(), "logs", "app.log");

    try {
        const fileStream = pino.destination({
            dest: logFile,
            mkdir: true,
            sync: true,
        });

        return pino.multistream([
            { stream: process.stdout },
            { stream: fileStream },
        ]);
    } catch (error) {
        process.stdout.write(
            `[logger] Could not open ${logFile}: ${error.message}. Falling back to stdout.\n`
        );
        return process.stdout;
    }
}

export const logger = isBrowser
    ? pino(baseOptions)
    : pino(baseOptions, createServerStream());

export function logError(message, error, extra = {}) {
    logger.error(
        {
            ...extra,
            err: error,
            errorName: error?.name,
            errorMessage: error?.message,
            errorStatus: error?.status ?? error?.statusCode,
            errorCode: error?.code,
            errorDetails: error?.errorDetails ?? error?.details,
        },
        message
    );
}
