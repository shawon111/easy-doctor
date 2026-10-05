import { logger } from "@/lib/logger";
import { withUser } from "@/lib/withUser";
import { APPOINTMENT_STATUSES, updateAppointmentStatus } from "@/services/appointment.service";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const PATCH = withUser(async (request, { params }, currentUser) => {
    const { appointmentId } = await params;
    if (!mongoose.Types.ObjectId.isValid(appointmentId)) {
        return NextResponse.json(
            { success: false, message: "Invalid appointment" },
            { status: 400 }
        );
    }

    let payload;
    try {
        payload = await request.json();
    } catch {
        return NextResponse.json(
            { success: false, message: "Request body must be valid JSON" },
            { status: 400 }
        );
    }

    if (!APPOINTMENT_STATUSES.includes(payload?.status)) {
        return NextResponse.json(
            { success: false, message: "Select a valid appointment status" },
            { status: 400 }
        );
    }

    try {
        const appointment = await updateAppointmentStatus(
            currentUser._id,
            appointmentId,
            payload.status
        );
        if (!appointment) {
            return NextResponse.json(
                { success: false, message: "Appointment not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { success: true, data: appointment, message: "Appointment status updated" },
            {
                status: 200,
                headers: { "Cache-Control": "private, no-store, max-age=0" },
            }
        );
    } catch (error) {
        logger.error(error.message);
        return NextResponse.json(
            { success: false, message: "Failed to update appointment status" },
            { status: 500 }
        );
    }
});
