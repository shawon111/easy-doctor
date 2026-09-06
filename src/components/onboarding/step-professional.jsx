"use client";

import { useState } from "react";
import { useFieldArray, Controller } from "react-hook-form";
import { Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Field, TextField, getFieldError } from "./form-field";
import { MEDICAL_SPECIALTIES } from "./onboarding-utils";

export function StepProfessional({ register, control, errors }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "qualifications",
  });

  return (
    <div className="space-y-6">
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
            <SpecialtyPicker value={field.value} onChange={field.onChange} error={errors.specialization?.message} />
          )}
        />
      </Field>

      <Field
        label="Years of experience"
        htmlFor="experience"
        optional
        error={errors.experience?.message}
      >
        <TextField
          id="experience"
          type="number"
          min={0}
          placeholder="e.g. 10"
          error={errors.experience?.message}
          {...register("experience")}
        />
      </Field>

      <div className="space-y-3">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-medium">
              Qualifications<span className="ml-0.5 text-destructive">*</span>
            </p>
            <p className="text-xs text-muted-foreground">
              Add at least one degree or certification
            </p>
          </div>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() =>
              append({ degree: "", institution: "", year: "" })
            }

          >
            <Plus className="size-4" />
            Add
          </Button>
        </div>

        {errors.qualifications?.message && (
          <p className="text-xs text-destructive" role="alert">
            {errors.qualifications.message}
          </p>
        )}

        <div className="space-y-3">
          {fields.map((field, index) => (
            <Card key={field.id} size="sm">
              <CardHeader className="flex flex-row items-center justify-between gap-2 pb-0">
                <CardTitle className="text-sm">
                  Qualification {index + 1}
                </CardTitle>
                {fields.length > 1 && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon-sm"
                    onClick={() => remove(index)}
                    aria-label={`Remove qualification ${index + 1}`}
                  >
                    <Trash2 className="size-4 text-destructive" />
                  </Button>
                )}
              </CardHeader>
              <CardContent className="space-y-3 pt-3">
                <Field
                  label="Degree"
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
                  error={getFieldError(
                    errors,
                    `qualifications.${index}.institution`
                  )}
                >
                  <TextField
                    id={`qualifications.${index}.institution`}
                    placeholder="University or medical college"
                    error={getFieldError(
                      errors,
                      `qualifications.${index}.institution`
                    )}
                    {...register(`qualifications.${index}.institution`)}
                  />
                </Field>

                <Field
                  label="Year"
                  htmlFor={`qualifications.${index}.year`}
                  required
                  error={getFieldError(errors, `qualifications.${index}.year`)}
                >
                  <TextField
                    id={`qualifications.${index}.year`}
                    type="number"
                    min={1950}
                    max={new Date().getFullYear()}
                    placeholder="2015"
                    error={getFieldError(errors, `qualifications.${index}.year`)}
                    {...register(`qualifications.${index}.year`)}
                  />
                </Field>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator />
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
      <TextField
        id="specialization"
        value={query || value || ""}
        placeholder="Search and select a specialty"
        error={error}
        onChange={(event) => {
          setQuery(event.target.value);
          onChange("");
        }}
      />
      {(!value || query) && (
        <div className="max-h-48 overflow-y-auto rounded-lg border bg-background p-1">
          {matches.length ? matches.map((specialty) => (
            <button
              key={specialty}
              type="button"
              className="block w-full rounded-md px-3 py-2 text-left text-sm hover:bg-muted"
              onClick={() => {
                onChange(specialty);
                setQuery("");
              }}
            >
              {specialty}
            </button>
          )) : <p className="px-3 py-2 text-sm text-muted-foreground">No specialties found.</p>}
        </div>
      )}
    </div>
  );
}
