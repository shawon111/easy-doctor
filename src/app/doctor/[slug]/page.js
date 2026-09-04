import TemplateOneDarkPageRenderer from "@/components/templates/template-one-dark/TemplateOneDarkPageRenderer";
import TemplateOnePageRenderer from "@/components/templates/template-one/TemplateOnePageRenderer";
import TemplateThreeDarkPageRenderer from "@/components/templates/template-three-dark/TemplateThreeDarkPageRenderer";
import TemplateThreePageRenderer from "@/components/templates/template-three/TemplateThreePageRenderer";
import TemplateTwoDarkPageRenderer from "@/components/templates/template-two-dark/TemplateTwoDarkPageRenderer";
import TemplateTwoPageRenderer from "@/components/templates/template-two/TemplateTwoPageRenderer";
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

const pageName = "home";

const DoctorHomePage = async ({ params }) => {
  const { slug } = await params;
  const website = await getWebsiteBySubdomain(slug);
  if (!website) notFound();
  const TemplatePageRenderer = templateMapping[website.templateType]
  if (!TemplatePageRenderer) notFound();
  return <TemplatePageRenderer page={pageName} slug={slug} />;
};

export default DoctorHomePage;
