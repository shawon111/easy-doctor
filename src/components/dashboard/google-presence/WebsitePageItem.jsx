"use client";

import { cn } from "@/lib/utils";

const STATUS_BADGE = {
  live: (
    <span className="rounded-full bg-[#10B981]/10 px-2 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#10B981]">
      LIVE
    </span>
  ),
  "needs-review": (
    <span className="rounded-full bg-[#F59E0B]/10 px-2 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#F59E0B]">
      NEEDS REVIEW
    </span>
  ),
};

export function WebsitePageItem({ icon, label, slug, active, status, onClick }) {
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

      {status ? (
        <span className="shrink-0">{STATUS_BADGE[status]}</span>
      ) : (
        <button className="shrink-0 text-sm font-medium text-primary opacity-100 transition-opacity sm:opacity-0 sm:group-hover:opacity-100">
          Edit
        </button>
      )}
    </div>
  );
}
