import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import LocationDoctorDirectory from "@/components/doctors/LocationDoctorDirectory";
import {
  getAvailableLocationsWithDoctors,
  getDoctorsByLocationAndSpecialty,
} from "@/services/doctors-directory.service";
import { getMarketingBaseUrl, serializeJsonLd } from "@/lib/seo/urls";
import { createMarketingMetadata } from "@/lib/seo/marketing-metadata";
import { notFound } from "next/navigation";

export const dynamicParams = true;
export const revalidate = 3600;

export async function generateStaticParams() {
  const locations = await getAvailableLocationsWithDoctors();
  return locations.map((loc) => ({
    city: loc.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { city } = await params;
  const data = await getDoctorsByLocationAndSpecialty({ citySlug: city });

  if (!data || data.doctors.length === 0) {
    return {
      title: "Doctors in this Location Not Found | Docxio",
      robots: { index: false, follow: false },
    };
  }

  const { cityName } = data;
  const title = `Best Doctors in ${cityName} (2026) | Verified Chambers & Hours | Docxio`;
  const description = `Find top verified doctors, specialists, and chamber locations in ${cityName}, Bangladesh. View visiting hours, qualifications, and book appointments online with Docxio.`;

  return createMarketingMetadata({
    title,
    description,
    path: `/doctors/in/${city}`,
  });
}

export default async function CityDoctorsPage({ params }) {
  const { city } = await params;
  const data = await getDoctorsByLocationAndSpecialty({ citySlug: city });

  if (!data || data.doctors.length === 0) {
    notFound();
  }

  const { cityName, citySlug, doctors, availableSpecialties, otherLocations } = data;
  const baseUrl = getMarketingBaseUrl().toString().replace(/\/$/, "");
  const pageUrl = `${baseUrl}/doctors/in/${citySlug}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["CollectionPage", "MedicalWebPage"],
        "@id": `${pageUrl}/#directory`,
        name: `Doctors and Specialists in ${cityName}`,
        description: `Verified doctor chambers and visiting schedules in ${cityName}, Bangladesh.`,
        url: pageUrl,
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: doctors.length,
          itemListElement: doctors.map((doc, idx) => ({
            "@type": "ListItem",
            position: idx + 1,
            item: {
              "@type": "Physician",
              name: `Dr. ${doc.name}`,
              url: `${baseUrl}/doctors/${doc.slug || doc.subdomain || doc._id}`,
              medicalSpecialty: doc.specialization,
              address: {
                "@type": "PostalAddress",
                addressLocality: cityName,
                addressCountry: "BD",
              },
            },
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
            item: `${baseUrl}/doctors`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: `Doctors in ${cityName}`,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: `How can I find the best doctor chamber in ${cityName}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `Browse our verified directory of doctors in ${cityName}. Filter by specialty, compare degrees, check visiting days, and visit their official practice websites to schedule consultations.`,
            },
          },
          {
            "@type": "Question",
            name: `Which medical specialties are available in ${cityName}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `Doctors in ${cityName} cover specialties including ${availableSpecialties
                .slice(0, 5)
                .map((s) => s.specialty)
                .join(", ")}.`,
            },
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
          <LocationDoctorDirectory
            doctors={doctors}
            cityName={cityName}
            citySlug={citySlug}
            availableSpecialties={availableSpecialties}
            otherLocations={otherLocations}
          />
        </main>
        <Footer />
      </div>
    </>
  );
}
