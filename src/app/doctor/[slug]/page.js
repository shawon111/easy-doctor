import TemplateThreeDarkPageRenderer from "@/components/templates/template-three-dark/TemplateThreeDarkPageRenderer";

const pageName = "home";

const DoctorHomePage = async ({ params }) => {
  const { slug } = await params;

  return <TemplateThreeDarkPageRenderer page={pageName} slug={slug} />;
};

export default DoctorHomePage;
