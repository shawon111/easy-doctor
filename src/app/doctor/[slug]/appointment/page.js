import TemplateOnePageRenderer from "@/components/templates/template-one/TemplateOnePageRenderer";

const pageName = 'appointment';

const AppointmentPage = async ({ params }) => {
    return (
        <>
            <TemplateOnePageRenderer page={pageName} />
        </>
    )
};

export default AppointmentPage;
