"use client";

import {
  Check,
  FileText,
  GraduationCap,
  MapPin,
  Share2,
  Stethoscope,
  UserRound,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { STEPS } from "./onboarding-schema";

const STEP_ICONS = [UserRound, Stethoscope, GraduationCap, MapPin, FileText, Share2];

export function StepIndicator({ currentStep, onStepClick, compact = false }) {
  const step = STEPS[currentStep];
  const progress = ((currentStep + 1) / STEPS.length) * 100;

  return (
    <>
      <div className="mb-5 flex items-center justify-between lg:hidden">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">
            Step {currentStep + 1} of {STEPS.length}
          </p>
          <p className="mt-1 text-sm font-semibold text-slate-900">{step.title}</p>
        </div>
        <p className="text-xs text-slate-500">{Math.round(progress)}% complete</p>
      </div>
      <div className="mb-5 h-1.5 overflow-hidden rounded-full bg-slate-100 lg:hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <nav
        aria-label="Registration steps"
        className={cn("space-y-1.5", compact && "hidden")}
      >
        {STEPS.map((item, index) => {
          const Icon = STEP_ICONS[index];
          const isCurrent = index === currentStep;
          const isComplete = index < currentStep;
          const isClickable = isComplete && Boolean(onStepClick);

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => isClickable && onStepClick(index)}
              disabled={!isClickable}
              aria-current={isCurrent ? "step" : undefined}
              className={cn(
                "group flex w-full items-center gap-3 rounded-2xl p-3 text-left transition-all",
                isCurrent && "bg-white/[0.12] ring-1 ring-white/[0.14]",
                isComplete && "hover:bg-white/[0.08]",
                !isCurrent && !isComplete && "opacity-65"
              )}
            >
              <span
                className={cn(
                  "flex size-9 shrink-0 items-center justify-center rounded-xl border transition-colors",
                  isCurrent && "border-white bg-white text-blue-700 shadow-lg shadow-black/10",
                  isComplete && "border-emerald-300/30 bg-emerald-300/15 text-emerald-200",
                  !isCurrent && !isComplete && "border-white/15 bg-white/5 text-white/65"
                )}
              >
                {isComplete ? <Check className="size-4" /> : <Icon className="size-4" />}
              </span>
              <span className="min-w-0 flex-1">
                <span className={cn("block text-sm font-semibold", isCurrent ? "text-white" : "text-white/85")}>
                  {item.title}
                </span>
                <span className="mt-0.5 block truncate text-xs text-white/55">{item.description}</span>
              </span>
              {isCurrent ? <span className="size-1.5 rounded-full bg-cyan-200" /> : null}
            </button>
          );
        })}
      </nav>
    </>
  );
}
