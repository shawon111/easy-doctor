import InfoPageLayout from "@/components/legal/InfoPageLayout";
import { createMarketingMetadata } from "@/lib/seo/marketing-metadata";

export const metadata = createMarketingMetadata({
  title: "Docxio Subscription Policy",
  description: "Review the 15-day Docxio trial, current Pro plan prices and durations, and how a verified payment extends website access.",
  path: "/subscription-policy",
});

const overviewItems = [
  "The 15-day trial starts when a doctor website is created",
  "Pro plans: ৳500 monthly, ৳2,800 for 6 months, or ৳5,000 yearly",
  "Paid access starts or extends after payment verification",
  "Plans are extended by making another plan purchase",
];

export default function SubscriptionPolicyPage() {
  return (
    <InfoPageLayout
      badge="Billing Policy"
      title="Docxio Subscription Policy"
      intro="Docxio offers a 15-day trial that starts when a doctor website is created, followed by optional Pro plans. Current plan amounts and durations are shown below; confirm the checkout total before paying."
      overviewItems={overviewItems}
    >
      <section>
        <h2 className="text-2xl font-bold text-slate-900">1. Free trial</h2>
        <p>
          The application sets the trial expiry to 15 days after website creation when the account does not already have an expiry date. Registration itself does not start that timer. A payment card is not required to register or create the website.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900">2. Available plan durations</h2>
        <p>
          The current Pro plan configuration uses the following amounts in Bangladeshi taka (BDT). Check the plan and total in checkout before confirming a payment.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>Monthly:</strong> ৳500 for one month.</li>
          <li><strong>6 Months:</strong> ৳2,800 for six months.</li>
          <li><strong>Yearly:</strong> ৳5,000 for twelve months.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900">3. Billing cycle and renewal</h2>
        <p>
          Pro access is activated or extended after the payment provider confirms the payment. The application does not automatically charge a recurring payment; to continue Pro access, choose and purchase another plan from the dashboard.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900">4. Plan changes</h2>
        <p>
          A user can select a different plan duration from the dashboard. If an active expiry date is still in the future, the purchased duration is added from that date; otherwise, it starts from the verified payment time.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900">5. Expiry and account access</h2>
        <p>
          Plans do not automatically renew. Website access is controlled by the account&apos;s expiry date. This page does not specify a fixed data-retention or deletion period.
        </p>
      </section>
    </InfoPageLayout>
  );
}
