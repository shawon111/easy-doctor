import TemplateOneDarkPageRenderer from "@/components/templates/template-one-dark/TemplateOneDarkPageRenderer";
import TemplateOnePageRenderer from "@/components/templates/template-one/TemplateOnePageRenderer";
import TemplateThreeDarkPageRenderer from "@/components/templates/template-three-dark/TemplateThreeDarkPageRenderer";
import TemplateThreePageRenderer from "@/components/templates/template-three/TemplateThreePageRenderer";
import TemplateTwoDarkPageRenderer from "@/components/templates/template-two-dark/TemplateTwoDarkPageRenderer";
import TemplateTwoPageRenderer from "@/components/templates/template-two/TemplateTwoPageRenderer";
import { getSeoBySubdomain } from "@/services/seo.service";
import { getWebsiteBySubdomain } from "@/services/website.service";
import { notFound } from "next/navigation";

const pageName = "about";
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
        title: seo.pages.about.title,
        description: seo.pages.about.description,

        alternates: {
            canonical: `${canonicalUrl}/about`,
        },

        openGraph: {
            type: "website",
            title: seo.pages.about.title,
            description: seo.pages.about.description,
            url: `${canonicalUrl}/about`,
            siteName: seo.siteName,
            images: seo.pages.about.ogImage
                ? [seo.pages.about.ogImage]
                : [],
        },

        twitter: {
            card: seo.social?.twitterCard || "summary_large_image",
            title: seo.pages.about.title,
            description: seo.pages.about.description,
            images: seo.pages.about.ogImage
                ? [seo.pages.about.ogImage]
                : [],
        },
    };
}

const AboutPage = async ({ params }) => {
  const { slug } = await params;
  const website = await getWebsiteBySubdomain(slug);
  if (!website) notFound();
  const TemplatePageRenderer = templateMapping[website.templateType];
  if (!TemplatePageRenderer) notFound();
  return <TemplatePageRenderer page={pageName} content={website?.content ?? {}} slug={slug} />;
};

export default AboutPage;
