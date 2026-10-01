import mongoose from "mongoose";

const dnsSchema = new mongoose.Schema({
    dnsType: {
        type: String
    },
    name: {
        type: String
    },
    value: {
        type: String
    },
    reason: {
        type: String
    }
})

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
        subdomain: {
            type: String,
            required: true,
            unique: true,
        },
        domain: {
            type: String,
            trim: true,
            lowercase: true,
            unique: true,
            sparse: true,
        },
        domainStatus: {
            type: String,
            enum: ["pending", "connected", "verified"],
            default: undefined,
        },
        domainVerified: {
            type: Boolean,
            default: false,
        },
        dnsRecords: [dnsSchema],
        dnsConfigCheckedAt: {
            type: Date,
            default: undefined,
        },
        vercelVerification: [
            {
                recordType: {
                    type: String
                },
                name: {
                    type: String
                },
                value: {
                    type: String
                }
            }
        ],
        seo: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SEO",
            required: true
        },
        status: {
            type: String,
            enum: ["generating", "ready", "failed"]
        }
    },
    { timestamps: true }
);

const Website = mongoose.models.Website || mongoose.model("Website", websiteSchema);

export default Website;
