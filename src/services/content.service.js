import TemplateOneContent from "@/models/template-one-content.model";
import TemplateThreeContent from "@/models/template-three-content.model";
import TemplateTwoContent from "@/models/template-two-content.model";

// template models
const templateModels = {
    "template-one": TemplateOneContent,
    "template-one-dark": TemplateOneContent,
    "template-two-dark": TemplateTwoContent,
    "template-two": TemplateTwoContent,
    "template-three": TemplateThreeContent,
    "template-three-dark": TemplateThreeContent,
};

export const createOrUpdateContent = async (user, templateType, content) => {
    try {
        const userId = user?._id.toString();
        const Template = templateModels[templateType];
        // check template validity
        if (!Template) {
            throw new Error(`Invalid template type: ${templateType}`);
        }

        const saveContent = await Template.findOneAndUpdate(
            { userId },
            {
                $set: content
            },
            {
                returnDocument: "after",
                upsert: true,
                runValidators: true,
            }
        );
        return saveContent;
    } catch (error) {
        console.error("Error creating or updating content:", error);
        throw error;
    }
}