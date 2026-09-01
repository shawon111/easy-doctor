import { subdomainAvailability } from "@/services/info.service";
import { NextResponse } from "next/server";

export const GET = async (request) => {
    const { searchParams } = new URL(request.url);
    const subdomainName = searchParams.get("subdomain");

    // check if subdomain is available
    try {
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
        NextResponse.json(
            {
                success: false,
                message: error.message
            },
            { status: 500 }
        );
    }

}