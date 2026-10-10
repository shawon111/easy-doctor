import InfoPageLayout from "@/components/legal/InfoPageLayout";
import { createMarketingMetadata } from "@/lib/seo/marketing-metadata";

export const metadata = createMarketingMetadata({
  title: "Docxio Terms of Service",
  description: "Review the terms for using Docxio doctor websites, appointment tools, and account services.",
  path: "/terms-of-service",
});

const overviewItems = [
  "Doctor accounts must be accurate and verifiable",
  "Website content must be lawful and medically responsible",
  "Pro access depends on payment verification and account expiry",
  "The platform is not a replacement for clinical emergency care",
];

export default function TermsOfServicePage() {
  return (
    <InfoPageLayout
      badge="Platform Terms"
      title="Docxio Terms of Service"
      intro="These terms describe use of Docxio doctor websites, appointment tools, and accounts. Users are responsible for accurate published information, safeguarding account credentials, and following applicable laws and policies."
      overviewItems={overviewItems}
    >
      <section>
        <h2 className="text-2xl font-bold text-slate-900">1. Service overview</h2>
        <p>
          Docxio offers a website builder, dashboard, appointment tools, SEO settings, and domain publishing features for medical professionals. The service is designed to help doctors present practice information, chamber schedules, consultation preferences, and contact methods online.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900">2. Eligibility and account responsibility</h2>
        <p>
          Users are responsible for providing accurate professional information and maintaining the security of their account credentials. The doctor or practice administrator must ensure their published website content is truthful, complete, and suitable for the target public audience.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Personal and professional details must be accurate and current.</li>
          <li>Use a strong password and do not share account credentials with unauthorized people.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900">3. Acceptable use</h2>
        <p>
          The platform must not be used to publish false medical claims, misleading professional information, or content that violates legal, healthcare, or privacy standards. Content that misrepresents credentials, patient data, or consultation practices is not acceptable.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900">4. Ownership and content rights</h2>
        <p>
          The doctor remains responsible for the content they add to the site, including profile details, service descriptions, chamber data, and patient contact metadata. Docxio provides the platform and the technical infrastructure for publishing, hosting, and managing the website experience.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900">5. Subscription, access, and billing</h2>
        <p>
          Docxio provides a 15-day trial after website creation and paid Pro plans. Paid access is activated or extended after a payment is verified. Plans do not automatically renew; see the Subscription Policy for current prices and details.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900">6. Service availability and limitations</h2>
        <p>
          The hosted service may be unavailable or interrupted because of maintenance, network conditions, third-party services, or domain configuration. No uptime percentage or uninterrupted-availability commitment is stated here.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900">7. Medical disclaimer</h2>
        <p>
          The platform is not a medical emergency service and does not replace direct clinical evaluation. It is a digital communication and publishing tool for practices, clinics, and healthcare providers. Critical health situations should be directed to the appropriate emergency support or professional care channel.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900">8. Termination</h2>
        <p>
          Docxio may suspend or terminate accounts that violate platform rules, abuse the service, or create material operational or legal risk. Users can stop using the service when they choose, but the platform may retain necessary records in accordance with the privacy and billing policy.
        </p>
      </section>
    </InfoPageLayout>
  );
}
