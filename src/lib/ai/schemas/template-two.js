// lib/ai/schemas/template-two.js

import {
    stringField,
    numberField,
    stringArrayField,
    linkItemResponseSchema,
    faqItemResponseSchema,
    ctaResponseSchema,
    statItemResponseSchema,
    iconTextItemResponseSchema,
    serviceCardResponseSchema,
    stepItemResponseSchema,
    scheduleItemResponseSchema,
    timelineItemResponseSchema,
} from "./shared";

const navLinkSchema = {
    type: "object",
    properties: {
        label: stringField,
        href: stringField,
        key: stringField,
    },
};

const credentialItemSchema = {
    type: "object",
    properties: {
        icon: stringField,
        title: stringField,
        detail: stringField,
    },
};

export const templateTwoResponseSchema = {
    type: "object",

    properties: {
        header: {
            type: "object",
            properties: {
                brandName: stringField,

                navLinks: {
                    type: "array",
                    items: navLinkSchema,
                },

                appointmentCta: stringField,
                appointmentCtaLink: stringField,
            },
        },

        footer: {
            type: "object",
            properties: {
                brandName: stringField,
                tagline: stringField,
                copyright: stringField,
                phone: stringField,
                socialUrl: stringField,
                websiteUrl: stringField,
                email: stringField,

                practiceLinks: {
                    type: "array",
                    items: linkItemResponseSchema,
                },

                resourceLinks: {
                    type: "array",
                    items: linkItemResponseSchema,
                },

                legalLinks: {
                    type: "array",
                    items: linkItemResponseSchema,
                },
            },
        },

        pages: {
            type: "object",

            properties: {
                home: {
                    type: "object",
                    properties: {
                        hero: {
                            type: "object",
                            properties: {
                                badge: stringField,
                                heading: stringField,
                                credentialsLine: stringField,
                                body: stringField,
                                primaryCta: stringField,
                                secondaryCta: stringField,
                                imageUrl: stringField,
                                imageAlt: stringField,
                            },
                        },

                        credentials: {
                            type: "object",
                            properties: {
                                heading: stringField,
                                subheading: stringField,

                                items: {
                                    type: "array",
                                    items: credentialItemSchema,
                                },
                            },
                        },

                        treatments: {
                            type: "object",
                            properties: {
                                heading: stringField,
                                subheading: stringField,

                                items: {
                                    type: "array",
                                    items: serviceCardResponseSchema,
                                },
                            },
                        },

                        timeline: {
                            type: "object",
                            properties: {
                                heading: stringField,
                                subheading: stringField,
                                experience: numberField,

                                items: {
                                    type: "array",
                                    items: timelineItemResponseSchema,
                                },
                            },
                        },

                        onboarding: {
                            type: "object",
                            properties: {
                                heading: stringField,
                                subheading: stringField,

                                steps: {
                                    type: "array",
                                    items: stepItemResponseSchema,
                                },
                            },
                        },

                        chamber: {
                            type: "object",
                            properties: {
                                heading: stringField,
                                subheading: stringField,

                                location: {
                                    type: "object",
                                    properties: {
                                        name: stringField,
                                        address: stringField,
                                        hours: stringField,
                                    },
                                },

                                mapUrl: stringField,
                            },
                        },

                        finalCta: ctaResponseSchema,
                    },
                },

                about: {
                    type: "object",
                    properties: {
                        hero: {
                            type: "object",
                            properties: {
                                badge: stringField,
                                heading: stringField,
                                body: stringField,
                                languages: stringArrayField,
                                imageUrl: stringField,
                                imageAlt: stringField,
                            },
                        },

                        story: {
                            type: "object",
                            properties: {
                                heading: stringField,
                                body: stringField,
                                quote: stringField,
                                quoteAuthor: stringField,
                            },
                        },

                        timeline: {
                            type: "object",
                            properties: {
                                heading: stringField,
                                subheading: stringField,

                                items: {
                                    type: "array",
                                    items: timelineItemResponseSchema,
                                },
                            },
                        },

                        qualifications: {
                            type: "object",
                            properties: {
                                heading: stringField,
                                subheading: stringField,

                                items: {
                                    type: "array",
                                    items: credentialItemSchema,
                                },
                            },
                        },

                        practices: {
                            type: "object",
                            properties: {
                                heading: stringField,
                                subheading: stringField,

                                items: {
                                    type: "array",
                                    items: iconTextItemResponseSchema,
                                },
                            },
                        },

                        finalCta: ctaResponseSchema,
                    },
                },

                services: {
                    type: "object",
                    properties: {
                        hero: {
                            type: "object",
                            properties: {
                                badge: stringField,
                                heading: stringField,
                                body: stringField,
                            },
                        },

                        featured: {
                            type: "object",
                            properties: {
                                badge: stringField,
                                heading: stringField,
                                body: stringField,
                                cta: stringField,
                                imageUrl: stringField,
                                imageAlt: stringField,

                                secondaryFeatured: {
                                    type: "object",
                                    properties: {
                                        heading: stringField,
                                        body: stringField,
                                        imageUrl: stringField,
                                        imageAlt: stringField,
                                    },
                                },
                            },
                        },

                        cards: {
                            type: "object",
                            properties: {
                                heading: stringField,
                                subheading: stringField,

                                items: {
                                    type: "array",
                                    items: serviceCardResponseSchema,
                                },
                            },
                        },

                        benefits: {
                            type: "object",
                            properties: {
                                heading: stringField,
                                subheading: stringField,
                                imageUrl: stringField,
                                imageAlt: stringField,

                                badge: statItemResponseSchema,

                                items: {
                                    type: "array",
                                    items: iconTextItemResponseSchema,
                                },
                            },
                        },

                        faq: {
                            type: "object",
                            properties: {
                                heading: stringField,

                                items: {
                                    type: "array",
                                    items: faqItemResponseSchema,
                                },
                            },
                        },

                        finalCta: ctaResponseSchema,
                    },
                },

                appointment: {
                    type: "object",
                    properties: {
                        hero: {
                            type: "object",
                            properties: {
                                badge: stringField,
                                heading: stringField,
                                body: stringField,
                            },
                        },

                        schedules: {
                            type: "object",
                            properties: {
                                heading: stringField,
                                subheading: stringField,

                                items: {
                                    type: "array",
                                    items: scheduleItemResponseSchema,
                                },

                                imageUrl: stringField,
                                imageAlt: stringField,
                            },
                        },

                        whatsapp: {
                            type: "object",
                            properties: {
                                heading: stringField,
                                body: stringField,
                                cta: stringField,
                                imageUrl: stringField,
                                imageAlt: stringField,
                                telehealthImage: stringField,
                                telehealthImageAlt: stringField,
                                whatsappUrl: stringField,
                                features: stringArrayField,
                            },
                        },

                        faq: {
                            type: "object",
                            properties: {
                                heading: stringField,

                                items: {
                                    type: "array",
                                    items: faqItemResponseSchema,
                                },
                            },
                        },

                        finalCta: ctaResponseSchema,
                    },
                },
            },
        },
    },
};