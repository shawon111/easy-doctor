"use client";

import { useRef, useState } from "react";
import {
  ChevronDown,
  MapPin,
  Search,
  Stethoscope,
  X,
} from "lucide-react";

export default function DoctorDirectorySearch({
  search,
  specialties,
  locations,
}) {
  const formRef = useRef(null);
  const [query, setQuery] = useState(search.query);
  const [specialty, setSpecialty] = useState(search.specialty);

  function selectPopularSpecialty(value) {
    const nextSpecialty = specialty === value ? "" : value;
    setSpecialty(nextSpecialty);
    if (formRef.current) {
      formRef.current.elements.namedItem("specialty").value = nextSpecialty;
      formRef.current.requestSubmit();
    }
  }

  return (
    <>
      <form
        ref={formRef}
        action="/doctors"
        method="get"
        role="search"
        aria-label="Search doctor directory"
        className="mt-9 max-w-5xl rounded-[22px] border border-slate-200 bg-white p-2.5 shadow-[0_24px_70px_-48px_rgba(15,23,42,0.36)] sm:p-3"
      >
        <div className="flex flex-col gap-2 sm:flex-row">
          <label className="flex min-h-12 min-w-0 flex-1 items-center gap-3 rounded-xl px-3 sm:min-h-[52px]">
            <Search className="size-5 shrink-0 text-[#2563EB]" aria-hidden="true" />
            <span className="sr-only">Search doctors or specialties</span>
            <input
              name="q"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Doctor name, specialty, or keyword"
              className="h-full min-w-0 flex-1 bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400 sm:text-[15px]"
            />
            {query ? (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="cursor-pointer rounded-full p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                aria-label="Clear search"
              >
                <X className="size-4" aria-hidden="true" />
              </button>
            ) : null}
          </label>
          <div className="flex flex-col gap-2 border-t border-slate-100 pt-2 sm:flex-row sm:border-l sm:border-t-0 sm:pl-2 sm:pt-0">
            <label className="relative flex min-w-0 flex-1 items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-3.5 transition focus-within:border-blue-400 focus-within:ring-4 focus-within:ring-blue-100/70 sm:min-w-[170px]">
              <Stethoscope className="size-4 shrink-0 text-slate-400" aria-hidden="true" />
              <span className="sr-only">Specialty</span>
              <select
                name="specialty"
                value={specialty}
                onChange={(event) => setSpecialty(event.target.value)}
                className="h-12 w-full cursor-pointer appearance-none bg-transparent pr-6 text-sm font-medium text-slate-700 outline-none"
              >
                <option value="">Specialty</option>
                {specialties.map((option) => (
                  <option value={option} key={option}>
                    {option}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3.5 size-4 text-slate-400" aria-hidden="true" />
            </label>
            <label className="relative flex min-w-0 flex-1 items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-3.5 transition focus-within:border-blue-400 focus-within:ring-4 focus-within:ring-blue-100/70 sm:min-w-[170px]">
              <MapPin className="size-4 shrink-0 text-slate-400" aria-hidden="true" />
              <span className="sr-only">Location</span>
              <select
                name="location"
                defaultValue={search.location}
                className="h-12 w-full cursor-pointer appearance-none bg-transparent pr-6 text-sm font-medium text-slate-700 outline-none"
              >
                <option value="">Location</option>
                {locations.map((option) => (
                  <option value={option} key={option}>
                    {option}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3.5 size-4 text-slate-400" aria-hidden="true" />
            </label>
            <button
              type="submit"
              className="inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#2563EB] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1d4ed8] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200 sm:min-h-[52px]"
            >
              <Search className="size-4" aria-hidden="true" />
              Search
            </button>
          </div>
        </div>
      </form>

      {specialties.length ? (
        <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-slate-500">
          <span className="font-semibold text-slate-600">Popular specialties</span>
          {specialties.slice(0, 3).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => selectPopularSpecialty(item)}
              aria-pressed={specialty === item}
              className={`cursor-pointer rounded-full border px-3 py-1.5 font-medium transition ${
                specialty === item
                  ? "border-[#17345d] bg-[#17345d] text-white"
                  : "border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:text-blue-800"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      ) : null}
    </>
  );
}
