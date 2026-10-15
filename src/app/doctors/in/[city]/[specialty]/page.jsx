import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import LocationDoctorDirectory from "@/components/doctors/LocationDoctorDirectory";
import {
  getAvailableLocationSpecialtyPairs,
  getDoctorsByLocationAndSpecialty,
} from "@/services/doctors-directory.service";
import { getMarketingBaseUrl, serializeJsonLd } from "@/lib/seo/urls";
import { createMarketingMetadata } from "@/lib/seo/marketing-metadata";
import { notFound } from "next/navigation";

export const dynamicParams = true;
export const revalidate = 3600;

export async function generateStaticParams() {
  const pairs = await getAvailableLocationSpecialtyPairs();
  return pairs.map((pair) => ({
    city: pair.citySlug,
    specialty: pair.specialtySlug,
  }));
}

export async function generateMetadata({ params }) {
  const { city, specialty } = await params;
  const data = await getDoctorsByLocationAndSpecialty({
    citySlug: city,
    specialtySlug: specialty,
  });

  if (!data || data.doctors.length === 0) {
    return {
      title: "Specialist Not Found | Docxio",
      robots: { index: false, follow: false },
    };
  }

  const { cityName, specialtyName } = data;
  const title = `Top ${specialtyName}s in ${cityName} (2026) | Verified Chambers & Hours | Docxio`;
  const description = `Looking for the best ${specialtyName.toLowerCase()} in ${cityName}? Find verified chamber locations, visiting days, degrees, and book online appointments on Docxio.`;

  return createMarketingMetadata({
    title,
    description,
    path: `/doctors/in/${city}/${specialty}`,
  });
}

export default async function SpecialtyCityDoctorsPage({ params }) {
  const { city, specialty } = await params;
  const data = await getDoctorsByLocationAndSpecialty({
    citySlug: city,
    specialtySlug: specialty,
  });

  if (!data || data.doctors.length === 0) {
    notFound();
  }

  const {
    cityName,
    citySlug,
    specialtyName,
    specialtySlug,
    doctors,
    availableSpecialties,
    otherLocations,
    otherCitiesWithSpecialty,
  } = data;

  const baseUrl = getMarketingBaseUrl().toString().replace(/\/$/, "");
  const pageUrl = `${baseUrl}/doctors/in/${citySlug}/${specialtySlug}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["CollectionPage", "MedicalWebPage"],
        "@id": `${pageUrl}/#directory`,
        name: `${specialtyName}s in ${cityName}`,
        description: `Verified ${specialtyName.toLowerCase()} chambers and consultation schedules in ${cityName}, Bangladesh.`,
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
            item: `${baseUrl}/doctors/in/${citySlug}`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: `${specialtyName}s in ${cityName}`,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: `How do I book an appointment with a ${specialtyName} in ${cityName}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `Browse verified ${specialtyName} chambers in ${cityName}. Select a doctor to check their consulting hours and book via direct WhatsApp serial or practice profile.`,
            },
          },
          {
            "@type": "Question",
            name: `Are chamber visiting hours for ${specialtyName}s in ${cityName} up to date?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `Yes, visiting schedules and chamber addresses on Docxio are maintained directly by the doctors and their clinic management.`,
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
            specialtyName={specialtyName}
            specialtySlug={specialtySlug}
            availableSpecialties={availableSpecialties}
            otherLocations={otherLocations}
            otherCitiesWithSpecialty={otherCitiesWithSpecialty}
          />
        </main>
        <Footer />
      </div>
    </>
  );
}
