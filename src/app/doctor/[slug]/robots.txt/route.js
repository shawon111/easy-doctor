export async function GET(request, { params }) {
    const { slug } = await params;
    const host = request.headers.get("host") || "";
    const rootDomain = process.env.NEXT_PUBLIC_BASE_DOMAIN || host;
    const protocol = rootDomain.startsWith("localhost") ? "http" : "https";
    const sitemapUrl = `${protocol}://${slug}.${rootDomain}/sitemap.xml`;

    const body = [
        "User-agent: *",
        "Allow: /",
        "Disallow: /api/",
        "Disallow: /dashboard/",
        "Disallow: /admin/",
        `Sitemap: ${sitemapUrl}`,
        "",
    ].join("\n");

    return new Response(body, {
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
        },
    });
}
