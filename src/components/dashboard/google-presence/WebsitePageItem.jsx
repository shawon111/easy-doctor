"use client";

import { cn } from "@/lib/utils";

export function WebsitePageItem({ icon, label, slug, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "group flex cursor-pointer items-center justify-between gap-2 border-l-4 p-3.5 sm:p-4 transition-colors",
        active
          ? "border-indigo-500 bg-indigo-500/10 text-white"
          : "border-transparent text-slate-400 hover:bg-slate-900/60 hover:text-slate-200"
      )}
    >
      <div className="min-w-0 flex items-center gap-3">
        <span
          className={cn(
            "material-symbols-outlined transition-colors text-[20px]",
            active ? "text-indigo-400" : "text-slate-500 group-hover:text-indigo-400"
          )}
        >
          {icon}
        </span>
        <div className="min-w-0">
          <p
            className={cn(
              "truncate text-xs sm:text-sm transition-all",
              active ? "font-bold text-white" : "font-medium text-slate-300 group-hover:text-white"
            )}
          >
            {label}
          </p>
          <p className="truncate font-mono text-[11px] text-slate-500">{slug}</p>
        </div>
      </div>
    </div>
  );
}
