import {
    stringField,
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
    chamberImageResponseSchema,
    locationImageResponseSchema,
} from "./shared";

const treatmentCardSchema = objectSchema({
    badge: stringField,
    title: stringField,
    body: stringField,
    bullets: arrayOf(stringField, 2),
    cta: stringField,
    stat1Value: stringField,
    stat1Label: stringField,
    stat2Value: stringField,
    stat2Label: stringField,
});

export const templateThreeResponseSchema = objectSchema({
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
            highlights: objectSchema({
                items: arrayOf(statItemResponseSchema),
            }),
            aboutPreview: objectSchema({
                heading: stringField,
                headingHighlight: stringField,
                body: stringField,
                checklist: arrayOf(stringField, 3),
                linkLabel: stringField,
            }),
            servicesGrid: objectSchema({
                heading: stringField,
                subheading: stringField,
                items: arrayOf(serviceCardResponseSchema),
            }),
            whyTrust: objectSchema({
                heading: stringField,
                items: arrayOf(iconTextItemResponseSchema),
            }),
            howToStart: objectSchema({
                heading: stringField,
                subheading: stringField,
                steps: arrayOf(stepItemResponseSchema),
            }),
            mapLocation: objectSchema({
                heading: stringField,
                directionsCta: stringField,
                mapUrl: stringField,
                contact: objectSchema({
                    location: stringField,
                    phone: stringField,
                    hours: stringField,
                }),
                contactLabels: objectSchema({
                    location: stringField,
                    phone: stringField,
                    hours: stringField,
                }),
            }),
            finalCta: ctaResponseSchema,
        }),
        about: objectSchema({
            hero: objectSchema({
                badge: stringField,
                heading: stringField,
                body: stringField,
                experienceStat: stringField,
                livesTouchedStat: stringField,
                innovationsStat: stringField,
            }),
            journey: objectSchema({
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
            pillars: objectSchema({
                heading: stringField,
                subheading: stringField,
                cta: stringField,
                items: arrayOf(iconTextItemResponseSchema),
            }),
            locations: objectSchema({
                heading: stringField,
                items: arrayOf(locationImageResponseSchema),
            }),
            finalCta: ctaResponseSchema,
        }),
        services: objectSchema({
            hero: objectSchema({
                badge: stringField,
                heading: stringField,
                body: stringField,
            }),
            treatments: objectSchema({
                heading: stringField,
                subheading: stringField,
                cards: arrayOf(treatmentCardSchema),
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
            finalCta: ctaResponseSchema,
        }),
        appointment: objectSchema({
            hero: objectSchema({
                badge: stringField,
                heading: stringField,
                body: stringField,
            }),
            steps: objectSchema({
                items: arrayOf(stepItemResponseSchema),
            }),
            schedule: objectSchema({
                heading: stringField,
                subheading: stringField,
                legendAvailable: stringField,
                legendClosed: stringField,
                statusAvailable: stringField,
                statusClosed: stringField,
                items: arrayOf(scheduleItemResponseSchema),
            }),
            whatsapp: objectSchema({
                heading: stringField,
                body: stringField,
                cta: stringField,
                whatsappUrl: stringField,
                phoneDisplay: stringField,
            }),
            chambers: objectSchema({
                heading: stringField,
                items: arrayOf(chamberImageResponseSchema),
            }),
            faq: objectSchema({
                heading: stringField,
                items: arrayOf(faqItemResponseSchema),
            }),
        }),
    }),
});
