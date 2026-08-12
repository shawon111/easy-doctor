import TemplateOneDarkPageRenderer from "@/components/templates/template-one-dark/TemplateOneDarkPageRenderer";

const pageName = "about";

const AboutPage = async ({ params }) => {
  const { slug } = await params;

  return <TemplateOneDarkPageRenderer page={pageName} slug={slug} />;
};

export default AboutPage;
