import { logError } from "@/lib/logger";
import { getDoctorsDirectory } from "@/services/doctors-directory.service";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const doctors = await getDoctorsDirectory({
            query: searchParams.get("q") || searchParams.get("query"),
            specialty: searchParams.get("specialty"),
            location: searchParams.get("location"),
        });

        return NextResponse.json(
            { success: true, data: doctors },
            {
                headers: {
                    "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
                },
            }
        );
    } catch (error) {
        logError("Failed to fetch the public doctor directory.", error);
        return NextResponse.json(
            { success: false, message: "Failed to fetch the doctor directory." },
            { status: 500 }
        );
    }
}
