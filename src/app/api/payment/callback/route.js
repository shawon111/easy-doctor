import { logger } from "@/lib/logger";
import { withUser } from "@/lib/withUser";
import { verifyPayment } from "@/services/uddoktapay.service";
import { NextResponse } from "next/server";

export const GET = withUser(async (request, context, currentUser) => {
    try {
        const params = Object.fromEntries(
            request.nextUrl.searchParams.entries()
        );

        const { invoice_id } = params;
        const verify = await verifyPayment(invoice_id, currentUser);
        return NextResponse.json({
            success: true,
            message: "Callback received",
            data: verify,
        });
    } catch (error) {
        logger.error("Callback error:", error);

        return NextResponse.json(
            { success: false, message: "Callback failed" },
            { status: 500 }
        );
    }
})