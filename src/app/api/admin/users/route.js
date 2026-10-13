import { withAdmin } from "@/lib/requireAdmin";
import { getAdminUsers } from "@/services/admin.service";
import User from "@/models/user.model";
import { connectDB } from "@/config/database";
import { NextResponse } from "next/server";

export const GET = withAdmin(async (request) => {
    try {
        const { searchParams } = new URL(request.url);
        const page = parseInt(searchParams.get("page") || "1");
        const limit = parseInt(searchParams.get("limit") || "20");
        const search = searchParams.get("search") || "";
        const level = searchParams.get("level") || "";
        const role = searchParams.get("role") || "";

        const data = await getAdminUsers({ page, limit, search, level, role });
        return NextResponse.json({ success: true, data });
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
});

export const PATCH = withAdmin(async (request) => {
    try {
        await connectDB();
        const { userId, role, userLevel, expiresAtDays } = await request.json();

        if (!userId) {
            return NextResponse.json({ success: false, message: "User ID is required" }, { status: 400 });
        }

        const updates = {};
        if (role) {
            if (role === "admin") {
                // Single-admin rule: check if another admin already exists
                const existingAdmin = await User.findOne({ role: "admin", _id: { $ne: userId } });
                if (existingAdmin) {
                    return NextResponse.json(
                        {
                            success: false,
                            message: "Only one admin account is allowed. Another admin already exists.",
                        },
                        { status: 400 }
                    );
                }
            }
            updates.role = role;
        }
        if (userLevel) updates.userLevel = userLevel;
        if (expiresAtDays !== undefined) {
            const exp = new Date();
            exp.setDate(exp.getDate() + parseInt(expiresAtDays));
            updates.expiresAt = exp;
        }

        const updatedUser = await User.findByIdAndUpdate(userId, { $set: updates }, { new: true }).select(
            "name email userLevel role expiresAt"
        );

        return NextResponse.json({ success: true, message: "User updated successfully", data: updatedUser });
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
});
