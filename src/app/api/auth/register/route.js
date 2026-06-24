import { connectDB } from "@/config/database";
import { signAccessToken, signRefreshToken } from "@/lib/jwt";
import { createUser } from "@/services/user.service";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    try {
        await connectDB();
        const userData = await request.json();
        // save user
        const user = await createUser(userData);
        // sign tokens and set cookies
        const newAccessToken = signAccessToken({
            _id: user._id,
        });
        const newRefreshToken = signRefreshToken({
            _id: user._id,
        });

        const response = NextResponse.json(
            {
                success: true,
                message: "User registered successfully",
                data: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                },
            },
            {
                status: 201,
            }
        );

        response.cookies.set("accessToken", newAccessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 60 * 30,
        });

        response.cookies.set("refreshToken", newRefreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 60 * 60 * 24 * 7,
        });

        return response;
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {
                success: false,
                message: "Registration failed",
            },
            {
                status: 500,
            }
        );
    }
}