import TemplateOneDarkPageRenderer from "@/components/templates/template-one-dark/TemplateOneDarkPageRenderer";
import TemplateOnePageRenderer from "@/components/templates/template-one/TemplateOnePageRenderer";
import TemplateThreeDarkPageRenderer from "@/components/templates/template-three-dark/TemplateThreeDarkPageRenderer";
import TemplateThreePageRenderer from "@/components/templates/template-three/TemplateThreePageRenderer";
import TemplateTwoDarkPageRenderer from "@/components/templates/template-two-dark/TemplateTwoDarkPageRenderer";
import TemplateTwoPageRenderer from "@/components/templates/template-two/TemplateTwoPageRenderer";
import { getSeoBySubdomain } from "@/services/seo.service";
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

    const seo = await getSeoBySubdomain(slug);

    if (!seo) {
        return {};
    }

    const canonicalUrl = seo.canonicalUrl?.replace(/\/$/, "");

    return {
        title: seo.pages.appointment.title,
        description: seo.pages.appointment.description,

        alternates: {
            canonical: `${canonicalUrl}/appointment`,
        },

        openGraph: {
            type: "website",
            title: seo.pages.appointment.title,
            description: seo.pages.appointment.description,
            url: `${canonicalUrl}/appointment`,
            siteName: seo.siteName,
            images: seo.pages.appointment.ogImage
                ? [seo.pages.appointment.ogImage]
                : [],
        },

        twitter: {
            card: seo.social?.twitterCard || "summary_large_image",
            title: seo.pages.appointment.title,
            description: seo.pages.appointment.description,
            images: seo.pages.appointment.ogImage
                ? [seo.pages.appointment.ogImage]
                : [],
        },
    };
}

const AppointmentPage = async ({ params }) => {
    const { slug } = await params;
    const website = await getWebsiteBySubdomain(slug, pageName);
    if (!website) notFound();
    const TemplatePageRenderer = templateMapping[website.templateType];
    if (!TemplatePageRenderer) notFound();
    let siteContent = website?.content ?? {}
    siteContent.userId = website?.userId?._id
    siteContent.phone = website?.userId?.phone;
    siteContent.clinics =website?.userId?.clinicAddress
    // generate and use brand name
    const brandName = website?.userId?.name.split(" ")[0] + " " + website?.userId?.name.split(" ")[1]
    siteContent.header = siteContent?.header ?? {}
    siteContent.footer = siteContent?.footer ?? {}
    siteContent.header.brandName = brandName;
    siteContent.footer.brandName = brandName;

    return <TemplatePageRenderer page={pageName} content={siteContent} slug={slug} />;
};

export default AppointmentPage;
