"use client";

import { useAppointmentDashboard } from "../appointments/useAppointmentDashboard";
import { StatCard } from "./StatCard";

export function AppointmentStatsCard() {
    const { data } = useAppointmentDashboard(5);

    return (
        <StatCard
            icon="event_available"
            label="Upcoming Appointments"
            value={data?.upcomingAppointments ?? "—"}
            accentColor="destructive"
            badge={
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {data ? `${data.todayAppointments} today` : "Loading"}
                </span>
            }
        />
    );
}
