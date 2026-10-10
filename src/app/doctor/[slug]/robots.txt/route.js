import { getDoctorSiteContext } from "@/lib/seo/doctor-metadata";

export async function GET(request, { params }) {
    const { slug } = await params;
    const context = await getDoctorSiteContext(slug);
    if (!context?.canonicalUrl) {
        return new Response("Not Found", { status: 404 });
    }

    const lines = ["User-agent: *", "Allow: /"];
    if (context.isPublished && context.seo.robots?.index !== false) {
        lines.push(`Sitemap: ${context.canonicalUrl}/sitemap.xml`);
    }

    const body = `${lines.join("\n")}\n`;
    return new Response(body, {
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "no-store",
        },
    });
}
