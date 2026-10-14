import InfoPageLayout from "@/components/legal/InfoPageLayout";
import { createMarketingMetadata } from "@/lib/seo/marketing-metadata";
import { getMarketingBaseUrl, serializeJsonLd } from "@/lib/seo/urls";

export const metadata = createMarketingMetadata({
  title: "Docxio Subscription & Billing Policy | Plans & Pricing",
  description:
    "Review the 15-day Docxio trial, current Pro plan prices and durations, and how a verified payment extends website access.",
  path: "/subscription-policy",
});

const overviewItems = [
  "The 15-day trial starts when a doctor website is created",
  "Pro plans: ৳500 monthly, ৳2,800 for 6 months, or ৳5,000 yearly",
  "Paid access starts or extends after payment verification",
  "Plans are extended by making another plan purchase",
];

const siteUrl = getMarketingBaseUrl().toString().replace(/\/$/, "");
const pageUrl = `${siteUrl}/subscription-policy`;

const structuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Subscription Policy", item: pageUrl },
  ],
};

export default function SubscriptionPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(structuredData) }}
      />
      <InfoPageLayout
        badge="Billing Policy"
        title="Docxio Subscription Policy"
        intro="Docxio offers a 15-day trial that starts when a doctor website is created, followed by optional Pro plans. Current plan amounts and durations are shown below; confirm the checkout total before paying."
        overviewItems={overviewItems}
      >
        <section>
          <h2 className="text-2xl font-bold text-slate-900">1. 15-day free trial</h2>
          <p>
            When a doctor creates a website, the platform grants 15 days of full website access. No credit card is required to begin the trial. During this period, the website is live and all features are available for testing.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">2. Pro plans and pricing</h2>
          <p>
            After the trial ends, doctors can choose from three subscription terms:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li><strong>Monthly:</strong> ৳500 per month</li>
            <li><strong>6 Months:</strong> ৳2,800 (save ৳200)</li>
            <li><strong>Yearly:</strong> ৳5,000 (save ৳1,000)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">3. Payment processing</h2>
          <p>
            Payments are processed securely via UddoktaPay. Website access is extended automatically upon successful payment verification.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">4. Cancellations and renewals</h2>
          <p>
            Plans do not auto-debit; renewals require a manual purchase from the billing dashboard. If a plan expires, website public access is paused until renewed, but profile and appointment data remain saved.
          </p>
        </section>
      </InfoPageLayout>
    </>
  );
}
