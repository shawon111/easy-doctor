import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpenText,
  Check,
  MapPin,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";
import DoctorDirectorySearch from "@/components/doctors/DoctorDirectorySearch";

const AVATAR_STYLES = [
  "bg-[#e8effb] text-[#234b7e]",
  "bg-[#f4eee1] text-[#86651a]",
  "bg-[#e9f2ee] text-[#2f6951]",
  "bg-[#f1eaf5] text-[#714c83]",
];

const getDirectoryHref = (search, overrides = {}) => {
  const values = {
    q: search.query,
    specialty: search.specialty,
    location: search.location,
    page: "",
    ...overrides,
  };
  const queryString = new URLSearchParams(
    Object.entries(values).filter(([, value]) => Boolean(value))
  ).toString();

  return queryString ? `/doctors?${queryString}` : "/doctors";
};

// show the website link by checking the subdomain field and domain field, use domain if available, or use subdomain instead
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

// check for different qualifications and make an array of the degree to show them in the card
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

const getLocation = (clinicAddress) => {
  if (Array.isArray(clinicAddress) && clinicAddress.length > 0) {
    const primary = clinicAddress[0];
    const parts = [primary?.city, primary?.country].filter(Boolean);
    if (parts.length > 0) return parts.join(", ");
    if (primary?.address) return primary.address;
  }
  if (typeof clinicAddress === "string") return clinicAddress;
  return "";
};

const getSafeImageUrl = (value) => {
  if (!value || typeof value !== "string") return null;
  return value.startsWith("http://") ||
    value.startsWith("https://") ||
    value.startsWith("/")
    ? value
    : null;
};

// structure raw doctor data in the component
const structureDoctor = (user) => {
  const degrees = getDegrees(user?.qualifications);
  const location = getLocation(user?.clinicAddress || user?.location);
  const websiteUrl = getWebsiteLink(user);
  const image = getSafeImageUrl(user?.profilePicture || user?.image);

  return {
    id: user?._id?.toString() || user?.slug || user?.name || Math.random().toString(),
    slug: user?.subdomain || user?.slug || user?._id?.toString(),
    name: user?.name || "Doctor",
    specialty: user?.specialization || user?.specialty || "",
    degrees,
    location,
    experience: Number.isFinite(user?.experience) ? user.experience : null,
    bio: user?.bio || "",
    image,
    websiteUrl,
    subdomain: user?.subdomain,
    domain: user?.domain,
  };
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
    <div className="relative size-[76px] shrink-0 overflow-hidden rounded-[22px] bg-[#edf2f8] ring-1 ring-slate-200/80">
      {doctor.image ? (
        <Image
          src={doctor.image}
          alt={`Portrait of ${name}`}
          fill
          sizes="76px"
          unoptimized
          className="object-cover"
        />
      ) : (
        <div
          className={`flex size-full items-center justify-center text-xl font-semibold ${AVATAR_STYLES[index % AVATAR_STYLES.length]}`}
          aria-label={`${name} profile placeholder`}
        >
          {initials}
        </div>
      )}
    </div>
  );
}

function DoctorCard({ doctor, index }) {
  const degrees = doctor.degrees || getDegrees(doctor.qualifications);
  const websiteUrl =
    doctor.websiteUrl !== undefined ? doctor.websiteUrl : getWebsiteLink(doctor);
  const location = doctor.location || getLocation(doctor.clinicAddress);
  const specialty = doctor.specialty || doctor.specialization;
  const profileSlug = doctor.slug || doctor.subdomain;

  return (
    <article className="group flex min-h-full flex-col rounded-[22px] border border-slate-200/90 bg-white p-5 shadow-[0_12px_34px_-28px_rgba(15,23,42,0.28)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_22px_48px_-30px_rgba(15,23,42,0.32)] sm:p-6">
      <div className="flex items-start gap-4">
        {profileSlug ? (
          <Link href={`/doctors/${profileSlug}`} className="shrink-0">
            <DoctorAvatar doctor={doctor} index={index} />
          </Link>
        ) : (
          <DoctorAvatar doctor={doctor} index={index} />
        )}
        <div className="min-w-0 flex-1 pt-0.5">
          {profileSlug ? (
            <Link href={`/doctors/${profileSlug}`}>
              <h2 className="text-[17px] font-bold tracking-tight text-[#0F172A] transition hover:text-blue-600">
                {doctor.name}
              </h2>
            </Link>
          ) : (
            <h2 className="text-[17px] font-bold tracking-tight text-[#0F172A]">
              {doctor.name}
            </h2>
          )}
          {specialty ? (
            <p className="mt-1 text-sm font-semibold text-[#2563EB]">
              {specialty}
            </p>
          ) : null}
          {location ? (
            <p className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-slate-500">
              <MapPin className="size-3.5 text-slate-400" aria-hidden="true" />
              {location}
            </p>
          ) : null}
        </div>
      </div>

      {degrees.length > 0 ? (
        <div className="mt-5 flex min-h-[40px] items-start gap-2 border-t border-slate-100 pt-4">
          <BookOpenText className="mt-0.5 size-4 shrink-0 text-[#a17b20]" aria-hidden="true" />
          <div className="flex flex-wrap items-center gap-1.5">
            {degrees.map((degree, idx) => (
              <span
                key={idx}
                className="inline-flex items-center rounded-md bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-[#846719] ring-1 ring-inset ring-amber-600/20"
              >
                {degree}
              </span>
            ))}
          </div>
        </div>
      ) : null}

      <p className="mt-3 line-clamp-3 min-h-[66px] text-sm leading-[1.6] text-slate-600">
        {doctor.bio}
      </p>

      <div className="mt-5 flex items-center justify-between gap-2 border-t border-slate-100 pt-4">
        {doctor.experience !== null && doctor.experience !== undefined ? (
          <span className="text-xs text-slate-500">
            <span className="font-semibold text-slate-700">{doctor.experience} years</span>{" "}
            exp.
          </span>
        ) : (
          <span />
        )}
        <div className="flex items-center gap-2">
          {profileSlug ? (
            <Link
              href={`/doctors/${profileSlug}`}
              className="inline-flex min-h-10 cursor-pointer items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-700 shadow-sm transition hover:border-blue-200 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100"
            >
              Profile
            </Link>
          ) : null}
          {websiteUrl ? (
            <a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 cursor-pointer items-center gap-1.5 rounded-xl bg-[#0F172A] px-3 text-xs font-semibold text-white transition hover:bg-[#1e3a5f] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
              aria-label={`Visit ${doctor.name}'s website`}
            >
              Website
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default function DoctorDirectory({
  directory,
  doctors: propDoctors,
  search: propSearch,
  searchParams,
  availableLocations = [],
}) {
  const rawList = Array.isArray(directory)
    ? directory
    : Array.isArray(propDoctors)
    ? propDoctors
    : Array.isArray(directory?.doctors)
    ? directory.doctors
    : [];

  // Structure the doctors list inside the component
  const structuredDoctors = rawList.map(structureDoctor);

  const search = {
    query:
      searchParams?.q ||
      searchParams?.query ||
      propSearch?.query ||
      directory?.search?.query ||
      "",
    specialty:
      searchParams?.specialty ||
      propSearch?.specialty ||
      directory?.search?.specialty ||
      "",
    location:
      searchParams?.location ||
      propSearch?.location ||
      directory?.search?.location ||
      "",
  };

  const activeFilters = [
    search.query ? { key: "q", label: `"${search.query}"` } : null,
    search.specialty ? { key: "specialty", label: search.specialty } : null,
    search.location ? { key: "location", label: search.location } : null,
  ].filter(Boolean);

  const filterSpecialties = directory?.filters?.specialties || [
    ...new Set(structuredDoctors.map((doc) => doc.specialty).filter(Boolean)),
  ].sort((a, b) => a.localeCompare(b));

  const filterLocations = directory?.filters?.locations || [
    ...new Set(structuredDoctors.map((doc) => doc.location).filter(Boolean)),
  ].sort((a, b) => a.localeCompare(b));

  const PAGE_SIZE = 6;
  const pageParam = Number.parseInt(
    searchParams?.page || propSearch?.page || directory?.pagination?.page || 1,
    10
  );
  const currentPage = Number.isFinite(pageParam) && pageParam > 0 ? pageParam : 1;
  const total = directory?.pagination?.total ?? structuredDoctors.length;
  const totalPages =
    directory?.pagination?.totalPages ?? Math.max(1, Math.ceil(total / PAGE_SIZE));
  const validPage = Math.min(currentPage, totalPages);

  const displayedDoctors = directory?.pagination
    ? structuredDoctors
    : structuredDoctors.slice((validPage - 1) * PAGE_SIZE, validPage * PAGE_SIZE);

  const pagination = {
    page: validPage,
    pageSize: PAGE_SIZE,
    total,
    totalPages,
  };

  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-200/80 bg-white">
        <div className="pointer-events-none absolute -right-20 top-[-175px] size-[440px] rounded-full border border-[#d4af37]/[0.12]" />
        <div className="pointer-events-none absolute -right-10 top-[-125px] size-[340px] rounded-full border border-blue-200/45" />
        <div className="pointer-events-none absolute -right-3 top-[-78px] size-[240px] rounded-full border border-slate-200/80" />
        <div className="relative mx-auto max-w-7xl px-5 pb-12 pt-12 sm:px-8 sm:pb-16 sm:pt-16 lg:px-10 lg:pb-[72px] lg:pt-[72px]">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/30 bg-[#fbf8ef] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-[#846719]">
              <span className="size-1.5 rounded-full bg-[#d4af37]" />
              Doctor directory
            </span>
            <h1 className="mt-6 max-w-2xl text-[38px] font-semibold leading-[1.12] tracking-[-0.045em] text-[#0F172A] sm:text-5xl lg:text-[56px]">
              Find a doctor.
              <br className="hidden sm:block" />{" "}
              <span className="font-serif font-normal italic text-[#2563EB]">
                Explore their expertise.
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Discover doctors by specialty and location, learn about their
              experience, and visit their professional websites to find out more.
            </p>
          </div>
          <DoctorDirectorySearch
            search={search}
            specialties={filterSpecialties}
            locations={filterLocations}
          />
        </div>
      </section>

      <section
        id="doctor-results"
        className="scroll-mt-24 bg-[#F8FAFC] px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-[72px]"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#9b7921]">
                Explore the directory
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#0F172A] sm:text-[30px]">
                Doctors to know
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                {pagination.total}{" "}
                {pagination.total === 1 ? "profile" : "profiles"} to explore
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <SlidersHorizontal className="size-4 text-slate-400" aria-hidden="true" />
              <span>Verified published doctor websites</span>
            </div>
          </div>

          {activeFilters.length ? (
            <div className="flex flex-wrap items-center gap-2 border-b border-slate-200/80 py-4">
              <span className="mr-1 text-xs font-semibold text-slate-500">
                Active filters
              </span>
              {activeFilters.map((filter) => (
                <Link
                  key={filter.key}
                  href={getDirectoryHref(search, { [filter.key]: "" })}
                  className="inline-flex min-h-8 items-center gap-1.5 rounded-full border border-blue-100 bg-blue-50 px-3 text-xs font-semibold text-[#234b7e] transition hover:border-blue-200 hover:bg-blue-100"
                  aria-label={`Remove ${filter.label} filter`}
                >
                  {filter.label}
                  <X className="size-3.5" aria-hidden="true" />
                </Link>
              ))}
              <Link
                href="/doctors"
                className="ml-auto text-xs font-semibold text-slate-500 underline decoration-slate-300 underline-offset-4 transition hover:text-[#17345d]"
              >
                Clear all
              </Link>
            </div>
          ) : null}

          {displayedDoctors.length ? (
            <>
              <div className="grid grid-cols-1 gap-4 pt-6 md:grid-cols-2 md:gap-5 xl:grid-cols-3 xl:gap-6">
                {displayedDoctors.map((doctor, index) => (
                  <DoctorCard
                    doctor={doctor}
                    index={(pagination.page - 1) * pagination.pageSize + index}
                    key={doctor.id || doctor.slug || index}
                  />
                ))}
              </div>

              {pagination.totalPages > 1 ? (
                <nav
                  className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 sm:flex-row"
                  aria-label="Doctor directory pages"
                >
                  <p className="text-sm text-slate-500">
                    Showing{" "}
                    <span className="font-semibold text-slate-700">
                      {(pagination.page - 1) * pagination.pageSize + 1}–
                      {Math.min(
                        pagination.page * pagination.pageSize,
                        pagination.total
                      )}
                    </span>{" "}
                    of{" "}
                    <span className="font-semibold text-slate-700">
                      {pagination.total}
                    </span>
                  </p>
                  <div className="flex items-center gap-2">
                    <Link
                      href={getDirectoryHref(search, {
                        page: pagination.page > 1 ? String(pagination.page - 1) : "",
                      })}
                      aria-disabled={pagination.page === 1}
                      className={`inline-flex h-10 items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 ${
                        pagination.page === 1 ? "pointer-events-none opacity-40" : ""
                      }`}
                    >
                      <ArrowLeft className="size-4" aria-hidden="true" />
                      Previous
                    </Link>
                    <span className="min-w-16 text-center text-sm font-semibold text-slate-700">
                      {pagination.page} of {pagination.totalPages}
                    </span>
                    <Link
                      href={getDirectoryHref(search, {
                        page:
                          pagination.page < pagination.totalPages
                            ? String(pagination.page + 1)
                            : "",
                      })}
                      aria-disabled={pagination.page === pagination.totalPages}
                      className={`inline-flex h-10 items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 ${
                        pagination.page === pagination.totalPages
                          ? "pointer-events-none opacity-40"
                          : ""
                      }`}
                    >
                      Next
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </Link>
                  </div>
                </nav>
              ) : null}
            </>
          ) : (
            <div className="flex min-h-[330px] flex-col items-center justify-center py-16 text-center">
              <div className="flex size-[70px] items-center justify-center rounded-[22px] bg-white text-[#2563EB] shadow-[0_12px_34px_-22px_rgba(15,23,42,0.3)] ring-1 ring-slate-200">
                <Search className="size-7" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-tight text-[#0F172A]">
                No doctors found
              </h3>
              <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
                Try another name, specialty, or location—or clear your filters
                to see every profile.
              </p>
              <Link
                href="/doctors"
                className="mt-5 inline-flex min-h-10 items-center gap-2 rounded-xl bg-[#0F172A] px-4 text-sm font-semibold text-white transition hover:bg-[#1e3a5f]"
              >
                <Check className="size-4" aria-hidden="true" />
                Clear filters
              </Link>
            </div>
          )}
        </div>
      </section>

      {availableLocations && availableLocations.length > 0 ? (
        <section className="px-5 pb-10 sm:px-8 sm:pb-14 lg:px-10">
          <div className="mx-auto max-w-7xl rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm sm:p-10">
            <div className="flex items-center gap-2 text-[#2563EB]">
              <MapPin className="size-5" />
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
                Find Doctors by Town & City
              </h2>
            </div>
            <p className="mt-1 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
              Verified Chambers Across Bangladesh
            </p>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
              Select a town or city to view local doctors, chamber locations, visiting days, and consultation hours.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {availableLocations.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/doctors/in/${loc.slug}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-2.5 text-xs font-semibold text-slate-700 transition hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700"
                >
                  <MapPin className="size-3.5 text-slate-400" />
                  <span>{loc.city}</span>
                  <span className="rounded-full bg-white px-2 py-0.5 text-[10px] text-slate-500 shadow-xs">
                    {loc.count}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="px-5 pb-14 sm:px-8 sm:pb-20 lg:px-10">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-[#0F172A] px-6 py-9 text-white shadow-[0_28px_70px_-40px_rgba(15,23,42,0.6)] sm:px-10 sm:py-11 lg:px-14">
          <div className="pointer-events-none absolute -right-20 -top-28 size-80 rounded-full border border-white/[0.08]" />
          <div className="pointer-events-none absolute -right-8 -top-16 size-56 rounded-full border border-[#d4af37]/20" />
          <div className="relative flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#e4c66c]">
                <span className="size-1.5 rounded-full bg-[#d4af37]" />
                For doctors
              </span>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                Make your expertise easy to discover.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300 sm:text-base">
                Create a professional website that helps patients learn about
                you, your practice, and how to get in touch.
              </p>
            </div>
            <Link
              href="/dashboard/website/create"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#d4af37] px-5 text-sm font-bold text-[#0F172A] shadow-lg shadow-black/10 transition hover:bg-[#e2c45c] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#d4af37]/35"
            >
              Create Your Doctor Website
              <ArrowDown className="size-4 -rotate-45" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
