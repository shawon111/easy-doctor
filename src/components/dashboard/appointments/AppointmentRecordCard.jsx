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
        <article className="rounded-xl border border-border bg-background p-4">
            <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                    <h3 className="truncate font-semibold text-foreground">
                        {appointment.patient?.name || "Patient"}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                        {appointment.patient?.phone}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                        <span className="rounded-full bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
                            {statusLabel}
                        </span>
                        {appointment.source === "manual" && (
                            <span className="rounded-full bg-amber-500/10 px-2 py-0.5 text-[11px] font-medium text-amber-800">
                                Staff booking
                            </span>
                        )}
                    </div>
                </div>
                <span className="shrink-0 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                    #{appointment.serial}
                </span>
            </div>

            <dl className="mt-4 space-y-2 border-t border-border pt-3 text-sm">
                <div>
                    <dt className="text-xs text-muted-foreground">Appointment</dt>
                    <dd className="mt-0.5 font-medium text-foreground">
                        {formatAppointmentDate(appointment.date)}
                    </dd>
                </div>
                <div>
                    <dt className="text-xs text-muted-foreground">Chamber</dt>
                    <dd className="mt-0.5 font-medium text-foreground">
                        {appointment.chamber?.name || "—"}
                    </dd>
                </div>
            </dl>
        </article>
    );
}
