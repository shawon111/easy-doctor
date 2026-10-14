import { getDoctorSiteContext } from "@/lib/seo/doctor-metadata";

const escapeXml = (value) =>
    String(value).replace(/[<>&"']/g, (character) => ({
        "<": "&lt;",
        ">": "&gt;",
        "&": "&amp;",
        '"': "&quot;",
        "'": "&apos;",
    })[character]);

const publicPages = [
    { path: "/", priority: "1.0", changefreq: "weekly" },
    { path: "/services", priority: "0.9", changefreq: "monthly" },
    { path: "/appointment", priority: "0.9", changefreq: "weekly" },
    { path: "/about", priority: "0.8", changefreq: "monthly" },
    { path: "/privacy-policy", priority: "0.3", changefreq: "yearly" },
];

export async function GET(request, { params }) {
    const { slug } = await params;
    const context = await getDoctorSiteContext(slug);

    if (!context?.canonicalUrl) {
        return new Response("Not Found", {
            status: 404,
        });
    }

    // Keep sitemap active for published websites even when subscription expires
    const shouldIndex =
        context.isPublished && context.seo?.robots?.index !== false;

    const lastMod = context.website?.updatedAt
        ? new Date(context.website.updatedAt).toISOString()
        : new Date().toISOString();

    const urls = shouldIndex
        ? publicPages
              .map(({ path, priority, changefreq }) => {
                  const location = escapeXml(
                      new URL(path, context.canonicalUrl).toString()
                  );
                  return `<url><loc>${location}</loc><lastmod>${lastMod}</lastmod><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`;
              })
              .join("")
        : "";

    const body =
        `<?xml version="1.0" encoding="UTF-8"?>` +
        `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;

    return new Response(body, {
        headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "no-store",
            "X-Robots-Tag": "noindex",
        },
    });
}