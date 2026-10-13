import { connectDB } from "@/config/database";
import { signAccessToken, signRefreshToken } from "@/lib/jwt";
import { setAccessCookie } from "@/lib/setAccessCookie";
import { setRefreshCookie } from "@/lib/setRefreshCookie";
import User from "@/models/user.model";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    try {
        await connectDB();
        const { email, password, adminSecret } = await request.json();

        if (!email || !password || !adminSecret) {
            return NextResponse.json(
                { success: false, message: "Email, password, and Admin Secret are all required." },
                { status: 400 }
            );
        }

        // 1. Verify ADMIN_SECRET against env
        const envSecret = process.env.ADMIN_SECRET;
        if (!envSecret || adminSecret.trim() !== envSecret.trim()) {
            return NextResponse.json(
                { success: false, message: "Invalid Admin Secret key." },
                { status: 403 }
            );
        }

        // 2. Find user by email
        const user = await User.findOne({ email: email.toLowerCase() })
            .select({ password: 1, _id: 1, role: 1, email: 1, name: 1 })
            .lean();

        if (!user) {
            return NextResponse.json(
                { success: false, message: "Admin account not found." },
                { status: 404 }
            );
        }

        // 3. Confirm that this account is an admin
        const adminEmail = process.env.ADMIN_EMAIL?.toLowerCase();
        const isAdmin = user.role === "admin" || (adminEmail && user.email?.toLowerCase() === adminEmail);

        if (!isAdmin) {
            return NextResponse.json(
                { success: false, message: "Access denied: Account is not authorized as an admin." },
                { status: 403 }
            );
        }

        // 4. Verify password
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return NextResponse.json(
                { success: false, message: "Invalid credentials." },
                { status: 401 }
            );
        }

        // 5. If this is the designated ADMIN_EMAIL but doesn't have role: "admin", promote it
        if (user.role !== "admin") {
            await User.findByIdAndUpdate(user._id, { $set: { role: "admin" } });
        }

        // 6. Sign auth cookies
        const newAccessToken = signAccessToken({ _id: user._id });
        const newRefreshToken = signRefreshToken({ _id: user._id });

        const response = NextResponse.json(
            {
                success: true,
                message: "Admin authentication successful",
                data: {
                    id: user._id,
                    email: user.email,
                    name: user.name,
                },
            },
            { status: 200 }
        );

        setAccessCookie(response, newAccessToken);
        setRefreshCookie(response, newRefreshToken);

        return response;
    } catch (error) {
        return NextResponse.json(
            { success: false, message: error.message || "Admin login failed" },
            { status: 500 }
        );
    }
};
