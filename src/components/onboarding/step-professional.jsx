"use client";

import { useFieldArray } from "react-hook-form";
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

export function StepProfessional({ register, control, errors }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "qualifications",
  });

  return (
    <div className="space-y-6">
      <Field
        label="Specialization"
        htmlFor="specialization"
        required
        error={errors.specialization?.message}
      >
        <TextField
          id="specialization"
          placeholder="e.g. Cardiology, Dermatology"
          error={errors.specialization?.message}
          {...register("specialization")}
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
