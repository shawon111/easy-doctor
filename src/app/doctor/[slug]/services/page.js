import TemplateOnePageRenderer from "@/components/templates/template-one/TemplateOnePageRenderer";
import TemplateTwoPageRenderer from "@/components/templates/template-two/TemplateTwoPageRenderer";

const pageName = 'services';

const ServicesPage = async () => {
    return (
        <>
            <TemplateTwoPageRenderer page={pageName} />
        </>
    )
};

export default ServicesPage;
