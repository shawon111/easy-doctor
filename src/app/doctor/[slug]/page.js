import TemplateThreePageRenderer from "@/components/templates/template-three/TemplateThreePageRenderer";
import TemplateTwoDarkPageRenderer from "@/components/templates/template-two-dark/TemplateTwoDarkPageRenderer";

const pageName = "home";

const DoctorHomePage = async ({ params }) => {
  const { slug } = await params;

  return <TemplateThreePageRenderer page={pageName} slug={slug} />;
};

export default DoctorHomePage;
