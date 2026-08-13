import mongoose from "mongoose";
import {
  chamberImageSchema,
  ctaSchema,
  faqItemSchema,
  iconTextItemSchema,
  imageSchema,
  linkItemSchema,
  serviceCardSchema,
  stepItemSchema,
  timelineItemSchema,
} from "@/lib/content/shared-schemas";

const credentialItemSchema = new mongoose.Schema(
  {
    icon: { type: String, trim: true },
    title: { type: String, trim: true },
    detail: { type: String, trim: true },
  },
  { _id: false }
);

const templateTwoContentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    header: {
      navLinks: [
        {
          label: { type: String, trim: true },
          href: { type: String, trim: true },
          key: { type: String, trim: true },
        },
      ],
      appointmentCta: { type: String, trim: true },
    },
    footer: {
      tagline: { type: String, trim: true },
      copyright: { type: String, trim: true },
      resourceLinks: [linkItemSchema],
      legalLinks: [linkItemSchema],
    },
    pages: {
      home: {
        hero: {
          badge: { type: String, trim: true },
          heading: { type: String, trim: true },
          credentialsLine: { type: String, trim: true },
          body: { type: String, trim: true },
          primaryCta: { type: String, trim: true },
          secondaryCta: { type: String, trim: true },
          imageAlt: { type: String, trim: true },
        },
        credentials: {
          heading: { type: String, trim: true },
          subheading: { type: String, trim: true },
          items: [credentialItemSchema],
        },
        treatments: {
          heading: { type: String, trim: true },
          subheading: { type: String, trim: true },
          items: [serviceCardSchema],
        },
        timeline: {
          heading: { type: String, trim: true },
          subheading: { type: String, trim: true },
          items: [timelineItemSchema],
        },
        onboarding: {
          heading: { type: String, trim: true },
          subheading: { type: String, trim: true },
          steps: [stepItemSchema],
        },
        chamber: {
          heading: { type: String, trim: true },
          subheading: { type: String, trim: true },
          imageAlt: { type: String, trim: true },
        },
        finalCta: ctaSchema,
      },
      about: {
        hero: {
          badge: { type: String, trim: true },
          heading: { type: String, trim: true },
          body: { type: String, trim: true },
          imageAlt: { type: String, trim: true },
        },
        story: {
          heading: { type: String, trim: true },
          body: { type: String, trim: true },
          quote: { type: String, trim: true },
          quoteAuthor: { type: String, trim: true },
        },
        timeline: {
          heading: { type: String, trim: true },
          subheading: { type: String, trim: true },
          items: [timelineItemSchema],
        },
        qualifications: {
          heading: { type: String, trim: true },
          subheading: { type: String, trim: true },
          items: [credentialItemSchema],
        },
        practices: {
          heading: { type: String, trim: true },
          subheading: { type: String, trim: true },
          items: [iconTextItemSchema],
        },
        finalCta: ctaSchema,
      },
      services: {
        hero: {
          badge: { type: String, trim: true },
          heading: { type: String, trim: true },
          body: { type: String, trim: true },
        },
        featured: {
          badge: { type: String, trim: true },
          heading: { type: String, trim: true },
          body: { type: String, trim: true },
          cta: { type: String, trim: true },
          imageAlt: { type: String, trim: true },
        },
        cards: {
          heading: { type: String, trim: true },
          subheading: { type: String, trim: true },
          items: [serviceCardSchema],
        },
        benefits: {
          heading: { type: String, trim: true },
          subheading: { type: String, trim: true },
          items: [iconTextItemSchema],
        },
        faq: {
          heading: { type: String, trim: true },
          items: [faqItemSchema],
        },
        finalCta: ctaSchema,
      },
      appointment: {
        hero: {
          badge: { type: String, trim: true },
          heading: { type: String, trim: true },
          body: { type: String, trim: true },
        },
        schedules: {
          heading: { type: String, trim: true },
          subheading: { type: String, trim: true },
        },
        whatsapp: {
          heading: { type: String, trim: true },
          body: { type: String, trim: true },
          cta: { type: String, trim: true },
          features: [{ type: String, trim: true }],
        },
        faq: {
          heading: { type: String, trim: true },
          items: [faqItemSchema],
        },
        finalCta: ctaSchema,
      },
    },
  },
  { timestamps: true }
);

const TemplateTwoContent =
  mongoose.models.TemplateTwoContent ||
  mongoose.model("TemplateTwoContent", templateTwoContentSchema);

export default TemplateTwoContent;
