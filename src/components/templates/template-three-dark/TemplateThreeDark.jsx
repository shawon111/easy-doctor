import { templateThreeDefaults } from "@/content/defaults/template-three";
import { resolveTemplateContent } from "@/lib/content/resolve-template-content";
import FooterDarkThree from "./footer/FooterDarkThree";
import HeaderDarkThree from "./header/HeaderDarkThree";

const TemplateThreeDark = ({ children, page = "home", slug, content, isDemo = false }) => {
  const siteContent = {
    header: resolveTemplateContent(content?.header, templateThreeDefaults.header, isDemo),
    footer: resolveTemplateContent(content?.footer, templateThreeDefaults.footer, isDemo),
  };

  return (
    <div
      className={`template-three-dark t3d-page-${page} dark bg-background text-on-background font-body-md selection:bg-primary/30 selection:text-primary-fixed overflow-x-hidden`}
    >
      <HeaderDarkThree page={page} slug={slug} content={siteContent.header}  isDemo={isDemo} />
      <main className="pt-20">{children}</main>
      <FooterDarkThree slug={slug} content={siteContent.footer}  isDemo={isDemo} />
    </div>
  );
};

export default TemplateThreeDark;
