export const stringField = {
    type: "string",
};

export const numberField = {
    type: "number",
};

export const booleanField = {
    type: "boolean",
};

export const stringArrayField = {
    type: "array",
    items: {
        type: "string",
    },
};

export const linkItemResponseSchema = {
    type: "object",
    properties: {
        label: stringField,
        href: stringField,
    },
};

export const faqItemResponseSchema = {
    type: "object",
    properties: {
        question: stringField,
        answer: stringField,
        openByDefault: booleanField,
    },
};

export const scheduleItemResponseSchema = {
    type: "object",
    properties: {
        location: stringField,
        day: stringField,
        hours: stringField,
        available: booleanField,
    },
};

export const imageResponseSchema = {
    type: "object",
    properties: {
        imageUrl: stringField,
        imageAlt: stringField,
    },
};

export const ctaResponseSchema = {
    type: "object",
    properties: {
        heading: stringField,
        body: stringField,
        primaryCta: stringField,
        secondaryCta: stringField,
    },
};

export const statItemResponseSchema = {
    type: "object",
    properties: {
        value: stringField,
        label: stringField,
        color: stringField,
    },
};

export const iconTextItemResponseSchema = {
    type: "object",
    properties: {
        icon: stringField,
        number: stringField,
        title: stringField,
        description: stringField,
        imageUrl: stringField,
        imageAlt: stringField,
    },
};

export const serviceCardResponseSchema = {
    type: "object",
    properties: {
        icon: stringField,
        title: stringField,
        description: stringField,
        href: stringField,
        iconClass: stringField,
        imageUrl: stringField,
        imageAlt: stringField,
    },
};

export const stepItemResponseSchema = {
    type: "object",
    properties: {
        number: stringField,
        icon: stringField,
        title: stringField,
        description: stringField,
        active: booleanField,
    },
};

export const timelineItemResponseSchema = {
    type: "object",
    properties: {
        period: stringField,
        title: stringField,
        description: stringField,
        mobileDescription: stringField,
        imageUrl: stringField,
        imageAlt: stringField,
        reverse: booleanField,
    },
};

export const chamberImageResponseSchema = {
    type: "object",
    properties: {
        label: stringField,
        title: stringField,
        imageUrl: stringField,
        imageAlt: stringField,
    },
};

export const locationImageResponseSchema = {
    type: "object",
    properties: {
        city: stringField,
        subtitle: stringField,
        imageUrl: stringField,
        imageAlt: stringField,
    },
};