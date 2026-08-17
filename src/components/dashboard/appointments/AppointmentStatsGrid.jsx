"use client";

import { AppointmentStatCard } from "./AppointmentStatCard";

export function AppointmentStatsGrid() {
  return (
    <div className="mb-6 grid grid-cols-1 gap-4 sm:mb-8 md:grid-cols-2">
      <AppointmentStatCard
        label="Total Appointment Clicks"
        value="32"
        icon="ads_click"
        badgeCaption="vs last month"
        badge={
          <span className="inline-flex items-center rounded-full bg-[#10B981]/10 px-2 py-1 text-xs font-semibold uppercase tracking-wider text-[#10B981]">
            <span className="material-symbols-outlined mr-1 text-[14px]">trending_up</span>
            +14%
          </span>
        }
      />

      <AppointmentStatCard
        label="This Month"
        value="12"
        icon="calendar_month"
        badgeCaption="vs expected"
        badge={
          <span className="inline-flex items-center rounded-full bg-[#F59E0B]/10 px-2 py-1 text-xs font-semibold uppercase tracking-wider text-[#F59E0B]">
            <span className="material-symbols-outlined mr-1 text-[14px]">trending_flat</span>
            Steady
          </span>
        }
      />
    </div>
  );
}
