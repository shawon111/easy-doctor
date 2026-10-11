"use client";

import { Controller } from "react-hook-form";
import { Field, TextAreaField } from "./form-field";
import { TagInputField } from "./tag-input-field";

export function StepProfile({ register, control, errors, watch }) {
  const bio = watch("bio") ?? "";
  const bioProgress = Math.min((bio.length / 1000) * 100, 100);

  return (
    <div className="space-y-7">
      <div className="rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50/80 via-white to-blue-50/70 p-5">
        <p className="text-sm font-semibold text-slate-900">Let your website sound like you</p>
        <p className="mt-1 text-sm leading-relaxed text-slate-600">
          Share a little about your approach to care. We’ll use this to help introduce you on your website.
        </p>
      </div>
      <Field
        label="A short introduction"
        htmlFor="bio"
        required
        hint="A few sentences about your background, approach to care, and areas of expertise."
        error={errors.bio?.message}
      >
        <TextAreaField
          id="bio"
          maxLength={1000}
          placeholder="I am a board-certified cardiologist with over 10 years of experience. I believe in listening closely to each patient and creating care plans that fit their lives..."
          error={errors.bio?.message}
          {...register("bio")}
        />
        <div className="mt-2 flex items-center justify-between gap-3">
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all"
              style={{ width: `${bioProgress}%` }}
            />
          </div>
          <span className="shrink-0 text-xs tabular-nums text-slate-500">
            {bio.length}/1000 · at least 100
          </span>
        </div>
      </Field>

      <Controller
        control={control}
        name="treatments"
        render={({ field }) => (
          <TagInputField
            id="treatments"
            label="Treatments & services"
            required
            placeholder="Add a treatment or service"
            hint="Add the services patients can find on your website."
            value={field.value}
            onChange={field.onChange}
            error={errors.treatments?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="languages"
        render={({ field }) => (
          <TagInputField
            id="languages"
            label="Languages spoken"
            required
            placeholder="Add a language"
            hint="Add every language you can consult in."
            value={field.value}
            onChange={field.onChange}
            error={errors.languages?.message}
          />
        )}
      />
    </div>
  );
}
