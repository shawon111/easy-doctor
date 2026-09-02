import { connectDB } from "@/config/database";
import { subdomainAvailability } from "@/services/info.service";
import { NextResponse } from "next/server";

export const GET = async (request) => {
    const { searchParams } = new URL(request.url);
    const subdomainName = searchParams.get("subdomain");

    // check if subdomain is available
    try {
        await connectDB();
        const isAvailable = await subdomainAvailability(subdomainName);
        return NextResponse.json(
            {
                success: true,
                message: isAvailable ? "Subdomain is available" : "Subdomain is not available",
                data: isAvailable
            },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message: error.message
            },
            { status: 500 }
        );
    }

}