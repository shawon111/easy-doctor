import { logger } from "@/lib/logger";
import { PLANS } from "@/lib/payment/plans";
import { withUser } from "@/lib/withUser";
import { createPayment } from "@/services/uddoktapay.service";
import { NextResponse } from "next/server";

export const POST = withUser(async (request, context, currentUser) => {
    const orderData = await request.json();
    const { plan } = orderData;
    const plans = PLANS;
    const selectedPlan = plans[plan];

    // create a unique order ID for the payment
    const paymentId = `DOCXIO_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
    if (!selectedPlan) {
        return NextResponse.json({ error: "Invalid plan selected" }, { status: 400 });
    }

    // payment data
    const paymentData = {
        userId: currentUser._id,
        plan: selectedPlan.planId,
        amount: selectedPlan.amount,
        currency: "BDT",
        paymentId: paymentId,
        paymentMethod: "bkash",
        name: currentUser.name,
        email: currentUser.email,
    }
    try {

        const createAPayment = await createPayment(paymentData);

        return NextResponse.json({
            success: true,
            data: createAPayment,
            message: "Plan details retrieved successfully",
        });
    } catch (error) {
        logger.error("Error creating payment:", error);
        return NextResponse.json(
            { success: false, error: error.message || "Failed to create payment" },
            { status: error.statusCode || 500 }
        );
    }
})