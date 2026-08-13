import mongoose from "mongoose";
import {
  ctaSchema,
  faqItemSchema,
  iconTextItemSchema,
  imageSchema,
  linkItemSchema,
  serviceCardSchema,
  statItemSchema,
  stepItemSchema,
  timelineItemSchema,
} from "@/lib/content/shared-schemas";

const trustBadgeSchema = new mongoose.Schema(
  {
    icon: { type: String, trim: true },
    stat: { type: String, trim: true },
    label: { type: String, trim: true },
  },
  { _id: false }
);

const templateOneContentSchema = new mongoose.Schema(
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
      officeHoursLabel: { type: String, trim: true },
      urgentCareLabel: { type: String, trim: true },
      urgentCareNote: { type: String, trim: true },
      resourceLinks: [linkItemSchema],
      legalLinks: [linkItemSchema],
    },
    pages: {
      home: {
        hero: {
          badge: { type: String, trim: true },
          heading: { type: String, trim: true },
          headingHighlight: { type: String, trim: true },
          body: { type: String, trim: true },
          primaryCta: { type: String, trim: true },
          secondaryCta: { type: String, trim: true },
          imageAlt: { type: String, trim: true },
          statCard: {
            value: { type: String, trim: true },
            label: { type: String, trim: true },
          },
        },
        trustBadges: {
          items: [trustBadgeSchema],
        },
        aboutPreview: {
          heading: { type: String, trim: true },
          body: { type: String, trim: true },
          linkLabel: { type: String, trim: true },
          imageAlt: { type: String, trim: true },
        },
        services: {
          heading: { type: String, trim: true },
          subheading: { type: String, trim: true },
          items: [serviceCardSchema],
        },
        whyChooseUs: {
          heading: { type: String, trim: true },
          items: [iconTextItemSchema],
          quote: { type: String, trim: true },
          quoteAuthor: { type: String, trim: true },
        },
        appointmentProcess: {
          heading: { type: String, trim: true },
          subheading: { type: String, trim: true },
          steps: [stepItemSchema],
        },
        clinicLocations: {
          heading: { type: String, trim: true },
          subheading: { type: String, trim: true },
          mapImages: [imageSchema],
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
        philosophy: {
          quote: { type: String, trim: true },
          author: { type: String, trim: true },
        },
        bioStats: {
          heading: { type: String, trim: true },
          stats: [statItemSchema],
        },
        timeline: {
          heading: { type: String, trim: true },
          subheading: { type: String, trim: true },
          items: [timelineItemSchema],
        },
        chambers: {
          heading: { type: String, trim: true },
          subheading: { type: String, trim: true },
        },
        finalCta: ctaSchema,
      },
      services: {
        hero: {
          badge: { type: String, trim: true },
          heading: { type: String, trim: true },
          body: { type: String, trim: true },
        },
        treatmentsGrid: {
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
        ctaBanner: ctaSchema,
      },
      appointment: {
        hero: {
          badge: { type: String, trim: true },
          heading: { type: String, trim: true },
          body: { type: String, trim: true },
        },
        howItWorks: {
          heading: { type: String, trim: true },
          subheading: { type: String, trim: true },
          steps: [stepItemSchema],
        },
        schedule: {
          heading: { type: String, trim: true },
          subheading: { type: String, trim: true },
        },
        whatsappCta: {
          heading: { type: String, trim: true },
          body: { type: String, trim: true },
          cta: { type: String, trim: true },
          features: [{ type: String, trim: true }],
        },
        faq: {
          heading: { type: String, trim: true },
          items: [faqItemSchema],
        },
      },
    },
  },
  { timestamps: true }
);

const TemplateOneContent =
  mongoose.models.TemplateOneContent ||
  mongoose.model("TemplateOneContent", templateOneContentSchema);

export default TemplateOneContent;
