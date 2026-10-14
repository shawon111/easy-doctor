import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import DoctorDirectory from "@/components/doctors/DoctorDirectory";
import { createMarketingMetadata } from "@/lib/seo/marketing-metadata";
import { getDoctorsDirectory } from "@/services/doctors-directory.service";
import { getMarketingBaseUrl, serializeJsonLd } from "@/lib/seo/urls";

export const metadata = createMarketingMetadata({
  title: "Find a Doctor in Bangladesh | Verified Specialists & Chambers | Docxio",
  description:
    "Discover and connect with verified doctors, physicians, and surgeons in Bangladesh. Search by specialty and city, check visiting hours, and visit official practice websites.",
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

  const baseUrl = getMarketingBaseUrl().toString().replace(/\/$/, "");
  const pageUrl = `${baseUrl}/doctors`;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["CollectionPage", "MedicalWebPage"],
        "@id": `${pageUrl}/#directory`,
        name: "Docxio Doctor Directory",
        description:
          "Discover verified doctors, explore their specialties, qualifications, chamber locations, and visit their official websites.",
        url: pageUrl,
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: doctors.length,
          itemListElement: doctors.slice(0, 15).map((doctor, idx) => ({
            "@type": "ListItem",
            position: idx + 1,
            name: doctor.name ? `Dr. ${doctor.name}` : "Doctor",
            url: `${baseUrl}/doctors/${doctor.slug || doctor.subdomain || doctor._id}`,
            description: doctor.specialization
              ? `${doctor.specialization} located in ${doctor.clinicAddress?.[0]?.city || "Bangladesh"}`
              : undefined,
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: baseUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Find a Doctor",
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(structuredData) }}
      />
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
    </>
  );
}
