import { connectDB } from "@/config/database";
import { logger } from "@/lib/logger";
import { getUserByIdPublic } from "@/services/user.service";
import { NextResponse } from "next/server";

export const GET = async ( response, { params }) => {
    try {
        await connectDB();
        const { id } = await params;
        const user = await getUserByIdPublic(id)
        return NextResponse.json({ 
            success: true,
            message: "User fetched successfully",
            data: user
         }, {
            status: 200,
        });
    } catch (error) {
        logger.error(error.message)
        console.log("id user error", error)
        return NextResponse.json({ 
            success: false,
            message: "Failed to fetch user"
         }, {
            status: 500,
        });
    }
}