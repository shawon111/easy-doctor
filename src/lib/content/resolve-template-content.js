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

    if (sourceValue === undefined || sourceValue === null) {
      if (key === "imageAlt") {
        result[key] = "";
      } else if (SAFE_DEFAULT_KEYS.has(key)) {
        result[key] = defaultValue;
      } else if (Array.isArray(defaultValue)) {
        result[key] = SAFE_DEFAULT_KEYS.has(key) ? defaultValue : [];
      } else if (isPlainObject(defaultValue)) {
        result[key] = resolveTemplateContent({}, defaultValue);
      }
      continue;
    }

    if (Array.isArray(sourceValue) && Array.isArray(defaultValue)) {
      if (sourceValue.length === 0 && SAFE_DEFAULT_KEYS.has(key)) {
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
