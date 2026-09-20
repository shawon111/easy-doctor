function shouldStripKey(key) {
    return key === "header" || key === "footer";
}

export function sanitizeGeneratedContent(value) {
    if (Array.isArray(value)) {
        return value.map(sanitizeGeneratedContent);
    }

    if (value && typeof value === "object") {
        const result = {};

        for (const [key, child] of Object.entries(value)) {
            if (shouldStripKey(key)) continue;
            result[key] = sanitizeGeneratedContent(child);
        }

        return result;
    }

    return value;
}
