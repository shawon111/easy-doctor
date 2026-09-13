/**
 * Converts a Google Maps share/search URL into a URL that can be embedded
 * in an <iframe>. Already-embeddable URLs are returned unchanged.
 *
 * Supports:
 *  - https://www.google.com/maps/embed?pb=...            (pass-through)
 *  - https://www.google.com/maps?q=<query>               (q= rewrite)
 *  - https://www.google.com/maps/search/?api=1&query=... (query= rewrite)
 *  - https://www.google.com/maps/place/<Place+Name>/...  (place name rewrite)
 *  - https://www.google.com/maps/@lat,lng,zoom           (coordinate rewrite)
 *  - any raw non-URL text                                (search query rewrite)
 */
export function toGoogleMapsEmbedUrl(input) {
  if (!input) return "";
  const url = String(input).trim();
  if (!url) return "";

  // Already embeddable — use as-is.
  if (url.includes("/maps/embed") || url.includes("output=embed")) {
    return url;
  }

  let parsed;
  try {
    parsed = new URL(url);
  } catch {
    // Not a valid URL — treat the raw text as a place / query search.
    return `https://www.google.com/maps?q=${encodeURIComponent(url)}&output=embed`;
  }

  const hostname = parsed.hostname.toLowerCase().replace(/^www\./, "");
  const isGoogleMapHost =
    hostname === "goo.gl" ||
    hostname === "maps.app.goo.gl" ||
    /^(maps\.)?google\.(com|co\.uk|ca|de|fr|in|au|it|es|nl|se|jp|ch|at|co\.in)$/.test(
      hostname
    );

  // Only rewrite Google-hosted URLs; anything else passes through untouched.
  if (!isGoogleMapHost) return url;

  const q = parsed.searchParams.get("q");
  if (q) {
    return `https://www.google.com/maps?q=${encodeURIComponent(q)}&output=embed`;
  }

  const query = parsed.searchParams.get("query");
  if (query) {
    return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
  }

  // https://www.google.com/maps/place/<Place+Name>/@lat,lng,zoom
  const placeMatch = parsed.pathname.match(/\/maps\/place\/([^/@]+)/);
  if (placeMatch) {
    const placeName = decodeURIComponent(placeMatch[1]).replace(/\+/g, " ");
    return `https://www.google.com/maps?q=${encodeURIComponent(placeName)}&output=embed`;
  }

  // https://www.google.com/maps/@lat,lng,zoom
  const atMatch = parsed.pathname.match(/@(-?[\d.]+),(-?[\d.]+)(?:,([\d.]+)z)?/);
  if (atMatch) {
    const zoom = atMatch[3]
      ? Math.max(3, Math.round(parseFloat(atMatch[3])))
      : 15;
    return `https://www.google.com/maps?ll=${atMatch[1]},${atMatch[2]}&z=${zoom}&output=embed`;
  }

  const ll = parsed.searchParams.get("ll");
  if (ll) {
    const zoom = parsed.searchParams.get("z") || 15;
    return `https://www.google.com/maps?ll=${encodeURIComponent(
      ll
    )}&z=${zoom}&output=embed`;
  }

  // Last resort — feed the whole URL as a search query.
  return `https://www.google.com/maps?q=${encodeURIComponent(url)}&output=embed`;
}