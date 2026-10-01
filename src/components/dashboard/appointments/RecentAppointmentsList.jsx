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
        <section className="overflow-hidden rounded-xl border border-border bg-card shadow-[0px_4px_12px_rgba(0,0,0,0.03)]">
            <div className="flex items-center justify-between border-b border-muted px-4 py-4 sm:px-6 sm:py-5">
                <h2 className="text-lg font-semibold text-foreground">{title}</h2>
                {viewAllHref && (
                    <Button
                        variant="link"
                        className="h-auto p-0 text-sm font-medium text-primary"
                        asChild
                    >
                        <Link href={viewAllHref}>View all</Link>
                    </Button>
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
                    <p className="font-medium text-foreground">No appointments yet</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                        Booked appointments will appear here.
                    </p>
                </div>
            )}
        </section>
    );
}
