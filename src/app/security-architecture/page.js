import InfoPageLayout from "@/components/legal/InfoPageLayout";
import { createMarketingMetadata } from "@/lib/seo/marketing-metadata";

export const metadata = createMarketingMetadata({
  title: "Docxio Security Architecture",
  description: "See how Docxio implements password hashing, signed session tokens, account-scoped access checks, and verified domain connections.",
  path: "/security-architecture",
});

const overviewItems = [
  "Bcrypt password hashing",
  "Signed access and refresh tokens",
  "User-scoped checks on protected resources",
  "Domain verification and application-managed media uploads",
];

export default function SecurityArchitecturePage() {
  return (
    <InfoPageLayout
      badge="Technical Controls"
      title="Docxio Security Architecture"
      intro="This overview describes security controls implemented in Docxio, including bcrypt password hashing, signed access and refresh tokens, account-scoped resource checks, and domain verification. These controls reduce risk but do not guarantee that an application or service is immune to security incidents."
      overviewItems={overviewItems}
    >
      <section>
        <h2 className="text-2xl font-bold text-slate-900">1. Identity and session security</h2>
        <p>
          Passwords are hashed with bcrypt before storage. Access and refresh tokens are signed with separate secrets and configured expiry periods. Authentication cookies are HTTP-only and use the secure flag in production.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900">2. Authorization and resource ownership</h2>
        <p>
          Protected services scope website and appointment queries to the authenticated account. Authorization checks are applied in the application; they should not be understood as a guarantee that unauthorized access is impossible.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900">3. Data model protections</h2>
        <p>
          The application stores doctor profiles, appointment records, SEO metadata, website records, and domain state in MongoDB using Mongoose schemas. Schemas validate many stored fields, and selected database indexes enforce uniqueness constraints. These are data-integrity controls, not a substitute for authorization checks.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900">4. Website publishing and domain validation</h2>
        <p>
          The domain integration checks provider verification and configuration status before marking a custom domain connected. SEO canonical URLs are currently derived from the Docxio subdomain; custom-domain connection does not change the canonical host.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900">5. AI content, media, and exposure controls</h2>
        <p>
          Profile and website image uploads are handled through Cloudinary. AI-generated text is draft content and must be reviewed by the doctor; do not treat generation or storage as independent verification of its claims.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900">6. Operational resilience</h2>
        <p>
          Transactions are used for selected updates that affect related records, including website and billing workflows. Website generation records status so the application can distinguish sites still being generated from those marked ready.
        </p>
      </section>
    </InfoPageLayout>
  );
}
