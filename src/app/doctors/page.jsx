import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import DoctorDirectory from "@/components/doctors/DoctorDirectory";
import { createMarketingMetadata } from "@/lib/seo/marketing-metadata";
import { getDoctorsDirectory } from "@/services/doctors-directory.service";

export const metadata = createMarketingMetadata({
  title: "Find a Doctor | Docxio",
  description:
    "Discover doctors, explore their specialties, qualifications, and practice information, and visit their professional websites.",
  path: "/doctors",
});

const getSearchValue = (value) =>
  Array.isArray(value) ? value[0] || "" : value || "";

export default async function DoctorsPage({ searchParams }) {
  const params = await searchParams;
  const query = getSearchValue(params?.q || params?.query);
  const specialty = getSearchValue(params?.specialty);
  const location = getSearchValue(params?.location);
  const page = getSearchValue(params?.page);

  const doctors = await getDoctorsDirectory({
    query,
    specialty,
    location,
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-[#0F172A] antialiased">
      <Header />
      <main>
        <DoctorDirectory
          doctors={doctors}
          search={{ query, specialty, location, page }}
          searchParams={params}
        />
      </main>
      <Footer />
    </div>
  );
}
