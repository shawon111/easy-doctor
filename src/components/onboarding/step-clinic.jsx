"use client";

import { Controller, useFieldArray } from "react-hook-form";
import { Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { BOOKING_OPTIONS, VISITING_DAYS } from "./onboarding-utils";
import { Field, TextField, getFieldError } from "./form-field";

export function StepClinic({ register, control, errors }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "clinicAddress",
  });

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-medium">
              Clinic / chamber<span className="ml-0.5 text-destructive">*</span>
            </p>
            <p className="text-xs text-muted-foreground">
              Add at least one location where patients can visit
            </p>
          </div>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() =>
              append({
                chamberName: "",
                address: "",
                city: "",
                country: "",
                visitingHours: "",
                visitingDays: "",
              })
            }
          >
            <Plus className="size-4" />
            Add
          </Button>
        </div>

        {errors.clinicAddress?.message && (
          <p className="text-xs text-destructive" role="alert">
            {errors.clinicAddress.message}
          </p>
        )}

        <div className="space-y-3">
          {fields.map((field, index) => (
            <Card key={field.id} size="sm">
              <CardHeader className="flex flex-row items-center justify-between gap-2 pb-0">
                <CardTitle className="text-sm">Location {index + 1}</CardTitle>
                {fields.length > 1 && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon-sm"
                    onClick={() => remove(index)}
                    aria-label={`Remove location ${index + 1}`}
                  >
                    <Trash2 className="size-4 text-destructive" />
                  </Button>
                )}
              </CardHeader>
              <CardContent className="grid gap-3 pt-3 sm:grid-cols-2">
                <Field
                  label="Chamber name"
                  htmlFor={`clinicAddress.${index}.chamberName`}
                  required
                  className="sm:col-span-2"
                  error={getFieldError(
                    errors,
                    `clinicAddress.${index}.chamberName`
                  )}
                >
                  <TextField
                    id={`clinicAddress.${index}.chamberName`}
                    placeholder="City Medical Center"
                    error={getFieldError(
                      errors,
                      `clinicAddress.${index}.chamberName`
                    )}
                    {...register(`clinicAddress.${index}.chamberName`)}
                  />
                </Field>

                <Field
                  label="Address"
                  htmlFor={`clinicAddress.${index}.address`}
                  required
                  className="sm:col-span-2"
                  error={getFieldError(errors, `clinicAddress.${index}.address`)}
                >
                  <TextField
                    id={`clinicAddress.${index}.address`}
                    placeholder="Street address"
                    error={getFieldError(errors, `clinicAddress.${index}.address`)}
                    {...register(`clinicAddress.${index}.address`)}
                  />
                </Field>

                <Field
                  label="City"
                  htmlFor={`clinicAddress.${index}.city`}
                  required
                  error={getFieldError(errors, `clinicAddress.${index}.city`)}
                >
                  <TextField
                    id={`clinicAddress.${index}.city`}
                    placeholder="City"
                    error={getFieldError(errors, `clinicAddress.${index}.city`)}
                    {...register(`clinicAddress.${index}.city`)}
                  />
                </Field>

                <Field
                  label="Country"
                  htmlFor={`clinicAddress.${index}.country`}
                  required
                  error={getFieldError(errors, `clinicAddress.${index}.country`)}
                >
                  <TextField
                    id={`clinicAddress.${index}.country`}
                    placeholder="Country"
                    error={getFieldError(
                      errors,
                      `clinicAddress.${index}.country`
                    )}
                    {...register(`clinicAddress.${index}.country`)}
                  />
                </Field>

                <Controller
                  control={control}
                  name={`clinicAddress.${index}.visitingHours`}
                  render={({ field }) => {
                    const [openingTime = "", closingTime = ""] = (field.value || "").split(" - ");
                    return (
                      <Field
                        label="Visiting hours"
                        required
                        className="sm:col-span-2"
                        error={getFieldError(errors, `clinicAddress.${index}.visitingHours`)}
                      >
                        <div className="grid grid-cols-2 gap-3">
                          <TextField type="time" aria-label="Opening time" value={openingTime} onChange={(event) => field.onChange(`${event.target.value} - ${closingTime}`)} />
                          <TextField type="time" aria-label="Closing time" value={closingTime} onChange={(event) => field.onChange(`${openingTime} - ${event.target.value}`)} />
                        </div>
                      </Field>
                    );
                  }}
                />

                <Controller
                  control={control}
                  name={`clinicAddress.${index}.visitingDays`}
                  render={({ field }) => {
                    const selectedDays = field.value ? field.value.split(", ") : [];
                    return (
                      <Field
                        label="Visiting days"
                        required
                        className="sm:col-span-2"
                        error={getFieldError(errors, `clinicAddress.${index}.visitingDays`)}
                      >
                        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                          {VISITING_DAYS.map((day) => {
                            const checked = selectedDays.includes(day);
                            return (
                              <label key={day} className="flex items-center gap-2 rounded-md border px-3 py-2 text-sm">
                                <input
                                  type="checkbox"
                                  checked={checked}
                                  onChange={() => field.onChange(
                                    checked
                                      ? selectedDays.filter((selectedDay) => selectedDay !== day).join(", ")
                                      : [...selectedDays, day].join(", ")
                                  )}
                                />
                                {day}
                              </label>
                            );
                          })}
                        </div>
                      </Field>
                    );
                  }}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator />

      <Controller
        control={control}
        name="bookingPreferences"
        render={({ field }) => (
          <Field
            label="Booking preference"
            required
            error={errors.bookingPreferences?.message}
          >
            <RadioGroup
              value={field.value}
              onValueChange={field.onChange}
              className="grid gap-3 sm:grid-cols-3"
            >
              {BOOKING_OPTIONS.map((option) => (
                <Label
                  key={option.value}
                  htmlFor={`booking-${option.value}`}
                  className={cn(
                    "flex cursor-pointer flex-col gap-2 rounded-lg border p-3 transition-colors",
                    field.value === option.value
                      ? "border-primary bg-primary/5"
                      : "border-border hover:bg-muted/50"
                  )}
                >
                  <div className="flex items-center gap-2">
                    <RadioGroupItem
                      value={option.value}
                      id={`booking-${option.value}`}
                    />
                    <span className="text-sm font-medium">{option.label}</span>
                  </div>
                  <span className="pl-6 text-xs text-muted-foreground">
                    {option.description}
                  </span>
                </Label>
              ))}
            </RadioGroup>
          </Field>
        )}
      />
    </div>
  );
}
