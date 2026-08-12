import TemplateTwoDarkPageRenderer from "@/components/templates/template-two-dark/TemplateTwoDarkPageRenderer";

const pageName = "services";

const ServicesPage = async ({ params }) => {
  const { slug } = await params;

  return <TemplateTwoDarkPageRenderer page={pageName} slug={slug} />;
};

export default ServicesPage;
