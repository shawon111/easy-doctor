export async function GET(request) {
    const host = request.headers.get("host") || "";
    const protocol = host.includes("localhost") ? "http" : "https";
    const sitemapUrl = `${protocol}://${host}/sitemap.xml`;

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
