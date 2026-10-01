import { connectDB } from "@/config/database";
import { logger } from "@/lib/logger";
import { withUser } from "@/lib/withUser";
import { getAppointmentDashboardData } from "@/services/appointment.service";
import { NextResponse } from "next/server";

export const GET = withUser(async (request, context, currentUser) => {
    const limit = Number(request.nextUrl.searchParams.get("limit") || 8);

    if (!Number.isInteger(limit) || limit < 1 || limit > 20) {
        return NextResponse.json(
            {
                success: false,
                message: "Limit must be an integer between 1 and 20",
            },
            { status: 400 }
        );
    }

    try {
        await connectDB();
        const data = await getAppointmentDashboardData(currentUser._id, limit);

        return NextResponse.json(
            { success: true, data },
            {
                status: 200,
                headers: {
                    "Cache-Control": "private, no-store, max-age=0",
                },
            }
        );
    } catch (error) {
        logger.error(error.message);

        return NextResponse.json(
            {
                success: false,
                message: "Failed to load appointment dashboard data",
            },
            { status: 500 }
        );
    }
});
