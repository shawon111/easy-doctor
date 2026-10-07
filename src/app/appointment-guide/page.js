import InfoPageLayout from "@/components/legal/InfoPageLayout";

export const metadata = {
  title: "Appointment Guide | Docxio",
  description: "Learn how new doctors manage patient appointments, visit schedules, and digital booking workflows in Docxio.",
};

const overviewItems = [
  "Set clinic timings and visit windows",
  "Enable WhatsApp, booking form, or both",
  "Track patient records and serial status",
  "Share live appointment links with patients",
];

export default function AppointmentGuidePage() {
  return (
    <InfoPageLayout
      badge="Doctor Operations"
      title="Appointment Guide"
      intro="The appointment flow in Docxio helps doctors manage chamber visits, patient records, and online booking without having to maintain a separate booking system or custom CRM."
      overviewItems={overviewItems}
      videoGuide
    >
      <section>
        <h2 className="text-2xl font-bold text-slate-900">1. Onboarding captures everything needed</h2>
        <p>
          The onboarding flow is designed to collect the core practice data required for the doctor website and appointment system. That includes physician identity, qualifications, bio, chamber locations, visiting hours, contact numbers, appointments preference, and service information. Once this information is captured, nothing extra needs to be entered again just to launch the booking page or website.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Chamber details, addresses, map links, visiting days, and WhatsApp numbers are stored during onboarding.</li>
          <li>Booking behavior such as WhatsApp only, booking form only, or both is selected upfront.</li>
          <li>The appointment page is generated automatically from this saved information, so the doctor does not need to rebuild the profile manually.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900">2. How the public appointment flow works</h2>
        <p>
          After onboarding is complete, the public appointment page is created automatically from the saved chamber and booking settings. Patients can view each chamber, choose a date, and submit a booking request based on the configured preferences.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>WhatsApp:</strong> patients can contact the doctor directly using the stored WhatsApp number.</li>
          <li><strong>Booking form:</strong> patients complete an appointment request from the website.</li>
          <li><strong>Both:</strong> the page presents both options so patients can choose the easiest path.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900">3. How serials and appointment records are created</h2>
        <p>
          Each appointment is linked to a specific chamber and date. Docxio assigns a sequence number or serial automatically so the doctor can manage patient flow in a structured way. The system stores patient details, status, source, and chamber metadata in a single appointment record.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Daily serials are tracked automatically for each chamber.</li>
          <li>Appointments retain patient name, phone, age, gender, and notes.</li>
          <li>Clinic staff can move bookings between scheduled, arrived, completed, cancelled, or no-show states.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900">4. Add appointments by the doctor or staff</h2>
        <p>
          The dashboard includes a manual appointment form for situations such as phone bookings, walk-ins, or appointments captured outside the website. This is useful when reception staff or clinic assistants are managing the schedule on behalf of the doctor.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Select the patient name and phone number.</li>
          <li>Choose the proper chamber and appointment date.</li>
          <li>Optionally add age, gender, and visit notes before saving the booking.</li>
          <li>The system assigns a serial automatically and saves the record in the same appointment workflow as online bookings.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900">5. Review and manage the day-to-day schedule</h2>
        <p>
          Doctors and staff can review recent bookings from the appointment dashboard, filter by status or chamber, and update patient progress in real time. This keeps both the public website and the internal clinic workflow consistent without requiring separate configuration steps.
        </p>
      </section>
    </InfoPageLayout>
  );
}
