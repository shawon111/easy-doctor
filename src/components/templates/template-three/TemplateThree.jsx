import FooterThree from "./footer/FooterThree";
import HeaderThree from "./header/HeaderThree";

const TemplateThree = ({ children, page = "home", slug }) => {
  return (
    <div
      className={`template-three t3-page-${page} bg-background text-on-background font-body-md selection:bg-primary/30 selection:text-primary overflow-x-hidden`}
    >
      <HeaderThree page={page} slug={slug} />
      <main className="pt-20">{children}</main>
      <FooterThree slug={slug} />
    </div>
  );
};

export default TemplateThree;
