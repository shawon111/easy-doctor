import mongoose from "mongoose";

const templateSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            index: true,
        },
        type: {
            type: String,
            required: true,
            unique: true,
            enum: ["template-one", "template-two", "template-three"],
        },
        variant: {
            type: String,
            enum: ["light", "dark"],
            default: "light",
        },
        contentType: {
            type: String,
            enum: ["TemplateOneContent", "TemplateTwoContent", "TemplateThreeContent"],
        },
        content: {
            type: mongoose.Schema.Types.ObjectId,
            refPath: "contentType",
        },
    },
    { timestamps: true }
);

const Template = mongoose.models.Template || mongoose.model("Template", templateSchema);

export default Template;
