import InfoPageLayout from "@/components/legal/InfoPageLayout";

export const metadata = {
  title: "Subscription Policy | Docxio",
  description: "Details on Docxio free trials, subscription tiers, billing cycles, and account access rules.",
};

const overviewItems = [
  "15-day free trial included for new accounts",
  "Paid plans available in monthly, 6-month, and yearly terms",
  "Access is activated with the selected plan and billing date",
  "Renewals follow the billing cycle in the dashboard",
];

export default function SubscriptionPolicyPage() {
  return (
    <InfoPageLayout
      badge="Billing Policy"
      title="Subscription Policy"
      intro="The billing model for Docxio is built around a simple trial-to-subscription flow. New users can explore the platform before committing to a plan, and paying users can select the billing period that best matches their practice operations."
      overviewItems={overviewItems}
    >
      <section>
        <h2 className="text-2xl font-bold text-slate-900">1. Free trial</h2>
        <p>
          New accounts are eligible for a 15-day free trial. During this period, users can explore the website builder, configure the doctor profile, generate content, and publish a practice website before they complete a paid plan. The trial is designed to let doctors assess the workflow without entering a subscription immediately.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900">2. Available plan durations</h2>
        <p>
          Docxio supports several billing schedules for clinics and individual practices. The dashboard exposes the current billing options as a monthly, 6-month, and yearly subscription. The exact values shown at checkout reflect the current plan configuration in the application.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>Monthly:</strong> 500 (standard recurring monthly plan).</li>
          <li><strong>6 Months:</strong> 2800 (discounted mid-term plan).</li>
          <li><strong>Yearly:</strong> 5000 (annual plan with a longer commitment).</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900">3. Billing cycle and renewal</h2>
        <p>
          Once the trial ends, the selected plan becomes active. Renewal follows the chosen plan cycle, and access continues until the customer cancels or the service is otherwise suspended for non-payment or policy violation. Automatic renewal is managed through the billing system associated with the account.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900">4. Plan changes</h2>
        <p>
          Users may adjust their billing plan from the dashboard when a different duration or service level better matches their practice. If the plan changes, the application uses the current account status and the latest payment configuration to determine access and service availability.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900">5. Cancellation and account access</h2>
        <p>
          Active subscriptions remain in place through the current billing period. If a user cancels, the service may continue until the end of the purchased period unless the policy or billing agreement states otherwise. The website and data remain stored according to the platform retention and privacy rules.
        </p>
      </section>
    </InfoPageLayout>
  );
}
