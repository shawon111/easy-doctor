"use client";

import { AppointmentStatsGrid } from "./AppointmentStatsGrid";
import { AppointmentRecordCard } from "./AppointmentRecordCard";
import { useAppointmentDashboard, useAppointmentsForDate } from "./useAppointmentDashboard";
import { ManualAppointmentForm } from "./ManualAppointmentForm";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const PAGE_SIZE = 15;

const getDhakaToday = () =>
  new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Dhaka",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());

const shiftDate = (date, days) => {
  const shifted = new Date(`${date}T12:00:00Z`);
  shifted.setUTCDate(shifted.getUTCDate() + days);
  return shifted.toISOString().slice(0, 10);
};

const formatDay = (date) =>
  new Intl.DateTimeFormat("en", {
    dateStyle: "full",
    timeZone: "Asia/Dhaka",
  }).format(new Date(`${date}T12:00:00+06:00`));

export function AppointmentsPage({ chambers = [] }) {
  const [selectedDate, setSelectedDate] = useState(getDhakaToday);
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, error } = useAppointmentDashboard(8);
  const {
    data: dailyData,
    isLoading: isDailyLoading,
    isError: isDailyError,
    error: dailyError,
  } = useAppointmentsForDate(selectedDate, page, PAGE_SIZE);

  if (isLoading) {
    return (
      <div className="mx-auto w-full max-w-360 space-y-6 p-4 pb-12 sm:p-6 sm:pb-16 md:p-8 md:pb-20">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="h-36 animate-pulse rounded-xl bg-muted" />
          <div className="h-36 animate-pulse rounded-xl bg-muted" />
        </div>
        <div className="h-72 animate-pulse rounded-xl bg-muted" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="mx-auto w-full max-w-360 p-4 pb-12 sm:p-6 sm:pb-16 md:p-8 md:pb-20">
        <div role="alert" className="rounded-xl border border-destructive/30 bg-destructive/5 p-6 text-sm text-destructive">
          {error.message}
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-360 flex-1 p-4 pb-12 sm:p-6 sm:pb-16 md:p-8 md:pb-20">
      <header className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium text-primary">Practice management</p>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Appointments
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Review patient bookings and add appointments received by phone or in person.
          </p>
        </div>
        <Button variant="outline" asChild>
          <Link href="/dashboard/appointments/manage">Manage appointment status</Link>
        </Button>
      </header>
      <AppointmentStatsGrid
        upcomingAppointments={data.upcomingAppointments}
        todayAppointments={data.todayAppointments}
      />
      <div className="mb-6">
        <ManualAppointmentForm chambers={chambers} />
      </div>
      <section className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0px_4px_12px_rgba(0,0,0,0.03)]">
        <div className="flex flex-col gap-4 border-b border-border p-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <h2 className="text-lg font-semibold text-foreground">Appointments for {formatDay(selectedDate)}</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {dailyData ? `${dailyData.total} booking${dailyData.total === 1 ? "" : "s"} on this day` : "Bookings are ordered by serial number."}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              aria-label="Previous day"
              onClick={() => {
                setSelectedDate((date) => shiftDate(date, -1));
                setPage(1);
              }}
            >
              <span className="material-symbols-outlined text-[18px]">chevron_left</span>
              Previous
            </Button>
            <Input
              type="date"
              aria-label="Choose appointment date"
              className="w-auto"
              value={selectedDate}
              onChange={(event) => {
                if (!event.target.value) return;
                setSelectedDate(event.target.value);
                setPage(1);
              }}
            />
            <Button
              type="button"
              variant="outline"
              size="sm"
              aria-label="Next day"
              onClick={() => {
                setSelectedDate((date) => shiftDate(date, 1));
                setPage(1);
              }}
            >
              Next
              <span className="material-symbols-outlined text-[18px]">chevron_right</span>
            </Button>
            {selectedDate !== getDhakaToday() ? (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => {
                  setSelectedDate(getDhakaToday());
                  setPage(1);
                }}
              >
                Today
              </Button>
            ) : null}
          </div>
        </div>

        {isDailyLoading ? (
          <div className="p-6 text-sm text-muted-foreground" role="status">Loading appointments...</div>
        ) : isDailyError ? (
          <div role="alert" className="m-4 rounded-xl border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive sm:m-6">
            {dailyError.message}
          </div>
        ) : dailyData.appointments.length ? (
          <>
            <div className="grid gap-4 p-4 sm:grid-cols-2 sm:p-6 lg:grid-cols-3">
              {dailyData.appointments.map((appointment) => (
                <AppointmentRecordCard key={appointment._id} appointment={appointment} />
              ))}
            </div>
            {dailyData.total > PAGE_SIZE ? (
              <div className="flex items-center justify-between border-t border-border p-4 sm:px-6">
                <p className="text-xs text-muted-foreground">
                  Page {page} of {Math.ceil(dailyData.total / PAGE_SIZE)}
                </p>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={page <= 1}
                    onClick={() => setPage((current) => current - 1)}
                  >
                    Previous page
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={page >= Math.ceil(dailyData.total / PAGE_SIZE)}
                    onClick={() => setPage((current) => current + 1)}
                  >
                    Next page
                  </Button>
                </div>
              </div>
            ) : null}
          </>
        ) : (
          <div className="px-4 py-10 text-center sm:px-6">
            <p className="font-medium text-foreground">No appointments for this date</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Select another date or add a booking using the form above.
            </p>
          </div>
        )}
        <div className="border-t border-border px-4 py-3 text-right sm:px-6">
          <Button variant="link" className="h-auto p-0 text-sm" asChild>
            <Link href="/dashboard/appointments/manage">Manage appointment status</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
