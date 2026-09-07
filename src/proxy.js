import { NextResponse } from "next/server";
import { verifyAccessToken } from "@/lib/jwt";
import { redirectToLogin, tryRefreshTokens } from "@/lib/auth-core";

const ROOT_DOMAIN = process.env.NEXT_PUBLIC_BASE_DOMAIN;

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
];

export function proxy(request) {
    // rewrite url and handle subdomain routing
    const { pathname } = request.nextUrl;

    const hostname = request.headers.get("host");

    if (!hostname) {
        return NextResponse.next();
    }
    const host = hostname.split(":")[0];

    // Keep Next.js bundles and public files at their original paths.
    if (
        pathname.startsWith("/_next/") ||
        pathname === "/favicon.ico" ||
        (
            pathname.includes(".") &&
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
    const isDashboard =
        request.nextUrl.pathname.startsWith("/dashboard");

    const isProtectedApiRoute = PROTECTED_API_PATHS.some(
        (protectedPath) =>
            pathname === protectedPath ||
            pathname.startsWith(`${protectedPath}/`)
    ) || (
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