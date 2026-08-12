import TemplateTwoDarkPageRenderer from "@/components/templates/template-two-dark/TemplateTwoDarkPageRenderer";

const pageName = "appointment";

const AppointmentPage = async ({ params }) => {
  const { slug } = await params;

  return <TemplateTwoDarkPageRenderer page={pageName} slug={slug} />;
};

export default AppointmentPage;
