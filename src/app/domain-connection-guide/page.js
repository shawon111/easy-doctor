import InfoPageLayout from "@/components/legal/InfoPageLayout";
import { createMarketingMetadata } from "@/lib/seo/marketing-metadata";

export const metadata = createMarketingMetadata({
  title: "Doctor Website Domain Setup Guide | Docxio",
  description: "Connect a custom domain to a Docxio doctor website by adding the DNS records shown in the dashboard and verifying the connection.",
  path: "/domain-connection-guide",
});

const overviewItems = [
  "Prepare your registrar DNS settings",
  "Add the DNS records shown in the dashboard",
  "Verify the domain in the dashboard",
  "Check HTTPS access and the published canonical URL",
];

export default function DomainConnectionGuidePage() {
  return (
    <InfoPageLayout
      badge="Website Infrastructure"
      title="Doctor Website Domain Setup Guide"
      intro="Connect a custom domain to a Docxio doctor website by adding the DNS records provided in the dashboard. Docxio checks the domain configuration and reports whether the domain is connected."
      overviewItems={overviewItems}
      videoGuide
    >
      <section>
        <h2 className="text-2xl font-bold text-slate-900">1. Add the custom domain</h2>
        <p>
          From the dashboard, the doctor starts by entering the custom domain they want to use. This can be a primary clinic website domain or a branded practice address such as <span className="font-mono text-slate-900">drrahman.com</span>. The system stores this value and then prepares the connection steps needed for verification.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900">2. Update DNS at the registrar</h2>
        <p>
          The dashboard displays the DNS records needed for the domain. Record types and values depend on the domain configuration, so use the current values shown there instead of copying example records from another setup.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Use the values shown in Docxio when the domain is being configured.</li>
          <li>Set the root domain or subdomain depending on the deployment plan.</li>
          <li>Allow time for DNS propagation before testing the live website.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900">3. Verify the domain status</h2>
        <p>
          After you add the DNS records, Docxio checks the domain&apos;s verification and configuration status. The dashboard reports whether it is connected or still pending.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Verify records are accepted and propagated properly.</li>
          <li>Confirm the domain is connected before presenting it publicly.</li>
          <li>Review any misconfiguration warnings if records are missing or incomplete.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900">4. Publish the final live URL</h2>
        <p>
          Once connected, visitors can use the custom domain to reach the website. Docxio&apos;s SEO canonical URLs currently use the website&apos;s Docxio subdomain, so connecting a custom domain does not change the canonical URL.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900">5. Maintain ongoing domain health</h2>
        <p>
          If you change DNS records or the domain stops connecting, review the current DNS instructions and status in the dashboard. DNS updates may take time to propagate; the application does not guarantee uninterrupted access while records are changing.
        </p>
      </section>
    </InfoPageLayout>
  );
}
