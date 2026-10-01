import { withUser } from "@/lib/withUser";
import { logError } from "@/lib/logger";
import {
    changeAccountPassword,
    SettingsError,
} from "@/services/settings.service";
import { NextResponse } from "next/server";

export const POST = withUser(async (request, context, currentUser) => {
    try {
        const { currentPassword, newPassword } = await request.json();
        await changeAccountPassword(
            currentUser._id,
            currentPassword,
            newPassword
        );

        return NextResponse.json({
            success: true,
            message: "Password updated.",
        });
    } catch (error) {
        const status = error instanceof SettingsError ? error.status : 500;
        const message = error instanceof SettingsError
            ? error.message
            : "Failed to update password.";
        if (!(error instanceof SettingsError)) {
            logError(message, error);
        }
        return NextResponse.json(
            { success: false, message },
            { status }
        );
    }
});
