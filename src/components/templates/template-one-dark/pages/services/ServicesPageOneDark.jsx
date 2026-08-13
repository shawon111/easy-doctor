import { templateOneDefaults } from "@/content/defaults/template-one";
import ServicesBenefitsOneDark from "./ServicesBenefitsOneDark";
import ServicesCtaOneDark from "./ServicesCtaOneDark";
import ServicesFaqOneDark from "./ServicesFaqOneDark";
import ServicesGridOneDark from "./ServicesGridOneDark";
import ServicesHeroOneDark from "./ServicesHeroOneDark";

export default function ServicesPageOneDark({ slug, content }) {
  const services = content?.pages?.services ?? templateOneDefaults.pages.services;

  return (
    <>
      <ServicesHeroOneDark content={services.hero} />
      <ServicesGridOneDark content={services.treatmentsGrid} />
      <ServicesBenefitsOneDark content={services.benefits} />
      <ServicesFaqOneDark content={services.faq} />
      <ServicesCtaOneDark content={services.ctaBanner} slug={slug} />
    </>
  );
}
