"use client";

import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";
import { STEPS } from "./onboarding-schema";

export function StepIndicator({ currentStep }) {
  const progress = ((currentStep + 1) / STEPS.length) * 100;
  const step = STEPS[currentStep];

  return (
    <div className="mb-6 space-y-4">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Step {currentStep + 1} of {STEPS.length}
          </p>
          <h2 className="text-lg font-semibold sm:text-xl">{step.title}</h2>
          <p className="text-sm text-muted-foreground">{step.description}</p>
        </div>
      </div>

      <Progress value={progress} className="h-1.5" />

      <nav
        aria-label="Onboarding progress"
        className="hidden gap-2 sm:grid sm:grid-cols-5"
      >
        {STEPS.map((s, index) => {
          const isActive = index === currentStep;
          const isComplete = index < currentStep;

          return (
            <div
              key={s.id}
              className={cn(
                "rounded-lg border px-2 py-2 text-center transition-colors",
                isActive && "border-primary bg-primary/5",
                isComplete && "border-primary/40 bg-muted/50",
                !isActive && !isComplete && "border-border bg-card"
              )}
            >
              <p
                className={cn(
                  "text-xs font-medium",
                  isActive && "text-primary",
                  isComplete && "text-foreground",
                  !isActive && !isComplete && "text-muted-foreground"
                )}
              >
                {s.title}
              </p>
            </div>
          );
        })}
      </nav>
    </div>
  );
}
