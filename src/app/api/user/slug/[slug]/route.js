import { connectDB } from "@/config/database";
import { getUserBySlug } from "@/services/user.service";
import { NextResponse } from "next/server";

export const GET = async ( response, { params }) => {
    try {
        await connectDB();
        const { slug } = await params;
        const user = await getUserBySlug(slug);
        return NextResponse.json({ 
            success: true,
            message: "User fetched successfully",
            data: user
         }, {
            status: 200,
        });
    } catch (error) {
        console.error("Error fetching user:", error);
        return NextResponse.json({ 
            success: false,
            message: "Failed to fetch user"
         }, {
            status: 500,
        });
    }
}