import { NextResponse } from "next/server";
import { verifyAccessToken } from "@/lib/jwt";
import { redirectToLogin, tryRefreshTokens } from "@/lib/auth-core";
import { connectDB } from "@/config/database";
import Website from "@/models/website.model";

const ROOT_DOMAIN = process.env.NEXT_PUBLIC_BASE_DOMAIN?.toLowerCase();

const SYSTEM_SUBDOMAINS = [
    "www",
    "dashboard",
    "app",
    "api",
];

const PROTECTED_API_PATHS = [
    "/api/auth/logout",
    "/api/me",
    "/api/appointment",
    "/api/website",
    "/api/domain",
    "/api/info"
];

export async function proxy(request) {
    // rewrite url and handle subdomain routing
    const { pathname } = request.nextUrl;

    const hostname = request.headers.get("host");

    if (!hostname) {
        return NextResponse.next();
    }
    const host = hostname.split(":")[0].toLowerCase().replace(/\.$/, "");

    // Keep Next.js bundles and public files at their original paths.
    if (
        pathname.startsWith("/_next/") ||
        pathname === "/favicon.ico" ||
        (
            pathname.includes(".") &&
            pathname !== "/favicon.svg" &&
            pathname !== "/robots.txt" &&
            pathname !== "/sitemap.xml"
        )
    ) {
        return NextResponse.next();
    }

    let subdomain = null;
    // Local:
    if (host.endsWith(".localhost")) {
        subdomain = host.replace(".localhost", "");
    }

    // Production:
    else if (
        ROOT_DOMAIN &&
        host.endsWith(`.${ROOT_DOMAIN}`)
    ) {
        subdomain = host.replace(`.${ROOT_DOMAIN}`, "");
    }

    if (
        !subdomain &&
        !pathname.startsWith("/api/") &&
        host.includes(".") &&
        host !== ROOT_DOMAIN &&
        !host.endsWith(".vercel.app")
    ) {
        try {
            await connectDB();
            const website = await Website.findOne({
                domain: host,
                domainStatus: { $in: ["connected", "verified"] },
            })
                .select({ subdomain: 1 })
                .lean();
            subdomain = website?.subdomain || null;
        } catch (error) {
            console.error("Failed to resolve custom domain", error);
            return NextResponse.next();
        }
    }

    // Rewrite each hosted site's favicon to its dynamic route.
    if (subdomain && pathname === "/favicon.svg") {
        const url = request.nextUrl.clone();
        url.pathname = `/doctor/${subdomain}/favicon.svg`;

        return NextResponse.rewrite(url);
    }


    // robots.txt
    if (subdomain && pathname === "/robots.txt") {
        const url = request.nextUrl.clone();
        url.pathname = `/doctor/${subdomain}/robots.txt`;

        return NextResponse.rewrite(url);
    }


    // sitemap.xml
    if (subdomain && pathname === "/sitemap.xml") {
        const url = request.nextUrl.clone();
        url.pathname = `/doctor/${subdomain}/sitemap.xml`;

        return NextResponse.rewrite(url);
    }

    if (
        subdomain &&
        !SYSTEM_SUBDOMAINS.includes(subdomain) &&
        !pathname.startsWith("/api/")
    ) {
        const url = request.nextUrl.clone();

        url.pathname = `/doctor/${subdomain}${pathname}`;

        return NextResponse.rewrite(url);
    }

    // dashboard and api protected routes
    const isPublicAppointmentPost =
        pathname === "/api/appointment" &&
        request.method === "POST";

    const isDashboard =
        request.nextUrl.pathname.startsWith("/dashboard");

    const isProtectedApiRoute =
        !isPublicAppointmentPost &&
        PROTECTED_API_PATHS.some(
            (protectedPath) =>
                pathname === protectedPath ||
                pathname.startsWith(`${protectedPath}/`)
        ) ||
        (
            pathname === "/api/content" &&
            request.method !== "GET"
        );

    if (!isDashboard && !isProtectedApiRoute) {
        return NextResponse.next();
    }

    const accessToken = request.cookies.get("accessToken")?.value;

    const refreshToken = request.cookies.get("refreshToken")?.value;

    // No access token, try refresh
    if (!accessToken) {
        if (!refreshToken) {
            return redirectToLogin(request);
        }
        return tryRefreshTokens(request, refreshToken);
    }

    // Access token valid, continue
    try {
        const payload = verifyAccessToken(accessToken);
        if (payload) {
            return NextResponse.next();
        }
    } catch {
        // Access expired, try refresh
        return tryRefreshTokens(request, refreshToken);
    }
}

export const config = {
    matcher: [
        "/:path*",
        "/dashboard/:path*",
        "/api/me/:path*",
        "/api/auth/logout",
        "/api/appointment/:path*",
    ],
};