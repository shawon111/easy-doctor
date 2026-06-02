import { NextResponse } from "next/server";
import { verifyAccessToken } from "@/lib/jwt";
import { redirectToLogin, tryRefreshTokens } from "@/lib/auth-core";

export function proxy(request) {
    const isDashboard =
        request.nextUrl.pathname.startsWith("/dashboard");

    if (!isDashboard) {
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
    matcher: ["/dashboard/:path*"],
};