import mongoose from "mongoose";

const googleBusinessSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            unique: true,
        },

        refreshToken: {
            type: String,
            required: true,
        },

        googleAccountId: {
            type: String,
            default: null,
        },

        locationId: {
            type: String,
            default: null,
        },

        connectedAt: {
            type: Date,
            default: Date.now,
        },
    },
    { timestamps: true }
);

const GoogleBusiness =
    mongoose.models.GoogleConnection ||
    mongoose.model("GoogleConnection", googleBusinessSchema);

export default GoogleBusiness;