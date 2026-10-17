import { z } from "zod";

const qualificationSchema = z.object({
  degree: z.string().trim().min(1, "Degree is required"),
  institution: z.string().trim().min(1, "Institution is required"),
  year: z.coerce
    .number({ invalid_type_error: "Year is required" })
    .min(1950, "Enter a valid year")
    .max(new Date().getFullYear(), "Year cannot be in the future"),
});

const clinicAddressSchema = z.object({
  chamberName: z.string().trim().min(1, "Chamber name is required"),
  address: z.string().trim().min(1, "Address is required"),
  division: z.string().optional(),
  city: z.string().trim().min(1, "Select a city or town"),
  country: z.string().trim().min(1, "Country is required"),
  visitingHours: z
    .string()
    .regex(/^\d{2}:\d{2} - \d{2}:\d{2}$/, "Select opening and closing times"),
  visitingDays: z.string().trim().min(1, "Visiting days are required"),
  whatsapp: z.string().trim().optional().default(""),
  mapUrl: z.union([z.literal(""), z.string().trim().url("Enter a valid map URL")]).optional(),
});

const socialLinkSchema = z.object({
  platform: z.string().trim().min(1, "Platform is required"),
  url: z.string().trim().url("Enter a valid URL"),
});

const feesSchema = z.object({
  currency: z.string().trim().default("BDT"),
  consultationFee: z.preprocess(
    (val) => (val === "" || val === null || val === undefined ? 0 : Number(val)),
    z.number({ invalid_type_error: "First visit fee must be a number" }).min(0, "Fee cannot be negative")
  ),
  followUpFee: z.preprocess(
    (val) => (val === "" || val === null || val === undefined ? 0 : Number(val)),
    z.number({ invalid_type_error: "Follow-up fee must be a number" }).min(0, "Fee cannot be negative")
  ),
  followUpPeriod: z.string().trim().min(1, "Follow-up validity is required").default("Within 30 Days"),
  reportFee: z.preprocess(
    (val) => (val === "" || val === null || val === undefined ? 0 : Number(val)),
    z.number().min(0).optional().default(0)
  ),
  note: z.string().trim().max(500, "Note cannot exceed 500 characters").optional().default(""),
});

export const onboardingSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  email: z.string().trim().email("Enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  phone: z.string().trim().min(1, "Phone number is required"),
  profilePicture: z
    .union([z.literal(""), z.string().url("Enter a valid URL")])
    .optional(),
  specialization: z.string().trim().min(1, "Specialization is required"),
  qualifications: z
    .array(qualificationSchema)
    .min(1, "Add at least one qualification"),
  experience: z.preprocess(
    (val) =>
      val === "" || val === null || val === undefined ? undefined : Number(val),
    z
      .number({ invalid_type_error: "Experience must be a number" })
      .min(0, "Experience cannot be negative")
      .optional()
  ),
  clinicAddress: z
    .array(clinicAddressSchema)
    .min(1, "Add at least one clinic or chamber"),
  bookingPreferences: z.enum(["whatsapp", "bookingForm", "both"], {
    required_error: "Select a booking preference",
  }),
  fees: feesSchema,
  bio: z
    .string()
    .trim()
    .min(100, "Bio must be at least 100 characters")
    .max(1000, "Bio cannot exceed 1000 characters"),
  treatments: z
    .array(z.string().trim().min(1))
    .min(1, "Add at least one treatment"),
  languages: z
    .array(z.string().trim().min(1))
    .min(1, "Add at least one language"),
  socialLinks: z.array(socialLinkSchema).optional().default([]),
});

export const stepSchemas = [
  onboardingSchema.pick({
    name: true,
    email: true,
    password: true,
    phone: true,
    profilePicture: true,
  }),
  onboardingSchema.pick({
    specialization: true,
    experience: true,
  }),
  onboardingSchema.pick({ qualifications: true }),
  onboardingSchema.pick({
    clinicAddress: true,
    bookingPreferences: true,
    fees: true,
  }),
  onboardingSchema.pick({
    bio: true,
    treatments: true,
    languages: true,
  }),
  onboardingSchema.pick({ socialLinks: true }),
];

export const defaultValues = {
  name: "",
  email: "",
  password: "",
  phone: "",
  profilePicture: "",
  specialization: "",
  qualifications: [{ degree: "", institution: "", year: "" }],
  experience: "",
  clinicAddress: [
    {
      chamberName: "",
      address: "",
      division: "",
      city: "",
      country: "Bangladesh",
      visitingHours: "",
      visitingDays: "",
      whatsapp: "",
      mapUrl: ""
    },
  ],
  bookingPreferences: "whatsapp",
  fees: {
    currency: "BDT",
    consultationFee: 1000,
    followUpFee: 500,
    followUpPeriod: "Within 30 Days",
    reportFee: 0,
    note: "",
  },
  bio: "",
  treatments: [],
  languages: [],
  socialLinks: [],
};

export const STEPS = [
  { id: "account", title: "Your account", description: "The essentials to get started" },
  {
    id: "expertise",
    title: "Your expertise",
    description: "Specialty and experience",
  },
  { id: "education", title: "Education", description: "Degrees and credentials" },
  { id: "practice", title: "Practice & Fees", description: "Chambers, reachability, and consultation fees" },
  { id: "website", title: "Your website", description: "A little about your care" },
  { id: "social", title: "Online profiles", description: "Optional social links" },
];
