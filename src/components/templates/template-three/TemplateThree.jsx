import { templateThreeDefaults } from "@/content/defaults/template-three";
import { resolveTemplateContent } from "@/lib/content/resolve-template-content";
import FooterThree from "./footer/FooterThree";
import HeaderThree from "./header/HeaderThree";

const TemplateThree = ({ children, page = "home", slug, content, isDemo = false }) => {
  const siteContent = {
    header: resolveTemplateContent(content?.header, templateThreeDefaults.header, isDemo),
    footer: resolveTemplateContent(content?.footer, templateThreeDefaults.footer, isDemo),
  };

  return (
    <div
      className={`template-three t3-page-${page} bg-background text-on-background font-body-md selection:bg-primary/30 selection:text-primary overflow-x-hidden`}
    >
      <HeaderThree page={page} slug={slug} content={siteContent.header} isDemo={isDemo} />
      <main className="pt-20">{children}</main>
      <FooterThree slug={slug} content={siteContent.footer} isDemo={isDemo} />
    </div>
  );
};

export default TemplateThree;
