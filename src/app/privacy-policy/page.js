import InfoPageLayout from "@/components/legal/InfoPageLayout";
import { createMarketingMetadata } from "@/lib/seo/marketing-metadata";

export const metadata = createMarketingMetadata({
  title: "Docxio Privacy Policy",
  description: "Learn what doctor profile and appointment information Docxio processes to provide websites, booking requests, and account features.",
  path: "/privacy-policy",
});

const overviewItems = [
  "Processes doctor profile, website, account, and appointment information",
  "Uses profile details to operate websites and appointment features",
  "Integrates external services for hosting, payments, media, domains, and AI",
  "Does not specify a fixed retention or deletion period on this page",
];

export default function PrivacyPolicyPage() {
  return (
    <InfoPageLayout
      badge="Legal & Trust"
      title="Docxio Privacy Policy"
      intro="Docxio processes doctor profile, website, account, and appointment information to provide website and booking features. This page summarizes data visible in the application; it does not specify a fixed retention period or replace any legally required privacy notice."
      overviewItems={overviewItems}
    >
      <section>
        <h2 className="text-2xl font-bold text-slate-900">1. Information we collect</h2>
        <p>
          Doctors provide profile and practice details for their websites. When patients submit an appointment request, the application stores information used to manage that request.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Doctor identity details such as name, qualifications, specialization, and bio.</li>
          <li>Website content such as service descriptions, social links, FAQs, and contact details.</li>
          <li>Appointment details such as patient name, phone, age, gender, visit date, notes, chamber, serial, and status.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900">2. How data is used</h2>
        <p>
          Data is used to provide account functions, build and display doctor websites, manage appointment requests, and maintain website and SEO settings. Profile information may also be used as input for AI-assisted website copy generation.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Generate the live website and doctor profile pages.</li>
          <li>Display chamber schedules, available booking methods, and contact information.</li>
          <li>Support operational tasks such as appointment management and follow-up communication.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900">3. Data sharing and third-party services</h2>
        <p>
          Docxio integrates external services for application hosting, database storage, media, payments, domain management, and AI-assisted content generation. Information handled by those providers depends on the feature used. Review applicable provider terms before submitting sensitive or patient information.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Media storage and delivery for profile and website imagery.</li>
          <li>Database and application hosting for account, site, and appointment data.</li>
          <li>Payment, DNS/domain verification, and AI content services when those features are used.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900">4. Data retention and deletion</h2>
        <p>
          The application stores account, website, and appointment records, but this page does not define a fixed retention or deletion schedule. Doctors should avoid entering information they do not need to manage appointment requests.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900">5. Security measures</h2>
        <p>
          Passwords are stored as bcrypt hashes. Authenticated sessions use signed access and refresh tokens, and application services apply account-scoped checks to protected website and appointment data. These controls do not guarantee immunity from every security incident.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900">6. Patient information</h2>
        <p>
          Doctors are responsible for deciding what patient information to request through appointment forms and for informing patients about how they use those details. Do not use appointment notes to collect information that is not needed to arrange or manage the appointment.
        </p>
      </section>
    </InfoPageLayout>
  );
}
