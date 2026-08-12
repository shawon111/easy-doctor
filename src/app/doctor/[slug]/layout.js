import { connectDB } from "@/config/database";
import { getDoctorsList } from "@/services/user.service";

export const revalidate = 900;

export const generateStaticParams = async () => {
  await connectDB();
  const doctors = (await getDoctorsList()) ?? [];
  return doctors.map((doctor) => ({
    slug: doctor?.slug,
  }));
};

const DoctorLayout = async ({ children }) => {
  return <div>{children}</div>;
};

export default DoctorLayout;
