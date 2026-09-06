import { withUser } from "@/lib/withUser";
import { updateSeo } from "@/services/seo.service";
import { NextResponse } from "next/server";

export const PUT = withUser(async (request, ContextMenu, curentuser) => {
    const userId = curentuser._id.toString();
    const seoContent = await request.json()
    try {
        const seoUpdate = await updateSeo(userId, seoContent);

        return NextResponse.json({
            success: true,
            data: seoUpdate
        }, { status: 200 })
    } catch (error) {
        return NextResponse.json(
            { success: false, message: "Failed to update Seo Content" },
            { status: 500 }
        );
    }
})