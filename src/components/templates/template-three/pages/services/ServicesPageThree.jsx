import { templateThreeDefaults } from "@/content/defaults/template-three";
import { resolveTemplateContent } from "@/lib/content/resolve-template-content";
import ServicesBenefitsThree from "./ServicesBenefitsThree";
import ServicesCtaThree from "./ServicesCtaThree";
import ServicesFaqThree from "./ServicesFaqThree";
import ServicesHeroThree from "./ServicesHeroThree";
import ServicesTreatmentsThree from "./ServicesTreatmentsThree";

export default function ServicesPageThree({ slug, content, isDemo = false }) {
  const services = resolveTemplateContent(content?.pages?.services, templateThreeDefaults.pages.services, isDemo);

  return (
    <>
      <ServicesHeroThree content={services.hero}  isDemo={isDemo}/>
      <ServicesTreatmentsThree content={services.treatments}  isDemo={isDemo}/>
      <ServicesBenefitsThree content={services.benefits}  isDemo={isDemo}/>
      <ServicesFaqThree content={services.faq}  isDemo={isDemo}/>
      <ServicesCtaThree slug={slug} content={services.finalCta}  isDemo={isDemo}/>
    </>
  );
}
