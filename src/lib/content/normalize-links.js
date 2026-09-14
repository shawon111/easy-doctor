/**
 * Keeps only footer/header links that point to a real page.
 *
 * Stored content can contain placeholder links (for example `href: "#"`)
 * left over from older template defaults. Those rendered as dead links
 * because no such page exists. When every stored link is unusable we fall
 * back to the template defaults, which only reference the five real pages
 * (home, about, services, appointment, privacy policy).
 */
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
