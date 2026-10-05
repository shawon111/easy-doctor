import { AppointmentStatCard } from "./AppointmentStatCard";

export function AppointmentStatsGrid({
  upcomingAppointments = 0,
  todayAppointments = 0,
}) {
  return (
    <div className="mb-6 grid grid-cols-1 gap-4 sm:mb-8 md:grid-cols-2">
      <AppointmentStatCard
        label="Upcoming Appointments"
        value={upcomingAppointments}
        icon="event_available"
      />

      <AppointmentStatCard
        label="Today's Appointments"
        value={todayAppointments}
        icon="calendar_month"
      />
    </div>
  );
}
