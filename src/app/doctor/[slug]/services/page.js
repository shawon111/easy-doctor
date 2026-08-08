import TemplateOnePageRenderer from "@/components/templates/template-one/TemplateOnePageRenderer";

const pageName = 'services';

const ServicesPage = async ({ params }) => {
    return (
        <>
            <TemplateOnePageRenderer page={pageName} />
        </>
    )
};

export default ServicesPage;
