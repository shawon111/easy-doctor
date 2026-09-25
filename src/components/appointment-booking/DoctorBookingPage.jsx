"use client"
import { useState } from "react";

import BookingStepper from "./BookingStepper";
import ChamberSelector from "./ChamberSelector";
import DateSelector from "./DateSelector";
import PatientInfoForm from "./PatientInfoForm";
import BookingSummaryCard from "./BookingSummaryCard";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

// generate avaialble dates
const generateAvailableDates = (openings, totalDays = 7) => {
  if (!openings) return [];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const today = new Date();
  const createdDates = [];

  for (let day = 0; day < totalDays; day++) {
    const newDay = new Date(today);

    newDay.setDate(newDay.getDate() + day);

    createdDates.push({
      id: day + 1,
      weekday: newDay.toLocaleDateString("en-US", {
        weekday: "long",
      }),
      day: newDay.getDate(),
      month: months[newDay.getMonth()],
      date: newDay,
    });
  }

  const availableDays = openings
    .split(",")
    .map((item) => item.trim());

  return createdDates.filter((item) =>
    availableDays.includes(item.weekday)
  );
};

const EMPTY_PATIENT = { name: "", phone: "", age: "", gender: "male", notes: "" };

export default function DoctorBookingPage({ userId }) {
  // get userInfo
  const getUserInfo = async () => {
    const res = await fetch(`/api/user/${userId}`);
    if (!res.ok) {
      throw new Error("failed to get the user")
    }
    const data = await res.json();
    return data.data
  }

  const { data: user, isFetching, isError } = useQuery({
    queryKey: ["user", userId],
    queryFn: getUserInfo,
  })

  // states
  const [selectedChamberId, setSelectedChamberId] = useState(null);
  const [selectedDateId, setSelectedDateId] = useState(null);
  const [patient, setPatient] = useState(EMPTY_PATIENT);

  // return component conditionally
  if (isFetching) {
    return <div className="w-full flex items-center justify-center">
      <Card className="w-full max-w-xs">
        <CardHeader>
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-4 w-1/2" />
        </CardHeader>
        <CardContent>
          <Skeleton className="aspect-video w-full" />
        </CardContent>
      </Card>;
    </div>
  }

  if (isError || !user) {
    return <div>Failed to load appointment booking</div>;
  }

  const { clinicAddress } = user;

  // steps setup
  const selectedChamber = clinicAddress.find((c) => c._id === selectedChamberId) || null;
  const selectedDate = generateAvailableDates(selectedChamber?.visitingDays, 7).find((d) => d.id === selectedDateId) || null;

  const currentStep = !selectedChamberId
    ? 1
    : !selectedDateId
      ? 2
      : !patient.name || !patient.phone
        ? 3
        : 4;

  const isComplete = Boolean(
    selectedChamber && selectedDate && patient.name && patient.phone
  );

  const handleSelectChamber = (id) => {
    setSelectedChamberId(id);
    setSelectedDateId(null);
  };

  const handleSelectDate = (id) => {
    setSelectedDateId(id);
  };

  const handleConfirm = () => {
    // UI only — no booking logic implemented.
    console.log("Confirm booking (UI only):", {
      chamber: selectedChamber,
      date: selectedDate,
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
              chambers={clinicAddress}
              selectedChamberId={selectedChamberId}
              onSelect={handleSelectChamber}
            />

            <DateSelector
              dates={generateAvailableDates(selectedChamber?.visitingDays, 7)}
              selectedDateId={selectedDateId}
              onSelect={handleSelectDate}
              disabled={!selectedChamberId}
            />

            <PatientInfoForm
              patient={patient}
              onChange={setPatient}
              disabled={!selectedDate}
            />

            <BookingSummaryCard
              chamber={selectedChamber}
              date={selectedDate}
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
