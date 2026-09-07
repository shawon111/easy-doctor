"use client";

import { cn } from "@/lib/utils";

export function WebsitePageItem({ icon, label, slug, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "group flex cursor-pointer items-center justify-between gap-2 border-l-4 p-3 sm:p-4 transition-colors",
        active
          ? "border-primary bg-primary/5"
          : "border-transparent hover:bg-muted/50"
      )}
    >
      <div className="min-w-0 flex items-center gap-3">
        <span
          className={cn(
            "material-symbols-outlined transition-colors",
            active ? "text-primary" : "text-muted-foreground group-hover:text-primary"
          )}
        >
          {icon}
        </span>
        <div className="min-w-0">
          <p
            className={cn(
              "truncate text-sm transition-all",
              active ? "font-semibold text-foreground" : "text-foreground group-hover:font-medium"
            )}
          >
            {label}
          </p>
          <p className="truncate font-mono text-xs text-muted-foreground">{slug}</p>
        </div>
      </div>
    </div>
  );
}
