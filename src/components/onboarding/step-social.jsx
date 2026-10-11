"use client";

import { Controller, useFieldArray } from "react-hook-form";
import { Link2, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SOCIAL_PLATFORMS } from "./onboarding-utils";
import { Field, TextField, getFieldError } from "./form-field";

export function StepSocial({ register, control, errors }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "socialLinks",
  });

  return (
    <div className="space-y-5">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm">
            <Link2 className="size-5" />
          </span>
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Connect your professional profiles</h3>
            <p className="mt-1 text-sm leading-relaxed text-slate-600">
              Optional. Add social or professional profile links to help patients learn more about you.
              You can skip this step and add them later.
            </p>
          </div>
        </div>
      </div>

      {fields.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-8 text-center">
          <span className="mx-auto flex size-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-500">
            <Link2 className="size-5" />
          </span>
          <p className="mt-3 text-sm font-medium text-slate-800">No links added</p>
          <p className="mt-1 text-xs text-slate-500">That’s completely fine—you can continue without them.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {fields.map((field, index) => (
            <div key={field.id} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-950/[0.025]">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-900">Profile link {index + 1}</p>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => remove(index)}
                  aria-label={`Remove social link ${index + 1}`}
                  className="text-slate-500 hover:bg-rose-50 hover:text-rose-600"
                >
                  <Trash2 className="size-4" />
                  <span className="sr-only sm:not-sr-only">Remove</span>
                </Button>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Controller
                  control={control}
                  name={`socialLinks.${index}.platform`}
                  render={({ field: platformField }) => (
                    <Field
                      label="Platform"
                      required
                      error={getFieldError(errors, `socialLinks.${index}.platform`)}
                    >
                      <Select
                        value={platformField.value}
                        onValueChange={platformField.onChange}
                      >
                        <SelectTrigger
                          className="h-12 w-full rounded-xl border-slate-200 bg-white shadow-sm shadow-slate-950/[0.02]"
                          aria-invalid={getFieldError(errors, `socialLinks.${index}.platform`) ? true : undefined}
                        >
                          <SelectValue placeholder="Choose a platform" />
                        </SelectTrigger>
                        <SelectContent>
                          {SOCIAL_PLATFORMS.map((platform) => (
                            <SelectItem key={platform} value={platform}>
                              {platform}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </Field>
                  )}
                />

                <Field
                  label="Profile link"
                  htmlFor={`socialLinks.${index}.url`}
                  required
                  error={getFieldError(errors, `socialLinks.${index}.url`)}
                >
                  <TextField
                    id={`socialLinks.${index}.url`}
                    type="url"
                    placeholder="https://"
                    error={getFieldError(errors, `socialLinks.${index}.url`)}
                    {...register(`socialLinks.${index}.url`)}
                  />
                </Field>
              </div>
            </div>
          ))}
        </div>
      )}

      <Button
        type="button"
        variant="outline"
        onClick={() => append({ platform: "", url: "" })}
        className="h-11 w-full rounded-xl border-dashed border-blue-300 bg-blue-50/50 text-blue-700 hover:border-blue-400 hover:bg-blue-50"
      >
        <Plus className="size-4" />
        Add a profile link
      </Button>
    </div>
  );
}
