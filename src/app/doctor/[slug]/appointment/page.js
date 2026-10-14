import TemplateOneDarkPageRenderer from "@/components/templates/template-one-dark/TemplateOneDarkPageRenderer";
import TemplateOnePageRenderer from "@/components/templates/template-one/TemplateOnePageRenderer";
import TemplateThreeDarkPageRenderer from "@/components/templates/template-three-dark/TemplateThreeDarkPageRenderer";
import TemplateThreePageRenderer from "@/components/templates/template-three/TemplateThreePageRenderer";
import TemplateTwoDarkPageRenderer from "@/components/templates/template-two-dark/TemplateTwoDarkPageRenderer";
import TemplateTwoPageRenderer from "@/components/templates/template-two/TemplateTwoPageRenderer";
import WebsiteGeneratingScreen from "@/components/doctor/WebsiteGeneratingScreen";
import { createDoctorMetadata } from "@/lib/seo/doctor-metadata";
import { getDoctorCanonicalBaseUrl, serializeJsonLd } from "@/lib/seo/urls";
import { getWebsiteBySubdomain } from "@/services/website.service";
import { notFound } from "next/navigation";

const pageName = "appointment";
const templateMapping = {
    "template-one": TemplateOnePageRenderer,
    "template-two": TemplateTwoPageRenderer,
    "template-three": TemplateThreePageRenderer,
    "template-one-dark": TemplateOneDarkPageRenderer,
    "template-two-dark": TemplateTwoDarkPageRenderer,
    "template-three-dark": TemplateThreeDarkPageRenderer,
};

// generate metadata
export async function generateMetadata({ params }) {
    const { slug } = await params;
    return createDoctorMetadata(slug, "appointment");
}

const AppointmentPage = async ({ params }) => {
    const { slug } = await params;
    const website = await getWebsiteBySubdomain(slug, pageName);
    if (!website) notFound();

    // Website is still being generated — show a placeholder screen.
    // This branch is never cached so every request re-checks the status.
    if (website.status === "generating") {
        return <WebsiteGeneratingScreen />;
    }

    const TemplatePageRenderer = templateMapping[website.templateType];
    if (!TemplatePageRenderer) notFound();
    let siteContent = website?.content ?? {};
    siteContent.userId = website?.userId?._id;
    siteContent.phone = website?.userId?.phone;
    const clinics = website?.userId?.clinicAddress || [];
    const doctorPhone = String(siteContent.phone || "").replace(/\D/g, "");
    siteContent.clinics = clinics.length
        ? clinics
        : doctorPhone
          ? [{ whatsapp: doctorPhone }]
          : [];
    siteContent.bookingPreference = website?.userId?.bookingPreferences;

    // generate and use brand name
    const brandName =
        (website?.userId?.name?.split(" ")[0] || "") +
        " " +
        (website?.userId?.name?.split(" ")[1] || "");
    siteContent.header = siteContent?.header ?? {};
    siteContent.footer = siteContent?.footer ?? {};
    siteContent.header.brandName = brandName;
    siteContent.footer.brandName = brandName;

    const canonicalBaseUrl =
        getDoctorCanonicalBaseUrl(website)?.toString().replace(/\/$/, "") || "";

    const appointmentStructuredData = canonicalBaseUrl
        ? {
              "@context": "https://schema.org",
              "@graph": [
                  {
                      "@type": "MedicalWebPage",
                      name: `Book an Appointment | Dr. ${website?.userId?.name}`,
                      description: `Schedule a consultation with Dr. ${website?.userId?.name}.`,
                      url: `${canonicalBaseUrl}/appointment`,
                      potentialAction: {
                          "@type": "ReserveAction",
                          target: `${canonicalBaseUrl}/appointment`,
                          result: {
                              "@type": "MedicalAppointment",
                              name: `Consultation with Dr. ${website?.userId?.name}`,
                          },
                      },
                  },
                  {
                      "@type": "BreadcrumbList",
                      itemListElement: [
                          {
                              "@type": "ListItem",
                              position: 1,
                              name: "Home",
                              item: canonicalBaseUrl,
                          },
                          {
                              "@type": "ListItem",
                              position: 2,
                              name: "Appointment",
                              item: `${canonicalBaseUrl}/appointment`,
                          },
                      ],
                  },
              ],
          }
        : null;

    return (
        <>
            {appointmentStructuredData ? (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: serializeJsonLd(appointmentStructuredData),
                    }}
                />
            ) : null}
            <TemplatePageRenderer page={pageName} content={siteContent} slug={slug} />
        </>
    );
};

export default AppointmentPage;
