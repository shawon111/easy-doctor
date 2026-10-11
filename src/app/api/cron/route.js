import { connectDB } from "@/config/database";
import { subscriptionEndedEmail, subscriptionEndingSoonEmail, trialEndedEmail, trialEndingSoonEmail } from "@/lib/emailTemplates";
import { logger } from "@/lib/logger";
import User from "@/models/user.model";
import { sendEmail } from "@/services/email.service";

export const POST = async (request) => {
    // if (
    //     !process.env.CRON_SECRET ||
    //     request.headers.get("authorization") !==
    //     `Bearer ${process.env.CRON_SECRET}`
    // ) {
    //     return Response.json(
    //         { success: false, message: "Unauthorized" },
    //         { status: 401 }
    //     );
    // }
    try {
        await connectDB()
        // get users whose subscription will expire in 3 days
        const start = new Date();
        start.setDate(start.getDate() + 3);
        start.setHours(0, 0, 0, 0);

        const end = new Date(start);
        end.setDate(end.getDate() + 1);

        const expireInThreeDaysUsers = await User.find({
            expiresAt: {
                $gte: start,
                $lt: end,
            },
        }).select({
            email: 1,
            name: 1,
            userLevel: 1
        }).lean();

        const expireInThreeDaysTrialUsers = expireInThreeDaysUsers.filter(user => user.userLevel === "free");

        const expireInThreeDaysSubscriptionUsers = expireInThreeDaysUsers.filter(user => user.userLevel === "pro");


        // expire in 15 days users
        const start15 = new Date();
        start15.setDate(start15.getDate() + 15);
        start15.setHours(0, 0, 0, 0);

        const end15 = new Date(start15);
        end15.setDate(end15.getDate() + 1);
        const expireInFifteenDaysUsers = await User.find({
            expiresAt: {
                $gte: start15,
                $lt: end15,
            },
        }).select({
            email: 1,
            name: 1,
        }).lean();

        // get expired users
        const now = new Date();
        const expiredUsers = await User.find({
            expiresAt: {
                $lte: now,
            },
            $or: [
                { subscriptionEndedEmailSentAt: null },
                { trialEndedEmailSentAt: null }
            ]
        }).select({
            email: 1,
            name: 1,
            userLevel: 1,
        }).lean();

        const expiredTrialUsers = expiredUsers.filter(user => user.userLevel === "free");
        const expiredSubscriptionUsers = expiredUsers.filter(user => user.userLevel === "pro");

        // send email to expired trial users
        for (const user of expiredTrialUsers) {
            await sendEmail(
                user.email,
                "Your Docxio trial has ended",
                trialEndedEmail(user.name)
            );
        }

        // send email to expired subscription users
        for (const user of expiredSubscriptionUsers) {
            await sendEmail(
                user.email,
                "Your Docxio subscription has ended",
                subscriptionEndedEmail(user.name)
            );
        }

        // send email to users whose trial will expire in 3 days
        for (const user of expireInThreeDaysTrialUsers) {
            await sendEmail(
                user.email,
                "Your Docxio trial will end in 3 days",
                trialEndingSoonEmail(user.name)
            );
        }

        // send email to users whose subscription will expire in 3 days
        for (const user of expireInThreeDaysSubscriptionUsers) {
            await sendEmail(
                user.email,
                "Your Docxio subscription will expire in 3 days",
                subscriptionEndingSoonEmail(user.name, 3)
            );
        }

        // send email to users whose subscription will expire in 15 days
        for (const user of expireInFifteenDaysUsers) {
            await sendEmail(
                user.email,
                "Your Docxio subscription will expire in 15 days",
                subscriptionEndingSoonEmail(user.name, 15)
            );
        }

        // test email sending
        await sendEmail(
            "shawonahmmed76@gmail.com",
            "Test Email",
            trialEndingSoonEmail("Shawon")
        );

        return Response.json(
            {
                success: true,
                message: "Cron job executed successfully"
            },
            { status: 200 }
        );
    } catch (error) {
        logger.error(error);
        return Response.json(
            { success: false, message: "Internal Server Error" },
            { status: 500 }
        );
    }
}