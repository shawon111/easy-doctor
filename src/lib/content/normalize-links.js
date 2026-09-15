export function pickLinks(links, fallback = []) {
  const cleaned = (Array.isArray(links) ? links : []).filter(
    (link) =>
      link &&
      typeof link.href === "string" &&
      link.href.trim() !== "" &&
      link.href.trim() !== "#"
  );

  return cleaned.length > 0 ? cleaned : fallback;
}
