import TemplateOneDarkPageRenderer from "@/components/templates/template-one-dark/TemplateOneDarkPageRenderer";
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

  return <TemplateOneDarkPageRenderer page={pageName} slug={slug} />;
};

export default DoctorHomePage;
