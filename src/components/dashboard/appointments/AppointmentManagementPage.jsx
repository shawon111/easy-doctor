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
    <main className="dashboard-page mx-auto w-full max-w-7xl space-y-6">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400">
            <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
            Live Triage & Queue
          </div>
          <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
            Manage Appointments
          </h1>
          <p className="mt-1.5 max-w-2xl text-xs sm:text-sm text-slate-400">
            Track patient attendance, update consultation states, and oversee clinical queue.
          </p>
        </div>
        <Button className="rounded-xl border-slate-700 bg-slate-900 text-slate-200 hover:bg-slate-800 text-xs font-semibold" variant="outline" asChild>
          <Link href="/dashboard/appointments">← Back to appointments</Link>
        </Button>
      </header>

      <section className="overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/80 shadow-sm">
        <div className="flex flex-col gap-3 border-b border-slate-800/80 p-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <h2 className="text-base font-bold text-white">Appointment Records</h2>
            <p className="mt-0.5 text-xs text-slate-400">
              {data ? `${data.total} appointment${data.total === 1 ? "" : "s"} found` : "Loading appointments"}
            </p>
          </div>
          <Select
            value={statusFilter}
            onValueChange={(value) => {
              setStatusFilter(value);
              setPage(1);
            }}
          >
            <SelectTrigger className="w-full sm:w-52 rounded-xl border-slate-800 bg-slate-900 text-white text-xs font-medium" aria-label="Filter by appointment status">
              <SelectValue placeholder="All statuses" />
            </SelectTrigger>
            <SelectContent className="rounded-xl border-slate-800 bg-slate-950 text-slate-200 shadow-xl">
              <SelectItem value="all" className="hover:bg-slate-900 cursor-pointer text-xs hover:text-white">All statuses</SelectItem>
              {STATUSES.map((status) => (
                <SelectItem key={status.value} value={status.value} className="hover:bg-slate-900 cursor-pointer text-xs hover:text-white">
                  {status.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {isLoading ? (
          <div className="p-6 text-xs text-slate-400" role="status">Loading appointments...</div>
        ) : isError ? (
          <div role="alert" className="m-4 rounded-xl border border-destructive/30 bg-destructive/5 p-4 text-xs text-destructive sm:m-6">
            {error.message}
          </div>
        ) : data.appointments.length ? (
          <div className="divide-y divide-slate-800/80">
            {data.appointments.map((appointment) => (
              <article key={appointment._id} className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 hover:bg-slate-900/40 transition-colors">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-bold text-white text-sm">
                      {appointment.patient?.name || "Patient"}
                    </h3>
                    <span className="rounded-full bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-0.5 text-xs font-bold text-indigo-400 font-mono">
                      #{appointment.serial}
                    </span>
                    {appointment.source === "manual" ? (
                      <span className="rounded-full bg-amber-500/10 border border-amber-500/30 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-400">
                        Staff booking
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-1 text-xs text-slate-400">
                    {appointment.patient?.phone || "No phone provided"}
                    {appointment.patient?.age != null ? ` · Age ${appointment.patient.age}` : ""}
                  </p>
                  <p className="mt-1 text-xs text-slate-300">
                    {formatDate(appointment.date)} · <span className="text-slate-400">{appointment.chamber?.name || "Chamber"}</span>
                  </p>
                  {appointment.patient?.notes ? (
                    <p className="mt-1 line-clamp-2 text-xs text-slate-400 italic">{appointment.patient.notes}</p>
                  ) : null}
                </div>
                <div className="flex shrink-0 items-center gap-2.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Status</span>
                  <Select
                    value={appointment.status || "scheduled"}
                    disabled={statusMutation.isPending && statusMutation.variables?.appointmentId === appointment._id}
                    onValueChange={(status) => statusMutation.mutate({ appointmentId: appointment._id, status })}
                  >
                    <SelectTrigger className="w-44 rounded-xl border-slate-800 bg-slate-900 text-white text-xs font-medium" aria-label={`Update status for ${appointment.patient?.name || "patient"}`}>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl border-slate-800 bg-slate-950 text-slate-200 shadow-xl">
                      {STATUSES.map((status) => (
                        <SelectItem key={status.value} value={status.value} className="hover:bg-slate-900 focus:bg-slate-900 cursor-pointer text-xs">{status.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="px-4 py-12 text-center sm:px-6">
            <p className="font-bold text-white text-sm">No appointments found</p>
            <p className="mt-1 text-xs text-slate-400">
              {statusFilter === "all" ? "Appointments from online and staff bookings will appear here." : "Try a different status filter."}
            </p>
          </div>
        )}

        {data && data.total > PAGE_SIZE ? (
          <div className="flex items-center justify-between border-t border-slate-800/80 p-4 sm:px-6">
            <p className="text-xs text-slate-400">Page {page} of {totalPages}</p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="rounded-xl border-slate-700 bg-slate-900 text-slate-200 hover:bg-slate-800 text-xs font-semibold" disabled={page <= 1} onClick={() => setPage((current) => current - 1)}>
                Previous
              </Button>
              <Button variant="outline" size="sm" className="rounded-xl border-slate-700 bg-slate-900 text-slate-200 hover:bg-slate-800 text-xs font-semibold" disabled={page >= totalPages} onClick={() => setPage((current) => current + 1)}>
                Next
              </Button>
            </div>
          </div>
        ) : null}
      </section>
    </main>
  );
}
