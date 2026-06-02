import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { connectDB } from "@/config/database";
import { refreshAccessToken } from "@/lib/jwt";

export async function POST() {
    try {
        await connectDB();

        const cookieStore = await cookies();

        const refreshToken = cookieStore.get("refreshToken")?.value;

        if (!refreshToken) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Refresh token missing",
                },
                {
                    status: 401,
                }
            );
        }

        const tokens = await refreshAccessToken(refreshToken);

        cookieStore.set(
            "accessToken",
            tokens.accessToken,
            {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "lax",
                path: "/",
                maxAge: 60 * 30, 
            }
        );

        cookieStore.set(
            "refreshToken",
            tokens.refreshToken,
            {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "lax",
                path: "/",
                maxAge: 60 * 60 * 24 * 7, 
            }
        );

        return NextResponse.json({
            success: true,
        });

    } catch (error) {
        console.error(error);

        const cookieStore = await cookies();

        cookieStore.delete("accessToken");
        cookieStore.delete("refreshToken");

        return NextResponse.json(
            {
                success: false,
                message: "Session expired",
            },
            {
                status: 401,
            }
        );
    }
}