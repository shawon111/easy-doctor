"use client";

import { useState } from "react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, ArrowRight, Heart, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  defaultValues,
  onboardingSchema,
  STEPS,
} from "./onboarding-schema";
import { STEP_FIELDS } from "./onboarding-utils";
import { StepIndicator } from "./step-indicator";
import { StepAccount } from "./step-account";
import { StepProfessional } from "./step-professional";
import { StepEducation } from "./step-education";
import { StepClinic } from "./step-clinic";
import { StepProfile } from "./step-profile";
import { StepSocial } from "./step-social";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

function OnboardingSteps({ currentStep, setIsUploading }) {
  const {
    register,
    control,
    formState: { errors },
    watch,
  } = useFormContext();

  switch (currentStep) {
    case 0:
      return <StepAccount setIsUploading={setIsUploading} register={register} errors={errors} />;
    case 1:
      return (
        <StepProfessional
          register={register}
          control={control}
          errors={errors}
        />
      );
    case 2:
      return <StepEducation register={register} control={control} errors={errors} />;
    case 3:
      return (
        <StepClinic register={register} control={control} errors={errors} />
      );
    case 4:
      return (
        <StepProfile
          register={register}
          control={control}
          errors={errors}
          watch={watch}
        />
      );
    case 5:
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

  const goToStep = (step) => {
    if (step < currentStep) setCurrentStep(step);
  };

  // handle form submission
  const createNewUser = async (data) => {
    const cleanedClinicAddress = data.clinicAddress?.map(
      ({ division, ...clinic }) => clinic
    );
    const payload = {
      ...data,
      clinicAddress: cleanedClinicAddress,
    };

    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("Failed to create user");
    }

    return response.json();
  };

  const { mutate, isPending } = useMutation({
    mutationFn: createNewUser,
    onSuccess: (data) => {
      toast.success("Your profile created successfully!");
      router.push("/dashboard");
    },
    onError: () => {
      toast.error("We couldn't create your profile. Please try again.");
    }
  })

  const onSubmit = (data) => {
    mutate(data);
  };

  const step = STEPS[currentStep];
  const isBusy = isSubmitting || isPending;

  // track profile image upload
  const [isUploading, setIsUploading] = useState(false)
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f4f7fc] px-3 py-4 sm:px-6 sm:py-8 lg:px-8">
      <div className="pointer-events-none absolute -left-36 -top-36 size-96 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-48 -right-24 size-[34rem] rounded-full bg-indigo-200/30 blur-3xl" />
      <FormProvider {...methods}>
        <div className="relative mx-auto grid min-h-[min(880px,calc(100vh-4rem))] w-full max-w-6xl overflow-hidden rounded-[28px] border border-white/80 bg-white shadow-[0_30px_100px_-35px_rgba(15,23,42,0.25)] lg:grid-cols-[300px_minmax(0,1fr)]">
          <aside className="relative hidden overflow-hidden bg-[#101d3b] px-5 py-7 text-white lg:flex lg:flex-col">
            <div className="pointer-events-none absolute -right-24 -top-20 size-72 rounded-full bg-blue-500/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-28 -left-24 size-72 rounded-full bg-indigo-500/20 blur-3xl" />
            <div className="relative flex h-full flex-col">
              <div className="mb-12 flex items-center gap-2.5">
                <span className="flex size-9 items-center justify-center rounded-xl bg-white text-blue-700 shadow-lg shadow-black/10">
                  <Sparkles className="size-5" />
                </span>
                <span className="text-lg font-bold tracking-tight">Docxio</span>
              </div>

              <div className="mb-9">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                  Your online presence starts here
                </p>
                <h1 className="text-3xl font-semibold leading-tight tracking-tight">
                  A great website,
                  <span className="block bg-gradient-to-r from-cyan-200 to-blue-300 bg-clip-text text-transparent">
                    made simple.
                  </span>
                </h1>
                <p className="mt-4 text-sm leading-relaxed text-blue-100/70">
                  A few thoughtful details are all we need to create your professional website.
                </p>
              </div>

              <StepIndicator currentStep={currentStep} onStepClick={goToStep} />

              <div className="mt-auto space-y-3 border-t border-white/10 pt-5">
                <div className="flex items-center gap-2 text-xs text-blue-100/75">
                  <ShieldCheck className="size-4 text-emerald-300" />
                  Your information stays private
                </div>
                <div className="flex items-center gap-2 text-xs text-blue-100/75">
                  <Heart className="size-4 text-pink-300" />
                  Built for independent doctors
                </div>
              </div>
            </div>
          </aside>

          <section className="flex min-w-0 flex-col px-5 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-10">
            <div className="mb-6 flex items-center justify-between lg:hidden">
              <div className="flex items-center gap-2">
                <span className="flex size-8 items-center justify-center rounded-xl bg-blue-600 text-white">
                  <Sparkles className="size-4" />
                </span>
                <span className="font-bold tracking-tight text-slate-900">Docxio</span>
              </div>
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600">
                About 2 minutes
              </span>
            </div>

            <StepIndicator currentStep={currentStep} compact />

            <form className="flex min-h-0 flex-1 flex-col">
              <header className="mb-7">
                <p className="text-xs font-semibold uppercase tracking-[0.17em] text-blue-600">
                  {currentStep === STEPS.length - 1 ? "Almost there" : `Step ${currentStep + 1} · About 2 minutes`}
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                  {step.title}
                </h2>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-500 sm:text-base">
                  {step.description}
                </p>
              </header>

              <div className="flex-1">
                <OnboardingSteps setIsUploading={setIsUploading} currentStep={currentStep} />
              </div>

              <footer className="mt-8 flex flex-col-reverse gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <Button
                  type="button"
                  variant="outline"
                  onClick={goBack}
                  disabled={currentStep === 0 || isBusy}
                  className="h-12 w-full rounded-xl border-slate-200 bg-white px-5 text-slate-700 hover:bg-slate-50 sm:w-auto"
                >
                  <ArrowLeft className="size-4" />
                  Back
                </Button>

                {isLastStep ? (
                  <Button
                    type="button"
                    onClick={handleSubmit(onSubmit)}
                    disabled={isBusy}
                    className="h-12 w-full rounded-xl bg-blue-600 px-6 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700 sm:w-auto"
                  >
                    {isPending ? "Creating your profile..." : "Create my website profile"}
                    {!isPending ? <ArrowRight className="size-4" /> : null}
                  </Button>
                ) : (
                  <Button
                    type="button"
                    onClick={goNext}
                    disabled={isUploading || isBusy}
                    className="h-12 w-full rounded-xl bg-blue-600 px-6 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700 sm:w-auto"
                  >
                    Continue
                    <ArrowRight className="size-4" />
                  </Button>
                )}
              </footer>
            </form>
          </section>
        </div>
      </FormProvider>
    </main>
  );
}
