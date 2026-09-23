// Static/mock data only — no API calls, no persistence.

export const doctor = {
  name: "Dr. Farhana Rahman",
  credentials: "MBBS, FCPS (Medicine), MD (Cardiology)",
  specialty: "Cardiologist & Internal Medicine Specialist",
  designation: "Associate Professor, Cardiology, Dhaka Medical College Hospital",
  experienceYears: 14,
  photoInitials: "FR",
  bio: "Dr. Farhana Rahman specializes in preventive cardiology, hypertension management, and post-cardiac-event care, with over a decade of clinical experience in Dhaka.",
  languages: ["Bangla", "English"],
};

export const chambers = [
  {
    id: "dhanmondi",
    name: "Popular Diagnostic Centre",
    area: "Dhanmondi, Dhaka",
    address: "House 16, Road 2, Dhanmondi, Dhaka 1205",
    visitingDays: "Sat, Mon, Wed",
    visitingHours: "6:00 PM – 9:00 PM",
    fee: "৳1,000",
  },
  {
    id: "uttara",
    name: "Ibn Sina Diagnostic & Consultation Center",
    area: "Uttara, Dhaka",
    address: "Sector 7, Uttara, Dhaka 1230",
    visitingDays: "Sun, Tue, Thu",
    visitingHours: "5:00 PM – 8:00 PM",
    fee: "৳1,200",
  },
  {
    id: "mirpur",
    name: "Al-Manar Hospital",
    area: "Mirpur, Dhaka",
    address: "Mirpur-10, Dhaka 1216",
    visitingDays: "Fri",
    visitingHours: "10:00 AM – 1:00 PM",
    fee: "৳800",
  },
];

// Next 6 selectable dates (mock — generated relative to a fixed reference so
// the UI has something realistic to show).
export const availableDates = [
  { id: "d1", label: "Today", weekday: "Wed", day: "24", month: "Sep" },
  { id: "d2", label: "Tomorrow", weekday: "Thu", day: "25", month: "Sep" },
  { id: "d3", label: null, weekday: "Sat", day: "27", month: "Sep" },
  { id: "d4", label: null, weekday: "Mon", day: "29", month: "Sep" },
  { id: "d5", label: null, weekday: "Wed", day: "01", month: "Oct" },
  { id: "d6", label: null, weekday: "Sat", day: "04", month: "Oct" },
];

// Serial numbers for a given day. Status: "available" | "booked".
// In a real implementation this would depend on chamber + date.
export const generateSerials = (total = 30, bookedCount = 12) => {
  const serials = [];
  for (let i = 1; i <= total; i++) {
    serials.push({
      number: i,
      status: i <= bookedCount ? "booked" : "available",
    });
  }
  return serials;
};

export const nextAvailableSerial = (serials) => {
  const next = serials.find((s) => s.status === "available");
  return next ? next.number : null;
};
