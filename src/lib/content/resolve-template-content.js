function isEmptyValue(value) {
  return (
    value === undefined ||
    value === null ||
    (typeof value === "string" && value.trim() === "") ||
    (Array.isArray(value) && value.length === 0)
  );
}

export function resolveTemplateContent(content, defaults, isDemo = false) {
  if (isDemo) return defaults;

  const source = content ?? {};
  const result = {};

  const keys = new Set([
    ...Object.keys(source),
    ...Object.keys(defaults),
  ]);

  for (const key of keys) {
    const sourceValue = source[key];
    const defaultValue = defaults[key];

    if (isEmptyValue(sourceValue)) {
      result[key] = defaultValue;
      continue;
    }

    if (
      sourceValue &&
      defaultValue &&
      typeof sourceValue === "object" &&
      typeof defaultValue === "object" &&
      !Array.isArray(sourceValue) &&
      !Array.isArray(defaultValue)
    ) {
      result[key] = resolveTemplateContent(
        sourceValue,
        defaultValue
      );

      continue;
    }

    result[key] = sourceValue;
  }

  return result;
}