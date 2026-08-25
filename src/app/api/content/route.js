import { connectDB } from "@/config/database";
import { logger } from "@/lib/logger";
import { createOrUpdateContent } from "@/services/content.service";
import { NextResponse } from "next/server";
import { success } from "zod";

export const PATCH = withUser(async (request, { params }, currentUser) => {
    try {
        await connectDB();
        const contentData = await request.json();
        const { templateType, content } = contentData;

        // save or update content
        const result = await createOrUpdateContent(templateType, content);
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