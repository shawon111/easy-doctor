import { withAdmin } from "@/lib/requireAdmin";
import { getAdminStats } from "@/services/admin.service";
import { NextResponse } from "next/server";

export const GET = withAdmin(async () => {
    try {
        const stats = await getAdminStats();
        return NextResponse.json({ success: true, data: stats });
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
});
