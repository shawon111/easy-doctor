
import { connectDB } from "@/config/database";
import { checkPermission } from "@/lib/checkPermission";
import { logger } from "@/lib/logger";
import { withUser } from "@/lib/withUser";
import { getUserById } from "@/services/user.service";
import { NextResponse } from "next/server";

export const GET = withUser(async (response, { params }, currentUser) => {
    try {
        await connectDB();
        const { id } = await params;
        const permissionError = checkPermission(id, currentUser);
        if (permissionError) return permissionError;
        const user = await getUserById(id);
        return NextResponse.json({
            success: true,
            message: "User fetched successfully",
            data: user
        }, {
            status: 200,
        });
    } catch (error) {
        logger.error(error.message);
        return NextResponse.json({
            success: false,
            message: "Failed to fetch user"
        }, {
            status: 500,
        });
    }
})