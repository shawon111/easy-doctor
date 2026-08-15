export function resolveTemplateContent(content, defaults, isDemo = false) {
  if (isDemo) {
    return defaults;
  }

  return content ?? defaults;
}
