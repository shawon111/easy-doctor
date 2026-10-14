import InfoPageLayout from "@/components/legal/InfoPageLayout";
import { createMarketingMetadata } from "@/lib/seo/marketing-metadata";
import { getMarketingBaseUrl, serializeJsonLd } from "@/lib/seo/urls";

export const metadata = createMarketingMetadata({
  title: "Docxio Terms of Service | Platform Agreement",
  description:
    "Review the terms for using Docxio doctor websites, appointment tools, and account services.",
  path: "/terms-of-service",
});

const overviewItems = [
  "Doctor accounts must be accurate and verifiable",
  "Website content must be lawful and medically responsible",
  "Pro access depends on payment verification and account expiry",
  "The platform is not a replacement for clinical emergency care",
];

const siteUrl = getMarketingBaseUrl().toString().replace(/\/$/, "");
const pageUrl = `${siteUrl}/terms-of-service`;

const structuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Terms of Service", item: pageUrl },
  ],
};

export default function TermsOfServicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(structuredData) }}
      />
      <InfoPageLayout
        badge="Platform Terms"
        title="Docxio Terms of Service"
        intro="These terms describe use of Docxio doctor websites, appointment tools, and accounts. Users are responsible for accurate published information, safeguarding account credentials, and following applicable laws and policies."
        overviewItems={overviewItems}
      >
        <section>
          <h2 className="text-2xl font-bold text-slate-900">1. Acceptance of terms</h2>
          <p>
            By creating an account or publishing a website on Docxio, you agree to these Terms of Service. If you do not agree, do not use the service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">2. Professional identity and credentials</h2>
          <p>
            Doctors and practice administrators are responsible for the truthfulness and accuracy of all clinical credentials, chamber locations, fees, and contact details published on their site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">3. Non-emergency service notice</h2>
          <p>
            Docxio websites and appointment features are designed for routine clinic consultation scheduling. They must not be used for emergency medical response or urgent triage.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">4. Service availability and subscriptions</h2>
          <p>
            Platform access requires an active trial or paid Pro subscription. Docxio reserves the right to suspend accounts that violate content standards or fail payment verification.
          </p>
        </section>
      </InfoPageLayout>
    </>
  );
}
