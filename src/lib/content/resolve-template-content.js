function isPlainObject(value) {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

const SAFE_DEFAULT_KEYS = new Set([
  "icon",
  "iconClass",
  "color",
  "imageUrl",
  "imageUrlSecondary",
  "quoteImageUrl",
  "telehealthImage",
  "images",
  "navLinks",
  "resourceLinks",
  "legalLinks",
  "appointmentCta",
  "appointmentCtaLink",
]);

export function resolveTemplateContent(content, defaults, isDemo = false) {
  if (isDemo) return defaults;

  const source = content ?? {};
  const result = {};

  const keys = new Set([
    ...Object.keys(source),
    ...Object.keys(defaults || {}),
  ]);

  for (const key of keys) {
    const sourceValue = source[key];
    const defaultValue = defaults?.[key];

    // Treat null, undefined, and blank strings as "missing" — fall back to default.
    // imageAlt is the only exception: an empty string is intentional there (no alt text).
    const isMissing =
      sourceValue === undefined ||
      sourceValue === null ||
      (typeof sourceValue === "string" && sourceValue.trim() === "" && key !== "imageAlt");

    if (isMissing) {
      if (key === "imageAlt") {
        result[key] = "";
      } else if (Array.isArray(defaultValue)) {
        // Always use the full default array for missing array fields
        result[key] = defaultValue;
      } else if (isPlainObject(defaultValue)) {
        // Recursively fill nested objects from defaults
        result[key] = resolveTemplateContent({}, defaultValue);
      } else if (defaultValue !== undefined) {
        // Use default for any missing primitive (string, number, boolean, etc.)
        result[key] = defaultValue;
      }
      continue;
    }

    if (Array.isArray(sourceValue) && Array.isArray(defaultValue)) {
      // An empty array in the source (from AI or DB) is treated the same as a
      // missing field — fall back to the full default array so no section is
      // left blank.  This covers all keys, not just SAFE_DEFAULT_KEYS.
      if (sourceValue.length === 0) {
        result[key] = defaultValue;
        continue;
      }

      const safeDefaultList = SAFE_DEFAULT_KEYS.has(key) ? defaultValue : [];
      result[key] = sourceValue.map((item, index) => {
        const fallbackList = safeDefaultList.length ? safeDefaultList : defaultValue;
        const fallback = fallbackList[index % fallbackList.length];
        if (isPlainObject(item) && isPlainObject(fallback)) {
          return resolveTemplateContent(item, fallback);
        }
        return item;
      });
      continue;
    }

    if (isPlainObject(sourceValue) && isPlainObject(defaultValue)) {
      result[key] = resolveTemplateContent(sourceValue, defaultValue);
      continue;
    }

    result[key] = sourceValue;
  }

  return result;
}

export function replaceTemplateVariables(value, variables = {}) {
  if (typeof value === "string") {
    return value.replace(/\{\{(\w+)\}\}/g, (match, key) =>
      variables[key] === undefined ? "" : String(variables[key])
    );
  }

  if (Array.isArray(value)) {
    return value.map((item) => replaceTemplateVariables(item, variables));
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [
        key,
        replaceTemplateVariables(item, variables),
      ])
    );
  }

  return value;
}
