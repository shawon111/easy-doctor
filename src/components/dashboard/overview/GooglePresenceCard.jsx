"use client";

import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

export function GooglePresenceCard() {
  return (
    <div className="xl:col-span-2 flex flex-col justify-between rounded-2xl border border-border bg-card p-4 shadow-[0px_4px_12px_rgba(0,0,0,0.03)] sm:p-6">
      {/* Header */}
      <div>
        <div className="mb-5 flex flex-col gap-3 sm:mb-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-primary">
              <span className="material-symbols-outlined">search</span>
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground">Google Presence</h3>
              <p className="text-sm text-muted-foreground">How patients find you online</p>
            </div>
          </div>
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-[#10B981]/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#10B981] sm:tracking-wider">
            Visibility: Growing
          </span>
        </div>

        {/* Profile Completeness */}
        <div className="mb-5 rounded-xl border border-border bg-muted/40 p-4 sm:mb-6 sm:p-5">
          <div className="mb-2 flex items-end justify-between">
            <span className="text-sm font-semibold text-foreground">Profile Completeness</span>
            <span className="text-lg font-semibold text-primary">82%</span>
          </div>
          <Progress value={82} className="mb-2 h-2.5 bg-border" />
          <p className="text-sm text-muted-foreground">
            Add operating hours and 2 more photos to reach 100%.
          </p>
        </div>
      </div>

      {/* SEO CTA */}
      <div className="flex flex-col items-stretch gap-3 rounded-xl border border-sky-200/50 bg-sky-50/60 p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary">tips_and_updates</span>
          <p className="text-sm font-medium text-foreground">Ready to rank higher?</p>
        </div>
        <Button size="sm" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto">
          Improve SEO
        </Button>
      </div>
    </div>
  );
}
