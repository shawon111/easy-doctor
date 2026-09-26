import Appointment from "@/models/appointment.model";
import Session from "@/models/session.model";
import User from "@/models/user.model";


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

        let session = await Session.findOne({
            userId,
            chamberId: chamber?._id,
            date: dateKey,
        });

        // Session doesn't exist yet
        if (!session) {
            try {
                session = await Session.create({
                    userId,
                    chamberId: chamber?._id,
                    date: dateKey,
                    nextSerial: 1,
                    status: "open",
                });
            } catch (error) {
                // Another request may have created the session
                // at exactly the same time.
                if (error.code === 11000) {
                    session = await Session.findOne({
                        userId,
                        chamberId: chamber?._id,
                        date: dateKey,
                    });
                } else {
                    throw error;
                }
            }
        }

        if (!session) {
            throw new Error("Failed to create booking session");
        }
        if (session.status !== "open") {
            throw new Error("Booking is closed for this date");
        }
        const updatedSession = await Session.findOneAndUpdate(
            {
                _id: session._id,
                status: "open",
            },
            {
                $inc: {
                    nextSerial: 1,
                },
            },
            {
                new: true,
            }
        );

        if (!updatedSession) {
            throw new Error("Failed to generate serial");
        }

        const serial = updatedSession.nextSerial - 1;

        const appointment = await Appointment.create({
            userId,

            sessionId: updatedSession._id,

            chamber: {
                name: chamber.chamberName,
                address: chamber.address,
            },

            chamberId: chamber?._id,

            date: new Date(date),

            serial,

            patient,
        });

        return appointment;
    } catch (error) {
        console.log(error)
        throw new Error(
            error.message || "Failed to create appointment"
        );
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