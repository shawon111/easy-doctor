import { templateOneDefaults } from "@/content/defaults/template-one";
import { resolveTemplateContent } from "@/lib/content/resolve-template-content";
import BackgroundBlobsOneDark from "./layout/BackgroundBlobsOneDark";
import FooterOneDark from "./footer/FooterOneDark";
import HeaderOneDark from "./header/HeaderOneDark";

const TemplateOneDark = ({ children, page = "home", slug, content, isDemo = false }) => {
  return (
    <div className={`template-one-dark t1d-page-${page} relative overflow-x-hidden mesh-gradient`}>
      <BackgroundBlobsOneDark page={page} isDemo={isDemo} />
      <HeaderOneDark content={resolveTemplateContent(content?.header, templateOneDefaults.header, isDemo)} page={page} slug={slug} isDemo={isDemo} />
      <main className="relative z-[1] pt-20">{children}</main>
      <FooterOneDark content={resolveTemplateContent(content?.footer, templateOneDefaults.footer, isDemo)} slug={slug} isDemo={isDemo} />
    </div>
  );
};

export default TemplateOneDark;
