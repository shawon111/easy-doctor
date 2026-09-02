import mongoose from "mongoose";

const websiteSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            index: true,
        },
        templateType: {
            type: String,
            required: true,
            unique: true,
            enum: ["template-one", "template-two", "template-three", "template-one-dark", "template-two-dark", "template-three-dark"],
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

const Website = mongoose.models.Website || mongoose.model("Website", websiteSchema);

export default Website;
