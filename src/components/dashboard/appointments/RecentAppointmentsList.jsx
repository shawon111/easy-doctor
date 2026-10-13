import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AppointmentRecordCard } from "./AppointmentRecordCard";

export function RecentAppointmentsList({
    appointments = [],
    compact = false,
    title = "Appointments",
    viewAllHref,
}) {
    return (
        <section className="overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/80 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-800/80 px-4 py-4 sm:px-6">
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-300">{title}</h2>
                {viewAllHref && (
                    <Link
                        href={viewAllHref}
                        className="rounded-xl border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs font-bold text-slate-200 transition-colors hover:border-indigo-500/50 hover:bg-slate-800 hover:text-white"
                    >
                        View all →
                    </Link>
                )}
            </div>

            {appointments.length ? (
                <div
                    className={
                        compact
                            ? "grid gap-3 p-4 sm:p-5"
                            : "grid gap-4 p-4 sm:grid-cols-2 sm:p-6 lg:grid-cols-3"
                    }
                >
                    {appointments.map((appointment) => (
                        <AppointmentRecordCard
                            key={appointment._id}
                            appointment={appointment}
                        />
                    ))}
                </div>
            ) : (
                <div className="px-4 py-10 text-center sm:px-6">
                    <p className="font-semibold text-white text-sm">No appointments yet</p>
                    <p className="mt-1 text-xs text-slate-400">
                        Booked appointments will appear here automatically.
                    </p>
                </div>
            )}
        </section>
    );
}
