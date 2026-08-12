import TemplateOneDarkPageRenderer from "@/components/templates/template-one-dark/TemplateOneDarkPageRenderer";

const pageName = "services";

const ServicesPage = async ({ params }) => {
  const { slug } = await params;

  return <TemplateOneDarkPageRenderer page={pageName} slug={slug} />;
};

export default ServicesPage;
