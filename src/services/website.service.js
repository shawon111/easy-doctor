import { connectDB } from "@/config/database";
import "@/models/template-one-content.model";
import "@/models/template-three-content.model";
import "@/models/template-two-content.model";
import Website from "@/models/website.model";

// create website
export const createWebsite = async (userId, websiteData) => {
    try {
        const { templateType, templateVariant, contentType, content } = websiteData;
        const newWebsite = await Website.create({
            userId,
            templateType: templateType,
            variant: templateVariant,
            contentType,
            content
        });
        return newWebsite;
    } catch (error) {
        console.log("Error creating website:", error);
        throw new Error('Failed to create website');
    }
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
    await connectDB();
    try {
        const website = await Website.findOne({ subdomain }).populate('content');
        return website;
    }catch (error) {
        console.log("Error fetching website by subdomain:", error);
        throw new Error('Failed to fetch website by subdomain');
    }
}