export const GET = async (request, { params }) => {
    const { slug } = await params;
    const iconText = slug.slice(0, 2).toUpperCase();

    // svg
    const svg = `
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
        >
            <rect
                width="64"
                height="64"
                rx="14"
                fill="#2563EB"
            />

            <text
                x="32"
                y="34"
                text-anchor="middle"
                dominant-baseline="middle"
                font-family="Arial, Helvetica, sans-serif"
                font-size="24"
                font-weight="700"
                fill="#FFFFFF"
            >
                ${iconText}
            </text>
        </svg>
    `;

    return new Response(svg, {
        headers: {
            "Content-Type": "image/svg+xml",
            "Cache-Control": "public, max-age=864000, stale-while-revalidate=6048000"
        }
    });
}