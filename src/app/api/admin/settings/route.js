import { withAdmin } from "@/lib/requireAdmin";
import { getSystemSettings, updateSystemSettings } from "@/services/admin.service";
import { NextResponse } from "next/server";

export const GET = withAdmin(async () => {
    try {
        const settings = await getSystemSettings();
        return NextResponse.json({ success: true, data: settings });
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
});

export const POST = withAdmin(async (request) => {
    try {
        const body = await request.json();
        const updated = await updateSystemSettings(body);
        return NextResponse.json({ success: true, message: "Settings saved successfully", data: updated });
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
});
