import mongoose from "mongoose";

const SEOSchema = new mongoose.Schema(
    {
        useId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        siteName: {
            type: String,
            trim: true,
        },

        defaultTitle: {
            type: String,
            trim: true,
            maxlength: 70,
        },

        defaultDescription: {
            type: String,
            trim: true,
            maxlength: 160,
        },

        keywords: {
            type: [String],
            default: [],
        },
        defaultSpecialty: {
            type: String,
            trim: true,
        },
        pages: {

            home: {
                title: {
                    type: String,
                    trim: true,
                    maxlength: 70,
                },

                description: {
                    type: String,
                    trim: true,
                    maxlength: 160,
                },

                ogImage: {
                    type: String,
                    trim: true,
                },
            },

            about: {
                title: {
                    type: String,
                    trim: true,
                    maxlength: 70,
                },

                description: {
                    type: String,
                    trim: true,
                    maxlength: 160,
                },

                ogImage: {
                    type: String,
                    trim: true,
                },
            },

            services: {
                title: {
                    type: String,
                    trim: true,
                    maxlength: 70,
                },

                description: {
                    type: String,
                    trim: true,
                    maxlength: 160,
                },

                ogImage: {
                    type: String,
                    trim: true,
                },
            },

            appointment: {
                title: {
                    type: String,
                    trim: true,
                    maxlength: 70,
                },

                description: {
                    type: String,
                    trim: true,
                    maxlength: 160,
                },

                ogImage: {
                    type: String,
                    trim: true,
                },
            },
        },

        social: {

            ogTitle: {
                type: String,
                trim: true,
            },

            ogDescription: {
                type: String,
                trim: true,
            },

            ogImage: {
                type: String,
                trim: true,
            },

            twitterCard: {
                type: String,
                enum: [
                    "summary",
                    "summary_large_image",
                ],
                default: "summary_large_image",
            },
        },

        verification: {

            google: {
                type: String,
                trim: true,
            },

            bing: {
                type: String,
                trim: true,
            },
        },

        robots: {

            index: {
                type: Boolean,
                default: true,
            },

            follow: {
                type: Boolean,
                default: true,
            },
        },
        location: {
            City: {
                type: String,
                trim: true,
            },
            District: {
                type: String,
                trim: true,
            },
            Country: {
                type: String,
                trim: true,
            },
            ZipCode: {
                type: String,
                trim: true,
            },
        }
    },
)

const SEO = mongoose.model.SEO || mongoose.model("SEO", SEOSchema);

export default SEO;