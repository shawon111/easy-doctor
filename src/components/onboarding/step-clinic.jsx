"use client";

import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import { CalendarDays, MapPin, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { BOOKING_OPTIONS, VISITING_DAYS } from "./onboarding-utils";
import { Field, TextField, getFieldError } from "./form-field";

const EMPTY_CLINIC = {
  chamberName: "",
  address: "",
  city: "",
  country: "",
  visitingHours: "",
  visitingDays: "",
  whatsapp: "",
  mapUrl: "",
};

export function StepClinic({ register, control, errors }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "clinicAddress",
  });
  const { watch } = useFormContext();
  const profilePhone = watch("phone");

  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <MapPin className="size-4 text-blue-600" />
              <h3 className="text-sm font-semibold text-slate-900">Where patients can visit</h3>
            </div>
            <p className="mt-1 text-sm text-slate-500">
              Add a location and its hours. Add another only if you see patients elsewhere.
            </p>
          </div>
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
            {fields.length} {fields.length === 1 ? "location" : "locations"}
          </span>
        </div>

        {errors.clinicAddress?.message ? (
          <p className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700" role="alert">
            {errors.clinicAddress.message}
          </p>
        ) : null}

        <div className="space-y-3">
          {fields.map((field, index) => {
            const path = (name) => `clinicAddress.${index}.${name}`;
            const selectedDays = watch(path("visitingDays"))?.split(", ").filter(Boolean) || [];

            return (
              <section
                key={field.id}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm shadow-slate-950/[0.025]"
                aria-labelledby={`location-heading-${index}`}
              >
                <header className="flex items-center justify-between gap-3 border-b border-slate-100 bg-slate-50/70 px-4 py-3.5 sm:px-5">
                  <div className="flex items-center gap-3">
                    <span className="flex size-8 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                      <MapPin className="size-4" />
                    </span>
                    <div>
                      <h4 id={`location-heading-${index}`} className="text-sm font-semibold text-slate-900">
                        {index === 0 ? "Primary location" : `Location ${index + 1}`}
                      </h4>
                      <p className="text-xs text-slate-500">Address and visiting hours</p>
                    </div>
                  </div>
                  {fields.length > 1 ? (
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => remove(index)}
                      aria-label={`Remove location ${index + 1}`}
                      className="text-slate-500 hover:bg-rose-50 hover:text-rose-600"
                    >
                      <Trash2 className="size-4" />
                      <span className="sr-only sm:not-sr-only">Remove</span>
                    </Button>
                  ) : null}
                </header>

                <div className="grid gap-4 p-4 sm:grid-cols-2 sm:p-5">
                  <Field
                    label="Location name"
                    htmlFor={path("chamberName")}
                    required
                    className="sm:col-span-2"
                    error={getFieldError(errors, path("chamberName"))}
                  >
                    <TextField
                      id={path("chamberName")}
                      placeholder="e.g. Downtown Medical Rooms"
                      error={getFieldError(errors, path("chamberName"))}
                      {...register(path("chamberName"))}
                    />
                  </Field>

                  <Field
                    label="Street address"
                    htmlFor={path("address")}
                    required
                    className="sm:col-span-2"
                    error={getFieldError(errors, path("address"))}
                  >
                    <TextField
                      id={path("address")}
                      placeholder="Building, street, and suite"
                      error={getFieldError(errors, path("address"))}
                      {...register(path("address"))}
                    />
                  </Field>

                  <Field
                    label="City"
                    htmlFor={path("city")}
                    required
                    error={getFieldError(errors, path("city"))}
                  >
                    <TextField
                      id={path("city")}
                      placeholder="City"
                      error={getFieldError(errors, path("city"))}
                      {...register(path("city"))}
                    />
                  </Field>

                  <Field
                    label="Country"
                    htmlFor={path("country")}
                    required
                    error={getFieldError(errors, path("country"))}
                  >
                    <TextField
                      id={path("country")}
                      placeholder="Country"
                      error={getFieldError(errors, path("country"))}
                      {...register(path("country"))}
                    />
                  </Field>

                  <Controller
                    control={control}
                    name={path("visitingHours")}
                    render={({ field: hoursField }) => {
                      const [openingTime = "", closingTime = ""] = (hoursField.value || "").split(" - ");
                      const updateTime = (key, value) => {
                        const times = { openingTime, closingTime, [key]: value };
                        hoursField.onChange(`${times.openingTime} - ${times.closingTime}`);
                      };
                      return (
                        <Field
                          label="Visiting hours"
                          required
                          className="sm:col-span-2"
                          error={getFieldError(errors, path("visitingHours"))}
                        >
                          <div className="grid grid-cols-2 gap-3">
                            <div className="space-y-1.5">
                              <Label htmlFor={`${path("visitingHours")}-open`} className="text-xs text-slate-500">From</Label>
                              <TextField
                                id={`${path("visitingHours")}-open`}
                                type="time"
                                value={openingTime}
                                onChange={(event) => updateTime("openingTime", event.target.value)}
                              />
                            </div>
                            <div className="space-y-1.5">
                              <Label htmlFor={`${path("visitingHours")}-close`} className="text-xs text-slate-500">Until</Label>
                              <TextField
                                id={`${path("visitingHours")}-close`}
                                type="time"
                                value={closingTime}
                                onChange={(event) => updateTime("closingTime", event.target.value)}
                              />
                            </div>
                          </div>
                        </Field>
                      );
                    }}
                  />

                  <Controller
                    control={control}
                    name={path("visitingDays")}
                    render={({ field: daysField }) => {
                      const days = daysField.value?.split(", ").filter(Boolean) || [];
                      return (
                        <Field
                          label="Days available"
                          required
                          className="sm:col-span-2"
                          error={getFieldError(errors, path("visitingDays"))}
                          hint="Choose every day you see patients at this location."
                        >
                          <div className="flex flex-wrap gap-2">
                            {VISITING_DAYS.map((day) => {
                              const isSelected = days.includes(day);
                              return (
                                <button
                                  key={day}
                                  type="button"
                                  aria-pressed={isSelected}
                                  onClick={() => {
                                    const nextDays = isSelected
                                      ? days.filter((selectedDay) => selectedDay !== day)
                                      : [...days, day];
                                    daysField.onChange(
                                      VISITING_DAYS.filter((item) => nextDays.includes(item)).join(", ")
                                    );
                                  }}
                                  className={cn(
                                    "rounded-lg border px-3 py-2 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
                                    isSelected
                                      ? "border-blue-600 bg-blue-600 text-white shadow-sm"
                                      : "border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:bg-blue-50"
                                  )}
                                >
                                  {day.slice(0, 3)}
                                </button>
                              );
                            })}
                          </div>
                        </Field>
                      );
                    }}
                  />

                  <Field
                    label="WhatsApp for this location"
                    htmlFor={path("whatsapp")}
                    optional
                    className="sm:col-span-2"
                    hint={`Leave blank to use your profile phone${profilePhone ? ` (${profilePhone})` : ""}.`}
                    error={getFieldError(errors, path("whatsapp"))}
                  >
                    <TextField
                      id={path("whatsapp")}
                      type="tel"
                      placeholder={profilePhone || "Use your profile phone number"}
                      error={getFieldError(errors, path("whatsapp"))}
                      {...register(path("whatsapp"))}
                    />
                  </Field>

                  <Field
                    label="Google Maps link"
                    htmlFor={path("mapUrl")}
                    optional
                    className="sm:col-span-2"
                    hint="Paste a link to directions for this location, if you have one."
                    error={getFieldError(errors, path("mapUrl"))}
                  >
                    <TextField
                      id={path("mapUrl")}
                      type="url"
                      placeholder="https://maps.google.com/..."
                      error={getFieldError(errors, path("mapUrl"))}
                      {...register(path("mapUrl"))}
                    />
                  </Field>
                </div>
              </section>
            );
          })}
        </div>

        <Button
          type="button"
          variant="outline"
          onClick={() => append(EMPTY_CLINIC)}
          className="h-11 w-full rounded-xl border-dashed border-blue-300 bg-blue-50/50 text-blue-700 hover:border-blue-400 hover:bg-blue-50"
        >
          <Plus className="size-4" />
          Add another location
        </Button>
      </section>

      <section className="space-y-4 border-t border-slate-100 pt-6">
        <div className="flex items-center gap-2">
          <CalendarDays className="size-4 text-blue-600" />
          <h3 className="text-sm font-semibold text-slate-900">How patients can reach you</h3>
        </div>
        <Controller
          control={control}
          name="bookingPreferences"
          render={({ field }) => (
            <Field
              label="Choose how patients can contact you"
              required
              error={errors.bookingPreferences?.message}
            >
              <RadioGroup
                value={field.value}
                onValueChange={field.onChange}
                className="grid gap-3 sm:grid-cols-3"
              >
                {BOOKING_OPTIONS.map((option) => {
                  const selected = field.value === option.value;
                  return (
                    <Label
                      key={option.value}
                      htmlFor={`booking-${option.value}`}
                      className={cn(
                        "flex cursor-pointer items-start gap-3 rounded-2xl border p-4 transition-all",
                        selected
                          ? "border-blue-500 bg-blue-50/70 ring-2 ring-blue-500/10"
                          : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                      )}
                    >
                      <RadioGroupItem
                        value={option.value}
                        id={`booking-${option.value}`}
                        className="mt-0.5"
                      />
                      <span>
                        <span className="block text-sm font-semibold text-slate-900">{option.label}</span>
                        <span className="mt-1 block text-xs leading-relaxed text-slate-500">{option.description}</span>
                      </span>
                    </Label>
                  );
                })}
              </RadioGroup>
            </Field>
          )}
        />
      </section>
    </div>
  );
}
