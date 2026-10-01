import { withUser } from "@/lib/withUser";
import { logError } from "@/lib/logger";
import {
    deleteAccount,
    getSettings,
    SettingsError,
    updateAccountSettings,
    updateNotificationPreferences,
    updateProfileSettings,
} from "@/services/settings.service";
import { NextResponse } from "next/server";

function errorResponse(error, fallbackMessage) {
    const status = error instanceof SettingsError
        ? error.status
        : error?.code === 11000
          ? 409
          : 500;
    const message = error?.code === 11000
        ? "That email address is already in use."
        : error instanceof SettingsError
          ? error.message
          : fallbackMessage;

    if (!(error instanceof SettingsError) && error?.code !== 11000) {
        logError(fallbackMessage, error);
    }

    return NextResponse.json(
        { success: false, message },
        { status }
    );
}

export const GET = withUser(async (request, context, currentUser) => {
    try {
        const settings = await getSettings(currentUser._id);
        return NextResponse.json({ success: true, data: settings });
    } catch (error) {
        return errorResponse(error, "Failed to load account settings.");
    }
});

export const PATCH = withUser(async (request, context, currentUser) => {
    try {
        const payload = await request.json();
        const data = payload.notificationPreferences
            ? await updateNotificationPreferences(
                currentUser._id,
                payload.notificationPreferences
            )
            : payload.profile
              ? await updateProfileSettings(currentUser._id, payload.profile)
            : await updateAccountSettings(currentUser._id, payload);

        return NextResponse.json({ success: true, data });
    } catch (error) {
        return errorResponse(error, "Failed to save account settings.");
    }
});

export const DELETE = withUser(async (request, context, currentUser) => {
    try {
        const { currentPassword, confirmation } = await request.json();
        await deleteAccount(currentUser._id, currentPassword, confirmation);

        const response = NextResponse.json({
            success: true,
            message: "Account deleted.",
        });
        response.cookies.delete("accessToken");
        response.cookies.delete("refreshToken");
        return response;
    } catch (error) {
        return errorResponse(error, "Failed to delete account.");
    }
});
