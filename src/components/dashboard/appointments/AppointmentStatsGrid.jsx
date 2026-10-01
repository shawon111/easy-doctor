import { AppointmentStatCard } from "./AppointmentStatCard";

export function AppointmentStatsGrid({
  totalAppointments = 0,
  thisMonthAppointments = 0,
}) {
  return (
    <div className="mb-6 grid grid-cols-1 gap-4 sm:mb-8 md:grid-cols-2">
      <AppointmentStatCard
        label="Total Appointment"
        value={totalAppointments}
        icon="event_available"
      />

      <AppointmentStatCard
        label="This Month Appointment"
        value={thisMonthAppointments}
        icon="calendar_month"
      />
    </div>
  );
}
