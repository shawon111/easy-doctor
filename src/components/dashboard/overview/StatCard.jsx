"use client";

import { cn } from "@/lib/utils";

export function StatCard({ icon, label, value, accentColor = "primary", badge, className }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border bg-card px-4 py-5 sm:px-6 sm:py-6",
        "shadow-[0px_4px_12px_rgba(0,0,0,0.03)] transition-colors",
        "group hover:border-primary/30",
        className
      )}
    >
      <div
        className={cn(
          "absolute -right-4 -top-4 h-24 w-24 rounded-bl-full opacity-50 transition-transform group-hover:scale-110",
          `bg-${accentColor}/5`
        )}
      />

      <div className="relative z-10 mb-4 flex items-start justify-between">
        <div className={cn("rounded-lg p-2", `bg-${accentColor}/10 text-${accentColor}`)}>
          <span className="material-symbols-outlined text-[20px]">{icon}</span>
        </div>
        {badge}
      </div>

      <p className="text-sm text-muted-foreground mb-1">{label}</p>
      <p className="text-2xl font-semibold tracking-tight text-foreground">{value}</p>
    </div>
  );
}
