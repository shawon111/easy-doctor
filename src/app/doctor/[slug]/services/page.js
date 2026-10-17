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

// renderer and template mapping
const templateMapping = {
    "template-one": TemplateOnePageRenderer,
    "template-two": TemplateTwoPageRenderer,
    "template-three": TemplateThreePageRenderer,
    "template-one-dark": TemplateOneDarkPageRenderer,
    "template-two-dark": TemplateTwoDarkPageRenderer,
    "template-three-dark": TemplateThreeDarkPageRenderer,
};
const pageName = "services";

// generate metadata
export async function generateMetadata({ params }) {
    const { slug } = await params;
    return createDoctorMetadata(slug, "services");
}

const ServicesPage = async ({ params }) => {
    const { slug } = await params;
    const website = await getWebsiteBySubdomain(slug, pageName);
    if (!website) notFound();

     // if ai generating website content, show generating screen
    if (website.status === "generating") {
        return <WebsiteGeneratingScreen />;
    }

    const TemplatePageRenderer = templateMapping[website.templateType];
    if (!TemplatePageRenderer) notFound();
    let siteContent = website?.content ?? {};
    siteContent.userId = website?.userId?._id;
    siteContent.phone = website?.userId?.phone;
    siteContent.fees = website?.userId?.fees;
    siteContent.clinics = website?.userId?.clinicAddress;

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

    const servicesStructuredData = canonicalBaseUrl
        ? {
              "@context": "https://schema.org",
              "@graph": [
                  {
                      "@type": "MedicalWebPage",
                      name: `${website?.userId?.specialization || "Medical"} Services - Dr. ${website?.userId?.name}`,
                      description: `Clinical services and procedures provided by Dr. ${website?.userId?.name}.`,
                      url: `${canonicalBaseUrl}/services`,
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
                              name: "Services",
                              item: `${canonicalBaseUrl}/services`,
                          },
                      ],
                  },
              ],
          }
        : null;

    return (
        <>
            {servicesStructuredData ? (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: serializeJsonLd(servicesStructuredData),
                    }}
                />
            ) : null}
            <TemplatePageRenderer page={pageName} content={siteContent} slug={slug} />
        </>
    );
};

export default ServicesPage;
