import { requireUser } from "@/lib/requireUser";
import { NextResponse } from "next/server";

export const requireAdmin = async () => {
    const user = await requireUser();
    if (!user) return null;

    // Check if user is marked as admin or matches ADMIN_EMAIL
    const adminEmail = process.env.ADMIN_EMAIL?.toLowerCase();
    const isAdmin = user.role === "admin" || (adminEmail && user.email?.toLowerCase() === adminEmail);

    if (!isAdmin) {
        return null;
    }

    return user;
};

export const withAdmin = (handler) => {
    return async (request, context) => {
        try {
            const admin = await requireAdmin();
            if (!admin) {
                return NextResponse.json(
                    { success: false, message: "Forbidden: Admin access required" },
                    { status: 403 }
                );
            }
            return handler(request, context, admin);
        } catch (error) {
            return NextResponse.json(
                { success: false, message: error.message || "Internal server error" },
                { status: 500 }
            );
        }
    };
};
