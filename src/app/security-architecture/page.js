import InfoPageLayout from "@/components/legal/InfoPageLayout";
import { createMarketingMetadata } from "@/lib/seo/marketing-metadata";
import { getMarketingBaseUrl, serializeJsonLd } from "@/lib/seo/urls";

export const metadata = createMarketingMetadata({
  title: "Docxio Security Architecture | Data & Infrastructure Protection",
  description:
    "See how Docxio implements password hashing, signed session tokens, account-scoped access checks, and verified domain connections.",
  path: "/security-architecture",
});

const overviewItems = [
  "Bcrypt password hashing",
  "Signed access and refresh tokens",
  "User-scoped checks on protected resources",
  "Domain verification and application-managed media uploads",
];

const siteUrl = getMarketingBaseUrl().toString().replace(/\/$/, "");
const pageUrl = `${siteUrl}/security-architecture`;

const structuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Security Architecture", item: pageUrl },
  ],
};

export default function SecurityArchitecturePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(structuredData) }}
      />
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
          <h2 className="text-2xl font-bold text-slate-900">2. Resource-level authorization</h2>
          <p>
            Protected routes check that the authenticated user owns the resource being accessed. Operations on websites, appointments, and account settings are scoped to the authenticated user ID.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">3. Media and upload controls</h2>
          <p>
            Profile pictures and clinic imagery are uploaded through application-managed handlers to dedicated cloud storage. Upload endpoints enforce authentication and apply size and file-type restrictions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">4. Domain verification</h2>
          <p>
            Custom domains require verification before traffic is routed. DNS records are checked against the expected configuration before a domain is marked as verified.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">5. Operational considerations</h2>
          <p>
            Security controls require ongoing maintenance, dependency updates, and operational monitoring. Report security concerns to security@docxio.com.
          </p>
        </section>
      </InfoPageLayout>
    </>
  );
}
