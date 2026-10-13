import { withAdmin } from "@/lib/requireAdmin";
import { getAdminPayments } from "@/services/admin.service";
import Payment from "@/models/payment.model";
import User from "@/models/user.model";
import { connectDB } from "@/config/database";
import { NextResponse } from "next/server";

export const GET = withAdmin(async (request) => {
    try {
        const { searchParams } = new URL(request.url);
        const page = parseInt(searchParams.get("page") || "1");
        const limit = parseInt(searchParams.get("limit") || "20");
        const search = searchParams.get("search") || "";
        const status = searchParams.get("status") || "";

        const data = await getAdminPayments({ page, limit, search, status });
        return NextResponse.json({ success: true, data });
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
});

// Admin can verify/complete a payment manually if gateway failed
export const PATCH = withAdmin(async (request) => {
    try {
        await connectDB();
        const { paymentId, status } = await request.json();

        if (!paymentId || !status) {
            return NextResponse.json({ success: false, message: "paymentId and status required" }, { status: 400 });
        }

        const payment = await Payment.findById(paymentId);
        if (!payment) {
            return NextResponse.json({ success: false, message: "Payment not found" }, { status: 404 });
        }

        payment.status = status;
        if (status === "completed") {
            payment.verified = true;
            payment.verifiedAt = new Date();
            payment.paidAt = payment.paidAt || new Date();

            // Grant pro subscription to user
            const daysMap = { monthly: 30, sixMonth: 180, yearly: 365 };
            const daysToAdd = daysMap[payment.plan] || 30;
            const newExpiry = new Date();
            newExpiry.setDate(newExpiry.getDate() + daysToAdd);

            await User.findByIdAndUpdate(payment.userId, {
                $set: {
                    userLevel: "pro",
                    subscription: payment.plan,
                    expiresAt: newExpiry,
                },
            });
        }
        await payment.save();

        return NextResponse.json({ success: true, message: `Payment updated to ${status}`, data: payment });
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
});
