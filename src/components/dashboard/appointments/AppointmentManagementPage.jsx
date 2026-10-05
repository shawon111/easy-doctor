"use client";

import Link from "next/link";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const PAGE_SIZE = 15;
const STATUSES = [
  { value: "scheduled", label: "Scheduled" },
  { value: "arrived", label: "Patient arrived" },
  { value: "completed", label: "Completed" },
  { value: "cancelled", label: "Cancelled" },
  { value: "no_show", label: "Did not attend" },
];

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Dhaka",
  }).format(new Date(date));

async function fetchManagedAppointments(page, status) {
  const params = new URLSearchParams({ page: String(page), limit: String(PAGE_SIZE) });
  if (status !== "all") params.set("status", status);

  const response = await fetch(`/api/appointment/manage?${params}`, { cache: "no-store" });
  const result = await response.json();
  if (!response.ok || !result.success) {
    throw new Error(result.message || "Failed to load appointments");
  }
  return result.data;
}

export function AppointmentManagementPage() {
  const [page, setPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState("all");
  const queryClient = useQueryClient();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["managed-appointments", page, statusFilter],
    queryFn: () => fetchManagedAppointments(page, statusFilter),
  });

  const statusMutation = useMutation({
    mutationFn: async ({ appointmentId, status }) => {
      const response = await fetch(`/api/appointment/manage/${appointmentId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to update appointment");
      }
      return result.data;
    },
    onSuccess: () => {
      toast.success("Appointment status updated");
      queryClient.invalidateQueries({ queryKey: ["managed-appointments"] });
      queryClient.invalidateQueries({ queryKey: ["appointment-dashboard-data"] });
    },
    onError: (mutationError) => toast.error(mutationError.message),
  });

  const totalPages = Math.max(1, Math.ceil((data?.total || 0) / PAGE_SIZE));

  return (
    <main className="mx-auto w-full max-w-360 space-y-6 p-4 pb-12 sm:p-6 sm:pb-16 md:p-8 md:pb-20">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium text-primary">Appointments</p>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Manage appointments
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            Track attendance and keep appointment statuses up to date.
          </p>
        </div>
        <Button asChild>
          <Link href="/dashboard/appointments">Back to appointments</Link>
        </Button>
      </header>

      <section className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0px_4px_12px_rgba(0,0,0,0.03)]">
        <div className="flex flex-col gap-3 border-b border-border p-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <h2 className="font-semibold text-foreground">Appointment list</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {data ? `${data.total} appointment${data.total === 1 ? "" : "s"}` : "Loading appointments"}
            </p>
          </div>
          <Select
            value={statusFilter}
            onValueChange={(value) => {
              setStatusFilter(value);
              setPage(1);
            }}
          >
            <SelectTrigger className="w-full sm:w-52" aria-label="Filter by appointment status">
              <SelectValue placeholder="All statuses" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All statuses</SelectItem>
              {STATUSES.map((status) => (
                <SelectItem key={status.value} value={status.value}>{status.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {isLoading ? (
          <div className="space-y-3 p-4 sm:p-6" role="status">Loading appointments...</div>
        ) : isError ? (
          <div role="alert" className="m-4 rounded-xl border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive sm:m-6">
            {error.message}
          </div>
        ) : data.appointments.length ? (
          <div className="divide-y divide-border">
            {data.appointments.map((appointment) => (
              <article key={appointment._id} className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold text-foreground">
                      {appointment.patient?.name || "Patient"}
                    </h3>
                    <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                      Serial #{appointment.serial}
                    </span>
                    {appointment.source === "manual" ? (
                      <span className="rounded-full bg-amber-500/10 px-2.5 py-1 text-xs font-medium text-amber-800">
                        Staff booking
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {appointment.patient?.phone || "No phone provided"}
                    {appointment.patient?.age != null ? ` · Age ${appointment.patient.age}` : ""}
                  </p>
                  <p className="mt-1 text-sm text-foreground">
                    {formatDate(appointment.date)} · {appointment.chamber?.name || "Chamber"}
                  </p>
                  {appointment.patient?.notes ? (
                    <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{appointment.patient.notes}</p>
                  ) : null}
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  <span className="text-xs font-medium text-muted-foreground">Status</span>
                  <Select
                    value={appointment.status || "scheduled"}
                    disabled={statusMutation.isPending && statusMutation.variables?.appointmentId === appointment._id}
                    onValueChange={(status) => statusMutation.mutate({ appointmentId: appointment._id, status })}
                  >
                    <SelectTrigger className="w-44" aria-label={`Update status for ${appointment.patient?.name || "patient"}`}>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {STATUSES.map((status) => (
                        <SelectItem key={status.value} value={status.value}>{status.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="px-4 py-12 text-center sm:px-6">
            <p className="font-medium text-foreground">No appointments found</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {statusFilter === "all" ? "Appointments from online and staff bookings will appear here." : "Try a different status filter."}
            </p>
          </div>
        )}

        {data && data.total > PAGE_SIZE ? (
          <div className="flex items-center justify-between border-t border-border p-4 sm:px-6">
            <p className="text-xs text-muted-foreground">Page {page} of {totalPages}</p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" disabled={page <= 1} onClick={() => setPage((current) => current - 1)}>
                Previous
              </Button>
              <Button variant="outline" size="sm" disabled={page >= totalPages} onClick={() => setPage((current) => current + 1)}>
                Next
              </Button>
            </div>
          </div>
        ) : null}
      </section>
    </main>
  );
}
