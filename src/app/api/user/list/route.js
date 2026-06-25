import { logger } from "@/lib/logger"
import { getDoctorsList } from "@/services/user.service";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const users = await getDoctorsList();
        return NextResponse.json({
            success: true,
            message: "Users fetched successfully",
            data: users
        }, {
            status: 200,
        });
    } catch (error) {
        logger.error(error.message)
        return NextResponse.json({
            success: false,
            message: "Failed to fetch user"
        }, {
            status: 500,
        });
    }
}