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
    <section className="overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/80 shadow-sm">
      <div className="border-b border-slate-800/80 px-5 py-4 sm:px-6">
        <div className="flex items-start gap-3.5">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shadow-sm">
            <span className="material-symbols-outlined text-[20px]">person_add</span>
          </span>
          <div>
            <h2 className="text-base font-bold text-white">Add a phone or walk-in booking</h2>
            <p className="mt-0.5 text-xs text-slate-400">
              Enter bookings received by phone, WhatsApp, or in person. A queue serial is assigned automatically.
            </p>
          </div>
        </div>
      </div>

      {chambers.length === 0 ? (
        <p className="p-5 text-xs text-slate-400 sm:p-6">
          Add a chamber to your doctor profile before recording manual appointments.
        </p>
      ) : (
        <form onSubmit={submit} className="grid gap-4 p-5 sm:grid-cols-2 sm:p-6 lg:grid-cols-3">
          <div className="space-y-1.5">
            <Label htmlFor="manual-patient-name" className="text-xs font-semibold text-slate-300">Patient name</Label>
            <Input
              id="manual-patient-name"
              autoComplete="name"
              maxLength={120}
              required
              value={patient.name}
              onChange={updatePatient("name")}
              placeholder="Full name"
              className="rounded-xl border-slate-800 bg-slate-900/80 text-white placeholder:text-slate-500 text-xs"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="manual-patient-phone" className="text-xs font-semibold text-slate-300">Phone number</Label>
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
              className="rounded-xl border-slate-800 bg-slate-900/80 text-white placeholder:text-slate-500 text-xs"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="manual-appointment-date" className="text-xs font-semibold text-slate-300">Appointment date</Label>
            <Input
              id="manual-appointment-date"
              type="date"
              required
              value={date}
              onChange={(event) => setDate(event.target.value)}
              className="rounded-xl border-slate-800 bg-slate-900/80 text-white text-xs"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="manual-appointment-chamber" className="text-xs font-semibold text-slate-300">Chamber</Label>
            <select
              id="manual-appointment-chamber"
              required
              value={chamberId}
              onChange={(event) => setChamberId(event.target.value)}
              className="h-9 w-full rounded-xl border border-slate-800 bg-slate-900 px-3 text-xs text-slate-200 outline-none focus:border-indigo-500"
            >
              <option value="" disabled className="bg-slate-900 text-slate-400">Select a chamber</option>
              {chambers.map((chamber) => (
                <option key={chamber.id} value={chamber.id} className="bg-slate-900 text-white">
                  {chamber.name} — {chamber.address}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="manual-patient-age" className="text-xs font-semibold text-slate-300">Age (optional)</Label>
            <Input
              id="manual-patient-age"
              type="number"
              min={0}
              max={130}
              value={patient.age}
              onChange={updatePatient("age")}
              placeholder="Age"
              className="rounded-xl border-slate-800 bg-slate-900/80 text-white placeholder:text-slate-500 text-xs"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="manual-patient-gender" className="text-xs font-semibold text-slate-300">Gender (optional)</Label>
            <select
              id="manual-patient-gender"
              value={patient.gender}
              onChange={updatePatient("gender")}
              className="h-9 w-full rounded-xl border border-slate-800 bg-slate-900 px-3 text-xs text-slate-200 outline-none focus:border-indigo-500"
            >
              <option value="" className="bg-slate-900 text-slate-400">Not specified</option>
              <option value="male" className="bg-slate-900 text-white">Male</option>
              <option value="female" className="bg-slate-900 text-white">Female</option>
              <option value="other" className="bg-slate-900 text-white">Other</option>
            </select>
          </div>
          <div className="space-y-1.5 sm:col-span-2 lg:col-span-3">
            <Label htmlFor="manual-patient-notes" className="text-xs font-semibold text-slate-300">Notes (optional)</Label>
            <Textarea
              id="manual-patient-notes"
              maxLength={1000}
              rows={2}
              value={patient.notes}
              onChange={updatePatient("notes")}
              placeholder="Reason for visit or booking notes"
              className="rounded-xl border-slate-800 bg-slate-900/80 text-white placeholder:text-slate-500 text-xs"
            />
          </div>
          <div className="sm:col-span-2 lg:col-span-3">
            <Button type="submit" disabled={mutation.isPending} className="w-full sm:w-auto rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-md shadow-indigo-600/20">
              {mutation.isPending ? "Adding appointment..." : "Add appointment"}
            </Button>
          </div>
        </form>
      )}
    </section>
  );
}
