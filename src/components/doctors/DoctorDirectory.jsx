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

function DoctorAvatar({ doctor, index }) {
  const initials = doctor.name
    .replace(/^Dr\.\s*/i, "")
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="relative size-[76px] shrink-0 overflow-hidden rounded-[22px] bg-[#edf2f8] ring-1 ring-slate-200/80">
      {doctor.image ? (
        <Image
          src={doctor.image}
          alt={`Portrait of ${doctor.name}`}
          fill
          sizes="76px"
          unoptimized
          className="object-cover"
        />
      ) : (
        <div
          className={`flex size-full items-center justify-center text-xl font-semibold ${AVATAR_STYLES[index % AVATAR_STYLES.length]}`}
          aria-label={`${doctor.name} profile placeholder`}
        >
          {initials}
        </div>
      )}
    </div>
  );
}

function DoctorCard({ doctor, index }) {
  return (
    <article className="group flex min-h-full flex-col rounded-[22px] border border-slate-200/90 bg-white p-5 shadow-[0_12px_34px_-28px_rgba(15,23,42,0.28)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_22px_48px_-30px_rgba(15,23,42,0.32)] sm:p-6">
      <div className="flex items-start gap-4">
        <DoctorAvatar doctor={doctor} index={index} />
        <div className="min-w-0 flex-1 pt-0.5">
          <h2 className="text-[17px] font-bold tracking-tight text-[#0F172A]">
            {doctor.name}
          </h2>
          <p className="mt-1 text-sm font-semibold text-[#2563EB]">
            {doctor.specialty}
          </p>
          {doctor.location ? (
            <p className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-slate-500">
              <MapPin className="size-3.5 text-slate-400" aria-hidden="true" />
              {doctor.location}
            </p>
          ) : null}
        </div>
      </div>

      {doctor.qualifications ? (
        <div className="mt-5 flex min-h-[40px] items-start gap-2 border-t border-slate-100 pt-4">
          <BookOpenText className="mt-0.5 size-4 shrink-0 text-[#a17b20]" aria-hidden="true" />
          <p className="text-xs font-medium leading-5 text-slate-600">
            {doctor.qualifications}
          </p>
        </div>
      ) : null}

      <p className="mt-3 line-clamp-3 min-h-[66px] text-sm leading-[1.6] text-slate-600">
        {doctor.bio}
      </p>

      <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
        {doctor.experience !== null ? (
          <span className="text-xs text-slate-500">
            <span className="font-semibold text-slate-700">{doctor.experience} years</span>{" "}
            experience
          </span>
        ) : (
          <span />
        )}
        {doctor.websiteUrl ? (
          <a
            href={doctor.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-10 cursor-pointer items-center gap-2 rounded-xl bg-[#0F172A] px-4 text-xs font-semibold text-white transition hover:bg-[#1e3a5f] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
            aria-label={`Visit ${doctor.name}'s website`}
          >
            Visit Website
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        ) : (
          <span className="text-xs text-slate-400">Website unavailable</span>
        )}
      </div>
    </article>
  );
}

export default function DoctorDirectory({ directory }) {
  const { doctors, filters, pagination, search } = directory;
  const activeFilters = [
    search.query ? { key: "q", label: `"${search.query}"` } : null,
    search.specialty ? { key: "specialty", label: search.specialty } : null,
    search.location ? { key: "location", label: search.location } : null,
  ].filter(Boolean);

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
            specialties={filters.specialties}
            locations={filters.locations}
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

          {doctors.length ? (
            <>
              <div className="grid grid-cols-1 gap-4 pt-6 md:grid-cols-2 md:gap-5 xl:grid-cols-3 xl:gap-6">
                {doctors.map((doctor, index) => (
                  <DoctorCard
                    doctor={doctor}
                    index={(pagination.page - 1) * pagination.pageSize + index}
                    key={doctor.slug}
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
