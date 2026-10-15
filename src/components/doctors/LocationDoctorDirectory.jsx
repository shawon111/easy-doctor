"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpenText,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  HeartPulse,
  HelpCircle,
  MapPin,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";

const AVATAR_STYLES = [
  "bg-[#e8effb] text-[#234b7e]",
  "bg-[#f4eee1] text-[#86651a]",
  "bg-[#e9f2ee] text-[#2f6951]",
  "bg-[#f1eaf5] text-[#714c83]",
];

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
    return qualifications
      .split(",")
      .map((d) => d.trim())
      .filter(Boolean);
  }
  return [];
};

function DoctorAvatar({ doctor, index }) {
  const name = doctor.name || "Doctor";
  const initials = name
    .replace(/^Dr\.\s*/i, "")
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="relative size-20 shrink-0 overflow-hidden rounded-[22px] bg-[#edf2f8] ring-1 ring-slate-200/80">
      {doctor.profilePicture ? (
        <Image
          src={doctor.profilePicture}
          alt={`Portrait of ${name}`}
          fill
          sizes="80px"
          unoptimized
          className="object-cover"
        />
      ) : (
        <div
          className={`flex size-full items-center justify-center text-xl font-bold ${
            AVATAR_STYLES[index % AVATAR_STYLES.length]
          }`}
          aria-label={`${name} profile placeholder`}
        >
          {initials}
        </div>
      )}
    </div>
  );
}

export default function LocationDoctorDirectory({
  doctors = [],
  cityName,
  citySlug,
  specialtyName = "",
  specialtySlug = "",
  availableSpecialties = [],
  otherLocations = [],
  otherCitiesWithSpecialty = [],
}) {
  const isSpecialtyPage = Boolean(specialtySlug);
  const totalInCity = availableSpecialties.reduce((sum, item) => sum + item.count, 0) || doctors.length;

  const faqs = isSpecialtyPage
    ? [
        {
          q: `How do I book an appointment with a ${specialtyName} in ${cityName}?`,
          a: `You can view all verified ${specialtyName} chambers in ${cityName} above. Click on "Profile" or "Website" on any doctor's card to check direct WhatsApp booking or schedule an in-person consultation serial.`,
        },
        {
          q: `What are the visiting hours for ${specialtyName}s in ${cityName}?`,
          a: `Each doctor card displays their active chambers, visiting days (e.g. Sunday to Thursday), and evening or morning consultation hours in ${cityName}.`,
        },
        {
          q: `Are all listed ${specialtyName}s in ${cityName} verified?`,
          a: `Yes, all medical doctors and specialists listed on Docxio are licensed practitioners with validated qualifications and authentic clinic addresses.`,
        },
      ]
    : [
        {
          q: `How can I find the best doctor chamber in ${cityName}?`,
          a: `Browse our verified directory of doctors in ${cityName}. Filter by specialty, compare degrees, check visiting days, and visit their official practice websites to schedule consultations.`,
        },
        {
          q: `Which medical specialties are available in ${cityName}?`,
          a: `Doctors in ${cityName} cover key specialties including ${availableSpecialties
            .slice(0, 5)
            .map((s) => s.specialty)
            .join(", ")}${availableSpecialties.length > 5 ? ", and more" : ""}. Use the specialty filters above to explore.`,
        },
        {
          q: `Is Docxio free for patients searching in ${cityName}?`,
          a: `Yes, Docxio is completely free for patients to search, find chamber locations, check visiting schedules, and connect with physicians in ${cityName}.`,
        },
      ];

  return (
    <div className="space-y-12 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-blue-50/50 via-white to-white px-4 pt-10 pb-12 sm:px-6 sm:pt-14 sm:pb-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500"
          >
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <ChevronRight className="size-3.5 text-slate-400" />
            <Link href="/doctors" className="hover:text-blue-600">
              Find a Doctor
            </Link>
            <ChevronRight className="size-3.5 text-slate-400" />
            {isSpecialtyPage ? (
              <>
                <Link
                  href={`/doctors/in/${citySlug}`}
                  className="hover:text-blue-600"
                >
                  {cityName}
                </Link>
                <ChevronRight className="size-3.5 text-slate-400" />
                <span className="font-semibold text-slate-900">
                  {specialtyName}
                </span>
              </>
            ) : (
              <span className="font-semibold text-slate-900">{cityName}</span>
            )}
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-3 py-1 text-xs font-semibold text-blue-700 shadow-sm">
              <ShieldCheck className="size-3.5 text-blue-600" />
              Verified Chambers · {cityName}, Bangladesh
            </div>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              {isSpecialtyPage
                ? `Best ${specialtyName}s in ${cityName}`
                : `Doctors & Specialists in ${cityName}`}
            </h1>

            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              {isSpecialtyPage
                ? `Find top verified ${specialtyName.toLowerCase()}s with chambers in ${cityName}. Check visiting days, consultation hours, degree credentials, and book appointments directly.`
                : `Discover trusted doctors, medical specialists, and chamber locations in ${cityName}, Bangladesh. Compare visiting schedules and contact clinics directly.`}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-600">
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-1.5 text-slate-800">
                <Stethoscope className="size-4 text-blue-600" />
                {doctors.length} {doctors.length === 1 ? "Doctor" : "Doctors"} Available
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-1.5 text-slate-800">
                <HeartPulse className="size-4 text-emerald-600" />
                {availableSpecialties.length} Specialties in {cityName}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-1.5 text-slate-800">
                <CheckCircle2 className="size-4 text-blue-600" />
                100% Free Patient Directory
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Specialty Filter Bar */}
        {availableSpecialties.length > 0 ? (
          <section className="mb-10">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500">
                Specialties in {cityName}
              </h2>
              {isSpecialtyPage ? (
                <Link
                  href={`/doctors/in/${citySlug}`}
                  className="text-xs font-semibold text-blue-600 hover:underline"
                >
                  View all in {cityName}
                </Link>
              ) : null}
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              <Link
                href={`/doctors/in/${citySlug}`}
                className={`rounded-xl border px-3.5 py-2 text-xs font-medium transition-all ${
                  !isSpecialtyPage
                    ? "border-blue-600 bg-blue-600 text-white shadow-sm"
                    : "border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-blue-50"
                }`}
              >
                All Specialties ({totalInCity})
              </Link>
              {availableSpecialties.map((item) => {
                const isActive = specialtySlug === item.slug;
                return (
                  <Link
                    key={item.slug}
                    href={`/doctors/in/${citySlug}/${item.slug}`}
                    className={`rounded-xl border px-3.5 py-2 text-xs font-medium transition-all ${
                      isActive
                        ? "border-blue-600 bg-blue-600 text-white shadow-sm"
                        : "border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-blue-50"
                    }`}
                  >
                    {item.specialty} ({item.count})
                  </Link>
                );
              })}
            </div>
          </section>
        ) : null}

        {/* Doctors Grid */}
        <section aria-labelledby="doctors-grid-heading">
          <h2 id="doctors-grid-heading" className="sr-only">
            List of Doctors in {cityName}
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {doctors.map((doctor, index) => {
              const degrees = getDegrees(doctor.qualifications);
              const websiteUrl = getWebsiteLink(doctor);
              const profileSlug = doctor.slug || doctor.subdomain;
              const matchingClinic =
                doctor.clinicAddress?.find(
                  (c) => c?.city?.toLowerCase() === cityName.toLowerCase()
                ) || doctor.clinicAddress?.[0];

              return (
                <article
                  key={doctor._id || index}
                  className="group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md sm:p-6"
                >
                  <div>
                    {/* Top row: Avatar & Basic info */}
                    <div className="flex items-start gap-3.5">
                      {profileSlug ? (
                        <Link href={`/doctors/${profileSlug}`}>
                          <DoctorAvatar doctor={doctor} index={index} />
                        </Link>
                      ) : (
                        <DoctorAvatar doctor={doctor} index={index} />
                      )}
                      <div className="min-w-0 flex-1">
                        {profileSlug ? (
                          <Link href={`/doctors/${profileSlug}`}>
                            <h3 className="truncate text-base font-bold text-slate-900 group-hover:text-blue-600">
                              Dr. {doctor.name}
                            </h3>
                          </Link>
                        ) : (
                          <h3 className="truncate text-base font-bold text-slate-900">
                            Dr. {doctor.name}
                          </h3>
                        )}
                        {doctor.specialization ? (
                          <p className="mt-0.5 text-xs font-semibold text-blue-600">
                            {doctor.specialization}
                          </p>
                        ) : null}
                        {matchingClinic?.chamberName ? (
                          <p className="mt-1.5 flex items-center gap-1 truncate text-xs text-slate-500">
                            <MapPin className="size-3 shrink-0 text-slate-400" />
                            <span className="truncate">
                              {matchingClinic.chamberName}
                            </span>
                          </p>
                        ) : null}
                      </div>
                    </div>

                    {/* Degrees */}
                    {degrees.length > 0 ? (
                      <div className="mt-4 flex flex-wrap gap-1 border-t border-slate-100 pt-3">
                        {degrees.slice(0, 3).map((deg, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center rounded-md bg-amber-50 px-2 py-0.5 text-[11px] font-medium text-amber-800 ring-1 ring-amber-600/20"
                          >
                            {deg}
                          </span>
                        ))}
                        {degrees.length > 3 ? (
                          <span className="text-[11px] text-slate-400">
                            +{degrees.length - 3} more
                          </span>
                        ) : null}
                      </div>
                    ) : null}

                    {/* Chamber Schedule Details */}
                    {matchingClinic?.visitingHours || matchingClinic?.visitingDays ? (
                      <div className="mt-3 space-y-1 rounded-xl bg-slate-50 p-3 text-xs text-slate-600">
                        {matchingClinic.visitingDays ? (
                          <div className="flex items-center gap-1.5">
                            <Calendar className="size-3.5 text-slate-400" />
                            <span className="font-medium text-slate-700">
                              {matchingClinic.visitingDays}
                            </span>
                          </div>
                        ) : null}
                        {matchingClinic.visitingHours ? (
                          <div className="flex items-center gap-1.5">
                            <Clock className="size-3.5 text-slate-400" />
                            <span>{matchingClinic.visitingHours}</span>
                          </div>
                        ) : null}
                      </div>
                    ) : null}

                    {/* Bio Snippet */}
                    {doctor.bio ? (
                      <p className="mt-3 line-clamp-2 text-xs leading-relaxed text-slate-500">
                        {doctor.bio}
                      </p>
                    ) : null}
                  </div>

                  {/* Actions footer */}
                  <div className="mt-5 flex items-center justify-between gap-2 border-t border-slate-100 pt-4">
                    {doctor.experience ? (
                      <span className="text-xs text-slate-500">
                        <strong className="text-slate-700">
                          {doctor.experience}y
                        </strong>{" "}
                        exp
                      </span>
                    ) : (
                      <span />
                    )}

                    <div className="flex items-center gap-2">
                      {profileSlug ? (
                        <Link
                          href={`/doctors/${profileSlug}`}
                          className="inline-flex h-9 items-center rounded-xl border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
                        >
                          Profile
                        </Link>
                      ) : null}
                      {websiteUrl ? (
                        <a
                          href={websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex h-9 items-center gap-1 rounded-xl bg-blue-600 px-3 text-xs font-semibold text-white shadow-sm transition hover:bg-blue-700"
                        >
                          Website
                          <ArrowUpRight className="size-3.5" />
                        </a>
                      ) : null}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Local Healthcare FAQ Section */}
        <section className="mt-16 rounded-3xl border border-slate-200 bg-white p-6 sm:p-10">
          <div className="flex items-center gap-2.5 text-blue-600">
            <HelpCircle className="size-5" />
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
              Frequently Asked Questions
            </span>
          </div>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
            Healthcare & Doctor Chambers in {cityName}
          </h2>

          <div className="mt-6 divide-y divide-slate-100">
            {faqs.map((faq, i) => (
              <div key={i} className="py-4 first:pt-0 last:pb-0">
                <h3 className="text-base font-semibold text-slate-900">
                  {faq.q}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Cross-Linking Section */}
        <section className="mt-12 space-y-8 rounded-3xl bg-slate-50 p-6 sm:p-10">
          {/* Other cities with this specialty */}
          {isSpecialtyPage && otherCitiesWithSpecialty.length > 0 ? (
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">
                {specialtyName}s in Other Bangladesh Cities
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {otherCitiesWithSpecialty.map((loc) => (
                  <Link
                    key={loc.slug}
                    href={`/doctors/in/${loc.slug}/${specialtySlug}`}
                    className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:border-blue-400 hover:text-blue-700"
                  >
                    {specialtyName} in {loc.city}
                  </Link>
                ))}
              </div>
            </div>
          ) : null}

          {/* Other locations with registered doctors */}
          {otherLocations.length > 0 ? (
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">
                Find Doctors in Other Towns & Cities
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {otherLocations.map((loc) => (
                  <Link
                    key={loc.slug}
                    href={`/doctors/in/${loc.slug}`}
                    className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:border-blue-400 hover:text-blue-700"
                  >
                    Doctors in {loc.city}
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </section>
      </div>
    </div>
  );
}
