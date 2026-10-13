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
            badge={
                <span className="text-[11px] font-bold font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">
                    {data ? `${data.todayAppointments} today` : "Loading"}
                </span>
            }
        />
    );
}
