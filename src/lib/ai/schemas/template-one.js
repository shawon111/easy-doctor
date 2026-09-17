// lib/ai/schemas/template-one.js

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

const trustBadgeSchema = {
    type: "object",
    properties: {
        icon: stringField,
        stat: stringField,
        label: stringField,
    },
};

export const templateOneResponseSchema = {
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
                officeHoursLabel: stringField,
                officeHours: stringField,
                urgentCareLabel: stringField,
                urgentCareNote: stringField,
                phone: stringField,
                socialUrl: stringField,

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
                                headingHighlight: stringField,
                                body: stringField,
                                primaryCta: stringField,
                                secondaryCta: stringField,
                                imageUrl: stringField,
                                imageAlt: stringField,

                                statCard: {
                                    type: "object",
                                    properties: {
                                        value: stringField,
                                        label: stringField,
                                    },
                                },
                            },
                        },

                        trustBadges: {
                            type: "object",
                            properties: {
                                items: {
                                    type: "array",
                                    items: trustBadgeSchema,
                                },
                            },
                        },

                        aboutPreview: {
                            type: "object",
                            properties: {
                                heading: stringField,
                                body: stringField,
                                linkLabel: stringField,
                                imageUrl: stringField,
                                imageAlt: stringField,
                                imageUrlSecondary: stringField,
                                imageAltSecondary: stringField,
                            },
                        },

                        services: {
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

                        whyChooseUs: {
                            type: "object",
                            properties: {
                                heading: stringField,

                                items: {
                                    type: "array",
                                    items: iconTextItemResponseSchema,
                                },

                                quote: stringField,
                                quoteAuthor: stringField,
                                quoteHeading: stringField,
                                quoteImageUrl: stringField,
                                quoteImageAlt: stringField,
                            },
                        },

                        appointmentProcess: {
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

                        clinicLocations: {
                            type: "object",
                            properties: {
                                heading: stringField,
                                subheading: stringField,

                                locations: {
                                    type: "array",
                                    items: {
                                        type: "object",
                                        properties: {
                                            name: stringField,
                                            address: stringField,
                                            hours: stringField,
                                            mapUrl: stringField,
                                        },
                                    },
                                },
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
                                experience: numberField,
                                imageUrl: stringField,
                                imageAlt: stringField,
                            },
                        },

                        philosophy: {
                            type: "object",
                            properties: {
                                quote: stringField,
                                author: stringField,
                            },
                        },

                        bioStats: {
                            type: "object",
                            properties: {
                                heading: stringField,
                                body: stringField,
                                languages: stringArrayField,

                                stats: {
                                    type: "array",
                                    items: statItemResponseSchema,
                                },
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

                        chambers: {
                            type: "object",
                            properties: {
                                heading: stringField,
                                subheading: stringField,

                                locations: {
                                    type: "array",
                                    items: {
                                        type: "object",
                                        properties: {
                                            name: stringField,
                                            address: stringField,
                                            hours: stringField,
                                        },
                                    },
                                },

                                mapUrl: stringField,
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
                                imageUrl: stringField,
                                imageAlt: stringField,
                            },
                        },

                        treatmentsGrid: {
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

                        ctaBanner: ctaResponseSchema,
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
                                imageUrl: stringField,
                                imageAlt: stringField,
                                primaryCta: stringField,
                                secondaryCta: stringField,
                            },
                        },

                        howItWorks: {
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

                        schedule: {
                            type: "object",
                            properties: {
                                heading: stringField,
                                subheading: stringField,

                                items: {
                                    type: "array",
                                    items: scheduleItemResponseSchema,
                                },
                            },
                        },

                        whatsappCta: {
                            type: "object",
                            properties: {
                                heading: stringField,
                                body: stringField,
                                cta: stringField,
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
                    },
                },
            },
        },
    },
};