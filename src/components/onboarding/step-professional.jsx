"use client";

import { useState } from "react";
import { Controller } from "react-hook-form";
import { Award, Search, Sparkles } from "lucide-react";
import { Field, TextField } from "./form-field";
import { MEDICAL_SPECIALTIES } from "./onboarding-utils";

export function StepProfessional({ register, control, errors }) {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm">
            <Sparkles className="size-5" />
          </span>
          <div>
            <h3 className="text-base font-semibold text-slate-900">What do you specialize in?</h3>
            <p className="mt-1 text-sm leading-relaxed text-slate-600">
              This helps patients understand your expertise and helps shape your website.
            </p>
          </div>
        </div>
      </div>

      <Field
        label="Medical specialty"
        htmlFor="specialization"
        required
        error={errors.specialization?.message}
      >
        <Controller
          control={control}
          name="specialization"
          render={({ field }) => (
            <SpecialtyPicker
              value={field.value}
              onChange={field.onChange}
              error={errors.specialization?.message}
            />
          )}
        />
      </Field>

      <Field
        label="Years in practice"
        htmlFor="experience"
        optional
        hint="You can leave this blank if you prefer."
        error={errors.experience?.message}
      >
        <TextField
          id="experience"
          type="number"
          inputMode="numeric"
          min={0}
          placeholder="e.g. 8"
          className="max-w-40"
          error={errors.experience?.message}
          {...register("experience")}
        />
      </Field>

      <div className="flex items-start gap-3 rounded-xl bg-slate-50 px-4 py-3.5">
        <Award className="mt-0.5 size-4 shrink-0 text-slate-500" />
        <p className="text-sm leading-relaxed text-slate-600">
          Next, you can add your degrees and certifications one at a time.
        </p>
      </div>
    </div>
  );
}

function SpecialtyPicker({ value, onChange, error }) {
  const [query, setQuery] = useState("");
  const matches = MEDICAL_SPECIALTIES.filter((specialty) =>
    specialty.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="space-y-2">
      <div className="relative">
        <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
        <TextField
          id="specialization"
          value={query || value || ""}
          placeholder="Type to search specialties"
          autoComplete="off"
          className="pl-10"
          error={error}
          onChange={(event) => {
            setQuery(event.target.value);
            onChange("");
          }}
        />
      </div>
      {(!value || query) ? (
        <div className="max-h-56 overflow-y-auto rounded-xl border border-slate-200 bg-white p-1.5 shadow-lg shadow-slate-950/5">
          {matches.length ? matches.map((specialty) => (
            <button
              key={specialty}
              type="button"
              className="block w-full rounded-lg px-3 py-2.5 text-left text-sm text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-800 focus-visible:bg-blue-50 focus-visible:outline-none"
              onClick={() => {
                onChange(specialty);
                setQuery("");
              }}
            >
              {specialty}
            </button>
          )) : (
            <p className="px-3 py-3 text-sm text-slate-500">
              No matching specialty. Try a different search.
            </p>
          )}
        </div>
      ) : null}
    </div>
  );
}
