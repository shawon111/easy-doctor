import { logger } from "@/lib/logger";
import { Resend } from "resend";

export const sendEmail = async (to, subject, html) => {
    const resend = new Resend(process.env.RESEND_API_KEY);
    try {
        const { data, error } = await resend.emails.send({
            from: "Docxio <noreply@docxio.com>",
            to,
            subject,
            html,
        });

        if (error) {
            logger.error({ error }, "Failed to send email");
            throw new Error(error.message);
        }

        return data;
    } catch (error) {
        logger.error("Error sending email:", error);
        throw error;
    }
}