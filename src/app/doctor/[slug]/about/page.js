import TemplateThreeDarkPageRenderer from "@/components/templates/template-three-dark/TemplateThreeDarkPageRenderer";

const pageName = "about";

const AboutPage = async ({ params }) => {
  const { slug } = await params;

  return <TemplateThreeDarkPageRenderer page={pageName} slug={slug} />;
};

export default AboutPage;
