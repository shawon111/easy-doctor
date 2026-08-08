import TemplateOnePageRenderer from "@/components/templates/template-one/TemplateOnePageRenderer";

// page name
const pageName = 'about';

const AboutPage = async ({ params }) => {
    return (
        <>
            <TemplateOnePageRenderer page={pageName} />
        </>
    );
};

export default AboutPage;
