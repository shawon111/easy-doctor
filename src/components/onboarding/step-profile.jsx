"use client";

import { Controller } from "react-hook-form";
import { Field, TextAreaField } from "./form-field";
import { TagInputField } from "./tag-input-field";

export function StepProfile({ register, control, errors, watch }) {
  const bio = watch("bio") ?? "";

  return (
    <div className="space-y-4">
      <Field
        label="Bio"
        htmlFor="bio"
        required
        hint={`${bio.length}/1000 characters (minimum 100)`}
        error={errors.bio?.message}
      >
        <TextAreaField
          id="bio"
          placeholder="Tell patients about your background, approach to care, and areas of expertise..."
          error={errors.bio?.message}
          {...register("bio")}
        />
      </Field>

      <Controller
        control={control}
        name="treatments"
        render={({ field }) => (
          <TagInputField
            label="Treatments & services"
            required
            placeholder="e.g. General check-up"
            hint="Press Enter or click Add after each treatment"
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
            label="Languages spoken"
            required
            placeholder="e.g. English"
            hint="Press Enter or click Add after each language"
            value={field.value}
            onChange={field.onChange}
            error={errors.languages?.message}
          />
        )}
      />
    </div>
  );
}
