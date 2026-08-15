import { templateTwoDefaults } from "@/content/defaults/template-two";
import { resolveTemplateContent } from "@/lib/content/resolve-template-content";
import FooterTwoDark from "./footer/FooterTwoDark";
import HeaderTwoDark from "./header/HeaderTwoDark";

const TemplateTwoDark = ({ children, page = "home", slug, content, isDemo = false }) => {
  return (
    <div className={`template-two-dark t2d-page-${page} bg-[#0e141a] text-on-background selection:bg-tertiary/30 overflow-x-hidden`}>
      <HeaderTwoDark page={page} slug={slug} content={resolveTemplateContent(content?.header, templateTwoDefaults.header, isDemo)} isDemo={isDemo} />
      <main className={page === "appointment" ? "max-w-[1200px] mx-auto overflow-hidden w-full" : undefined}>
        {children}
      </main>
      <FooterTwoDark slug={slug} content={resolveTemplateContent(content?.footer, templateTwoDefaults.footer, isDemo)} isDemo={isDemo} />
    </div>
  );
};

export default TemplateTwoDark;
