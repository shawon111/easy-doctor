"use client";

import { useState } from "react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  defaultValues,
  onboardingSchema,
  STEPS,
} from "./onboarding-schema";
import { STEP_FIELDS } from "./onboarding-utils";
import { StepIndicator } from "./step-indicator";
import { StepAccount } from "./step-account";
import { StepProfessional } from "./step-professional";
import { StepClinic } from "./step-clinic";
import { StepProfile } from "./step-profile";
import { StepSocial } from "./step-social";

function OnboardingSteps({ currentStep }) {
  const {
    register,
    control,
    formState: { errors },
    watch,
  } = useFormContext();

  switch (currentStep) {
    case 0:
      return <StepAccount register={register} errors={errors} />;
    case 1:
      return (
        <StepProfessional
          register={register}
          control={control}
          errors={errors}
        />
      );
    case 2:
      return (
        <StepClinic register={register} control={control} errors={errors} />
      );
    case 3:
      return (
        <StepProfile
          register={register}
          control={control}
          errors={errors}
          watch={watch}
        />
      );
    case 4:
      return (
        <StepSocial register={register} control={control} errors={errors} />
      );
    default:
      return null;
  }
}

export function OnboardingForm({ onComplete }) {
  const [currentStep, setCurrentStep] = useState(0);
  const isLastStep = currentStep === STEPS.length - 1;

  const methods = useForm({
    resolver: zodResolver(onboardingSchema),
    defaultValues,
    mode: "onTouched",
  });

  const {
    handleSubmit,
    trigger,
    formState: { isSubmitting },
  } = methods;

  const goNext = async () => {
    const fields = STEP_FIELDS[currentStep];
    const isValid = await trigger(fields);
    if (isValid) {
      setCurrentStep((step) => Math.min(step + 1, STEPS.length - 1));
    }
  };

  const goBack = () => {
    setCurrentStep((step) => Math.max(step - 1, 0));
  };

  const onSubmit = (data) => {
    onComplete?.(data);
  };

  const step = STEPS[currentStep];

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-6 sm:py-10">
      <StepIndicator currentStep={currentStep} />

      <FormProvider {...methods}>
        <Card>
          <CardHeader>
            <CardTitle>{step.title}</CardTitle>
            <CardDescription>{step.description}</CardDescription>
          </CardHeader>

          <form onSubmit={handleSubmit(onSubmit)}>
            <CardContent>
              <OnboardingSteps currentStep={currentStep} />
            </CardContent>

            <CardFooter className="flex flex-col-reverse gap-3 border-t bg-muted/30 sm:flex-row sm:justify-between">
              <Button
                type="button"
                variant="outline"
                onClick={goBack}
                disabled={currentStep === 0 || isSubmitting}
                className="w-full sm:w-auto"
              >
                Back
              </Button>

              {isLastStep ? (
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto"
                >
                  Complete setup
                </Button>
              ) : (
                <Button
                  type="button"
                  onClick={goNext}
                  disabled={isSubmitting}
                  className="w-full sm:w-auto"
                >
                  Continue
                </Button>
              )}
            </CardFooter>
          </form>
        </Card>
      </FormProvider>
    </div>
  );
}
