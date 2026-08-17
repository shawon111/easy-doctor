"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function PlanFeature({ label }) {
  return (
    <div className="flex items-center gap-3">
      <span className="material-symbols-outlined text-[18px] text-[#10B981]">check_circle</span>
      <span className="text-sm text-foreground">{label}</span>
    </div>
  );
}

const PLAN_FEATURES = [
  "Professional website",
  "Custom template",
  "Google optimization",
  "WhatsApp appointments",
];

export function CurrentPlanCard({ className }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border bg-card p-4 sm:p-6",
        "shadow-[0px_4px_12px_rgba(0,0,0,0.03)]",
        "group lg:col-span-4",
        className
      )}
    >
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-sky-200/40 blur-2xl transition-transform duration-500 group-hover:scale-110" />

      <div className="relative z-10 flex h-full flex-col">
        {/* Card header */}
        <div className="mb-6 flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Your Plan</h3>
            <div className="mt-1">
              <span className="inline-flex items-center rounded-full border border-[#10B981]/20 bg-[#10B981]/10 px-2.5 py-0.5 text-[11px] font-semibold text-[#065F46]">
                Active
              </span>
            </div>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-primary">
            <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              verified
            </span>
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-6">
          <span className="text-[32px] font-bold tracking-tight text-foreground">PRO</span>
          <div className="mt-2 text-2xl font-semibold text-foreground">
            ৳4,500{" "}
            <span className="text-sm font-normal text-muted-foreground">/ year</span>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">Next billing date: Oct 15, 2024</p>
        </div>

        {/* Feature list */}
        <div className="mt-auto space-y-3 border-t border-border pt-5">
          {PLAN_FEATURES.map((f) => (
            <PlanFeature key={f} label={f} />
          ))}
        </div>

        {/* Actions */}
        <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:gap-3">
          <Button variant="secondary" className="flex-1 text-sm font-semibold">
            Manage
          </Button>
          <Button variant="outline" className="flex-1 text-sm font-semibold text-primary hover:text-primary">
            Invoices
          </Button>
        </div>
      </div>
    </div>
  );
}
