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
  return <TemplatePageRenderer page={pageName} content={website?.content ?? {}} slug={slug} />;
};

export default AppointmentPage;
