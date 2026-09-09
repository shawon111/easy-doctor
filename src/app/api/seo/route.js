import { withUser } from "@/lib/withUser";
import { getSeoByUserId, updateSeo } from "@/services/seo.service";
import { NextResponse } from "next/server";

const PAGE_KEYS = ["home", "about", "services", "appointment"];
const MAX_TITLE_LENGTH = 70;
const MAX_DESCRIPTION_LENGTH = 160;
const MAX_IMAGE_URL_LENGTH = 2048;

const cleanText = (value) => String(value ?? "").trim().replace(/\s+/g, " ");

const cleanKeywords = (value) => {
    if (!Array.isArray(value)) {
        return [];
    }

    return [...new Set(value.map(cleanText).filter(Boolean))];
};

const normalizeSeoUpdates = (payload) => {
    const title = cleanText(payload?.title);
    const description = cleanText(payload?.description);
    const keywords = cleanKeywords(payload?.keywords);
    const ogImage = cleanText(payload?.ogImage);

    if (title.length > MAX_TITLE_LENGTH) {
        throw new Error(`Title must be ${MAX_TITLE_LENGTH} characters or fewer`);
    }

    if (description.length > MAX_DESCRIPTION_LENGTH) {
        throw new Error(`Description must be ${MAX_DESCRIPTION_LENGTH} characters or fewer`);
    }

    if (ogImage.length > MAX_IMAGE_URL_LENGTH) {
        throw new Error(`OG image URL must be ${MAX_IMAGE_URL_LENGTH} characters or fewer`);
    }

    if (payload?.scope === "site") {
        return {
            defaultTitle: title,
            defaultDescription: description,
            keywords,
            "social.ogImage": ogImage,
        };
    }

    if (!PAGE_KEYS.includes(payload?.page)) {
        throw new Error("A valid SEO page is required");
    }

    return {
        [`pages.${payload.page}.title`]: title,
        [`pages.${payload.page}.description`]: description,
        [`pages.${payload.page}.keywords`]: keywords,
        [`pages.${payload.page}.ogImage`]: ogImage,
    };
};

export const GET = withUser(async (request, context, currentUser) => {
    try {
        if (!currentUser) {
            return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
        }

        const seo = await getSeoByUserId(currentUser._id);

        if (!seo) {
            return NextResponse.json(
                { success: false, message: "SEO settings were not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({ success: true, data: seo });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: "Failed to get seo settings" },
            { status: 400 }
        );
    }
});

export const PATCH = withUser(async (request, context, currentUser) => {
    try {
        if (!currentUser) {
            return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
        }

        const payload = await request.json();
        const updates = normalizeSeoUpdates(payload);
        const seo = await updateSeo(currentUser._id, updates);

        if (!seo) {
            return NextResponse.json(
                { success: false, message: "SEO settings were not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({ success: true, data: seo });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: error.message || "Failed to update SEO settings" },
            { status: 400 }
        );
    }
});
