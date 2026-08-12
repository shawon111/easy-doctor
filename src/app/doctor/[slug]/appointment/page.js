import TemplateOneDarkPageRenderer from "@/components/templates/template-one-dark/TemplateOneDarkPageRenderer";

const pageName = "appointment";

const AppointmentPage = async ({ params }) => {
  const { slug } = await params;

  return <TemplateOneDarkPageRenderer page={pageName} slug={slug} />;
};

export default AppointmentPage;
