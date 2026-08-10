import TemplateOnePageRenderer from "@/components/templates/template-one/TemplateOnePageRenderer";
import TemplateTwoPageRenderer from "@/components/templates/template-two/TemplateTwoPageRenderer";

const pageName = 'appointment';

const AppointmentPage = async () => {
    return (
        <>
            <TemplateTwoPageRenderer page={pageName} />
        </>
    )
};

export default AppointmentPage;
