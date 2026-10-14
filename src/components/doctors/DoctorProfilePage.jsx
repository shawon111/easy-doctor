import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpenText,
  Calendar,
  CheckCircle2,
  Clock,
  ExternalLink,
  GraduationCap,
  Globe,
  HeartHandshake,
  Languages,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Stethoscope,
  UserCheck,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import DoctorShareButton from "@/components/doctors/DoctorShareButton";

const AVATAR_STYLES = [
  "bg-[#e8effb] text-[#234b7e]",
  "bg-[#f4eee1] text-[#86651a]",
  "bg-[#e9f2ee] text-[#2f6951]",
  "bg-[#f1eaf5] text-[#714c83]",
];

const getSafeImageUrl = (value) => {
  if (!value || typeof value !== "string") return null;
  return value.startsWith("http://") ||
    value.startsWith("https://") ||
    value.startsWith("/")
    ? value
    : null;
};

// website link resolution: check domain first, then subdomain fallback
const getWebsiteLink = (doctor) => {
  if (doctor?.domain && String(doctor.domain).trim()) {
    const domain = String(doctor.domain).trim();
    return domain.startsWith("http://") || domain.startsWith("https://")
      ? domain
      : `https://${domain}`;
  }
  if (doctor?.subdomain && String(doctor.subdomain).trim()) {
    const subdomain = String(doctor.subdomain).trim();
    const baseDomain = process.env.NEXT_PUBLIC_BASE_DOMAIN;
    if (baseDomain && !baseDomain.includes("localhost")) {
      return `https://${subdomain}.${baseDomain.replace(/^www\./, "")}`;
    }
    return `/doctor/${encodeURIComponent(subdomain)}`;
  }
  return null;
};

const getDegrees = (qualifications) => {
  if (Array.isArray(qualifications)) {
    return qualifications
      .map((q) => (typeof q === "string" ? q.trim() : q?.degree?.trim()))
      .filter(Boolean);
  }
  if (typeof qualifications === "string" && qualifications.trim()) {
    return qualifications.split(",").map((d) => d.trim()).filter(Boolean);
  }
  return [];
};

const formatPhoneForWhatsApp = (phone) => {
  if (!phone) return "";
  return String(phone).replace(/[^0-9]/g, "");
};

export default function DoctorProfilePage({ doctor }) {
  const name = doctor.name || "Doctor";
  const initials = name
    .replace(/^Dr\.\s*/i, "")
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const specialty = doctor.specialization || "Medical Specialist";
  const degrees = getDegrees(doctor.qualifications);
  const websiteUrl = getWebsiteLink(doctor);
  const imageUrl = getSafeImageUrl(doctor.profilePicture || doctor.image);

  const clinics = Array.isArray(doctor.clinicAddress) ? doctor.clinicAddress : [];
  const primaryClinic = clinics[0] || null;
  const primaryCity = primaryClinic?.city || "";
  const primaryCountry = primaryClinic?.country || "";
  const primaryLocation = [primaryCity, primaryCountry].filter(Boolean).join(", ");

  const treatments = Array.isArray(doctor.treatments) ? doctor.treatments : [];
  const languages = Array.isArray(doctor.languages) ? doctor.languages : [];
  const rawQualifications = Array.isArray(doctor.qualifications) ? doctor.qualifications : [];

  const whatsappNumber =
    primaryClinic?.whatsapp || doctor.phone || "";
  const cleanWhatsapp = formatPhoneForWhatsApp(whatsappNumber);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Breadcrumbs Navigation */}
      <nav
        aria-label="Breadcrumb"
        className="border-b border-slate-200/80 bg-white"
      >
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-3.5 text-xs font-medium text-slate-500 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="transition hover:text-slate-900"
          >
            Home
          </Link>
          <ChevronRight className="size-3.5 text-slate-400" aria-hidden="true" />
          <Link
            href="/doctors"
            className="transition hover:text-slate-900"
          >
            Find a Doctor
          </Link>
          {specialty ? (
            <>
              <ChevronRight className="size-3.5 text-slate-400" aria-hidden="true" />
              <Link
                href={`/doctors?specialty=${encodeURIComponent(specialty)}`}
                className="transition hover:text-slate-900"
              >
                {specialty}
              </Link>
            </>
          ) : null}
          <ChevronRight className="size-3.5 text-slate-400" aria-hidden="true" />
          <span className="truncate font-semibold text-slate-800" aria-current="page">
            Dr. {name}
          </span>
        </div>
      </nav>

      {/* Hero / Header Section */}
      <section className="relative overflow-hidden border-b border-slate-200/80 bg-white py-10 sm:py-14">
        <div className="pointer-events-none absolute -right-20 top-[-160px] size-[400px] rounded-full border border-blue-200/40" />
        <div className="pointer-events-none absolute -right-4 top-[-90px] size-[260px] rounded-full border border-[#d4af37]/15" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
            {/* Avatar / Portrait */}
            <div className="relative size-28 shrink-0 overflow-hidden rounded-[26px] bg-[#edf2f8] shadow-md ring-1 ring-slate-200/90 sm:size-36">
              {imageUrl ? (
                <Image
                  src={imageUrl}
                  alt={`Portrait of Dr. ${name}`}
                  fill
                  priority
                  sizes="(max-width: 640px) 112px, 144px"
                  unoptimized
                  className="object-cover"
                />
              ) : (
                <div
                  className={`flex size-full items-center justify-center text-3xl font-bold sm:text-4xl ${AVATAR_STYLES[0]}`}
                  aria-label={`Dr. ${name} profile placeholder`}
                >
                  {initials}
                </div>
              )}
            </div>

            {/* Profile Info */}
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  <ShieldCheck className="size-3.5 text-blue-600" aria-hidden="true" />
                  Verified Doctor Profile
                </span>
                {primaryCity ? (
                  <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
                    <MapPin className="size-3 text-slate-400" aria-hidden="true" />
                    {primaryCity}
                  </span>
                ) : null}
              </div>

              <h1 className="mt-3 text-2xl font-bold tracking-tight text-[#0F172A] sm:text-3xl lg:text-4xl">
                Dr. {name}
              </h1>

              <p className="mt-1.5 text-base font-semibold text-blue-600 sm:text-lg">
                {specialty} {primaryCity ? `in ${primaryCity}` : ""}
              </p>

              {/* Degrees Badges */}
              {degrees.length > 0 ? (
                <div className="mt-3 flex flex-wrap items-center gap-1.5">
                  <BookOpenText className="size-4 text-[#86651a]" aria-hidden="true" />
                  {degrees.map((degree, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center rounded-md bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-[#846719] ring-1 ring-inset ring-amber-600/20"
                    >
                      {degree}
                    </span>
                  ))}
                </div>
              ) : null}

              {/* Experience and Location details */}
              <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-slate-600 sm:text-sm">
                {Number.isFinite(doctor.experience) ? (
                  <span className="inline-flex items-center gap-1.5">
                    <UserCheck className="size-4 text-emerald-600" aria-hidden="true" />
                    <span>
                      <strong className="font-semibold text-slate-900">{doctor.experience}+ Years</strong>{" "}
                      Clinical Experience
                    </span>
                  </span>
                ) : null}

                {primaryLocation ? (
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="size-4 text-slate-400" aria-hidden="true" />
                    <span>{primaryLocation}</span>
                  </span>
                ) : null}

                {languages.length > 0 ? (
                  <span className="inline-flex items-center gap-1.5">
                    <Languages className="size-4 text-indigo-500" aria-hidden="true" />
                    <span>Speaks {languages.join(", ")}</span>
                  </span>
                ) : null}
              </div>

              {/* Actions Bar */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                {clinics.length > 0 ? (
                  <a
                    href="#chambers"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 text-xs font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100"
                  >
                    <Calendar className="size-4" aria-hidden="true" />
                    Book Appointment
                  </a>
                ) : null}

                {cleanWhatsapp ? (
                  <a
                    href={`https://wa.me/${cleanWhatsapp}?text=${encodeURIComponent(
                      `Hello Dr. ${name}, I found your profile on Docxio and would like to inquire about consultation.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 text-xs font-semibold text-emerald-800 transition hover:bg-emerald-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-100"
                  >
                    <MessageCircle className="size-4 text-emerald-600" aria-hidden="true" />
                    WhatsApp
                  </a>
                ) : null}

                {doctor.phone ? (
                  <a
                    href={`tel:${doctor.phone}`}
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-xs font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-100"
                  >
                    <Phone className="size-4 text-slate-500" aria-hidden="true" />
                    Call
                  </a>
                ) : null}

                {websiteUrl ? (
                  <a
                    href={websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#0F172A] px-4 text-xs font-semibold text-white transition hover:bg-[#1e3a5f] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
                  >
                    <Globe className="size-4" aria-hidden="true" />
                    Visit Official Website
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </a>
                ) : null}

                <DoctorShareButton doctorName={name} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Sidebar Grid */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Main Column */}
          <div className="space-y-8 lg:col-span-2">
            {/* About Doctor Section */}
            {doctor.bio ? (
              <section
                id="about"
                className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm sm:p-8"
              >
                <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
                  <UserCheck className="size-5 text-blue-600" aria-hidden="true" />
                  <h2 className="text-xl font-bold tracking-tight text-[#0F172A]">
                    About Dr. {name} - {specialty} {primaryCity ? `in ${primaryCity}` : ""}
                  </h2>
                </div>

                <div className="mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                  <p className="whitespace-pre-line">{doctor.bio}</p>
                </div>

                {languages.length > 0 ? (
                  <div className="mt-6 border-t border-slate-100 pt-5">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Languages Spoken
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {languages.map((lang, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center rounded-lg bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}
              </section>
            ) : null}

            {/* Qualifications Section */}
            {rawQualifications.length > 0 ? (
              <section
                id="qualifications"
                className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm sm:p-8"
              >
                <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
                  <GraduationCap className="size-5 text-amber-600" aria-hidden="true" />
                  <h2 className="text-xl font-bold tracking-tight text-[#0F172A]">
                    Medical Qualifications & Education
                  </h2>
                </div>

                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {rawQualifications.map((item, idx) => {
                    const degree = typeof item === "string" ? item : item.degree;
                    const institution = typeof item === "object" ? item.institution : "";
                    const year = typeof item === "object" ? item.year : "";

                    return (
                      <div
                        key={idx}
                        className="rounded-xl border border-slate-100 bg-[#FBFBFC] p-4 transition hover:border-amber-200 hover:bg-amber-50/20"
                      >
                        <p className="text-sm font-bold text-[#0F172A]">
                          {degree}
                        </p>
                        {institution ? (
                          <p className="mt-1 text-xs text-slate-600">
                            {institution}
                          </p>
                        ) : null}
                        {year ? (
                          <p className="mt-1 text-[11px] font-semibold text-amber-800">
                            Graduated {year}
                          </p>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </section>
            ) : null}

            {/* Specialized Treatments Section */}
            {treatments.length > 0 ? (
              <section
                id="treatments"
                className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm sm:p-8"
              >
                <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
                  <Stethoscope className="size-5 text-blue-600" aria-hidden="true" />
                  <h2 className="text-xl font-bold tracking-tight text-[#0F172A]">
                    Specialized Treatments & Clinical Expertise
                  </h2>
                </div>

                <p className="mt-3 text-xs text-slate-500">
                  Conditions, procedures, and specialized clinical care areas provided by Dr. {name}:
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {treatments.map((treatment, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 rounded-xl border border-blue-100 bg-blue-50/60 px-3.5 py-2 text-xs font-semibold text-blue-800"
                    >
                      <CheckCircle2 className="size-3.5 text-blue-600" aria-hidden="true" />
                      {treatment}
                    </span>
                  ))}
                </div>
              </section>
            ) : null}

            {/* Chambers, Visiting Hours & Addresses (SEO Anchor) */}
            <section
              id="chambers"
              className="scroll-mt-24 rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
                <MapPin className="size-5 text-rose-600" aria-hidden="true" />
                <h2 className="text-xl font-bold tracking-tight text-[#0F172A]">
                  Chambers, Visiting Hours & Appointments {primaryCity ? `in ${primaryCity}` : ""}
                </h2>
              </div>

              {clinics.length > 0 ? (
                <div className="mt-6 space-y-6">
                  {clinics.map((clinic, idx) => {
                    const clinicWhatsapp = formatPhoneForWhatsApp(clinic.whatsapp);
                    const mapQuery = encodeURIComponent(
                      `${clinic.chamberName || ""}, ${clinic.address || ""}, ${clinic.city || ""}, ${clinic.country || ""}`
                    );
                    const mapUrl = clinic.mapUrl || `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

                    return (
                      <div
                        key={idx}
                        className="rounded-xl border border-slate-200 bg-[#FAFAFC] p-5 sm:p-6"
                      >
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <h3 className="text-lg font-bold text-[#0F172A]">
                              {clinic.chamberName || `Chamber #${idx + 1}`}
                            </h3>
                            <p className="mt-1 text-sm text-slate-600">
                              {[clinic.address, clinic.city, clinic.country].filter(Boolean).join(", ")}
                            </p>
                          </div>
                          <span className="inline-flex w-fit items-center rounded-full bg-blue-100/80 px-2.5 py-0.5 text-xs font-semibold text-blue-800">
                            Chamber {idx + 1}
                          </span>
                        </div>

                        <div className="mt-4 grid grid-cols-1 gap-3 border-t border-slate-200/70 pt-4 text-xs sm:grid-cols-2">
                          {clinic.visitingDays ? (
                            <div className="flex items-center gap-2 text-slate-700">
                              <Calendar className="size-4 shrink-0 text-slate-400" aria-hidden="true" />
                              <span>
                                <strong className="font-semibold text-slate-900">Visiting Days:</strong>{" "}
                                {clinic.visitingDays}
                              </span>
                            </div>
                          ) : null}

                          {clinic.visitingHours ? (
                            <div className="flex items-center gap-2 text-slate-700">
                              <Clock className="size-4 shrink-0 text-slate-400" aria-hidden="true" />
                              <span>
                                <strong className="font-semibold text-slate-900">Visiting Hours:</strong>{" "}
                                {clinic.visitingHours}
                              </span>
                            </div>
                          ) : null}
                        </div>

                        <div className="mt-5 flex flex-wrap items-center gap-2.5 pt-2">
                          {clinicWhatsapp ? (
                            <a
                              href={`https://wa.me/${clinicWhatsapp}?text=${encodeURIComponent(
                                `Hello Dr. ${name}, I would like to book an appointment at ${clinic.chamberName || "your chamber"}.`
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex min-h-9 items-center gap-1.5 rounded-lg bg-emerald-600 px-3.5 text-xs font-semibold text-white shadow-sm transition hover:bg-emerald-700"
                            >
                              <MessageCircle className="size-3.5" aria-hidden="true" />
                              Book via WhatsApp
                            </a>
                          ) : null}

                          <a
                            href={mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-9 items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-50"
                          >
                            <MapPin className="size-3.5 text-rose-500" aria-hidden="true" />
                            Get Directions
                            <ExternalLink className="size-3 text-slate-400" aria-hidden="true" />
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p className="mt-5 text-sm text-slate-500">
                  Chamber and appointment information for Dr. {name} is currently being updated.
                </p>
              )}
            </section>

            {/* SEO-Rich FAQ Section */}
            <section
              id="faq"
              className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
                <Sparkles className="size-5 text-[#86651a]" aria-hidden="true" />
                <h2 className="text-xl font-bold tracking-tight text-[#0F172A]">
                  Frequently Asked Questions about Dr. {name}
                </h2>
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-xl border border-slate-100 bg-[#FBFBFC] p-4">
                  <h3 className="text-sm font-bold text-slate-900">
                    What is the medical specialty of Dr. {name}?
                  </h3>
                  <p className="mt-2 text-xs leading-6 text-slate-600 sm:text-sm">
                    Dr. {name} is a qualified specialist in {specialty}
                    {primaryLocation ? ` practicing in ${primaryLocation}` : ""}.
                    {degrees.length > 0 ? ` Qualifications include ${degrees.join(", ")}.` : ""}
                  </p>
                </div>

                <div className="rounded-xl border border-slate-100 bg-[#FBFBFC] p-4">
                  <h3 className="text-sm font-bold text-slate-900">
                    How can I book an appointment with Dr. {name}{primaryCity ? ` in ${primaryCity}` : ""}?
                  </h3>
                  <p className="mt-2 text-xs leading-6 text-slate-600 sm:text-sm">
                    You can consult Dr. {name} by contacting the clinic chambers directly through WhatsApp
                    {cleanWhatsapp ? ` (${whatsappNumber})` : ""} or by visiting the official doctor website.
                  </p>
                </div>

                {primaryClinic ? (
                  <div className="rounded-xl border border-slate-100 bg-[#FBFBFC] p-4">
                    <h3 className="text-sm font-bold text-slate-900">
                      Where is Dr. {name}&apos;s chamber located?
                    </h3>
                    <p className="mt-2 text-xs leading-6 text-slate-600 sm:text-sm">
                      Dr. {name}&apos;s primary chamber is at {primaryClinic.chamberName || "Clinic"} located at{" "}
                      {[primaryClinic.address, primaryClinic.city, primaryClinic.country].filter(Boolean).join(", ")}.
                      {primaryClinic.visitingHours ? ` Visiting hours are ${primaryClinic.visitingHours}.` : ""}
                    </p>
                  </div>
                ) : null}

                {treatments.length > 0 ? (
                  <div className="rounded-xl border border-slate-100 bg-[#FBFBFC] p-4">
                    <h3 className="text-sm font-bold text-slate-900">
                      What conditions and treatments does Dr. {name} specialize in?
                    </h3>
                    <p className="mt-2 text-xs leading-6 text-slate-600 sm:text-sm">
                      Dr. {name} provides comprehensive consultation and care in {treatments.slice(0, 6).join(", ")}.
                    </p>
                  </div>
                ) : null}
              </div>
            </section>
          </div>

          {/* Sidebar Column */}
          <aside className="space-y-6 lg:col-span-1">
            {/* Quick Contact & Booking Card */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm">
              <h3 className="text-base font-bold text-[#0F172A]">
                Quick Appointment
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                Direct patient consultation and inquiry options.
              </p>

              <div className="mt-5 space-y-3">
                {cleanWhatsapp ? (
                  <a
                    href={`https://wa.me/${cleanWhatsapp}?text=${encodeURIComponent(
                      `Hello Dr. ${name}, I would like to schedule an appointment.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 text-xs font-semibold text-white shadow-sm transition hover:bg-emerald-700"
                  >
                    <MessageCircle className="size-4" aria-hidden="true" />
                    Message on WhatsApp
                  </a>
                ) : null}

                {doctor.phone ? (
                  <a
                    href={`tel:${doctor.phone}`}
                    className="flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-xs font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
                  >
                    <Phone className="size-4 text-slate-500" aria-hidden="true" />
                    Call {doctor.phone}
                  </a>
                ) : null}

                <a
                  href="#chambers"
                  className="flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-4 text-xs font-semibold text-blue-700 transition hover:bg-blue-100"
                >
                  <Calendar className="size-4 text-blue-600" aria-hidden="true" />
                  View Chambers & Timings
                </a>
              </div>

              {primaryClinic ? (
                <div className="mt-5 border-t border-slate-100 pt-4 text-xs text-slate-600">
                  <p className="font-semibold text-slate-900">
                    {primaryClinic.chamberName}
                  </p>
                  <p className="mt-1 text-slate-500">
                    {[primaryClinic.city, primaryClinic.country].filter(Boolean).join(", ")}
                  </p>
                  {primaryClinic.visitingHours ? (
                    <p className="mt-1 text-slate-500">
                      Hours: {primaryClinic.visitingHours}
                    </p>
                  ) : null}
                </div>
              ) : null}
            </div>

            {/* Official Website Card */}
            {websiteUrl ? (
              <div className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-[#0F172A] p-6 text-white shadow-md">
                <div className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full border border-white/10" />
                <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/20 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-blue-300">
                  <Globe className="size-3" aria-hidden="true" />
                  Official Website
                </span>
                <h3 className="mt-3 text-lg font-bold">
                  Visit Dr. {name}&apos;s Personal Website
                </h3>
                <p className="mt-2 text-xs leading-5 text-slate-300">
                  Explore full clinical services, patient resources, and specialized health information on Dr. {name}&apos;s dedicated portal.
                </p>
                <a
                  href={websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-xl bg-white px-4 text-xs font-bold text-slate-900 shadow transition hover:bg-slate-100"
                >
                  Visit Official Portal
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
              </div>
            ) : null}

            {/* Verification & Trust Badge */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 text-emerald-700">
                <HeartHandshake className="size-5" aria-hidden="true" />
                <h3 className="text-xs font-bold uppercase tracking-wider">
                  Docxio Health Directory
                </h3>
              </div>
              <p className="mt-2 text-xs leading-5 text-slate-600">
                Doctor credentials and contact details are verified for patient discovery. Always contact the chamber to confirm appointment schedules.
              </p>
              <Link
                href="/doctors"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 transition hover:text-blue-800"
              >
                <ArrowLeft className="size-3.5" aria-hidden="true" />
                Back to All Doctors
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
