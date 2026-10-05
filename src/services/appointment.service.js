import Appointment from "@/models/appointment.model";
import Session from "@/models/session.model";
import User from "@/models/user.model";
import { connectDB } from "@/config/database";
import mongoose from "mongoose";

export const APPOINTMENT_STATUSES = [
    "scheduled",
    "arrived",
    "completed",
    "cancelled",
    "no_show",
];


export const getDayBoundaries = (date) => {
    const start = new Date(`${date}T00:00:00+06:00`);

    const end = new Date(start);
    end.setUTCDate(end.getUTCDate() + 1);

    return {
        start,
        end,
    };
};

export const getDateKey = (date) => {
    if (typeof date === "string") {
        return date.split("T")[0];
    }

    const dateObject = new Date(date);

    return new Intl.DateTimeFormat("en-CA", {
        timeZone: "Asia/Dhaka",
    }).format(dateObject);
};

// Create appointment
export const createAppointment = async (data) => {
    const {
        userId,
        patient,
        chamber,
        date,
        source = "online",
    } = data;

    await connectDB();

    let bookingSession;
    try {
        const user = await User.findOne({
            _id: userId,
            "clinicAddress._id": chamber?._id,
        })
            .select("clinicAddress")
            .lean();

        if (!user) {
            throw new Error("Invalid doctor or chamber");
        }

        const chamberData = user.clinicAddress.find(
            (item) => item._id.toString() === chamber?._id.toString()
        );

        if (!chamberData) {
            throw new Error("Chamber not found");
        }

        const dateKey = getDateKey(date);
        bookingSession = await mongoose.startSession();

        for (let attempt = 0; attempt < 2; attempt += 1) {
            try {
                return await bookingSession.withTransaction(async () => {
                    let booking = await Session.findOne({
                        userId,
                        chamberId: chamber?._id,
                        date: dateKey,
                    }).session(bookingSession);

                    if (!booking) {
                        [booking] = await Session.create(
                            [{
                                userId,
                                chamberId: chamber?._id,
                                date: dateKey,
                                nextSerial: 1,
                                status: "open",
                            }],
                            { session: bookingSession }
                        );
                    }

                    if (booking.status !== "open") {
                        throw new Error("Booking is closed for this date");
                    }

                    const updatedSession = await Session.findOneAndUpdate(
                        {
                            _id: booking._id,
                            status: "open",
                        },
                        { $inc: { nextSerial: 1 } },
                        {
                            new: true,
                            session: bookingSession,
                        }
                    );

                    if (!updatedSession) {
                        throw new Error("Failed to generate serial");
                    }

                    const appointment = new Appointment({
                        userId,
                        sessionId: updatedSession._id,
                        chamber: {
                            name: chamberData.chamberName,
                            address: chamberData.address,
                        },
                        chamberId: chamber?._id,
                        date: new Date(date),
                        serial: updatedSession.nextSerial - 1,
                        patient,
                        source,
                    });

                    await appointment.save({ session: bookingSession });
                    return appointment;
                });
            } catch (error) {
                if (error.code === 11000 && attempt === 0) {
                    continue;
                }
                throw error;
            }
        }

        throw new Error("Failed to create appointment after retrying booking session");
    } catch (error) {
        throw new Error(
            error.message || "Failed to create appointment"
        );
    } finally {
        if (bookingSession) {
            await bookingSession.endSession();
        }
    }
};

export const createManualAppointment = async (userId, data) => {
    const { chamberId, date, patient } = data;
    await connectDB();

    if (!mongoose.Types.ObjectId.isValid(chamberId)) {
        throw new Error("Select a valid chamber");
    }

    const parsedDate = new Date(date);
    if (!date || Number.isNaN(parsedDate.getTime())) {
        throw new Error("Enter a valid appointment date and time");
    }

    const user = await User.findById(userId)
        .select("clinicAddress")
        .lean();

    const chamber = user?.clinicAddress?.find(
        (item) => item._id.toString() === chamberId
    );

    if (!chamber) {
        throw new Error("The selected chamber does not belong to your account");
    }

    return createAppointment({
        userId,
        patient,
        chamber: { _id: chamber._id },
        date: parsedDate,
        source: "manual",
    });
};

// Get appointments
export const getAppointments = async (
    userId,
    page = 1,
    limit = 10
) => {
    const skipAmount = (page - 1) * limit;

    try {
        const appointments = await Appointment.find({
            userId,
        })
            .sort({ createdAt: -1 })
            .skip(skipAmount)
            .limit(limit)
            .lean();

        return appointments;
    } catch (error) {
        throw new Error("Failed to get appointments");
    }
};

export const getManageAppointments = async (
    userId,
    page = 1,
    limit = 20,
    status
) => {
    await connectDB();
    const filter = { userId };
    if (status) {
        filter.status =
            status === "scheduled"
                ? { $in: ["scheduled", null] }
                : status;
    }

    const [appointments, total] = await Promise.all([
        Appointment.find(filter)
            .sort({ date: -1, createdAt: -1 })
            .skip((page - 1) * limit)
            .limit(limit)
            .lean(),
        Appointment.countDocuments(filter),
    ]);

    return { appointments, total, page, limit };
};

export const getAppointmentsForDate = async (userId, date, page = 1, limit = 15) => {
    await connectDB();
    const { start, end } = getDayBoundaries(date);
    const filter = {
        userId,
        date: { $gte: start, $lt: end },
    };

    const [appointments, total] = await Promise.all([
        Appointment.find(filter)
            .sort({ serial: 1, createdAt: 1 })
            .skip((page - 1) * limit)
            .limit(limit)
            .lean(),
        Appointment.countDocuments(filter),
    ]);

    return { appointments, total, page, limit, date };
};

export const updateAppointmentStatus = async (userId, appointmentId, status) => {
    await connectDB();

    if (!APPOINTMENT_STATUSES.includes(status)) {
        throw new Error("Select a valid appointment status");
    }

    return Appointment.findOneAndUpdate(
        { _id: appointmentId, userId },
        { $set: { status } },
        { new: true, runValidators: true }
    ).lean();
};

export const getAppointmentDashboardData = async (userId, recentLimit = 8) => {
    await connectDB();
    const { start: todayStart } = getDayBoundaries(getDateKey(new Date()));
    const activeStatusFilter = {
        status: { $in: ["scheduled", "arrived", null] },
    };

    const [upcomingAppointments, todayAppointments, recentAppointments] =
        await Promise.all([
            Appointment.countDocuments({
                userId,
                date: { $gte: todayStart },
                ...activeStatusFilter,
            }),
            Appointment.countDocuments({
                userId,
                date: {
                    $gte: todayStart,
                    $lt: new Date(todayStart.getTime() + 24 * 60 * 60 * 1000),
                },
                ...activeStatusFilter,
            }),
            Appointment.find({ userId })
                .sort({ createdAt: -1 })
                .limit(recentLimit)
                .lean(),
        ]);

    return {
        upcomingAppointments,
        todayAppointments,
        recentAppointments: recentAppointments.map((appointment) => ({
            ...appointment,
            _id: appointment._id.toString(),
            userId: appointment.userId.toString(),
            sessionId: appointment.sessionId.toString(),
            chamberId: appointment.chamberId.toString(),
        })),
    };
};

// Get appointments by day
export const getAppointmentByDate = async (
    userId,
    date
) => {
    const { start, end } = getDayBoundaries(date);

    try {
        const appointments = await Appointment.find({
            userId,
            date: {
                $gte: start,
                $lt: end,
            },
        })
            .sort({ serial: 1 })
            .lean();

        return appointments;
    } catch (error) {
        throw new Error("Error getting appointments");
    }
};