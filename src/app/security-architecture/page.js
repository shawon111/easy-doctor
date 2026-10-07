import InfoPageLayout from "@/components/legal/InfoPageLayout";

export const metadata = {
  title: "Security Architecture | Docxio",
  description: "A technical overview of the security model for the Docxio doctor website and appointment platform.",
};

const overviewItems = [
  "JWT-based session management and password hashing",
  "Role-based access checks for user-owned resources",
  "Secure deployment for websites, domains, and media",
  "Protected website generation and verification workflows",
];

export default function SecurityArchitecturePage() {
  return (
    <InfoPageLayout
      badge="Technical Controls"
      title="Security Architecture"
      intro="The Docxio application is designed as a healthcare-focused web platform with secure account management, verified domain setup, and protected website publishing. The security model combines tokens, hashed credentials, database constraints, and controlled resource access."
      overviewItems={overviewItems}
    >
      <section>
        <h2 className="text-2xl font-bold text-slate-900">1. Identity and session security</h2>
        <p>
          Account identity is handled through the authentication layer. Passwords are hashed with bcrypt before storage, and JWT access and refresh tokens are issued with separate secrets and expiration windows. This keeps the main session flow aligned with standard application-level security practices for authenticated dashboards and website management.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900">2. Authorization and resource ownership</h2>
        <p>
          The platform checks whether the current user is allowed to read or update a specific resource. For example, the permission layer compares the authenticated user ID to the owner ID of the requested record and rejects mismatched requests with a forbidden response. This stops one account from accessing another doctor&apos;s website, content, or appointment data.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900">3. Data model protections</h2>
        <p>
          The application stores doctor profiles, patient appointment records, SEO metadata, websites, and domain state in MongoDB using Mongoose schemas. Keys such as user ID, subdomain, domain, and appointment session references are protected with indexing and validation rules so object relationships remain structured and predictable.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900">4. Website publishing and domain validation</h2>
        <p>
          Once a website is created, the system updates canonical URLs, site metadata, and domain state. When a custom domain is connected, the platform validates DNS records, checks domain configuration, and stores the verified state for the site. This minimizes invalid domain routing and ensures the public URL reflects the correct host.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900">5. AI content, media, and exposure controls</h2>
        <p>
          Generated website content is sanitized before it is written to the database, and website sections such as headers and footers are stripped from the generated payload to avoid undesirable duplication. Media content is handled through Cloudinary, which keeps image uploads outside the application core and provides a dedicated distribution layer for profile and practice imagery.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900">6. Operational resilience</h2>
        <p>
          The system uses transactions where needed to keep updates consistent across related records such as websites, SEO data, and custom domain state. It also records generation status and failure states so technical issues are visible in the workflow rather than silently creating incomplete website records.
        </p>
      </section>
    </InfoPageLayout>
  );
}
