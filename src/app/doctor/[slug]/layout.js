import { connectDB } from "@/config/database";
import { getWebsiteLists } from "@/services/website.service";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const generateStaticParams = async () => {
  await connectDB();
  const websites = (await getWebsiteLists()) ?? [];
  return websites.map((website) => ({
    slug: website?.subdomain,
  }));
};

const DoctorLayout = async ({ children }) => {
  return <div>{children}</div>;
};

export default DoctorLayout;
