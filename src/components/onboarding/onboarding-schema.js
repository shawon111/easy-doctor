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
  city: z.string().trim().min(1, "City is required"),
  country: z.string().trim().min(1, "Country is required"),
  visitingHours: z.string().trim().min(1, "Visiting hours are required"),
  visitingDays: z.string().trim().min(1, "Visiting days are required"),
});

const socialLinkSchema = z.object({
  platform: z.string().trim().min(1, "Platform is required"),
  url: z.string().trim().url("Enter a valid URL"),
});

export const onboardingSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  email: z.string().trim().email("Enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  phone: z.string().optional(),
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
    qualifications: true,
    experience: true,
  }),
  onboardingSchema.pick({
    clinicAddress: true,
    bookingPreferences: true,
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
      city: "",
      country: "",
      visitingHours: "",
      visitingDays: "",
    },
  ],
  bookingPreferences: "whatsapp",
  bio: "",
  treatments: [],
  languages: [],
  socialLinks: [],
};

export const STEPS = [
  { id: "account", title: "Account", description: "Your login details" },
  {
    id: "professional",
    title: "Professional",
    description: "Qualifications & specialty",
  },
  { id: "clinic", title: "Clinic", description: "Chambers & booking" },
  { id: "profile", title: "Profile", description: "Bio & services" },
  { id: "social", title: "Social", description: "Optional links" },
];
