"use client";

import { StatCard } from "./StatCard";

export function StatsGrid() {
  return (
    <div className="mb-6 grid grid-cols-1 gap-4 sm:mb-8 sm:gap-6 lg:grid-cols-3">
      <StatCard
        icon="public"
        label="Website Status"
        value="Online"
        accentColor="[#10B981]"
        badge={
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#10B981]/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#10B981]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#10B981]" />
            Live
          </span>
        }
      />

      <StatCard
        icon="visibility"
        label="Total Views"
        value="1,248"
        accentColor="primary"
        badge={
          <span className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#10B981]">
            <span className="material-symbols-outlined text-[14px]">trending_up</span>
            +12%
          </span>
        }
      />

      <StatCard
        icon="event_available"
        label="Appointments"
        value="32"
        accentColor="destructive"
        badge={
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            This Month
          </span>
        }
      />
    </div>
  );
}
