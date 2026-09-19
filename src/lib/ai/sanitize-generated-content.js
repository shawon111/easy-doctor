const VISUAL_KEY_PATTERN = /image/i;
const VISUAL_KEYS = new Set(["icon", "iconClass"]);

function shouldStripKey(key) {
    return key === "header" || key === "footer" || VISUAL_KEYS.has(key) || VISUAL_KEY_PATTERN.test(key);
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
