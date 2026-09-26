import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        sessionId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Session",
            required: true,
        },

        chamber: {
            address: {
                type: String,
                required: true,
            },

            name: {
                type: String,
                required: true,
            },
        },

        chamberId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },

        date: {
            type: Date,
            required: true,
        },

        serial: {
            type: Number,
            required: true,
        },

        patient: {
            name: {
                type: String,
                required: true,
            },

            phone: {
                type: String,
                required: true,
            },

            age: {
                type: Number,
                required: true,
            },

            gender: {
                type: String,
                enum: ["male", "female", "other"],
            },

            notes: {
                type: String,
            },
        },
    },
    {
        timestamps: true,
    }
);

appointmentSchema.index({
    userId: 1,
    createdAt: -1,
});

appointmentSchema.index({
    userId: 1,
    chamberId: 1,
});

appointmentSchema.index(
    {
        sessionId: 1,
        serial: 1,
    },
    {
        unique: true,
    }
);

const Appointment =
    mongoose.models.Appointment ||
    mongoose.model("Appointment", appointmentSchema);

export default Appointment;