import { NextResponse } from "next/server";
import { verifyRefreshToken, signAccessToken, signRefreshToken } from "./jwt";

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

        res.cookies.set("accessToken", newAccessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 60 * 30,
        });

        res.cookies.set("refreshToken", newRefreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 60 * 60 * 24 * 7,
        });

        return res;
    } catch {
        return redirectToLogin(request);
    }
}