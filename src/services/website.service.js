import { connectDB } from "@/config/database";
import "@/models/template-one-content.model";
import "@/models/template-three-content.model";
import "@/models/template-two-content.model";
import Website from "@/models/website.model";
import User from "@/models/user.model";
import { unstable_cache } from "next/cache";
import { replaceTemplateVariables } from "@/lib/content/resolve-template-content";
import SEO from "@/models/seo.model";

// create website
export const createWebsite = async (userId, websiteData, session) => {
    const { templateType, templateVariant, contentType, content, subdomain } = websiteData;
    const findSeo = await SEO.findOne({userId}).session(session).select({
        _id: 1
    })
    if (!findSeo) {
        throw new Error("SEO settings not found for user");
    }

    const canonicalUrl = `https://${subdomain}.${process.env.NEXT_PUBLIC_BASE_DOMAIN}`;
    const user = await User.findById(userId).select("profilePicture").session(session);
    if (!user) {
        throw new Error("User not found");
    }

    const updatedSeo = await SEO.findOneAndUpdate(
        { _id: findSeo._id },
        {
            $set: {
                canonicalUrl,
                subdomain,
                "pages.home.ogImage": user.profilePicture,
                "pages.about.ogImage": user.profilePicture,
                "pages.services.ogImage": user.profilePicture,
                "pages.appointment.ogImage": user.profilePicture,
                "social.ogImage": user.profilePicture,
            },
        },
        {
            session,
            new: true,
            runValidators: true,
        }
    );
    if (!updatedSeo) {
        throw new Error("Unable to update SEO canonical URL");
    }

    const [newWebsite] = await Website.create([{
        userId,
        templateType,
        variant: templateVariant,
        contentType,
        content,
        subdomain,
        seo: findSeo._id
    }], { session });

    return newWebsite;
}

// get website by userId
export const getWebsiteByUserId = async (userId) => {
    await connectDB();
    try {
        const website = await Website.findOne({ userId })
            .populate('content')
            .populate('seo');
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
                .populate("seo")
                .populate("userId", "name")
                .lean();

            if (!website) {
                const user = await User.findOne({ slug: subdomain }).select("_id").lean();
                if (user) {
                    website = await Website.findOne({ userId: user._id })
                        .populate("content")
                        .populate("seo")
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