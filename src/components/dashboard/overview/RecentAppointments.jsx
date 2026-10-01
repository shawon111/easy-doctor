"use client";

import { RecentAppointmentsList } from "../appointments/RecentAppointmentsList";
import { useAppointmentDashboard } from "../appointments/useAppointmentDashboard";

export function RecentAppointments() {
    const { data, isLoading, isError, error } = useAppointmentDashboard(5);

    if (isLoading) {
        return <div className="h-[400px] animate-pulse rounded-2xl bg-muted" />;
    }

    if (isError) {
        return (
            <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-6 text-sm text-destructive">
                {error.message}
            </div>
        );
    }

    return (
        <RecentAppointmentsList
            appointments={data.recentAppointments}
            compact
            title="Recent Appointments"
            viewAllHref="/dashboard/appointments"
        />
    );
}
