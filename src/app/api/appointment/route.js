import { connectDB } from "@/config/database";
import { logger } from "@/lib/logger";
import { withUser } from "@/lib/withUser";
import {
    createAppointment,
    getAppointments,
    getAppointmentDashboardData,
} from "@/services/appointment.service";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    await connectDB();

    const appointmentData = await request.json();

    const {
        userId,
        patient,
        chamber,
        date,
    } = appointmentData;

    try {
        const appointment = await createAppointment({
            userId,
            patient,
            chamber,
            date,
        });

        return NextResponse.json(
            {
                success: true,
                data: appointment,
                message: "Appointment created successfully",
            },
            {
                status: 201,
            }
        );
    } catch (error) {
        logger.error(error.message);

        return NextResponse.json(
            {
                success: false,
                message: error.message || "Failed to create appointment",
            },
            {
                status: 500,
            }
        );
    }
};

export const GET = withUser(
    async (request, context, currentUser) => {
        await connectDB();

        const searchParams = request.nextUrl.searchParams;
        const view = searchParams.get("view");
        const page = Number(searchParams.get("page") || 1);
        const limit = Number(searchParams.get("limit") || 10);

        if (
            !Number.isInteger(page) ||
            page < 1 ||
            !Number.isInteger(limit) ||
            limit < 1 ||
            limit > 100
        ) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Page and limit must be positive integers; limit cannot exceed 100",
                },
                { status: 400 }
            );
        }

        try {
            const data =
                view === "dashboard"
                    ? await getAppointmentDashboardData(currentUser._id, limit)
                    : await getAppointments(currentUser._id, page, limit);

            return NextResponse.json(
                {
                    success: true,
                    data,
                },
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
                    message: "Failed to get appointments",
                },
                {
                    status: 500,
                }
            );
        }
    }
);