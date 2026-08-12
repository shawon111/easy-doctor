import AboutPageOneDark from "./pages/about/AboutPageOneDark";
import AppointmentPageOneDark from "./pages/appointment/AppointmentPageOneDark";
import HomeOneDark from "./pages/home/HomeOneDark";
import ServicesPageOneDark from "./pages/services/ServicesPageOneDark";
import TemplateOneDark from "./TemplateOneDark";

const pages = {
  home: HomeOneDark,
  services: ServicesPageOneDark,
  about: AboutPageOneDark,
  appointment: AppointmentPageOneDark,
};

const TemplateOneDarkPageRenderer = ({ page, slug }) => {
  const PageComponent = pages[page];

  return (
    <TemplateOneDark page={page} slug={slug}>
      {PageComponent ? <PageComponent slug={slug} /> : <div>Page not found</div>}
    </TemplateOneDark>
  );
};

export default TemplateOneDarkPageRenderer;
