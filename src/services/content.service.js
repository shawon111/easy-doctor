import TemplateOneContent from "@/models/template-one-content.model";
import TemplateThreeContent from "@/models/template-three-content.model";
import TemplateTwoContent from "@/models/template-two-content.model";

// template models
const templateModels = {
    "template-one": TemplateOneContent,
    "template-two": TemplateTwoContent,
    "template-three": TemplateThreeContent,
};

export const createOrUpdateContent = async (user, templateType, content) => {
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
            new: true,
            upsert: true,
            runValidators: true,
        }
    );
    return saveContent;
}