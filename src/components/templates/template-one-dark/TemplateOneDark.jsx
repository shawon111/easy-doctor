import BackgroundBlobsOneDark from "./layout/BackgroundBlobsOneDark";
import FooterOneDark from "./footer/FooterOneDark";
import HeaderOneDark from "./header/HeaderOneDark";

const TemplateOneDark = ({ children, page = "home", slug }) => {
  return (
    <div className={`template-one-dark t1d-page-${page} relative overflow-x-hidden mesh-gradient`}>
      <BackgroundBlobsOneDark page={page} />
      <HeaderOneDark page={page} slug={slug} />
      <main className="relative z-[1] pt-20">{children}</main>
      <FooterOneDark slug={slug} />
    </div>
  );
};

export default TemplateOneDark;
