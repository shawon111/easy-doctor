import { templateThreeDefaults } from "@/content/defaults/template-three";
import FooterThree from "./footer/FooterThree";
import HeaderThree from "./header/HeaderThree";

const TemplateThree = ({ children, page = "home", slug, content }) => {
  const siteContent = {
    header: content?.header ?? templateThreeDefaults.header,
    footer: content?.footer ?? templateThreeDefaults.footer,
  };

  return (
    <div
      className={`template-three t3-page-${page} bg-background text-on-background font-body-md selection:bg-primary/30 selection:text-primary overflow-x-hidden`}
    >
      <HeaderThree page={page} slug={slug} content={siteContent.header} />
      <main className="pt-20">{children}</main>
      <FooterThree slug={slug} content={siteContent.footer} />
    </div>
  );
};

export default TemplateThree;
