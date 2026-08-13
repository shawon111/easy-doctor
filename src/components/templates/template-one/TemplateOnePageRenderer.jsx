import AboutPageOne from "./pages/about/AboutPageOne";
import AppointmentPageOne from "./pages/appointment/AppointmentPageOne";
import HomeOne from "./pages/home/HomeOne";
import ServicesPageOne from "./pages/services/ServicesPageOne";
import TemplateOne from "./TemplateOne";

const pages = {
  home: HomeOne,
  services: ServicesPageOne,
  about: AboutPageOne,
  appointment: AppointmentPageOne,
};

const TemplateOnePageRenderer = ({ page, slug, content }) => {
  const PageComponent = pages[page];

  return (
    <TemplateOne page={page} slug={slug} content={content}>
      {PageComponent ? (
        <PageComponent slug={slug} content={content} />
      ) : (
        <div>Page not found</div>
      )}
    </TemplateOne>
  );
};

export default TemplateOnePageRenderer;
