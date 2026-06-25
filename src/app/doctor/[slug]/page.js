import { Button } from "@/components/ui/button";
import { connectDB } from "@/config/database";
import { getDoctorsList, getUserBySlug } from "@/services/user.service";
import Link from "next/link";

export const revalidate = 60 * 15;

export const generateStaticParams = async () => {
    await connectDB();
    const doctors = await getDoctorsList() ?? [];
    return doctors.map((doctor) => ({
        slug: doctor?.slug
    }))
}

const DoctorHomePage = async({ params }) => {
    await connectDB();
    const { slug } = await params;
    const doctor = await getUserBySlug(slug);
    return (
        <div>
            <h1 className="">
               Doctor Name: {doctor?.name}
            </h1>
            <p>
                Bio: {doctor?.bio}
            </p>
            <Button type="button">
                Call: <Link href={`tel:${doctor?.phone}`}>{doctor?.phone}</Link>
            </Button>
        </div>
    );
};

export default DoctorHomePage;