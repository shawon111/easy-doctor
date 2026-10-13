import { connectDB } from "@/config/database";
import User from "@/models/user.model";
import Website from "@/models/website.model";
import Payment from "@/models/payment.model";
import Appointment from "@/models/appointment.model";
import SystemSettings from "@/models/settings.model";

export async function getAdminStats() {
    await connectDB();

    const [
        totalUsers,
        proUsers,
        freeUsers,
        totalWebsites,
        readyWebsites,
        generatingWebsites,
        failedWebsites,
        totalPayments,
        completedPayments,
        totalRevenueResult,
        recentUsers,
        recentWebsites,
        recentPayments,
    ] = await Promise.all([
        User.countDocuments(),
        User.countDocuments({ userLevel: "pro" }),
        User.countDocuments({ userLevel: "free" }),
        Website.countDocuments(),
        Website.countDocuments({ status: "ready" }),
        Website.countDocuments({ status: "generating" }),
        Website.countDocuments({ status: "failed" }),
        Payment.countDocuments(),
        Payment.countDocuments({ status: "completed" }),
        Payment.aggregate([
            { $match: { status: "completed" } },
            { $group: { _id: null, total: { $sum: "$amount" } } },
        ]),
        User.find()
            .sort({ createdAt: -1 })
            .limit(5)
            .select("name email phone specialization userLevel role websiteCreated createdAt")
            .lean(),
        Website.find()
            .sort({ createdAt: -1 })
            .limit(5)
            .populate("userId", "name email")
            .select("subdomain domain templateType status createdAt generationError")
            .lean(),
        Payment.find()
            .sort({ createdAt: -1 })
            .limit(5)
            .populate("userId", "name email")
            .select("amount plan status paymentId transactionId createdAt")
            .lean(),
    ]);

    const totalRevenue = totalRevenueResult[0]?.total || 0;

    return {
        users: {
            total: totalUsers,
            pro: proUsers,
            free: freeUsers,
        },
        websites: {
            total: totalWebsites,
            ready: readyWebsites,
            generating: generatingWebsites,
            failed: failedWebsites,
        },
        payments: {
            total: totalPayments,
            completed: completedPayments,
            revenue: totalRevenue,
        },
        recentUsers,
        recentWebsites,
        recentPayments,
    };
}

export async function getAdminUsers({ page = 1, limit = 20, search = "", level = "", role = "" } = {}) {
    await connectDB();

    const filter = {};
    if (search) {
        filter.$or = [
            { name: { $regex: search, $options: "i" } },
            { email: { $regex: search, $options: "i" } },
            { phone: { $regex: search, $options: "i" } },
            { specialization: { $regex: search, $options: "i" } },
            { subdomain: { $regex: search, $options: "i" } },
        ];
    }
    if (level) {
        filter.userLevel = level;
    }
    if (role) {
        filter.role = role;
    }

    const skip = (page - 1) * limit;

    const [users, total] = await Promise.all([
        User.find(filter)
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit)
            .select("name email phone specialization userLevel role subscription expiresAt websiteCreated subdomain domain createdAt")
            .lean(),
        User.countDocuments(filter),
    ]);

    return {
        users,
        pagination: {
            page,
            limit,
            total,
            totalPages: Math.ceil(total / limit),
        },
    };
}

export async function getAdminWebsites({ page = 1, limit = 20, search = "", status = "", template = "" } = {}) {
    await connectDB();

    const filter = {};
    if (status) {
        filter.status = status;
    }
    if (template) {
        filter.templateType = template;
    }
    if (search) {
        filter.$or = [
            { subdomain: { $regex: search, $options: "i" } },
            { domain: { $regex: search, $options: "i" } },
        ];
    }

    const skip = (page - 1) * limit;

    const [websites, total] = await Promise.all([
        Website.find(filter)
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit)
            .populate("userId", "name email phone specialization expiresAt")
            .lean(),
        Website.countDocuments(filter),
    ]);

    return {
        websites,
        pagination: {
            page,
            limit,
            total,
            totalPages: Math.ceil(total / limit),
        },
    };
}

export async function getAdminPayments({ page = 1, limit = 20, search = "", status = "" } = {}) {
    await connectDB();

    const filter = {};
    if (status) {
        filter.status = status;
    }
    if (search) {
        filter.$or = [
            { paymentId: { $regex: search, $options: "i" } },
            { transactionId: { $regex: search, $options: "i" } },
        ];
    }

    const skip = (page - 1) * limit;

    const [payments, total] = await Promise.all([
        Payment.find(filter)
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit)
            .populate("userId", "name email phone")
            .lean(),
        Payment.countDocuments(filter),
    ]);

    return {
        payments,
        pagination: {
            page,
            limit,
            total,
            totalPages: Math.ceil(total / limit),
        },
    };
}

export async function getSystemSettings() {
    await connectDB();
    let settings = await SystemSettings.findOne({ key: "global" }).lean();
    if (!settings) {
        settings = await SystemSettings.create({ key: "global" });
        settings = settings.toObject();
    }
    return settings;
}

export async function updateSystemSettings(data) {
    await connectDB();
    const updated = await SystemSettings.findOneAndUpdate(
        { key: "global" },
        { $set: data },
        { new: true, upsert: true, runValidators: true }
    ).lean();
    return updated;
}
