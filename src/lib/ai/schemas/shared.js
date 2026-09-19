export const stringField = {
    type: "string",
};

export const numberField = {
    type: "number",
};

export const booleanField = {
    type: "boolean",
};

export function objectSchema(properties) {
    return {
        type: "object",
        properties,
        required: Object.keys(properties),
    };
}

export function arrayOf(itemSchema) {
    return {
        type: "array",
        items: itemSchema,
    };
}

export const stringArrayField = {
    type: "array",
    items: {
        type: "string",
    },
};

export const faqItemResponseSchema = objectSchema({
    question: stringField,
    answer: stringField,
    openByDefault: booleanField,
});

export const scheduleItemResponseSchema = objectSchema({
    location: stringField,
    day: stringField,
    hours: stringField,
    available: booleanField,
});

export const ctaResponseSchema = objectSchema({
    heading: stringField,
    body: stringField,
    primaryCta: stringField,
    secondaryCta: stringField,
});

export const statItemResponseSchema = objectSchema({
    value: stringField,
    label: stringField,
    color: stringField,
});

export const iconTextItemResponseSchema = objectSchema({
    number: stringField,
    title: stringField,
    description: stringField,
});

export const serviceCardResponseSchema = objectSchema({
    title: stringField,
    description: stringField,
    href: stringField,
});

export const stepItemResponseSchema = objectSchema({
    number: stringField,
    title: stringField,
    description: stringField,
    active: booleanField,
});

export const timelineItemResponseSchema = objectSchema({
    period: stringField,
    title: stringField,
    description: stringField,
    mobileDescription: stringField,
    reverse: booleanField,
});

export const chamberImageResponseSchema = objectSchema({
    label: stringField,
    title: stringField,
});

export const locationImageResponseSchema = objectSchema({
    city: stringField,
    subtitle: stringField,
});
