import InfoPageLayout from "@/components/legal/InfoPageLayout";

export const metadata = {
  title: "Domain Connection Guide | Docxio",
  description: "Learn how to connect a custom domain to your doctor website and verify DNS records in Docxio.",
};

const overviewItems = [
  "Prepare your registrar DNS settings",
  "Add A or CNAME records for the domain",
  "Verify the domain in the dashboard",
  "Publish the site with HTTPS and canonical URLs",
];

export default function DomainConnectionGuidePage() {
  return (
    <InfoPageLayout
      badge="Website Infrastructure"
      title="Domain Connection Guide"
      intro="Custom domain support allows a doctor website to move from a free docxio subdomain to a branded online address. The platform handles the connection flow by collecting DNS settings, validating the domain, and updating the website metadata when the record is ready."
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
          The website connection flow produces the DNS records that should be added in the domain registrar. In many setups, the recommended configuration includes either an A record pointing to the service IP or a CNAME record mapped to the platform target. These records tell the internet where to route the domain traffic.
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
          Once DNS values are in place, Docxio verifies the domain configuration and checks whether the website is connected and configured correctly. This validation step compares the expected records with the live record state and updates the website record to a connected or pending status.
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
          After verification completes successfully, the site uses the custom domain as the canonical public URL. This replaces the subdomain routing in the SEO metadata and ensures the website presents the branded address to visitors and search engines.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900">5. Maintain ongoing domain health</h2>
        <p>
          Domain health is reviewed periodically through the dashboard. If records change, the connected domain can be re-verified, and the system can update the website metadata to the correct public host. In practice, this ensures that patient access remains stable even as DNS settings are refreshed or transferred.
        </p>
      </section>
    </InfoPageLayout>
  );
}
