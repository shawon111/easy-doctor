import InfoPageLayout from "@/components/legal/InfoPageLayout";
import { createMarketingMetadata } from "@/lib/seo/marketing-metadata";

export const metadata = createMarketingMetadata({
  title: "Doctor Website Creation Guide | Docxio",
  description: "Learn how to choose a Docxio website template, add doctor and practice information, review AI-assisted copy, and publish a doctor website.",
  path: "/website-creation-guide",
});

const overviewItems = [
  "Choose from six templates in light and dark variants",
  "Generate website content with AI",
  "Publish to a subdomain or custom domain",
  "Manage profile, services, and patient contact info",
];

export default function WebsiteCreationGuidePage() {
  return (
    <InfoPageLayout
      badge="Product Workflow"
      title="Doctor Website Creation Guide"
      intro="Use a Docxio template, add your professional and clinic information, review AI-assisted website copy, and publish your doctor website on a Docxio subdomain or a connected custom domain."
      overviewItems={overviewItems}
      videoGuide
    >
      <section>
        <h2 className="text-2xl font-bold text-slate-900">1. Add your doctor and practice information</h2>
        <p>
          Provide the professional profile, clinic, contact, and service details that should appear on the website. Check all entries for accuracy before publishing; the platform cannot independently verify professional credentials or practice claims.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Profile identity, qualifications, and specialty are captured up front.</li>
          <li>Add clinic locations, visiting hours, map links, and WhatsApp contacts.</li>
          <li>Review profile details before using them in published website content.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900">2. Choose and preview a template</h2>
        <p>
          Choose from six templates, available in light and dark variants, and preview the website layout before publishing.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Choose from a curated set of clinical templates.</li>
          <li>Preview the structure before publishing.</li>
          <li>Switch between light and dark visual variants when needed.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900">3. Generate AI-assisted content from the captured profile</h2>
        <p>
          Docxio can generate draft copy for website pages using the profile information you provide. Treat generated text as a draft: verify every clinical, professional, contact, and location claim, and edit it to match the actual practice before publishing.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Review the home, about, services, and appointment page content.</li>
          <li>Check each page title and description against its visible content.</li>
          <li>Correct or remove unsupported claims and content that is not specific to the doctor.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900">4. Choose a live web address</h2>
        <p>
          Websites use a Docxio subdomain and can also be connected to a custom domain. A custom domain is available to visitors after it has been connected and its DNS configuration is verified.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Choose a Docxio subdomain for the website address.</li>
          <li>Optionally connect a custom domain by following the DNS values shown in the dashboard.</li>
          <li>Allow for domain verification and DNS propagation before relying on the custom address.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900">5. Publish and maintain the site</h2>
        <p>
          Before launch, check the rendered pages, navigation, contact options, metadata, and any structured information. Update profile and website details in the dashboard when they change, then recheck the public site.
        </p>
      </section>
    </InfoPageLayout>
  );
}
