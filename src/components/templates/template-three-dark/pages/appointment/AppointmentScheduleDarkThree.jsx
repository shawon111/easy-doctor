const SCHEDULE = [
  { day: "Monday", hours: "09:00 AM - 01:00 PM", location: "Main Clinic, Suite A", available: true },
  { day: "Tuesday", hours: "02:00 PM - 06:00 PM", location: "City Medical Center", available: true },
  { day: "Wednesday", hours: "09:00 AM - 12:00 PM", location: "Virtual Consultations", available: true },
  { day: "Thursday", hours: "02:00 PM - 06:00 PM", location: "Main Clinic, Suite A", available: true },
  { day: "Friday", hours: "10:00 AM - 02:00 PM", location: "City Medical Center", available: true },
  {
    day: "Saturday & Sunday",
    hours: "Emergencies Only",
    location: "-",
    available: false,
  },
];

export default function AppointmentScheduleDarkThree() {
  return (
    <section className="mb-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <h2 className="font-headline-lg text-headline-lg mb-2">Visiting Schedule</h2>
          <p className="text-on-surface-variant font-body-md">Standard operational hours for clinical consultations.</p>
        </div>
        <div className="flex items-center gap-4 text-label-sm font-label-sm text-primary">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-secondary" /> Available Now
          </span>
          <span className="flex items-center gap-1 text-on-surface-variant">
            <span className="w-2 h-2 rounded-full bg-outline" /> Closed
          </span>
        </div>
      </div>

      <div className="overflow-x-auto glass-card rounded-xl border border-outline-variant/30">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-high text-on-surface font-semibold border-b border-outline-variant/30">
              <th className="px-8 py-5">Weekday</th>
              <th className="px-8 py-5">Clinical Hours</th>
              <th className="px-8 py-5">Location</th>
              <th className="px-8 py-5 text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/20">
            {SCHEDULE.map((row) => (
              <tr
                key={row.day}
                className={`t3d-table-row hover:bg-surface-container/50 transition-colors ${
                  !row.available ? "bg-surface-container-lowest/30" : ""
                }`}
              >
                <td className={`px-8 py-6 font-semibold ${!row.available ? "opacity-50" : ""}`}>{row.day}</td>
                <td className={`px-8 py-6 ${!row.available ? "opacity-50" : ""}`}>{row.hours}</td>
                <td className={`px-8 py-6 ${!row.available ? "opacity-50" : ""}`}>{row.location}</td>
                <td className="px-8 py-6 text-right">
                  {row.available ? (
                    <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium">
                      Available
                    </span>
                  ) : (
                    <span className="bg-outline-variant/20 text-on-surface-variant px-3 py-1 rounded-full text-sm font-medium">
                      Closed
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
