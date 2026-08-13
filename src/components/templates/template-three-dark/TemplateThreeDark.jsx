import { templateThreeDefaults } from "@/content/defaults/template-three";
import FooterDarkThree from "./footer/FooterDarkThree";
import HeaderDarkThree from "./header/HeaderDarkThree";

const TemplateThreeDark = ({ children, page = "home", slug, content }) => {
  const siteContent = {
    header: content?.header ?? templateThreeDefaults.header,
    footer: content?.footer ?? templateThreeDefaults.footer,
  };

  return (
    <div
      className={`template-three-dark t3d-page-${page} dark bg-background text-on-background font-body-md selection:bg-primary/30 selection:text-primary-fixed overflow-x-hidden`}
    >
      <HeaderDarkThree page={page} slug={slug} content={siteContent.header} />
      <main className="pt-20">{children}</main>
      <FooterDarkThree slug={slug} content={siteContent.footer} />
    </div>
  );
};

export default TemplateThreeDark;
