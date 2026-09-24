"use client"
import { useMemo, useState } from "react";

import {
  chambers,
  availableDates,
  generateSerials,
  nextAvailableSerial,
} from "./mockData";
import BookingStepper from "./BookingStepper";
import ChamberSelector from "./ChamberSelector";
import DateSelector from "./DateSelector";
import SerialGrid from "./SerialGrid";
import PatientInfoForm from "./PatientInfoForm";
import BookingSummaryCard from "./BookingSummaryCard";

const EMPTY_PATIENT = { name: "", phone: "", age: "", gender: "male", notes: "" };

export default function DoctorBookingPage() {
  const [selectedChamberId, setSelectedChamberId] = useState(null);
  const [selectedDateId, setSelectedDateId] = useState(null);
  const [selectedSerial, setSelectedSerial] = useState(null);
  const [patient, setPatient] = useState(EMPTY_PATIENT);

  // Mock serials — in a real app these would be fetched per chamber + date.
  const serials = useMemo(() => generateSerials(30, 12), [selectedChamberId, selectedDateId]);
  const nextAvailable = useMemo(() => nextAvailableSerial(serials), [serials]);

  const selectedChamber = chambers.find((c) => c.id === selectedChamberId) || null;
  const selectedDate = availableDates.find((d) => d.id === selectedDateId) || null;

  const currentStep = !selectedChamberId
    ? 1
    : !selectedDateId
    ? 2
    : !selectedSerial
    ? 3
    : !patient.name || !patient.phone
    ? 4
    : 5;

  const isComplete = Boolean(
    selectedChamber && selectedDate && selectedSerial && patient.name && patient.phone
  );

  const handleSelectChamber = (id) => {
    setSelectedChamberId(id);
    setSelectedDateId(null);
    setSelectedSerial(null);
  };

  const handleSelectDate = (id) => {
    setSelectedDateId(id);
    setSelectedSerial(null);
  };

  const handleConfirm = () => {
    // UI only — no booking logic implemented.
    console.log("Confirm booking (UI only):", {
      chamber: selectedChamber,
      date: selectedDate,
      serial: selectedSerial,
      patient,
    });
  };

  return (
    <div className="min-h-screen bg-gray-800 rounded-3xl mb-20 py-12 mx-auto">
      <h2 className="font-headline-lg text-headline-lg mb-2 text-center text-white">Book Appointment</h2>
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <BookingStepper currentStep={currentStep} />

        <div className="mt-8 grid grid-cols-1 gap-8">
          {/* Left: step flow */}
          <div className="space-y-10">
            <ChamberSelector
              chambers={chambers}
              selectedChamberId={selectedChamberId}
              onSelect={handleSelectChamber}
            />

            <DateSelector
              dates={availableDates}
              selectedDateId={selectedDateId}
              onSelect={handleSelectDate}
              disabled={!selectedChamberId}
            />

            <SerialGrid
              serials={serials}
              selectedSerial={selectedSerial}
              onSelect={setSelectedSerial}
              nextAvailable={nextAvailable}
              disabled={!selectedDateId}
            />

            <PatientInfoForm
              patient={patient}
              onChange={setPatient}
              disabled={!selectedSerial}
            />

            <BookingSummaryCard
              chamber={selectedChamber}
              date={selectedDate}
              serial={selectedSerial}
              patientName={patient.name}
              fee={selectedChamber?.fee}
              onConfirm={handleConfirm}
              isComplete={isComplete}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
