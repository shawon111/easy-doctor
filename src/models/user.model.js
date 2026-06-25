import mongoose from "mongoose";
import slugify from "slugify";

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        slug: {
            type: String,
            unique: true,
            index: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            index: true,
        },

        password: {
            type: String,
            required: true,
        },

        phone: {
            type: String,
            required: false,
        },

        specialization: {
            type: String,
            required: true,
        },

        qualifications: [
            {
                degree: {
                    type: String,
                    required: true,
                },
                institution: {
                    type: String,
                    required: true,
                },
                year: {
                    type: Number,
                    required: true,
                }
            }
        ],

        experience: {
            type: Number,
            required: false
        },

        clinicAddress: [
            {
                chamberName: {
                    type: String,
                    required: true,
                },
                address: {
                    type: String,
                    required: true,
                },
                city: {
                    type: String,
                    required: true,
                },
                country: {
                    type: String,
                    required: true,
                },
                visitingHours: {
                    type: String,
                    required: true,
                },
                visitingDays: {
                    type: String,
                    required: true,
                }
            }
        ],

        bookingPreferences: {
            type: String,
            enum: ["whatsapp", "bookingForm", "both"],
            default: "whatsapp",
        },

        bio: {
            type: String,
            required: true,
            minLength: 100,
            maxLength: 1000,
        },

        treatments: {
            type: [String],
            required: true,
        },

        languages: {
            type: [String],
            required: true,
        },

        socialLinks: [
            {
                platform: {
                    type: String,
                    required: true,
                },
                url: {
                    type: String,
                    required: true,
                }
            }
        ],

        profilePicture: {
            type: String,
            required: false,
        },

        emailVerified: {
            type: Boolean,
            default: false,
        },

        websitePreferences: {
            theme: {
                type: String,
                enum: ["classic", "modern", "premium"],
                default: "classic",
            },
            template: {
                type: mongoose.Schema.Types.ObjectId,
            },
            show: {
                bio: {
                    type: Boolean,
                    default: true,
                },
                treatments: {
                    type: Boolean,
                    default: true,
                },
                chamber: {
                    type: Boolean,
                    default: true,
                },
                booking: {
                    type: Boolean,
                    default: true,
                },
                contact: {
                    type: Boolean,
                    default: true,
                }
            },
            seo: {
                metaTitle: {
                    type: String,
                    required: false,
                },
                metaDescription: {
                    type: String,
                    required: false,
                },
                keywords: {
                    type: [String],
                    required: false,
                },
            }
        },
        profileCompleted: {
            type: Boolean,
            default: false,
        },
        userLevel: {
            type: String,
            enum: ["free", "pro", "ultra"],
            default: "free",
        }
    },
    {
        timestamps: true,
    }
);

// generate slug from name before saving
UserSchema.pre("save", async function () {
    // Don't regenerate unless name changed
    if (!this.isModified("name")) {
        return ;
    }

    const baseSlug = slugify(this.name, {
        lower: true,
        strict: true,
        trim: true,
    });

    let slug = baseSlug;
    let counter = 1;

    const TheUser = this.constructor;

    while (
        await TheUser.exists({
            slug,
            _id: { $ne: this._id },
        })
    ) {
        slug = `${baseSlug}-${counter}`;
        counter++;
    }

    this.slug = slug;

});

const User = mongoose.models.User || mongoose.model("User", UserSchema);;

export default User;