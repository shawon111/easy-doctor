import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    chamber: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        name: {
            type: String,
            required: true
        },
    },
    date: {
        type: Date,
        required: true
    },
    serial: {
        type: Number,
        required: true
    },
    patient: {
        name: {
            type: String,
            required: true
        },
        phone:{
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        gender: {
            type: String,
            enum: ["male", "female", "other"]
        },
        notes: {
            type: String
        }
    }
},
    { timestamps: true }
);

appointmentSchema.index({ userId: 1, createdAt: -1 });

const Appointment = mongoose.models.Appointment || mongoose.model("Appointment", appointmentSchema);

export default Appointment;