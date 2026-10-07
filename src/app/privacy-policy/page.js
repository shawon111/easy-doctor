import InfoPageLayout from "@/components/legal/InfoPageLayout";

export const metadata = {
  title: "Privacy Policy | Docxio",
  description: "How Docxio handles patient data, doctor profile information, and website content for medical practices.",
};

const overviewItems = [
  "Collects profile, contact, and appointment data",
  "Uses information to power the doctor website and dashboard",
  "Secures media, credentials, and patient records",
  "Supports compliance, transparency, and data access requests",
];

export default function PrivacyPolicyPage() {
  return (
    <InfoPageLayout
      badge="Legal & Trust"
      title="Privacy Policy"
      intro="Docxio is designed to help medical professionals manage a public practice website and appointment experience. This policy explains how information is collected, processed, stored, and shared within the website platform and associated doctor workflows."
      overviewItems={overviewItems}
    >
      <section>
        <h2 className="text-2xl font-bold text-slate-900">1. Information we collect</h2>
        <p>
          The platform collects profile data for doctors and patients who interact with the website. This includes personal identity information, medical specializations, chamber addresses, contact details, appointment information, and digital content used to build the practice website.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Doctor identity details such as name, qualifications, specialization, and bio.</li>
          <li>Website content including service descriptions, social links, FAQs, and contact infographics.</li>
          <li>Patient appointment records such as name, phone, age, gender, visit date, and notes.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900">2. How data is used</h2>
        <p>
          Data is used to build and operate the doctor&apos;s public website, personalize the practice profile, manage appointment flows, and improve the patient experience. The platform also uses selected information to generate and maintain SEO metadata, contact details, and service pages.
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
          Docxio may use external infrastructure to deliver the service securely. This includes database hosting, media storage, email delivery, and domain verification. Information is only shared with service providers that are required to support storage, delivery, verification, or website publishing.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Cloud-based media hosting for profile and website imagery.</li>
          <li>Database and application hosting for site data and doctor records.</li>
          <li>DNS verification and domain status checks for custom domain connection.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900">4. Data retention and deletion</h2>
        <p>
          Information is retained for as long as it is needed to operate the doctor&apos;s website, fulfill service obligations, and comply with legal or operational requirements. If an account is canceled or a website is removed, the associated records may be deleted according to the service lifecycle and retention policy.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900">5. Security measures</h2>
        <p>
          The platform stores password hashes using bcrypt and uses JWT-based access and refresh tokens for authenticated sessions. Website content, appointment records, and practice metadata are protected by the application&apos;s access-control rules and database-layer safeguards.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900">6. Your rights and contact</h2>
        <p>
          Users may request access to the personal information associated with their account or ask for corrections, updates, or deletion of specific records when permitted by the service policy. For privacy inquiries, the doctor or platform administrator should contact the designated support or operations email used by the service.
        </p>
      </section>
    </InfoPageLayout>
  );
}
