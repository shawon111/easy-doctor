"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ActivityItem({ icon, title, time, className }) {
  return (
    <div
      className={cn(
        "group flex cursor-pointer items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4",
        "transition-colors hover:bg-muted/40",
        className
      )}
    >
      <div className="min-w-0 flex items-center gap-3 sm:gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
          <span className="material-symbols-outlined">{icon}</span>
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-foreground sm:text-base">{title}</p>
          <p className="mt-0.5 text-sm text-muted-foreground">{time}</p>
        </div>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 shrink-0 opacity-100 transition-opacity sm:opacity-0 sm:group-hover:opacity-100"
        tabIndex={-1}
        aria-hidden="true"
      >
        <span className="material-symbols-outlined text-muted-foreground">chevron_right</span>
      </Button>
    </div>
  );
}
