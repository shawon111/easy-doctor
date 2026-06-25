import { NextResponse } from "next/server";
import { verifyRefreshToken, signAccessToken, signRefreshToken } from "./jwt";
import { setAccessCookie } from "./setAccessCookie";
import { setRefreshCookie } from "./setRefreshCookie";

// Helper function to redirect to login and clear tokens
export function redirectToLogin(request) {
    const res = NextResponse.redirect(
        new URL("/login", request.url)
    );

    res.cookies.delete("accessToken");
    res.cookies.delete("refreshToken");

    return res;
}

// Try to refresh tokens using the provided refresh token. If successful, set new tokens in cookies and return the response. If not, redirect to login.
export function tryRefreshTokens(request, refreshToken) {
    if (!refreshToken) {
        return redirectToLogin(request);
    }

    try {
        const payload = verifyRefreshToken(refreshToken);

        const userId = payload.sub;

        const newAccessToken = signAccessToken({
            _id: userId,
        });

        const newRefreshToken = signRefreshToken({
            _id: userId,
        });

        const res = NextResponse.next();

        setAccessCookie(res, newAccessToken);

        setRefreshCookie(res, newRefreshToken);

        return res;
    } catch {
        return redirectToLogin(request);
    }
}