import { withAdmin } from "@/lib/requireAdmin";
import { getAdminWebsites } from "@/services/admin.service";
import Website from "@/models/website.model";
import { connectDB } from "@/config/database";
import { generateWebsiteContent } from "@/lib/ai/generate-website-content";
import { revalidateTag, revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const GET = withAdmin(async (request) => {
    try {
        const { searchParams } = new URL(request.url);
        const page = parseInt(searchParams.get("page") || "1");
        const limit = parseInt(searchParams.get("limit") || "20");
        const search = searchParams.get("search") || "";
        const status = searchParams.get("status") || "";
        const template = searchParams.get("template") || "";

        const data = await getAdminWebsites({ page, limit, search, status, template });
        return NextResponse.json({ success: true, data });
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
});

// Action on website: status update, regenerate AI, or purge cache
export const POST = withAdmin(async (request) => {
    try {
        await connectDB();
        const { action, websiteId } = await request.json();

        if (!websiteId) {
            return NextResponse.json({ success: false, message: "Website ID required" }, { status: 400 });
        }

        const website = await Website.findById(websiteId);
        if (!website) {
            return NextResponse.json({ success: false, message: "Website not found" }, { status: 404 });
        }

        if (action === "regenerate_ai") {
            try {
                // Set website to generating state first
                await Website.findByIdAndUpdate(websiteId, { status: "generating", generationError: null });

                // Run AI content generation
                await generateWebsiteContent(website.userId, website.templateType, website._id);

                // Purge both the specific website cache and the global tag
                revalidateTag(`website-content:${website.subdomain}`);
                revalidateTag("doctor-websites");
                const pages = ["", "/about", "/services", "/appointment"];
                pages.forEach((p) => revalidatePath(`/doctor/${website.subdomain}${p}`));

                return NextResponse.json({
                    success: true,
                    message: `AI content successfully generated for ${website.subdomain}! Site is live.`,
                });
            } catch (err) {
                console.error("Manual AI regeneration failed:", err);
                return NextResponse.json(
                    {
                        success: false,
                        message: `AI Generation error: ${err.message || "Failed to generate content"}`,
                    },
                    { status: 500 }
                );
            }
        }

        if (action === "purge_cache") {
            revalidateTag(`website-content:${website.subdomain}`);
            const pages = ["", "/about", "/services", "/appointment"];
            pages.forEach((p) => revalidatePath(`/doctor/${website.subdomain}${p}`));
            return NextResponse.json({ success: true, message: `Cache purged for ${website.subdomain}` });
        }

        if (action === "set_status") {
            const { status } = await request.json().catch(() => ({}));
            if (["ready", "generating", "failed"].includes(status)) {
                website.status = status;
                await website.save();
                revalidateTag(`website-content:${website.subdomain}`);
                return NextResponse.json({ success: true, message: `Status updated to ${status}` });
            }
        }

        return NextResponse.json({ success: false, message: "Invalid action" }, { status: 400 });
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
});
