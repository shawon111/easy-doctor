import TemplateOnePageRenderer from "@/components/templates/template-one/TemplateOnePageRenderer";
import TemplateTwoPageRenderer from "@/components/templates/template-two/TemplateTwoPageRenderer";

// page name
const pageName = 'about';

const AboutPage = async () => {
    return (
        <>
            <TemplateTwoPageRenderer page={pageName} />
        </>
    );
};

export default AboutPage;
