import mongoose from "mongoose";
import {
  chamberImageSchema,
  ctaSchema,
  faqItemSchema,
  iconTextItemSchema,
  imageSchema,
  linkItemSchema,
  locationImageSchema,
  serviceCardSchema,
  statItemSchema,
  stepItemSchema,
  timelineItemSchema,
} from "@/lib/content/shared-schemas";

const templateThreeContentSchema = new mongoose.Schema(
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
      newsletter: {
        heading: { type: String, trim: true },
        body: { type: String, trim: true },
        placeholder: { type: String, trim: true },
        buttonLabel: { type: String, trim: true },
      },
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
        highlights: {
          items: [statItemSchema],
        },
        aboutPreview: {
          heading: { type: String, trim: true },
          headingHighlight: { type: String, trim: true },
          body: { type: String, trim: true },
          checklist: [{ type: String, trim: true }],
          linkLabel: { type: String, trim: true },
          images: [imageSchema],
        },
        servicesGrid: {
          heading: { type: String, trim: true },
          subheading: { type: String, trim: true },
          items: [serviceCardSchema],
        },
        whyTrust: {
          heading: { type: String, trim: true },
          items: [iconTextItemSchema],
        },
        howToStart: {
          heading: { type: String, trim: true },
          subheading: { type: String, trim: true },
          steps: [stepItemSchema],
        },
        mapLocation: {
          heading: { type: String, trim: true },
          directionsCta: { type: String, trim: true },
          mapImage: imageSchema,
          contactLabels: {
            location: { type: String, trim: true },
            phone: { type: String, trim: true },
            hours: { type: String, trim: true },
          },
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
        journey: {
          heading: { type: String, trim: true },
          body: { type: String, trim: true },
          quote: { type: String, trim: true },
          quoteAuthor: { type: String, trim: true },
          imageAlt: { type: String, trim: true },
        },
        timeline: {
          heading: { type: String, trim: true },
          subheading: { type: String, trim: true },
          items: [timelineItemSchema],
        },
        pillars: {
          heading: { type: String, trim: true },
          subheading: { type: String, trim: true },
          cta: { type: String, trim: true },
          items: [iconTextItemSchema],
        },
        locations: {
          heading: { type: String, trim: true },
          items: [locationImageSchema],
        },
        finalCta: ctaSchema,
      },
      services: {
        hero: {
          badge: { type: String, trim: true },
          heading: { type: String, trim: true },
          body: { type: String, trim: true },
        },
        treatments: {
          heading: { type: String, trim: true },
          subheading: { type: String, trim: true },
          cards: [
            {
              badge: { type: String, trim: true },
              title: { type: String, trim: true },
              body: { type: String, trim: true },
              bullets: [{ type: String, trim: true }],
              cta: { type: String, trim: true },
              image: { type: String, trim: true },
              stat1Value: { type: String, trim: true },
              stat1Label: { type: String, trim: true },
              stat2Value: { type: String, trim: true },
              stat2Label: { type: String, trim: true },
            },
          ],
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
        steps: {
          items: [stepItemSchema],
        },
        schedule: {
          heading: { type: String, trim: true },
          subheading: { type: String, trim: true },
          legendAvailable: { type: String, trim: true },
          legendClosed: { type: String, trim: true },
          statusAvailable: { type: String, trim: true },
          statusClosed: { type: String, trim: true },
        },
        whatsapp: {
          heading: { type: String, trim: true },
          body: { type: String, trim: true },
          cta: { type: String, trim: true },
        },
        chambers: {
          heading: { type: String, trim: true },
          items: [chamberImageSchema],
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

const TemplateThreeContent =
  mongoose.models.TemplateThreeContent ||
  mongoose.model("TemplateThreeContent", templateThreeContentSchema);

export default TemplateThreeContent;
