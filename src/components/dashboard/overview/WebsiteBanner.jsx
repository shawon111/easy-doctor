"use client";

import { Button } from "@/components/ui/button";

export function WebsiteBanner() {
  return (
    <div className="flex w-full flex-col items-stretch gap-3 bg-primary px-4 py-3 text-primary-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 md:px-8">
      <div className="flex items-start gap-2 sm:items-center">
        <span className="material-symbols-outlined text-[20px]">campaign</span>
        <span className="text-sm font-medium">
          ✨ Your professional website isn&apos;t ready yet. Choose a template and launch your
          website in minutes.
        </span>
      </div>
      <Button
        variant="ghost"
        size="sm"
        className="w-full rounded-full bg-white/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-primary-foreground hover:bg-white/30 hover:text-primary-foreground sm:w-auto sm:tracking-widest"
      >
        Create Website
        <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
      </Button>
    </div>
  );
}
