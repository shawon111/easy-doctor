import { connectDB } from "@/config/database";
import { logger } from "@/lib/logger";
import { PLANS } from "@/lib/payment/plans";
import Payment from "@/models/payment.model";
import User from "@/models/user.model";
import { withTransaction } from "@/lib/withTransaction";

const uddoktaPayApi = process.env.UDDOKTAPAY_API_URL;
const uddoktaPayApiKey = process.env.UDDOKTAPAY_API_KEY;
const redirectUrl = `http://${process.env.NEXT_PUBLIC_BASE_DOMAIN}/payment/success`;
const cancelUrl = `http://${process.env.NEXT_PUBLIC_BASE_DOMAIN}/payment/cancel`;
const ACTIVE_PAYMENT_STATUSES = ["initiated", "pending", "processing"];

class PaymentAttemptInProgressError extends Error {
    constructor() {
        super("A payment attempt is already in progress. Please continue with it or wait for it to finish.");
        this.statusCode = 409;
    }
}

function getExistingCheckout(payment) {
    if (!payment?.checkoutUrl) {
        throw new PaymentAttemptInProgressError();
    }

    return {
        status: true,
        message: "An active payment checkout already exists",
        payment_url: payment.checkoutUrl,
    };
}

function addMonths(date, months) {
    const result = new Date(date);
    const dayOfMonth = result.getUTCDate();

    result.setUTCDate(1);
    result.setUTCMonth(result.getUTCMonth() + months);
    const lastDayOfMonth = new Date(
        Date.UTC(result.getUTCFullYear(), result.getUTCMonth() + 1, 0)
    ).getUTCDate();
    result.setUTCDate(Math.min(dayOfMonth, lastDayOfMonth));

    return result;
}

export const createPayment = async (data) => {
    await connectDB();
    const { userId, plan, amount, currency, paymentId, paymentMethod, name, email } = data;

    const existingPayment = await Payment.findOne({
        userId,
        status: { $in: ACTIVE_PAYMENT_STATUSES },
    }).sort({ createdAt: -1 });

    if (existingPayment) {
        return getExistingCheckout(existingPayment);
    }

    let payment;
    try {
        payment = await Payment.create({
            userId,
            name,
            email,
            plan,
            amount,
            currency,
            paymentId,
            paymentMethod,
        });
    } catch (error) {
        if (error?.code === 11000) {
            const concurrentPayment = await Payment.findOne({
                userId,
                status: { $in: ACTIVE_PAYMENT_STATUSES },
            }).sort({ createdAt: -1 });

            if (concurrentPayment) {
                return getExistingCheckout(concurrentPayment);
            }
        }
        throw error;
    }

    let result;
    try {
        const response = await fetch(`${uddoktaPayApi}/api/checkout-v2`, {
            method: "POST",
            headers: {
                accept: "application/json",
                "RT-UDDOKTAPAY-API-KEY": uddoktaPayApiKey,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                full_name: name,
                email,
                amount,
                metadata: {
                    userId,
                    plan,
                    paymentId,
                    currency,
                    paymentMethod,
                },
                redirect_url: redirectUrl,
                return_type: "GET",
                cancel_url: cancelUrl,
            })
        });

        result = await response.json();
        if (!response.ok || typeof result?.payment_url !== "string" || !result.payment_url) {
            throw new Error(result?.message || "Payment provider did not return a checkout URL");
        }
    } catch (error) {
        await Payment.updateOne(
            { _id: payment._id, status: "initiated" },
            { $set: { status: "failed" } }
        );
        logger.error("Error creating payment:", error);
        throw new Error(error.message || "Failed to create payment checkout");
    }

    await Payment.updateOne(
        { _id: payment._id, status: "initiated" },
        {
            $set: {
                checkoutUrl: result.payment_url,
                status: "pending",
            },
        }
    );
    return result;
}

export const verifyPayment = async (invoice_id, user) => {
    await connectDB();
    try {
        if (typeof invoice_id !== "string" || !invoice_id.trim()) {
            throw new Error("A valid invoice ID is required");
        }
        if (!user?._id) {
            throw new Error("An authenticated user is required to verify this payment");
        }

        const response = await fetch(`${uddoktaPayApi}/api/verify-payment`, {
            method: "POST",
            headers: {
                accept: "application/json",
                "RT-UDDOKTAPAY-API-KEY": uddoktaPayApiKey,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                invoice_id,
            })
        })

        if (!response.ok) {
            throw new Error(`UddoktaPay verification failed with status ${response.status}`);
        }

        const result = await response.json();
        if (!result || typeof result !== "object") {
            logger.error("No response from UddoktaPay API");
            throw new Error("No response from UddoktaPay API");
        }

        if (result.status !== "COMPLETED") {
            return false;
        }

        const metadata = result.metadata;
        if (!metadata || typeof metadata.paymentId !== "string" || typeof metadata.plan !== "string") {
            throw new Error("Payment verification response is missing valid metadata");
        }

        const purchasedPlan = PLANS[metadata.plan];
        if (!purchasedPlan) {
            throw new Error("Payment verification response contains an invalid plan");
        }

        const chargedAmount = Number(result.charged_amount);
        if (!Number.isFinite(chargedAmount)) {
            throw new Error("Payment verification response contains an invalid charged amount");
        }

        return await withTransaction(async (session) => {
            const payment = await Payment.findOne({ paymentId: metadata.paymentId }).session(session);
            if (!payment) {
                throw new Error("Payment record not found");
            }

            if (
                payment.plan !== metadata.plan ||
                Number(payment.amount) !== chargedAmount ||
                String(payment.userId) !== String(user._id) ||
                (metadata.userId && String(payment.userId) !== String(metadata.userId))
            ) {
                throw new Error("Verified payment details do not match the payment record");
            }

            if (payment.verified) {
                return payment.status === "completed";
            }

            const now = new Date();
            const update = {
                status: "completed",
                verified: true,
                verifiedAt: now,
                paidAt: now,
                gatewayResponse: result,
            };
            if (typeof result.transaction_id === "string" && result.transaction_id) {
                update.transactionId = result.transaction_id;
            }

            const currentExpiry = user.expiresAt ? new Date(user.expiresAt) : null;
            if (currentExpiry && !Number.isFinite(currentExpiry.getTime())) {
                throw new Error("User subscription expiry is invalid");
            }
            const subscriptionStart =
                currentExpiry && currentExpiry > now ? currentExpiry : now;
            const expiresAt = addMonths(subscriptionStart, purchasedPlan.durationMonths);

            const paymentUpdate = await Payment.updateOne(
                { _id: payment._id, verified: false },
                { $set: update },
                { session }
            );

            if (paymentUpdate.matchedCount !== 1) {
                throw new Error("Payment record was already verified or could not be updated");
            }

            const userUpdate = await User.updateOne(
                { _id: user._id },
                {
                    $set: {
                        subscription: metadata.plan,
                        userLevel: "pro",
                        expiresAt,
                    },
                },
                { session }
            );

            if (userUpdate.matchedCount !== 1) {
                throw new Error("User account for the payment was not found");
            }

            return true;
        });
    } catch (error) {
        logger.error("Error verifying payment:", error);
        throw new Error(error.message);
    }
}