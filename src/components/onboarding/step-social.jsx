"use client";

import { Controller, useFieldArray } from "react-hook-form";
import { Info, Plus, Trash2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
    <div className="space-y-4">
      <Alert>
        <Info />
        <AlertTitle>Social links are optional</AlertTitle>
        <AlertDescription>
          Add your professional profiles so patients can find you online. You
          can skip this step if you prefer.
        </AlertDescription>
      </Alert>

      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-medium">Social profiles</p>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => append({ platform: "", url: "" })}
        >
          <Plus className="size-4" />
          Add link
        </Button>
      </div>

      {fields.length === 0 ? (
        <p className="rounded-lg border border-dashed px-4 py-8 text-center text-sm text-muted-foreground">
          No social links added yet.
        </p>
      ) : (
        <div className="space-y-3">
          {fields.map((field, index) => (
            <Card key={field.id} size="sm">
              <CardHeader className="flex flex-row items-center justify-between gap-2 pb-0">
                <CardTitle className="text-sm">Link {index + 1}</CardTitle>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon-sm"
                  onClick={() => remove(index)}
                  aria-label={`Remove social link ${index + 1}`}
                >
                  <Trash2 className="size-4 text-destructive" />
                </Button>
              </CardHeader>
              <CardContent className="grid gap-3 pt-3 sm:grid-cols-2">
                <Controller
                  control={control}
                  name={`socialLinks.${index}.platform`}
                  render={({ field: platformField }) => (
                    <Field
                      label="Platform"
                      required
                      error={getFieldError(
                        errors,
                        `socialLinks.${index}.platform`
                      )}
                    >
                      <Select
                        value={platformField.value}
                        onValueChange={platformField.onChange}
                      >
                        <SelectTrigger
                          className="w-full"
                          aria-invalid={
                            getFieldError(
                              errors,
                              `socialLinks.${index}.platform`
                            )
                              ? true
                              : undefined
                          }
                        >
                          <SelectValue placeholder="Select platform" />
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
                  label="Profile URL"
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
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
