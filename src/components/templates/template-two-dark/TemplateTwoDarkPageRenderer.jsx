import AboutPageTwoDark from "./pages/about/AboutPageTwoDark";
import AppointmentPageTwoDark from "./pages/appointment/AppointmentPageTwoDark";
import HomeTwoDark from "./pages/home/HomeTwoDark";
import ServicesPageTwoDark from "./pages/services/ServicesPageTwoDark";
import TemplateTwoDark from "./TemplateTwoDark";

const pages = {
  home: HomeTwoDark,
  services: ServicesPageTwoDark,
  about: AboutPageTwoDark,
  appointment: AppointmentPageTwoDark,
};

const TemplateTwoDarkPageRenderer = ({ page, slug, content }) => {
  const PageComponent = pages[page];

  return (
    <TemplateTwoDark page={page} slug={slug} content={content}>
      {PageComponent ? (
        <PageComponent slug={slug} content={content} />
      ) : (
        <div>Page not found</div>
      )}
    </TemplateTwoDark>
  );
};

export default TemplateTwoDarkPageRenderer;
