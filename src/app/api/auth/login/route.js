import { connectDB } from "@/config/database";
import { signAccessToken, signRefreshToken } from "@/lib/jwt";
import { setAccessCookie } from "@/lib/setAccessCookie";
import { setRefreshCookie } from "@/lib/setRefreshCookie";
import { loginUser } from "@/services/user.service";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    try {
        await connectDB();
        const { email, password } = await request.json();
        const user = await loginUser(email, password);

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
                message: "User logged in successfully",
                data: {
                    id: user._id,
                    email: user.email,
                }
            },
            {
                status: 200
            }
        );

        setAccessCookie(response, newAccessToken);

        setRefreshCookie(response, newRefreshToken);

        return response;
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message: error.message
            },
            { status: 400 }
        );
    }
}