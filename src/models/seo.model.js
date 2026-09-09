import mongoose from "mongoose";

const SEOSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            unique: true,
        },
        subdomain: {
            type: String,
            default: undefined,
            unique: true,
            sparse: true,
        },
        domain: {
            type: String,
            default: undefined,
            unique: true,
            sparse: true,
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
        canonicalUrl: {
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

                keywords: {
                    type: [String],
                    default: [],
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

                keywords: {
                    type: [String],
                    default: [],
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

                keywords: {
                    type: [String],
                    default: [],
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

                keywords: {
                    type: [String],
                    default: [],
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
            city: {
                type: String,
                trim: true,
            },
            district: {
                type: String,
                trim: true,
            },
            country: {
                type: String,
                trim: true,
            },
            zipCode: {
                type: String,
                trim: true,
            },
        }
    },
)

const SEO = mongoose.models.SEO || mongoose.model("SEO", SEOSchema);

export default SEO;