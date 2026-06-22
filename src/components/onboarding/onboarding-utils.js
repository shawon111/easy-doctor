export const STEP_FIELDS = [
  ["name", "email", "password", "phone", "profilePicture"],
  ["specialization", "qualifications", "experience"],
  ["clinicAddress", "bookingPreferences"],
  ["bio", "treatments", "languages"],
  ["socialLinks"],
];

export const BOOKING_OPTIONS = [
  {
    value: "whatsapp",
    label: "WhatsApp",
    description: "Patients book via WhatsApp message",
  },
  {
    value: "bookingForm",
    label: "Booking form",
    description: "Patients use an on-site booking form",
  },
  {
    value: "both",
    label: "Both",
    description: "Offer WhatsApp and a booking form",
  },
];

export const SOCIAL_PLATFORMS = [
  "Facebook",
  "Instagram",
  "LinkedIn",
  "X (Twitter)",
  "YouTube",
  "TikTok",
  "Other",
];
