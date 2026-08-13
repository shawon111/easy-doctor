import AboutPageTwo from "./pages/about/AboutPageTwo";
import AppointmentPageTwo from "./pages/appointment/AppointmentPageTwo";
import HomePageTwo from "./pages/home/HomePageTwo";
import ServicesPageTwo from "./pages/services/ServicesPageTwo";
import TemplateTwo from "./TemplateTwo";

const pages = {
  home: HomePageTwo,
  services: ServicesPageTwo,
  about: AboutPageTwo,
  appointment: AppointmentPageTwo,
};

const TemplateTwoPageRenderer = ({ page, slug, content }) => {
  const PageComponent = pages[page];

  return (
    <TemplateTwo page={page} slug={slug} content={content}>
      {PageComponent ? (
        <PageComponent slug={slug} content={content} />
      ) : (
        <div>Page not found</div>
      )}
    </TemplateTwo>
  );
};

export default TemplateTwoPageRenderer;
