import Appointment from "@/models/appointment.model"

// helper fn
export const getDayBoundaries = (date) => {
    const start = new Date(`${date}T00:00:00+06:00`);

    const end = new Date(start);
    end.setUTCDate(end.getUTCDate() + 1);

    return { start, end };
};

// create appointment
export const createAppointment = async (data) => {
    try {
        const appointment = await Appointment.create(data)
        return appointment;
    } catch (error) {
        throw new Error("failed to create appointment")
    }
}

// get appointments
export const getAppointments = async (userId, page = 1, limit = 10) => {
    const skipAmount = (page - 1) * limit
    try {
        const appointments = await Appointment.find({
            userId
        }).sort({ createdAt: -1 }).skip(skipAmount).limit(limit).lean();
        return appointments;
    } catch (error) {
        throw new Error("failed to get appointments")
    }
}

// get appointment by day
export const getAppointmentByDate = async (userId, date) => {
    const boundaries = getDayBoundaries(date);
    const { start, end } = boundaries;
    try {
        const appointments = await Appointment.find({
            userId,
            date: {
                $gte: start,
                $lte: end
            }
        }).lean();
        return appointments;
    } catch (error) {
        throw new Error("error getting appointments")
    }
}