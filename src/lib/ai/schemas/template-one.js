import {
    stringField,
    numberField,
    stringArrayField,
    arrayOf,
    objectSchema,
    faqItemResponseSchema,
    ctaResponseSchema,
    statItemResponseSchema,
    iconTextItemResponseSchema,
    serviceCardResponseSchema,
    stepItemResponseSchema,
    scheduleItemResponseSchema,
    timelineItemResponseSchema,
} from "./shared";

const trustBadgeSchema = objectSchema({
    stat: stringField,
    label: stringField,
});

const locationSchema = objectSchema({
    name: stringField,
    address: stringField,
    hours: stringField,
    mapUrl: stringField,
});

const chamberLocationSchema = objectSchema({
    name: stringField,
    address: stringField,
    hours: stringField,
});

export const templateOneResponseSchema = objectSchema({
    pages: objectSchema({
        home: objectSchema({
            hero: objectSchema({
                badge: stringField,
                heading: stringField,
                headingHighlight: stringField,
                body: stringField,
                primaryCta: stringField,
                secondaryCta: stringField,
                statCard: objectSchema({
                    value: stringField,
                    label: stringField,
                }),
            }),
            trustBadges: objectSchema({
                items: arrayOf(trustBadgeSchema),
            }),
            aboutPreview: objectSchema({
                heading: stringField,
                body: stringField,
                linkLabel: stringField,
            }),
            services: objectSchema({
                heading: stringField,
                subheading: stringField,
                items: arrayOf(serviceCardResponseSchema),
            }),
            whyChooseUs: objectSchema({
                heading: stringField,
                items: arrayOf(iconTextItemResponseSchema),
                quote: stringField,
                quoteAuthor: stringField,
                quoteHeading: stringField,
            }),
            appointmentProcess: objectSchema({
                heading: stringField,
                subheading: stringField,
                steps: arrayOf(stepItemResponseSchema, 3),
            }),
            clinicLocations: objectSchema({
                heading: stringField,
                subheading: stringField,
                locations: arrayOf(locationSchema, 2),
            }),
            finalCta: ctaResponseSchema,
        }),
        about: objectSchema({
            hero: objectSchema({
                badge: stringField,
                heading: stringField,
                body: stringField,
                experience: numberField,
            }),
            philosophy: objectSchema({
                quote: stringField,
                author: stringField,
            }),
            bioStats: objectSchema({
                heading: stringField,
                body: stringField,
                languages: stringArrayField,
                stats: arrayOf(statItemResponseSchema
                ),
            }),
            timeline: objectSchema({
                heading: stringField,
                subheading: stringField,
                items: arrayOf(timelineItemResponseSchema),
            }),
            chambers: objectSchema({
                heading: stringField,
                subheading: stringField,
                locations: arrayOf(chamberLocationSchema),
                mapUrl: stringField,
            }),
            finalCta: ctaResponseSchema,
        }),
        services: objectSchema({
            hero: objectSchema({
                badge: stringField,
                heading: stringField,
                body: stringField,
            }),
            treatmentsGrid: objectSchema({
                heading: stringField,
                subheading: stringField,
                items: arrayOf(serviceCardResponseSchema),
            }),
            benefits: objectSchema({
                heading: stringField,
                subheading: stringField,
                items: arrayOf(iconTextItemResponseSchema),
            }),
            faq: objectSchema({
                heading: stringField,
                items: arrayOf(faqItemResponseSchema),
            }),
            ctaBanner: ctaResponseSchema,
        }),
        appointment: objectSchema({
            hero: objectSchema({
                badge: stringField,
                heading: stringField,
                body: stringField,
                primaryCta: stringField,
                secondaryCta: stringField,
            }),
            howItWorks: objectSchema({
                heading: stringField,
                subheading: stringField,
                steps: arrayOf(stepItemResponseSchema),
            }),
            schedule: objectSchema({
                heading: stringField,
                subheading: stringField,
                items: arrayOf(scheduleItemResponseSchema),
            }),
            whatsappCta: objectSchema({
                heading: stringField,
                body: stringField,
                cta: stringField,
                features: arrayOf(stringField),
            }),
            faq: objectSchema({
                heading: stringField,
                items: arrayOf(faqItemResponseSchema),
            }),
        }),
    }),
});
