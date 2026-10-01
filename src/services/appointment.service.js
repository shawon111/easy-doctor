import Appointment from "@/models/appointment.model";
import Session from "@/models/session.model";
import User from "@/models/user.model";
import { connectDB } from "@/config/database";
import mongoose from "mongoose";


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

const getDhakaMonthRange = (date = new Date()) => {
    const parts = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Dhaka",
        year: "numeric",
        month: "numeric",
    }).formatToParts(date);
    const year = Number(parts.find((part) => part.type === "year")?.value);
    const month = Number(parts.find((part) => part.type === "month")?.value);
    const dhakaOffset = 6 * 60 * 60 * 1000;

    return {
        start: new Date(Date.UTC(year, month - 1, 1) - dhakaOffset),
        end: new Date(Date.UTC(year, month, 1) - dhakaOffset),
    };
};

export const getAppointmentDashboardData = async (userId, recentLimit = 8) => {
    await connectDB();
    const { start, end } = getDhakaMonthRange();

    const [totalAppointments, thisMonthAppointments, recentAppointments] =
        await Promise.all([
            Appointment.countDocuments({ userId }),
            Appointment.countDocuments({
                userId,
                date: { $gte: start, $lt: end },
            }),
            Appointment.find({ userId })
                .sort({ createdAt: -1 })
                .limit(recentLimit)
                .lean(),
        ]);

    return {
        totalAppointments,
        thisMonthAppointments,
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