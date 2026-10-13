import mongoose from "mongoose";

const systemSettingsSchema = new mongoose.Schema(
    {
        key: {
            type: String,
            required: true,
            unique: true,
            default: "global",
        },
        siteName: {
            type: String,
            default: "Docxio",
        },
        supportEmail: {
            type: String,
            default: "support@docxio.com",
        },
        noticeBanner: {
            enabled: { type: Boolean, default: false },
            message: { type: String, default: "" },
            type: { type: String, enum: ["info", "warning", "alert"], default: "info" },
        },
        maintenanceMode: {
            type: Boolean,
            default: false,
        },
        allowNewRegistrations: {
            type: Boolean,
            default: true,
        },
        trialDays: {
            type: Number,
            default: 15,
        },
        pricingPlans: {
            monthly: {
                name: { type: String, default: "One Month" },
                amount: { type: Number, default: 500 },
                enabled: { type: Boolean, default: true },
            },
            sixMonth: {
                name: { type: String, default: "6 Months" },
                amount: { type: Number, default: 2800 },
                enabled: { type: Boolean, default: true },
            },
            yearly: {
                name: { type: String, default: "Yearly" },
                amount: { type: Number, default: 5000 },
                enabled: { type: Boolean, default: true },
            },
        },
        aiSettings: {
            model: { type: String, default: "gemini-3.1-flash-lite" },
        },
    },
    { timestamps: true }
);

const SystemSettings =
    mongoose.models.SystemSettings ||
    mongoose.model("SystemSettings", systemSettingsSchema);

export default SystemSettings;
