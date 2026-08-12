import FooterTwoDark from "./footer/FooterTwoDark";
import HeaderTwoDark from "./header/HeaderTwoDark";

const TemplateTwoDark = ({ children, page = "home", slug }) => {
  return (
    <div className={`template-two-dark t2d-page-${page} bg-[#0e141a] text-on-background selection:bg-tertiary/30 overflow-x-hidden`}>
      <HeaderTwoDark page={page} slug={slug} />
      <main className={page === "appointment" ? "max-w-[1200px] mx-auto overflow-hidden w-full" : undefined}>
        {children}
      </main>
      <FooterTwoDark slug={slug} />
    </div>
  );
};

export default TemplateTwoDark;
