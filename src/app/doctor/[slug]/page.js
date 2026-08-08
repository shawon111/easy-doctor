import TemplateOnePageRenderer from "@/components/templates/template-one/TemplateOnePageRenderer";
import { connectDB } from "@/config/database";
import { getDoctorsList } from "@/services/user.service";

export const revalidate = 900;

export const generateStaticParams = async () => {
    await connectDB();
    const doctors = await getDoctorsList() ?? [];
    return doctors.map((doctor) => ({
        slug: doctor?.slug
    }))
}

// page name
const pageName = 'home';

const DoctorHomePage = async ({ params }) => {
    return (
        <>
            <TemplateOnePageRenderer page={pageName} />
        </>
    );
};

export default DoctorHomePage;
