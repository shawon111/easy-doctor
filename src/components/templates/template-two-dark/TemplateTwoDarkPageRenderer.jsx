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

const TemplateTwoDarkPageRenderer = ({ page, slug }) => {
  const PageComponent = pages[page];

  return (
    <TemplateTwoDark page={page} slug={slug}>
      {PageComponent ? <PageComponent slug={slug} /> : <div>Page not found</div>}
    </TemplateTwoDark>
  );
};

export default TemplateTwoDarkPageRenderer;
