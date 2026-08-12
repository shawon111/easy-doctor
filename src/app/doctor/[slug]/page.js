import TemplateTwoDarkPageRenderer from "@/components/templates/template-two-dark/TemplateTwoDarkPageRenderer";
import { connectDB } from "@/config/database";
import { getDoctorsList } from "@/services/user.service";

export const revalidate = 900;

export const generateStaticParams = async () => {
  await connectDB();
  const doctors = (await getDoctorsList()) ?? [];
  return doctors.map((doctor) => ({
    slug: doctor?.slug,
  }));
};

const pageName = "home";

const DoctorHomePage = async ({ params }) => {
  const { slug } = await params;

  return <TemplateTwoDarkPageRenderer page={pageName} slug={slug} />;
};

export default DoctorHomePage;
