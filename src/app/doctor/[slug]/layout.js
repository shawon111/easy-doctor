import { Button } from "@/components/ui/button";
import { connectDB } from "@/config/database";
import { generateStructuredData } from "@/lib/seo/generateStructureddata";
import { getSeoBySubdomain } from "@/services/seo.service";
import { getUserBySubdomain } from "@/services/user.service";
import { getWebsiteLists } from "@/services/website.service";

export const generateStaticParams = async () => {
  await connectDB();
  const websites = (await getWebsiteLists()) ?? [];
  return websites.map((website) => ({
    slug: website?.subdomain,
  }));
};

// check website activeness
const isWebsiteActive = (expireDate) => {
  return expireDate && new Date(expireDate) > new Date()
}

// generate metadata
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const seo = await getSeoBySubdomain(slug);
  if (!seo) {
    return {};
  }

  const canonicalUrl = seo.canonicalUrl?.replace(/\/$/, "");
  return {
    title: seo.defaultTitle,
    description: seo.defaultDescription,

    icons: {
      icon: "/favicon.svg",
    },

    alternates: {
      canonical: `${canonicalUrl}/`,
    },

    robots: {
      index: seo.robots?.index ?? true,
      follow: seo.robots?.follow ?? true,
    },

    openGraph: {
      type: "website",
      siteName: seo.siteName,
      title: seo.social?.ogTitle || seo.defaultTitle,
      description:
        seo.social?.ogDescription || seo.defaultDescription,
      url: `${canonicalUrl}/`,
      images: seo.social?.ogImage
        ? [seo.social.ogImage]
        : [],
    },

    twitter: {
      card: seo.social?.twitterCard || "summary_large_image",
      title: seo.social?.ogTitle || seo.defaultTitle,
      description:
        seo.social?.ogDescription || seo.defaultDescription,
      images: seo.social?.ogImage
        ? [seo.social.ogImage]
        : [],
    },

    verification: {
      google: seo.verification?.google || undefined,
      other: {
        bing: seo.verification?.bing || undefined,
      },
    },
  };
}

const DoctorLayout = async ({ children, params }) => {
  const { slug } = await params;

  // generate structured data
  const user = await getUserBySubdomain(slug);
  if (!user) {
    return null;
  }

  const host = user.domain
    ? user.domain
    : `${user.subdomain}.${process.env.NEXT_PUBLIC_BASE_DOMAIN}`;

  const baseUrl = `https://${host}`;

  const structuredData = generateStructuredData({
    user,
    baseUrl,
  });

  // check if subscription expired
  const isActive = isWebsiteActive(user?.expiresAt)
  if (!isActive) {
    return <>
      <section className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="font-semibold text-red-900">
              Your trial has expired
            </h3>
            <p className="mt-1 text-sm text-red-700">
              Your Docxio trial has ended. Upgrade your plan to continue
              using your website and dashboard features.
            </p>
          </div>

          <Button>
            Upgrade Plan
          </Button>
        </div>
      </section>
    </>
  }

  return <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
    {children}
  </>;
};

export default DoctorLayout;
