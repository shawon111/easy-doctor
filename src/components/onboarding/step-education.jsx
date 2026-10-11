"use client";

import { BadgeCheck, Plus, Trash2 } from "lucide-react";
import { useFieldArray } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Field, TextField, getFieldError } from "./form-field";

export function StepEducation({ register, control, errors }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "qualifications",
  });

  return (
    <section className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-sm font-semibold text-slate-900">Degrees & credentials</h3>
          <p className="mt-1 text-sm text-slate-500">
            Add each qualification separately. You can add more at any time.
          </p>
        </div>
        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
          {fields.length} {fields.length === 1 ? "entry" : "entries"}
        </span>
      </div>

      {errors.qualifications?.message ? (
        <p className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700" role="alert">
          {errors.qualifications.message}
        </p>
      ) : null}

      <div className="space-y-3">
        {fields.map((field, index) => (
          <div
            key={field.id}
            className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-950/[0.025] sm:p-5"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="flex size-8 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <BadgeCheck className="size-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Qualification {index + 1}</p>
                  <p className="text-xs text-slate-500">Degree, institution, and year</p>
                </div>
              </div>
              {fields.length > 1 ? (
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => remove(index)}
                  aria-label={`Remove qualification ${index + 1}`}
                  className="text-slate-500 hover:bg-rose-50 hover:text-rose-600"
                >
                  <Trash2 className="size-4" />
                  <span className="sr-only sm:not-sr-only">Remove</span>
                </Button>
              ) : null}
            </div>

            <div className="grid gap-4 sm:grid-cols-[1fr_1fr_132px]">
              <Field
                label="Degree or credential"
                htmlFor={`qualifications.${index}.degree`}
                required
                error={getFieldError(errors, `qualifications.${index}.degree`)}
              >
                <TextField
                  id={`qualifications.${index}.degree`}
                  placeholder="MBBS, MD, PhD"
                  error={getFieldError(errors, `qualifications.${index}.degree`)}
                  {...register(`qualifications.${index}.degree`)}
                />
              </Field>

              <Field
                label="Institution"
                htmlFor={`qualifications.${index}.institution`}
                required
                error={getFieldError(errors, `qualifications.${index}.institution`)}
              >
                <TextField
                  id={`qualifications.${index}.institution`}
                  placeholder="University or medical college"
                  error={getFieldError(errors, `qualifications.${index}.institution`)}
                  {...register(`qualifications.${index}.institution`)}
                />
              </Field>

              <Field
                label="Year completed"
                htmlFor={`qualifications.${index}.year`}
                required
                error={getFieldError(errors, `qualifications.${index}.year`)}
              >
                <TextField
                  id={`qualifications.${index}.year`}
                  type="number"
                  inputMode="numeric"
                  min={1950}
                  max={new Date().getFullYear()}
                  placeholder="2015"
                  error={getFieldError(errors, `qualifications.${index}.year`)}
                  {...register(`qualifications.${index}.year`)}
                />
              </Field>
            </div>
          </div>
        ))}
      </div>

      <Button
        type="button"
        variant="outline"
        onClick={() => append({ degree: "", institution: "", year: "" })}
        className="h-11 w-full rounded-xl border-dashed border-blue-300 bg-blue-50/50 text-blue-700 hover:border-blue-400 hover:bg-blue-50"
      >
        <Plus className="size-4" />
        Add another qualification
      </Button>
    </section>
  );
}
