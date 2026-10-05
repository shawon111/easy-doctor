"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const EMPTY_PATIENT = {
  name: "",
  phone: "",
  age: "",
  gender: "",
  notes: "",
};

export function ManualAppointmentForm({ chambers = [] }) {
  const queryClient = useQueryClient();
  const [patient, setPatient] = useState(EMPTY_PATIENT);
  const [chamberId, setChamberId] = useState("");
  const [date, setDate] = useState("");

  const mutation = useMutation({
    mutationFn: async (appointment) => {
      const response = await fetch("/api/appointment/manage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(appointment),
      });
      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to add appointment");
      }
      return result.data;
    },
    onSuccess: () => {
      setPatient(EMPTY_PATIENT);
      setDate("");
      setChamberId("");
      toast.success("Manual appointment added");
      void queryClient.invalidateQueries({ queryKey: ["appointment-dashboard-data"] });
      void queryClient.invalidateQueries({ queryKey: ["managed-appointments"] });
      void queryClient.invalidateQueries({ queryKey: ["appointments-by-date"] });
    },
    onError: (error) => toast.error(error.message),
  });

  const updatePatient = (field) => (event) => {
    setPatient((current) => ({ ...current, [field]: event.target.value }));
  };

  const submit = (event) => {
    event.preventDefault();
    mutation.mutate({
      patient,
      chamberId,
      date: `${date}T00:00:00+06:00`,
    });
  };

  return (
    <section className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0px_4px_12px_rgba(0,0,0,0.03)]">
      <div className="border-b border-border px-5 py-4 sm:px-6">
        <div className="flex items-start gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <span className="material-symbols-outlined">person_add</span>
          </span>
          <div>
            <h2 className="font-semibold text-foreground">Add a phone or walk-in booking</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Enter bookings received by phone, WhatsApp, or in person. A serial is assigned automatically.
            </p>
          </div>
        </div>
      </div>

      {chambers.length === 0 ? (
        <p className="p-5 text-sm text-muted-foreground sm:p-6">
          Add a chamber to your doctor profile before recording manual appointments.
        </p>
      ) : (
        <form onSubmit={submit} className="grid gap-4 p-5 sm:grid-cols-2 sm:p-6 lg:grid-cols-3">
          <div className="space-y-2">
            <Label htmlFor="manual-patient-name">Patient name</Label>
            <Input
              id="manual-patient-name"
              autoComplete="name"
              maxLength={120}
              required
              value={patient.name}
              onChange={updatePatient("name")}
              placeholder="Full name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="manual-patient-phone">Phone number</Label>
            <Input
              id="manual-patient-phone"
              type="tel"
              autoComplete="tel"
              minLength={6}
              maxLength={32}
              required
              value={patient.phone}
              onChange={updatePatient("phone")}
              placeholder="Patient phone"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="manual-appointment-date">Appointment date</Label>
            <Input
              id="manual-appointment-date"
              type="date"
              required
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="manual-appointment-chamber">Chamber</Label>
            <select
              id="manual-appointment-chamber"
              required
              value={chamberId}
              onChange={(event) => setChamberId(event.target.value)}
              className="h-9 w-full rounded-lg border border-input bg-background px-3 text-sm text-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              <option value="" disabled>Select a chamber</option>
              {chambers.map((chamber) => (
                <option key={chamber.id} value={chamber.id}>
                  {chamber.name} — {chamber.address}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="manual-patient-age">Age (optional)</Label>
            <Input
              id="manual-patient-age"
              type="number"
              min={0}
              max={130}
              value={patient.age}
              onChange={updatePatient("age")}
              placeholder="Age"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="manual-patient-gender">Gender (optional)</Label>
            <select
              id="manual-patient-gender"
              value={patient.gender}
              onChange={updatePatient("gender")}
              className="h-9 w-full rounded-lg border border-input bg-background px-3 text-sm text-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              <option value="">Not specified</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="space-y-2 sm:col-span-2 lg:col-span-3">
            <Label htmlFor="manual-patient-notes">Notes (optional)</Label>
            <Textarea
              id="manual-patient-notes"
              maxLength={1000}
              rows={2}
              value={patient.notes}
              onChange={updatePatient("notes")}
              placeholder="Reason for visit or booking notes"
            />
          </div>
          <div className="sm:col-span-2 lg:col-span-3">
            <Button type="submit" disabled={mutation.isPending} className="w-full sm:w-auto">
              {mutation.isPending ? "Adding appointment..." : "Add appointment"}
            </Button>
          </div>
        </form>
      )}
    </section>
  );
}
