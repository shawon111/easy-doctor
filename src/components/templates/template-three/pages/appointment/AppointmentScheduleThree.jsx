export default function AppointmentScheduleThree({ content = {} , isDemo = false}) {
  const schedule = content.items || [];

  return (
    <section className="mb-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <h2 className="font-headline-lg text-headline-lg mb-2">{content.heading}</h2>
          <p className="text-on-surface-variant font-body-md">{content.subheading}</p>
        </div>
        <div className="flex items-center gap-4 text-label-sm font-label-sm text-primary">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-secondary" /> {content.legendAvailable}
          </span>
          <span className="flex items-center gap-1 text-on-surface-variant">
            <span className="w-2 h-2 rounded-full bg-outline" /> {content.legendClosed}
          </span>
        </div>
      </div>

      <div className="overflow-x-auto bg-white rounded-xl border border-outline-variant shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-low text-on-surface font-semibold border-b border-outline-variant">
              <th className="px-8 py-5">Weekday</th>
              <th className="px-8 py-5">Clinical Hours</th>
              <th className="px-8 py-5">Location</th>
              <th className="px-8 py-5 text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/50">
            {schedule.map((row) => (
              <tr
                key={row.day}
                className={`t3-table-row hover:bg-surface-container/30 transition-colors ${
                  !row.available ? "bg-surface-container-low/50" : ""
                }`}
              >
                <td className={`px-8 py-6 font-semibold ${!row.available ? "text-on-surface/40" : ""}`}>
                  {row.day}
                </td>
                <td className={`px-8 py-6 text-on-surface-variant ${!row.available ? "text-on-surface-variant/40" : ""}`}>
                  {row.hours}
                </td>
                <td className={`px-8 py-6 text-on-surface-variant ${!row.available ? "text-on-surface-variant/40" : ""}`}>
                  {row.location}
                </td>
                <td className="px-8 py-6 text-right">
                  {row.available ? (
                    <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium">
                      {content.statusAvailable}
                    </span>
                  ) : (
                    <span className="bg-outline-variant/40 text-on-surface-variant px-3 py-1 rounded-full text-sm font-medium">
                      {content.statusClosed}
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
