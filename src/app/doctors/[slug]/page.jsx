import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import DoctorProfilePage from "@/components/doctors/DoctorProfilePage";
import {
  getDoctorsDirectory,
  getDoctorBySlug,
  toSlug,
} from "@/services/doctors-directory.service";
import { getMarketingBaseUrl, serializeJsonLd } from "@/lib/seo/urls";
import { notFound } from "next/navigation";

export const dynamicParams = true;
export const revalidate = 3600;

// Pre-generate static pages for all doctors in the directory
export async function generateStaticParams() {
  const doctors = await getDoctorsDirectory();

  const slugs = new Set();
  doctors.forEach((doctor) => {
    if (doctor.slug) slugs.add(doctor.slug);
    if (doctor.subdomain) slugs.add(doctor.subdomain);
  });

  return Array.from(slugs).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const doctor = await getDoctorBySlug(slug);

  if (!doctor) {
    return {
      title: "Doctor Not Found | Docxio",
      robots: { index: false, follow: false },
    };
  }

  const baseUrl = getMarketingBaseUrl().toString().replace(/\/$/, "");
  const name = doctor.name || "Doctor";
  const specialty = doctor.specialization || "Doctor";
  const primaryClinic = doctor.clinicAddress?.[0] || {};
  const city = primaryClinic.city || "";
  const country = primaryClinic.country || "";
  const locationString = [city, country].filter(Boolean).join(", ");
  const locationContext = city ? ` in ${city}` : locationString ? ` in ${locationString}` : "";

  const qualifications = Array.isArray(doctor.qualifications)
    ? doctor.qualifications
        .map((q) => (typeof q === "string" ? q : q?.degree))
        .filter(Boolean)
    : [];

  const treatments = Array.isArray(doctor.treatments) ? doctor.treatments : [];

  const canonicalUrl = `${baseUrl}/doctors/${doctor.slug || slug}`;

  const title = `Dr. ${name} - ${specialty}${locationContext} | Practice Profile & Appointments`;

  const description = doctor.bio
    ? `${doctor.bio.slice(0, 150).trim()}... Consult Dr. ${name}, ${specialty}${locationContext}. View visiting hours, chamber addresses, qualifications, and book an appointment.`
    : `Consult Dr. ${name}, specialist in ${specialty}${locationContext}. View chamber addresses, visiting hours, qualifications, treatments, and book an appointment online.`;

  const keywords = [
    `Dr. ${name}`,
    name,
    specialty,
    `${specialty}${locationContext}`,
    `${name} chamber`,
    `${name} appointment`,
    `best ${specialty}${locationContext}`,
    ...(city ? [`doctor in ${city}`, `${specialty} doctor ${city}`] : []),
    ...qualifications,
    ...treatments.slice(0, 5),
  ];

  const ogImage = doctor.profilePicture || `${baseUrl}/opengraph-image.png`;

  return {
    title,
    description,
    keywords,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "profile",
      title: `Dr. ${name} - ${specialty}${locationContext}`,
      description,
      url: canonicalUrl,
      siteName: "Docxio Doctor Directory",
      images: [
        {
          url: ogImage,
          width: 800,
          height: 800,
          alt: `Portrait of Dr. ${name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Dr. ${name} - ${specialty}${locationContext}`,
      description,
      images: [ogImage],
    },
  };
}

export default async function PublicDoctorProfilePage({ params }) {
  const { slug } = await params;
  const doctor = await getDoctorBySlug(slug);

  if (!doctor) {
    notFound();
  }

  const baseUrl = getMarketingBaseUrl().toString().replace(/\/$/, "");
  const canonicalUrl = `${baseUrl}/doctors/${doctor.slug || slug}`;
  const name = doctor.name || "Doctor";
  const specialty = doctor.specialization || "Doctor";
  const clinics = Array.isArray(doctor.clinicAddress) ? doctor.clinicAddress : [];
  const primaryClinic = clinics[0] || {};
  const city = primaryClinic.city || "";
  const country = primaryClinic.country || "";

  const qualifications = Array.isArray(doctor.qualifications)
    ? doctor.qualifications
        .map((q) => (typeof q === "string" ? q : q?.degree))
        .filter(Boolean)
    : [];

  const websiteUrl = doctor.domain
    ? doctor.domain.startsWith("http")
      ? doctor.domain
      : `https://${doctor.domain}`
    : doctor.subdomain
    ? `${baseUrl}/doctor/${doctor.subdomain}`
    : canonicalUrl;

  // Rich Schema.org Physician & MedicalBusiness Structured Data
  const physicianSchema = {
    "@context": "https://schema.org",
    "@type": ["Physician", "MedicalBusiness"],
    "@id": `${canonicalUrl}#physician`,
    name: `Dr. ${name}`,
    image: doctor.profilePicture || undefined,
    description: doctor.bio || `Dr. ${name} is a specialist in ${specialty}.`,
    medicalSpecialty: specialty,
    url: websiteUrl,
    telephone: primaryClinic.whatsapp || doctor.phone || undefined,
    priceRange: "$$",
    knowsLanguage: doctor.languages || undefined,
    hasCredential: qualifications.map((deg) => ({
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      name: deg,
    })),
    address: primaryClinic.address
      ? {
          "@type": "PostalAddress",
          streetAddress: primaryClinic.address,
          addressLocality: city || undefined,
          addressCountry: country || undefined,
        }
      : undefined,
    availableService: Array.isArray(doctor.treatments)
      ? doctor.treatments.map((treatment) => ({
          "@type": "MedicalProcedure",
          name: treatment,
        }))
      : undefined,
    sameAs: [
      websiteUrl !== canonicalUrl ? websiteUrl : null,
      ...(Array.isArray(doctor.socialLinks)
        ? doctor.socialLinks.map((s) => s?.url).filter(Boolean)
        : []),
    ].filter(Boolean),
  };

  // BreadcrumbList Schema
  const breadcrumbItems = [
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
  ];

  if (city) {
    breadcrumbItems.push({
      "@type": "ListItem",
      position: breadcrumbItems.length + 1,
      name: `Doctors in ${city}`,
      item: `${baseUrl}/doctors/in/${toSlug(city)}`,
    });
    if (specialty) {
      breadcrumbItems.push({
        "@type": "ListItem",
        position: breadcrumbItems.length + 1,
        name: `${specialty} in ${city}`,
        item: `${baseUrl}/doctors/in/${toSlug(city)}/${toSlug(specialty)}`,
      });
    }
  }

  breadcrumbItems.push({
    "@type": "ListItem",
    position: breadcrumbItems.length + 1,
    name: `Dr. ${name}`,
    item: canonicalUrl,
  });

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems,
  };

  // FAQPage Schema for High Search Intent Keywords
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What is Dr. ${name}'s medical specialty?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Dr. ${name} is a medical specialist in ${specialty}${
            city ? ` practicing in ${city}` : ""
          }.${qualifications.length ? ` Medical qualifications include ${qualifications.join(", ")}.` : ""}`,
        },
      },
      {
        "@type": "Question",
        name: `How do I book an appointment with Dr. ${name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `You can book an appointment with Dr. ${name} by contacting the clinic chambers directly through WhatsApp${
            primaryClinic.whatsapp ? ` at ${primaryClinic.whatsapp}` : ""
          } or by visiting their official website.`,
        },
      },
      ...(primaryClinic.address
        ? [
            {
              "@type": "Question",
              name: `Where is Dr. ${name}'s chamber located?`,
              acceptedAnswer: {
                "@type": "Answer",
                text: `Dr. ${name}'s primary chamber is located at ${[
                  primaryClinic.chamberName,
                  primaryClinic.address,
                  primaryClinic.city,
                  primaryClinic.country,
                ]
                  .filter(Boolean)
                  .join(", ")}.${
                  primaryClinic.visitingHours ? ` Visiting hours are ${primaryClinic.visitingHours}.` : ""
                }`,
              },
            },
          ]
        : []),
    ],
  };

  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(physicianSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqSchema) }}
      />

      <Header />
      <main>
        <DoctorProfilePage doctor={doctor} />
      </main>
      <Footer />
    </>
  );
}
