import { connectDB } from "@/config/database";
import { logger } from "@/lib/logger";
import { withUser } from "@/lib/withUser";
import { createOrUpdateContent } from "@/services/content.service";
import { getWebsiteByUserId } from "@/services/website.service";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export const PATCH = withUser(async (request, { params }, currentUser) => {
    try {
        await connectDB();
        const contentData = await request.json();
        const { templateType, content } = contentData;

        // save or update content
        const result = await createOrUpdateContent(currentUser, templateType, content);
        const website = await getWebsiteByUserId(currentUser._id);
        if (website?.subdomain) {
            const pages = ["", "/about", "/services", "/appointment"];
            pages.forEach((page) => revalidatePath(`/doctor/${website.subdomain}${page}`));
        }
        return NextResponse.json(
            {
                success: true,
                message: "Content is successfully saved/updated",
                data: result
            },
            {
                status: 200
            }
        )
    } catch (error) {
        logger.error(error.message);
        return NextResponse.json({
            success: false,
            message: "Failed to add content"
        }, {
            status: 500,
        });
    }
})