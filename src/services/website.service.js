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