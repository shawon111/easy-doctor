import { NextResponse } from "next/server";
import { verifyAccessToken } from "@/lib/jwt";
import { redirectToLogin, tryRefreshTokens } from "@/lib/auth-core";

const ROOT_DOMAIN = process.env.NEXT_PUBLIC_BASE_DOMAIN
    ?.toLowerCase()
    .replace(/\.$/, "");

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
    "/api/info",
    "/api/payment"
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

    let siteIdentifier = null;
    const isPlatformRoot = host === ROOT_DOMAIN || host === "localhost";

    if (host.endsWith(".localhost")) {
        siteIdentifier = host.slice(0, -".localhost".length);
    } else if (ROOT_DOMAIN && host.endsWith(`.${ROOT_DOMAIN}`)) {
        siteIdentifier = host.slice(0, -(ROOT_DOMAIN.length + 1));
    }

    const isCustomDomainHost =
        !siteIdentifier &&
        !isPlatformRoot &&
        host.includes(".") &&
        !host.endsWith(".vercel.app");

    if (isCustomDomainHost) {
        // The public route services validate that this custom host is connected.
        siteIdentifier = host;
    }

    const isPlatformSubdomain =
        Boolean(siteIdentifier) && SYSTEM_SUBDOMAINS.includes(siteIdentifier);

    // Rewrite each hosted site's favicon to its dynamic route.
    if (siteIdentifier && !isPlatformSubdomain && pathname === "/favicon.svg") {
        const url = request.nextUrl.clone();
        url.pathname = `/doctor/${siteIdentifier}/favicon.svg`;

        return NextResponse.rewrite(url);
    }


    // robots.txt
    if (siteIdentifier && !isPlatformSubdomain && pathname === "/robots.txt") {
        const url = request.nextUrl.clone();
        url.pathname = `/doctor/${siteIdentifier}/robots.txt`;

        return NextResponse.rewrite(url);
    }


    // sitemap.xml
    if (siteIdentifier && !isPlatformSubdomain && pathname === "/sitemap.xml") {
        const url = request.nextUrl.clone();
        url.pathname = `/doctor/${siteIdentifier}/sitemap.xml`;

        return NextResponse.rewrite(url);
    }

    if (
        siteIdentifier &&
        !isPlatformSubdomain &&
        !pathname.startsWith("/api/")
    ) {
        const url = request.nextUrl.clone();

        url.pathname = `/doctor/${siteIdentifier}${pathname}`;

        return NextResponse.rewrite(url);
    }

    // dashboard and api protected routes
    const isPublicAppointmentPost =
        pathname === "/api/appointment" &&
        request.method === "POST";

    const isPublicSubdomainSearch =
        pathname === "/api/info/subdomain/search" &&
        request.method === "GET";

    const isDashboard =
        request.nextUrl.pathname.startsWith("/dashboard");

    const isProtectedApiRoute =
        (!isPublicAppointmentPost &&
            !isPublicSubdomainSearch &&
            PROTECTED_API_PATHS.some(
                (protectedPath) =>
                    pathname === protectedPath ||
                    pathname.startsWith(`${protectedPath}/`)
            )) ||
        (pathname === "/api/content" && request.method !== "GET");

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