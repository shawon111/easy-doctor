import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        chamberId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },

        date: {
            type: String,
            required: true,
        },

        nextSerial: {
            type: Number,
            default: 1,
        },

        status: {
            type: String,
            enum: ["open", "closed", "cancelled"],
            default: "open",
        },
    },
    {
        timestamps: true,
    }
);

// One session per doctor + chamber + date
sessionSchema.index(
    {
        userId: 1,
        chamberId: 1,
        date: 1,
    },
    {
        unique: true,
    }
);

const Session =
    mongoose.models.Session ||
    mongoose.model("Session", sessionSchema);

export default Session;