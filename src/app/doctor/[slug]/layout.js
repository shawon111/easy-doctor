import { connectDB } from "@/config/database";
import { generateStructuredData } from "@/lib/seo/generateStructureddata";
import { getUserBySubdomain } from "@/services/user.service";
import { getWebsiteLists } from "@/services/website.service";

export const generateStaticParams = async () => {
  await connectDB();
  const websites = (await getWebsiteLists()) ?? [];
  return websites.map((website) => ({
    slug: website?.subdomain,
  }));
};

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
  return <div>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
    {children}
  </div>;
};

export default DoctorLayout;
