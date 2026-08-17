"use client";

import { cn } from "@/lib/utils";

export function AppointmentStatCard({ label, value, icon, badge, badgeCaption, className }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-border bg-card p-4 sm:p-6",
        "shadow-[0px_4px_12px_rgba(0,0,0,0.03)]",
        "group flex flex-col justify-between",
        className
      )}
    >
      <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-muted opacity-50 transition-transform duration-500 group-hover:scale-110" />
      <div className="relative z-10 flex items-start justify-between">
        <div>
          <p className="mb-1 text-sm text-muted-foreground">{label}</p>
          <h3 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{value}</h3>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary">
          <span className="material-symbols-outlined text-[24px]">{icon}</span>
        </div>
      </div>

      <div className="relative z-10 mt-6 flex items-center gap-2">
        {badge}
        {badgeCaption && (
          <span className="font-mono text-xs text-muted-foreground">{badgeCaption}</span>
        )}
      </div>
    </div>
  );
}
