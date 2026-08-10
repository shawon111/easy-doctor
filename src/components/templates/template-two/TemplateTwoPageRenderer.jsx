
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
}

const TemplateTwoPageRenderer = ({page}) => {
    const PageComponent = pages[page];
    return (
        <div>
            <TemplateTwo>
                {PageComponent ? <PageComponent /> : <div>Page not found</div>}
            </TemplateTwo>
        </div>
    );
};

export default TemplateTwoPageRenderer;