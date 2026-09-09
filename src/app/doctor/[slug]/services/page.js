import TemplateOneDarkPageRenderer from "@/components/templates/template-one-dark/TemplateOneDarkPageRenderer";
import TemplateOnePageRenderer from "@/components/templates/template-one/TemplateOnePageRenderer";
import TemplateThreeDarkPageRenderer from "@/components/templates/template-three-dark/TemplateThreeDarkPageRenderer";
import TemplateThreePageRenderer from "@/components/templates/template-three/TemplateThreePageRenderer";
import TemplateTwoDarkPageRenderer from "@/components/templates/template-two-dark/TemplateTwoDarkPageRenderer";
import TemplateTwoPageRenderer from "@/components/templates/template-two/TemplateTwoPageRenderer";
import { getSeoBySubdomain } from "@/services/seo.service";
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
}
const pageName = "services";

// generate metadata
export async function generateMetadata({ params }) {
    const { slug } = await params;

    const seo = await getSeoBySubdomain(slug);

    if (!seo) {
        return {};
    }

    const canonicalUrl = seo.canonicalUrl?.replace(/\/$/, "");

    return {
        title: seo.pages.services.title,
        description: seo.pages.services.description,

        alternates: {
            canonical: `${canonicalUrl}/services`,
        },

        openGraph: {
            type: "website",
            title: seo.pages.services.title,
            description: seo.pages.services.description,
            url: `${canonicalUrl}/services`,
            siteName: seo.siteName,
            images: seo.pages.services.ogImage
                ? [seo.pages.services.ogImage]
                : [],
        },

        twitter: {
            card: seo.social?.twitterCard || "summary_large_image",
            title: seo.pages.services.title,
            description: seo.pages.services.description,
            images: seo.pages.services.ogImage
                ? [seo.pages.services.ogImage]
                : [],
        },
    };
}

const ServicesPage = async ({ params }) => {
  const { slug } = await params;
    const website = await getWebsiteBySubdomain(slug);
    if (!website) notFound();
    const TemplatePageRenderer = templateMapping[website.templateType]
    if (!TemplatePageRenderer) notFound();

  return <TemplatePageRenderer page={pageName} content={website?.content ?? {}} slug={slug} />;
};

export default ServicesPage;
