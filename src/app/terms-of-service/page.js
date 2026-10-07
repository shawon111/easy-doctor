import InfoPageLayout from "@/components/legal/InfoPageLayout";

export const metadata = {
  title: "Terms of Service | Docxio",
  description: "The usage terms and conditions for doctors using Docxio to build medical websites and manage appointments.",
};

const overviewItems = [
  "Doctor accounts must be accurate and verifiable",
  "Website content must be lawful and medically responsible",
  "Subscriptions continue until cancellation or renewal",
  "The platform is not a replacement for clinical emergency care",
];

export default function TermsOfServicePage() {
  return (
    <InfoPageLayout
      badge="Platform Terms"
      title="Terms of Service"
      intro="These terms define how doctors and teams use the Docxio platform to create websites, publish practice information, and manage patient-facing appointment workflows. By using the service, the user agrees to comply with these terms and the relevant platform policies."
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
          <li>Credentials must not be shared with unauthorized users.</li>
          <li>Security settings and two-step protections should be maintained as applicable.</li>
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
          The platform provides trial and paid subscription options, with access depending on the selected plan and current billing status. Access may continue during the active billing cycle and is subject to renewal or cancellation according to the subscription policy.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900">6. Service availability and limitations</h2>
        <p>
          Docxio provides a hosted service with best-effort uptime and monitoring. Although the platform is built for reliability, scheduled maintenance, network conditions, third-party dependencies, and domain propagation can affect availability. The platform does not guarantee uninterrupted service availability for all use cases.
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
