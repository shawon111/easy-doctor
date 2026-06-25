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
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

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

export function OnboardingForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const isLastStep = currentStep === STEPS.length - 1;
  const router = useRouter();

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

  // handle form submission
  const createNewUser = async (data) => {
    console.log("Submitting data:", data);
    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to create user");
    }

    return response.json();
  }

  const { mutate, isPending } = useMutation({
    mutationFn: createNewUser,
    onSuccess: (data) => {
      toast.success("Your profile created successfully!");
      router.push("/dashboard");
    },
    onError: (error) => {
      toast.error("Failed to your profile user. Please try again.");
    }
  })

  const onSubmit = (data) => {
    mutate(data);
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
                key="back-button"
                type="button"
                variant="outline"
                onClick={goBack}
                disabled={currentStep === 0 || isSubmitting}
                className="w-full sm:w-auto cursor-pointer"
              >
                Back
              </Button>

              {isLastStep ? (
                <Button
                  key="submit-button"
                  type="submit"
                  disabled={isSubmitting || isPending}
                  className="w-full sm:w-auto cursor-pointer"
                >
                  {isPending ? "Creating Profile..." : "Create Profile"}
                </Button>
              ) : (
                <Button
                  key="continue-button"
                  type="button"
                  onClick={goNext}
                  className="w-full sm:w-auto cursor-pointer"
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
