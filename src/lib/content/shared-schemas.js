import mongoose from "mongoose";

export const faqItemSchema = new mongoose.Schema(
  {
    question: { type: String, trim: true },
    answer: { type: String, trim: true },
    openByDefault: { type: Boolean, default: false },
  },
  { _id: false }
);

export const linkItemSchema = new mongoose.Schema(
  {
    label: { type: String, trim: true },
    href: { type: String, trim: true },
  },
  { _id: false }
);

export const imageSchema = new mongoose.Schema(
  {
    src: { type: String, trim: true },
    alt: { type: String, trim: true },
  },
  { _id: false }
);

export const ctaSchema = new mongoose.Schema(
  {
    heading: { type: String, trim: true },
    body: { type: String, trim: true },
    primaryCta: { type: String, trim: true },
    secondaryCta: { type: String, trim: true },
  },
  { _id: false }
);

export const statItemSchema = new mongoose.Schema(
  {
    value: { type: String, trim: true },
    label: { type: String, trim: true },
    color: { type: String, trim: true },
  },
  { _id: false }
);

export const iconTextItemSchema = new mongoose.Schema(
  {
    icon: { type: String, trim: true },
    title: { type: String, trim: true },
    description: { type: String, trim: true },
  },
  { _id: false }
);

export const serviceCardSchema = new mongoose.Schema(
  {
    icon: { type: String, trim: true },
    title: { type: String, trim: true },
    description: { type: String, trim: true },
    iconClass: { type: String, trim: true },
  },
  { _id: false }
);

export const stepItemSchema = new mongoose.Schema(
  {
    number: { type: String, trim: true },
    icon: { type: String, trim: true },
    title: { type: String, trim: true },
    description: { type: String, trim: true },
    active: { type: Boolean, default: false },
  },
  { _id: false }
);

export const timelineItemSchema = new mongoose.Schema(
  {
    period: { type: String, trim: true },
    title: { type: String, trim: true },
    description: { type: String, trim: true },
    mobileDescription: { type: String, trim: true },
    image: { type: String, trim: true },
    alt: { type: String, trim: true },
    reverse: { type: Boolean, default: false },
  },
  { _id: false }
);

export const chamberImageSchema = new mongoose.Schema(
  {
    label: { type: String, trim: true },
    title: { type: String, trim: true },
    image: { type: String, trim: true },
    alt: { type: String, trim: true },
  },
  { _id: false }
);

export const locationImageSchema = new mongoose.Schema(
  {
    city: { type: String, trim: true },
    subtitle: { type: String, trim: true },
    image: { type: String, trim: true },
    alt: { type: String, trim: true },
  },
  { _id: false }
);
