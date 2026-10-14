import InfoPageLayout from "@/components/legal/InfoPageLayout";
import { createMarketingMetadata } from "@/lib/seo/marketing-metadata";
import { getMarketingBaseUrl, serializeJsonLd } from "@/lib/seo/urls";

export const metadata = createMarketingMetadata({
  title: "Doctor Appointment Guide | Clinic Serial & Booking Setup | Docxio",
  description:
    "Learn how doctors manage clinic schedules, booking options, and patient appointment requests with Docxio.",
  path: "/appointment-guide",
});

const overviewItems = [
  "Set clinic timings and visit windows",
  "Enable WhatsApp, booking form, or both",
  "Track patient records and serial status",
  "Share live appointment links with patients",
];

const siteUrl = getMarketingBaseUrl().toString().replace(/\/$/, "");
const pageUrl = `${siteUrl}/appointment-guide`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "How to Manage Clinic Schedules and Patient Appointments",
      description:
        "Comprehensive guide for doctors to set up chamber schedules, enable WhatsApp and form bookings, and track patient serials.",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Add clinic and booking details",
          text: "Set chamber addresses, visiting days, visiting hours, WhatsApp numbers, and booking preferences in the doctor profile.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Configure public booking options",
          text: "Select whether patients should contact via direct WhatsApp, complete a web booking request, or have both options.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Automatic serial and appointment tracking",
          text: "Incoming appointment requests are automatically numbered by chamber and date for streamlined front-desk handling.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Manual entry for phone calls and walk-in patients",
          text: "Clinic staff can manually record walk-in or phoned-in patients to keep all daily serials in one consolidated register.",
        },
        {
          "@type": "HowToStep",
          position: 5,
          name: "Manage the day-to-day schedule",
          text: "Filter appointments by chamber and update patient status between scheduled, arrived, completed, or cancelled.",
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Doctor Appointment Guide", item: pageUrl },
      ],
    },
  ],
};

export default function AppointmentGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(structuredData) }}
      />
      <InfoPageLayout
        badge="Doctor Operations"
        title="Doctor Appointment Guide"
        intro="Learn how Docxio supports clinic schedules, WhatsApp or website booking requests, and appointment management for doctors and their staff."
        overviewItems={overviewItems}
        videoGuide
      >
        <section>
          <h2 className="text-2xl font-bold text-slate-900">1. Add clinic and booking details</h2>
          <p>
            Add each chamber&apos;s address, visiting hours, contact number, and booking preference to the doctor profile. Keep these details current so patients see the right information when they visit the website.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Set chamber location, visiting days and hours, and WhatsApp contact details.</li>
            <li>Choose WhatsApp, website booking requests, or both as the booking options.</li>
            <li>Review the public appointment page after updating profile information.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">2. How the public appointment flow works</h2>
          <p>
            Patients can use the contact and booking options enabled for the practice. Website booking requests are associated with a chamber and date; the doctor or staff can review them in the dashboard.
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
            Each website request is linked to a chamber and date, and Docxio assigns it a serial number. Appointment records include the submitted patient contact details and can be managed from the dashboard.
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
            Doctors and staff can review appointment records, filter by status or chamber, and update a booking&apos;s status from the dashboard.
          </p>
        </section>
      </InfoPageLayout>
    </>
  );
}
