import { connectDB } from "@/config/database";
import { logger } from "@/lib/logger";
import { withUser } from "@/lib/withUser";
import { createAppointment, getAppointments } from "@/services/appointment.service";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    await connectDB();
    const appointmentData = await request.json();
    const { userId, patient, chamber, date, serial } = appointmentData;
    try {
        const appointment = await createAppointment({ userId, patient, chamber, date, serial });
        return NextResponse.json(
            {
                success: true,
                data: appointment,
                message: "Appointment created successfully"
            },
            {
                status: 201
            })
    } catch (error) {
        logger.error(error.message);
        return NextResponse.json({
            success: false,
            message: "Failed to create appointment"
        }, {
            status: 500,
        });
    }
};

export const GET = withUser(async (request, { params }, currentuser) => {
    await connectDB();
    const searchParams = request.nextUrl.searchParams;
    const userId = searchParams.get("userId");
    const page = searchParams.get("page");
    const limit = searchParams.get("limit") ?? 10
    try {
        const appointments = await getAppointments(userId, page, limit);
        return NextResponse.json(
            {
                success: true,
                data: appointments
            },
            {
                status: 200
            }
        )
    } catch (error) {
        logger.error(error.message);
        return NextResponse.json({
            success: false,
            message: "Failed to get appointments"
        }, {
            status: 500,
        });
    }
})

