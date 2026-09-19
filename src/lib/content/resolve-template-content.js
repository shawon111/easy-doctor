function isEmptyValue(value) {
  return (
    value === undefined ||
    value === null ||
    (typeof value === "string" && value.trim() === "") ||
    (Array.isArray(value) && value.length === 0)
  );
}

function isPlainObject(value) {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

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

    if (isEmptyValue(sourceValue)) {
      result[key] = defaultValue;
      continue;
    }

    if (Array.isArray(sourceValue) && Array.isArray(defaultValue)) {
      const defaultIsObjectList = defaultValue.some(isPlainObject);

      if (defaultIsObjectList) {
        result[key] = sourceValue.map((item, index) => {
          const fallback = defaultValue[index % defaultValue.length];
          if (isPlainObject(item) && isPlainObject(fallback)) {
            return resolveTemplateContent(item, fallback);
          }
          return isEmptyValue(item) ? fallback : item;
        });
        continue;
      }

      result[key] = sourceValue;
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
      variables[key] === undefined ? match : String(variables[key])
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
