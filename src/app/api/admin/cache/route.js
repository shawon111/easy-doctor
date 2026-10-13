import { withAdmin } from "@/lib/requireAdmin";
import { revalidateTag, revalidatePath } from "next/cache";
import Website from "@/models/website.model";
import { connectDB } from "@/config/database";
import { NextResponse } from "next/server";

export const POST = withAdmin(async (request) => {
    try {
        let body = {};
        try {
            body = await request.json();
        } catch {
            // empty body is valid
        }

        const { target, subdomain } = body;

        if (target === "all_doctors") {
            revalidateTag("doctor-websites");
            return NextResponse.json({
                success: true,
                message: "Global tag 'doctor-websites' successfully revalidated! All doctor website caches invalidated.",
            });
        }

        if (target === "single" && subdomain) {
            revalidateTag(`website-content:${subdomain}`);
            const pages = ["", "/about", "/services", "/appointment"];
            pages.forEach((p) => revalidatePath(`/doctor/${subdomain}${p}`));
            return NextResponse.json({
                success: true,
                message: `Cache revalidated for subdomain: ${subdomain}`,
            });
        }

        if (target === "all_paths") {
            await connectDB();
            const websites = await Website.find().select("subdomain").lean();
            revalidateTag("doctor-websites");
            websites.forEach((w) => {
                if (w.subdomain) {
                    revalidateTag(`website-content:${w.subdomain}`);
                    const pages = ["", "/about", "/services", "/appointment"];
                    pages.forEach((p) => revalidatePath(`/doctor/${w.subdomain}${p}`));
                }
            });
            return NextResponse.json({
                success: true,
                message: `Full cache purge complete for ${websites.length} websites!`,
            });
        }

        // Default: invalidate global doctor-websites
        revalidateTag("doctor-websites");
        return NextResponse.json({
            success: true,
            message: "Doctor websites cache purged successfully.",
        });
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
});
