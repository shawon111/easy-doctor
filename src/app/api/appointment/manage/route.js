import { connectDB } from "@/config/database";
import { logger } from "@/lib/logger";
import { withUser } from "@/lib/withUser";
import { APPOINTMENT_STATUSES, createManualAppointment, getAppointmentsForDate, getManageAppointments } from "@/services/appointment.service";
import { NextResponse } from "next/server";

const isValidPatient = (patient) => {
    if (!patient || typeof patient !== "object") return false;

    const isAgeValue =
        typeof patient.age === "number" ||
        (typeof patient.age === "string" && /^\d+$/.test(patient.age));
    const hasValidAge =
        patient.age === "" ||
        patient.age === undefined ||
        patient.age === null ||
        (isAgeValue && Number.isInteger(Number(patient.age)) && Number(patient.age) >= 0 && Number(patient.age) <= 130);
    const hasValidGender =
        !patient.gender || ["male", "female", "other"].includes(patient.gender);

    return (
        typeof patient.name === "string" &&
        patient.name.trim().length > 0 &&
        patient.name.trim().length <= 120 &&
        typeof patient.phone === "string" &&
        patient.phone.trim().length >= 6 &&
        patient.phone.trim().length <= 32 &&
        hasValidAge &&
        hasValidGender &&
        (patient.notes === undefined || (typeof patient.notes === "string" && patient.notes.length <= 1000))
    );
};

export const GET = withUser(async (request, context, currentUser) => {
    const searchParams = request.nextUrl.searchParams;
    const page = Number(searchParams.get("page") || 1);
    const limit = Number(searchParams.get("limit") || 20);
    const status = searchParams.get("status") || undefined;
    const date = searchParams.get("date") || undefined;

    if (!Number.isInteger(page) || page < 1 || !Number.isInteger(limit) || limit < 1 || limit > 100) {
        return NextResponse.json(
            { success: false, message: "Page and limit must be positive integers; limit cannot exceed 100" },
            { status: 400 }
        );
    }
    if (status && !APPOINTMENT_STATUSES.includes(status)) {
        return NextResponse.json(
            { success: false, message: "Invalid appointment status" },
            { status: 400 }
        );
    }
    if (date && (
        !/^\d{4}-\d{2}-\d{2}$/.test(date) ||
        Number.isNaN(Date.parse(`${date}T00:00:00+06:00`)) ||
        new Date(`${date}T00:00:00Z`).toISOString().slice(0, 10) !== date
    )) {
        return NextResponse.json(
            { success: false, message: "Date must be a valid date in YYYY-MM-DD format" },
            { status: 400 }
        );
    }

    try {
        await connectDB();
        const data = date
            ? await getAppointmentsForDate(currentUser._id, date, page, limit)
            : await getManageAppointments(currentUser._id, page, limit, status);
        return NextResponse.json(
            { success: true, data },
            {
                status: 200,
                headers: { "Cache-Control": "private, no-store, max-age=0" },
            }
        );
    } catch (error) {
        logger.error(error.message);
        return NextResponse.json(
            { success: false, message: "Failed to load appointments" },
            { status: 500 }
        );
    }
});

export const POST = withUser(async (request, context, currentUser) => {
    let payload;
    try {
        payload = await request.json();
    } catch {
        return NextResponse.json(
            { success: false, message: "Request body must be valid JSON" },
            { status: 400 }
        );
    }

    const { chamberId, date, patient } = payload || {};
    if (typeof date !== "string" || Number.isNaN(new Date(date).getTime())) {
        return NextResponse.json(
            { success: false, message: "Enter a valid appointment date and time" },
            { status: 400 }
        );
    }
    if (!isValidPatient(patient)) {
        return NextResponse.json(
            { success: false, message: "Enter a valid patient name, phone, age, and gender" },
            { status: 400 }
        );
    }

    try {
        const appointment = await createManualAppointment(currentUser._id, {
            chamberId,
            date,
            patient: {
                name: patient.name.trim(),
                phone: patient.phone.trim(),
                age: patient.age === "" || patient.age == null ? undefined : Number(patient.age),
                gender: patient.gender || undefined,
                notes: patient.notes?.trim() || undefined,
            },
        });
        return NextResponse.json(
            {
                success: true,
                data: appointment,
                message: "Appointment added successfully",
            },
            { status: 201 }
        );
    } catch (error) {
        if (error.message === "Select a valid chamber" || error.message === "The selected chamber does not belong to your account") {
            return NextResponse.json(
                { success: false, message: error.message },
                { status: 400 }
            );
        }
        logger.error(error.message);
        return NextResponse.json(
            { success: false, message: error.message || "Failed to add appointment" },
            { status: 500 }
        );
    }
});
