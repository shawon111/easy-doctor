import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

/**
 * POST /api/cache/purge
 *
 * Flushes the Next.js data cache for ALL doctor websites at once by
 * invalidating the shared "doctor-websites" tag.
 *
 * Protected by CRON_SECRET so it can only be called by trusted callers
 * (admin scripts, cron jobs, CI pipelines, etc.).
 *
 * Body (optional):
 *   { "subdomain": "drsmith" }   → purge only that one website
 *   (no body / no subdomain)     → purge ALL doctor websites
 */
export const POST = async (request) => {
    // Auth check — require the same secret used by the cron job.
    const secret = process.env.CRON_SECRET;
    if (secret && request.headers.get("authorization") !== `Bearer ${secret}`) {
        return NextResponse.json(
            { success: false, message: "Unauthorized" },
            { status: 401 }
        );
    }

    try {
        let body = {};
        try {
            body = await request.json();
        } catch {
            // no body is fine — means purge all
        }

        const { subdomain } = body;

        if (subdomain) {
            // Purge a single doctor website by subdomain
            revalidateTag(`website-content:${subdomain}`);
            return NextResponse.json({
                success: true,
                message: `Cache purged for subdomain: ${subdomain}`,
            });
        }

        // Purge every doctor website at once
        revalidateTag("doctor-websites");
        return NextResponse.json({
            success: true,
            message: "Cache purged for all doctor websites",
        });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: error.message || "Failed to purge cache" },
            { status: 500 }
        );
    }
};
