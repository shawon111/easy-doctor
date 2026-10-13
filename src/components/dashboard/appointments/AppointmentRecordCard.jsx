const formatAppointmentDate = (value) => {
    if (!value) return "Date unavailable";

    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "Date unavailable";

    return new Intl.DateTimeFormat("en", {
        dateStyle: "medium",
        timeStyle: "short",
        timeZone: "Asia/Dhaka",
    }).format(date);
};

export function AppointmentRecordCard({ appointment }) {
    const status = appointment.status || "scheduled";
    const statusLabel = {
        scheduled: "Scheduled",
        arrived: "Arrived",
        completed: "Completed",
        cancelled: "Cancelled",
        no_show: "Did not attend",
    }[status] || "Scheduled";

    return (
        <article className="rounded-xl border border-slate-800/80 bg-slate-900/60 p-4 transition hover:border-slate-700/80">
            <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                    <h3 className="truncate font-bold text-white text-sm">
                        {appointment.patient?.name || "Patient"}
                    </h3>
                    <p className="mt-0.5 text-xs text-slate-400">
                        {appointment.patient?.phone}
                    </p>
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                        <span className="rounded-full bg-slate-800 border border-slate-700/60 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-300">
                            {statusLabel}
                        </span>
                        {appointment.source === "manual" && (
                            <span className="rounded-full bg-amber-500/10 border border-amber-500/30 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-400">
                                Staff booking
                            </span>
                        )}
                    </div>
                </div>
                <span className="shrink-0 rounded-full bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-1 text-xs font-bold text-indigo-400 font-mono">
                    #{appointment.serial}
                </span>
            </div>

            <dl className="mt-4 space-y-2 border-t border-slate-800/80 pt-3 text-xs">
                <div>
                    <dt className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Appointment</dt>
                    <dd className="mt-0.5 font-medium text-slate-200">
                        {formatAppointmentDate(appointment.date)}
                    </dd>
                </div>
                <div>
                    <dt className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Chamber</dt>
                    <dd className="mt-0.5 font-medium text-slate-200">
                        {appointment.chamber?.name || "—"}
                    </dd>
                </div>
            </dl>
        </article>
    );
}
