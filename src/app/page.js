import { connectDB } from "@/config/database";
import { getDoctorsList } from "@/services/user.service";
import Link from "next/link";

export default async function Home() {
  await connectDB();
  const doctors = await getDoctorsList() ?? [];
  return (
    <>
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Doctor App</h1>
        <p className="text-gray-600 mb-8">create your doctor website</p>
        <ul>
          {
            doctors.map((doctor, index) => {
              return (
                <li key={doctor._id}>
                  <Link href={`/doctor/${doctor.slug}`}>Doctor {index + 1}</Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    </>
  );
}
