import PrivacyPolicyContent from "@/components/templates/PrivacyPolicyContent";
import { getUserBySubdomain } from "@/services/user.service";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const user = await getUserBySubdomain(slug);

  if (!user) {
    return {};
  }

  return {
    title: `Privacy Policy | Dr. ${user.name}`,
    description: `How Dr. ${user.name} collects, uses and protects the personal information you share through this website.`,
  };
}

const PrivacyPolicyPage = async ({ params }) => {
  const { slug } = await params;
  const user = await getUserBySubdomain(slug);

  if (!user) notFound();

  return <PrivacyPolicyContent name={user.name} homeHref="/" />;
};

export default PrivacyPolicyPage;