import AboutPageDarkThree from "./pages/about/AboutPageDarkThree";
import AppointmentPageDarkThree from "./pages/appointment/AppointmentPageDarkThree";
import HomePageDarkThree from "./pages/home/HomePageDarkThree";
import ServicesPageDarkThree from "./pages/services/ServicesPageDarkThree";
import TemplateThreeDark from "./TemplateThreeDark";

const pages = {
  home: HomePageDarkThree,
  services: ServicesPageDarkThree,
  about: AboutPageDarkThree,
  appointment: AppointmentPageDarkThree,
};

const TemplateThreeDarkPageRenderer = ({ page, slug }) => {
  const PageComponent = pages[page];

  return (
    <TemplateThreeDark page={page} slug={slug}>
      {PageComponent ? <PageComponent slug={slug} /> : <div>Page not found</div>}
    </TemplateThreeDark>
  );
};

export default TemplateThreeDarkPageRenderer;
