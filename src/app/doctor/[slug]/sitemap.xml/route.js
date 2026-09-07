export async function GET(request, { params }) {
    const { slug } = await params;

    const host = request.headers.get("host") || "";

    if (!slug || !host) {
        return new Response("Not Found", {
            status: 404,
        });
    }

    const protocol = host.includes("localhost")
        ? "http"
        : "https";

    const baseUrl = `${protocol}://${host}`;

    const urls = [
        `${baseUrl}/`,
        `${baseUrl}/about`,
        `${baseUrl}/services`,
        `${baseUrl}/appointment`,
    ];

    const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
>
    ${urls
        .map(
            (url) => `
    <url>
        <loc>${url}</loc>
    </url>`
        )
        .join("")}
</urlset>`;

    return new Response(body, {
        headers: {
            "Content-Type": "application/xml; charset=utf-8",
        },
    });
}