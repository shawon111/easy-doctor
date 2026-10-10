import PrivacyPolicyContent from "@/components/templates/PrivacyPolicyContent";
import { createDoctorMetadata } from "@/lib/seo/doctor-metadata";
import { getUserBySubdomain } from "@/services/user.service";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return createDoctorMetadata(slug, "privacy-policy");
}

const PrivacyPolicyPage = async ({ params }) => {
  const { slug } = await params;
  const user = await getUserBySubdomain(slug);

  if (!user) notFound();

  return <PrivacyPolicyContent name={user.name} homeHref="/" />;
};

export default PrivacyPolicyPage;