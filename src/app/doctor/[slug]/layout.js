import { connectDB } from "@/config/database";
import { generateStructuredData } from "@/lib/seo/generateStructureddata";
import { getSeoBySubdomain } from "@/services/seo.service";
import { getUserBySubdomain } from "@/services/user.service";
import { getWebsiteBySubdomain, getWebsiteLists } from "@/services/website.service";

export const generateStaticParams = async () => {
  await connectDB();
  const websites = (await getWebsiteLists()) ?? [];
  return websites.map((website) => ({
    slug: website?.subdomain,
  }));
};

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
