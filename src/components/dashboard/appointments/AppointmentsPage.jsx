"use client";

import { AppointmentStatsGrid } from "./AppointmentStatsGrid";
import { RecentAppointmentsList } from "./RecentAppointmentsList";
import { useAppointmentDashboard } from "./useAppointmentDashboard";

export function AppointmentsPage() {
  const { data, isLoading, isError, error } = useAppointmentDashboard(8);

  if (isLoading) {
    return (
      <div className="mx-auto w-full max-w-[1440px] space-y-6 p-4 pb-12 sm:p-6 md:p-8">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="h-36 animate-pulse rounded-xl bg-muted" />
          <div className="h-36 animate-pulse rounded-xl bg-muted" />
        </div>
        <div className="h-72 animate-pulse rounded-xl bg-muted" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="mx-auto w-full max-w-[1440px] p-4 sm:p-6 md:p-8">
        <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-6 text-sm text-destructive">
          {error.message}
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-[1440px] flex-1 p-4 pb-12 sm:p-6 sm:pb-16 md:p-8 md:pb-20">
      <AppointmentStatsGrid
        totalAppointments={data.totalAppointments}
        thisMonthAppointments={data.thisMonthAppointments}
      />
      <RecentAppointmentsList
        appointments={data.recentAppointments}
        title="Appointments"
      />
    </div>
  );
}
