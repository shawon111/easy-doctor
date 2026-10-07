import InfoPageLayout from "@/components/legal/InfoPageLayout";

export const metadata = {
  title: "Website Creation Guide | Docxio",
  description: "Learn how to build a doctor website with templates, AI-generated content, and a live public address in Docxio.",
};

const overviewItems = [
  "Pick a medical specialty template",
  "Generate website content with AI",
  "Publish to a subdomain or custom domain",
  "Manage profile, services, and patient contact info",
];

export default function WebsiteCreationGuidePage() {
  return (
    <InfoPageLayout
      badge="Product Workflow"
      title="Website Creation Guide"
      intro="Docxio turns a doctor profile into a complete professional website in a few guided steps. The platform combines template design, AI-generated copy, and clinic details to create a polished public-facing digital presence."
      overviewItems={overviewItems}
      videoGuide
    >
      <section>
        <h2 className="text-2xl font-bold text-slate-900">1. Start from onboarding data, not a separate profile form</h2>
        <p>
          The doctor profile is collected during onboarding and becomes the foundation for both the website and the appointment system. This means the doctor does not need to fill the same business details again during website creation or appointment setup. The data already includes qualifications, chamber information, booking preferences, treatment details, languages, bio, and contact metadata.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Profile identity, qualifications, and specialty are captured up front.</li>
          <li>Clinic address, map links, and WhatsApp contacts are saved as part of onboarding.</li>
          <li>Website creation simply uses this approved profile data to generate the live doctor website.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900">2. Choose a template and review the auto-built website</h2>
        <p>
          After onboarding, the doctor moves into the website builder where they review the template and the website structure. The public-facing pages are automatically influenced by the saved profile rather than requiring a separate manual step for every service and consultation field.
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
          Once the doctor profile is available, Docxio can generate structured content for home, about, appointment, and services pages using that verified data. The AI workflow prepares content from the specialist&apos;s onboarding information and sanitizes generated fields before saving them to the website record.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Build service descriptions and practice messaging from the doctor&apos;s specialization.</li>
          <li>Generate a professional bio and clinic summary from stored onboarding text.</li>
          <li>Store SEO metadata and canonical links for public pages automatically.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900">4. Choose a live web address</h2>
        <p>
          Every doctor website can be published using a free subdomain such as <span className="font-mono text-slate-900">dr-yourname.docxio.com</span>. The system also supports custom domains and verifies DNS records before the domain becomes active. The website address and public patient access are tied to the onboarding profile and clinic setup.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Use a free subdomain for immediate launch.</li>
          <li>Connect a custom domain later when the practice is ready.</li>
          <li>Use HTTPS and secure verification checks for live deployment.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900">5. Publish and maintain the site</h2>
        <p>
          The website is built with structured data and a patient-friendly experience in mind. The publishing step creates a website record, assigns SEO metadata, and marks the website as ready for public access. After launch, the doctor can continue to maintain the same profile data through onboarding or dashboard updates, and the appointment page remains aligned with the same source information.
        </p>
      </section>
    </InfoPageLayout>
  );
}
