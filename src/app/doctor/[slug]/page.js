import { connectDB } from "@/config/database";
import { getDoctorsList, getUserBySlug } from "@/services/user.service";

export const revalidate = 900;

export const generateStaticParams = async () => {
    await connectDB();
    const doctors = await getDoctorsList() ?? [];
    return doctors.map((doctor) => ({
        slug: doctor?.slug
    }))
}

const DoctorHomePage = async ({ params }) => {
    await connectDB();
    const { slug } = await params;
    const doctor = await getUserBySlug(slug);
    return (
        <div>
            <h1>{doctor?.name}</h1>
        </div>
    );
};

export default DoctorHomePage;
