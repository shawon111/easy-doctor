import AboutPageThree from "./pages/about/AboutPageThree";
import AppointmentPageThree from "./pages/appointment/AppointmentPageThree";
import HomeThree from "./pages/home/HomeThree";
import ServicesPageThree from "./pages/services/ServicesPageThree";
import TemplateThree from "./TemplateThree";

const pages = {
  home: HomeThree,
  services: ServicesPageThree,
  about: AboutPageThree,
  appointment: AppointmentPageThree,
};

const TemplateThreePageRenderer = ({ page, slug, content }) => {
  const PageComponent = pages[page];

  return (
    <TemplateThree page={page} slug={slug} content={content}>
      {PageComponent ? (
        <PageComponent slug={slug} content={content} />
      ) : (
        <div>Page not found</div>
      )}
    </TemplateThree>
  );
};

export default TemplateThreePageRenderer;
