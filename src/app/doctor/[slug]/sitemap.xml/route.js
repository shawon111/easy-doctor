import { getDoctorSiteContext } from "@/lib/seo/doctor-metadata";

const escapeXml = (value) =>
    String(value).replace(/[<>&"']/g, (character) => ({
        "<": "&lt;",
        ">": "&gt;",
        "&": "&amp;",
        '"': "&quot;",
        "'": "&apos;",
    })[character]);

const publicPagePaths = [
    "/",
    "/about",
    "/services",
    "/appointment",
    "/privacy-policy",
];

export async function GET(request, { params }) {
    const { slug } = await params;
    const context = await getDoctorSiteContext(slug);

    if (!context?.canonicalUrl) {
        return new Response("Not Found", {
            status: 404,
        });
    }

    const shouldIndex =
        context.isPublished && context.seo.robots?.index !== false;
    const urls = shouldIndex
        ? publicPagePaths
              .map((path) => {
                  const location = escapeXml(
                      new URL(path, context.canonicalUrl).toString()
                  );
                  return `<url><loc>${location}</loc></url>`;
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