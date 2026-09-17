import {
    stringField,
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
    imageResponseSchema,
    chamberImageResponseSchema,
    locationImageResponseSchema,
} from "./shared";

const navLinkSchema = {
    type: "object",
    properties: {
        label: stringField,
        href: stringField,
        key: stringField,
    },
};

export const templateThreeResponseSchema = {
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

                resourceLinks: {
                    type: "array",
                    items: linkItemResponseSchema,
                },

                legalLinks: {
                    type: "array",
                    items: linkItemResponseSchema,
                },

                specialties: {
                    type: "array",
                    items: linkItemResponseSchema,
                },

                newsletter: {
                    type: "object",
                    properties: {
                        heading: stringField,
                        body: stringField,
                    },
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

                        highlights: {
                            type: "object",
                            properties: {
                                items: {
                                    type: "array",
                                    items: statItemResponseSchema,
                                },
                            },
                        },

                        aboutPreview: {
                            type: "object",
                            properties: {
                                heading: stringField,
                                headingHighlight: stringField,
                                body: stringField,
                                checklist: stringArrayField,
                                linkLabel: stringField,

                                images: {
                                    type: "array",
                                    items: imageResponseSchema,
                                },
                            },
                        },

                        servicesGrid: {
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

                        whyTrust: {
                            type: "object",
                            properties: {
                                heading: stringField,

                                items: {
                                    type: "array",
                                    items: iconTextItemResponseSchema,
                                },
                            },
                        },

                        howToStart: {
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

                        mapLocation: {
                            type: "object",
                            properties: {
                                heading: stringField,
                                directionsCta: stringField,
                                mapUrl: stringField,

                                contact: {
                                    type: "object",
                                    properties: {
                                        location: stringField,
                                        phone: stringField,
                                        hours: stringField,
                                    },
                                },

                                contactLabels: {
                                    type: "object",
                                    properties: {
                                        location: stringField,
                                        phone: stringField,
                                        hours: stringField,
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
                                imageUrl: stringField,
                                imageAlt: stringField,
                                experienceStat: stringField,
                                livesTouchedStat: stringField,
                                innovationsStat: stringField,
                            },
                        },

                        journey: {
                            type: "object",
                            properties: {
                                heading: stringField,
                                body: stringField,
                                quote: stringField,
                                quoteAuthor: stringField,
                                imageUrl: stringField,
                                imageAlt: stringField,
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

                        pillars: {
                            type: "object",
                            properties: {
                                heading: stringField,
                                subheading: stringField,
                                cta: stringField,

                                items: {
                                    type: "array",
                                    items: iconTextItemResponseSchema,
                                },
                            },
                        },

                        locations: {
                            type: "object",
                            properties: {
                                heading: stringField,

                                items: {
                                    type: "array",
                                    items: locationImageResponseSchema,
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

                        treatments: {
                            type: "object",
                            properties: {
                                heading: stringField,
                                subheading: stringField,

                                cards: {
                                    type: "array",
                                    items: {
                                        type: "object",
                                        properties: {
                                            badge: stringField,
                                            title: stringField,
                                            body: stringField,
                                            bullets: stringArrayField,
                                            cta: stringField,
                                            imageUrl: stringField,
                                            imageAlt: stringField,
                                            stat1Value: stringField,
                                            stat1Label: stringField,
                                            stat2Value: stringField,
                                            stat2Label: stringField,
                                        },
                                    },
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

                        steps: {
                            type: "object",
                            properties: {
                                items: {
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
                                legendAvailable: stringField,
                                legendClosed: stringField,
                                statusAvailable: stringField,
                                statusClosed: stringField,

                                items: {
                                    type: "array",
                                    items: scheduleItemResponseSchema,
                                },
                            },
                        },

                        whatsapp: {
                            type: "object",
                            properties: {
                                heading: stringField,
                                body: stringField,
                                cta: stringField,
                                whatsappUrl: stringField,
                                phoneDisplay: stringField,
                            },
                        },

                        chambers: {
                            type: "object",
                            properties: {
                                heading: stringField,

                                items: {
                                    type: "array",
                                    items: chamberImageResponseSchema,
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
                    },
                },
            },
        },
    },
};