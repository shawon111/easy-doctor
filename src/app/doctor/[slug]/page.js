import TemplateThreeDarkPageRenderer from "@/components/templates/template-three-dark/TemplateThreeDarkPageRenderer";

const pageName = "home";

const DoctorHomePage = async ({ params }) => {
  const { slug } = await params;

  // TODO: fetch template content from API and pass as `content` prop
  return <TemplateThreeDarkPageRenderer page={pageName} slug={slug} />;
};

export default DoctorHomePage;
