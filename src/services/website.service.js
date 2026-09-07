import { connectDB } from "@/config/database";
import "@/models/template-one-content.model";
import "@/models/template-three-content.model";
import "@/models/template-two-content.model";
import Website from "@/models/website.model";
import User from "@/models/user.model";
import { unstable_cache } from "next/cache";
import { replaceTemplateVariables } from "@/lib/content/resolve-template-content";
import { updateSeo } from "./seo.service";

// create website
export const createWebsite = async (userId, websiteData, session) => {
    const { templateType, templateVariant, contentType, content, subdomain } = websiteData;
    const [newWebsite] = await Website.create([{
        userId,
        templateType,
        variant: templateVariant,
        contentType,
        content,
        subdomain
    }], { session });

    await updateSeo(userId, { websiteId: newWebsite._id }, session);

    return newWebsite;
}

// get website by userId
export const getWebsiteByUserId = async (userId) => {
    await connectDB();
    try {
        const website = await Website.findOne({ userId }).populate('content');
        return website;
    } catch (error) {
        console.log("Error fetching website:", error);
        throw new Error('Failed to fetch website');
    }
}

// get website lists
export const getWebsiteLists = async () => {
    await connectDB();
    try {
        const websites = await Website.find({}).lean();
        return websites;
    }
    catch (error) {
        console.log("Error fetching website lists:", error);
        throw new Error('Failed to fetch website lists');
    }
}

// get website by subdomain
export const getWebsiteBySubdomain = async (subdomain) => {
    const getCachedWebsite = unstable_cache(
        async () => {
            await connectDB();
            let website = await Website.findOne({ subdomain })
                .populate("content")
                .populate("userId", "name")
                .lean();

            if (!website) {
                const user = await User.findOne({ slug: subdomain }).select("_id").lean();
                if (user) {
                    website = await Website.findOne({ userId: user._id })
                        .populate("content")
                        .populate("userId", "name")
                        .lean();
                }
            }

            if (website?.content) {
                website.content = replaceTemplateVariables(website.content, {
                    name: website.userId?.name || "Doctor",
                });
            }

            return website;
        },
        ["website-by-subdomain", subdomain],
        { tags: [`website-content:${subdomain}`] }
    );

    return getCachedWebsite();
}