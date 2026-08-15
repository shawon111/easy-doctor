import { templateOneDefaults } from "@/content/defaults/template-one";
import { resolveTemplateContent } from "@/lib/content/resolve-template-content";
import ServicesBenefitsOneDark from "./ServicesBenefitsOneDark";
import ServicesCtaOneDark from "./ServicesCtaOneDark";
import ServicesFaqOneDark from "./ServicesFaqOneDark";
import ServicesGridOneDark from "./ServicesGridOneDark";
import ServicesHeroOneDark from "./ServicesHeroOneDark";

export default function ServicesPageOneDark({ slug, content, isDemo = false }) {
  const services = resolveTemplateContent(content?.pages?.services, templateOneDefaults.pages.services, isDemo);

  return (
    <>
      <ServicesHeroOneDark content={services.hero}  isDemo={isDemo}/>
      <ServicesGridOneDark content={services.treatmentsGrid}  isDemo={isDemo}/>
      <ServicesBenefitsOneDark content={services.benefits}  isDemo={isDemo}/>
      <ServicesFaqOneDark content={services.faq}  isDemo={isDemo}/>
      <ServicesCtaOneDark content={services.ctaBanner} slug={slug}  isDemo={isDemo}/>
    </>
  );
}
