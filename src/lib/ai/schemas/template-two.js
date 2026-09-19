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

const credentialItemSchema = objectSchema({
    title: stringField,
    detail: stringField,
});

const featuredSecondarySchema = objectSchema({
    heading: stringField,
    body: stringField,
});

export const templateTwoResponseSchema = objectSchema({
    pages: objectSchema({
        home: objectSchema({
            hero: objectSchema({
                badge: stringField,
                heading: stringField,
                credentialsLine: stringField,
                body: stringField,
                primaryCta: stringField,
                secondaryCta: stringField,
            }),
            credentials: objectSchema({
                heading: stringField,
                subheading: stringField,
                items: arrayOf(credentialItemSchema
                ),
            }),
            treatments: objectSchema({
                heading: stringField,
                subheading: stringField,
                items: arrayOf(serviceCardResponseSchema),
            }),
            timeline: objectSchema({
                heading: stringField,
                subheading: stringField,
                experience: numberField,
                items: arrayOf(timelineItemResponseSchema),
            }),
            onboarding: objectSchema({
                heading: stringField,
                subheading: stringField,
                steps: arrayOf(stepItemResponseSchema),
            }),
            chamber: objectSchema({
                heading: stringField,
                subheading: stringField,
                location: objectSchema({
                    name: stringField,
                    address: stringField,
                    hours: stringField,
                }),
                mapUrl: stringField,
            }),
            finalCta: ctaResponseSchema,
        }),
        about: objectSchema({
            hero: objectSchema({
                badge: stringField,
                heading: stringField,
                body: stringField,
                languages: stringArrayField,
            }),
            story: objectSchema({
                heading: stringField,
                body: stringField,
                quote: stringField,
                quoteAuthor: stringField,
            }),
            timeline: objectSchema({
                heading: stringField,
                subheading: stringField,
                items: arrayOf(timelineItemResponseSchema),
            }),
            qualifications: objectSchema({
                heading: stringField,
                subheading: stringField,
                items: arrayOf(credentialItemSchema),
            }),
            practices: objectSchema({
                heading: stringField,
                subheading: stringField,
                items: arrayOf(iconTextItemResponseSchema),
            }),
            finalCta: ctaResponseSchema,
        }),
        services: objectSchema({
            hero: objectSchema({
                badge: stringField,
                heading: stringField,
                body: stringField,
            }),
            featured: objectSchema({
                badge: stringField,
                heading: stringField,
                body: stringField,
                cta: stringField,
                secondaryFeatured: featuredSecondarySchema,
            }),
            cards: objectSchema({
                heading: stringField,
                subheading: stringField,
                items: arrayOf(serviceCardResponseSchema),
            }),
            benefits: objectSchema({
                heading: stringField,
                subheading: stringField,
                badge: statItemResponseSchema,
                items: arrayOf(iconTextItemResponseSchema),
            }),
            faq: objectSchema({
                heading: stringField,
                items: arrayOf(faqItemResponseSchema),
            }),
            finalCta: ctaResponseSchema,
        }),
        appointment: objectSchema({
            hero: objectSchema({
                badge: stringField,
                heading: stringField,
                body: stringField,
            }),
            schedules: objectSchema({
                heading: stringField,
                subheading: stringField,
                items: arrayOf(scheduleItemResponseSchema),
            }),
            whatsapp: objectSchema({
                heading: stringField,
                body: stringField,
                cta: stringField,
                whatsappUrl: stringField,
                features: arrayOf(stringField, 2),
            }),
            faq: objectSchema({
                heading: stringField,
                items: arrayOf(faqItemResponseSchema),
            }),
            finalCta: ctaResponseSchema,
        }),
    }),
});
