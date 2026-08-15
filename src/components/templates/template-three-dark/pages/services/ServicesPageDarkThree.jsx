import { templateThreeDefaults } from "@/content/defaults/template-three";
import { resolveTemplateContent } from "@/lib/content/resolve-template-content";
import ServicesBenefitsDarkThree from "./ServicesBenefitsDarkThree";
import ServicesCtaDarkThree from "./ServicesCtaDarkThree";
import ServicesFaqDarkThree from "./ServicesFaqDarkThree";
import ServicesHeroDarkThree from "./ServicesHeroDarkThree";
import ServicesTreatmentsDarkThree from "./ServicesTreatmentsDarkThree";

export default function ServicesPageDarkThree({ slug, content, isDemo = false }) {
  const services = resolveTemplateContent(content?.pages?.services, templateThreeDefaults.pages.services, isDemo);

  return (
    <>
      <ServicesHeroDarkThree content={services.hero}  isDemo={isDemo}/>
      <ServicesTreatmentsDarkThree content={services.treatments}  isDemo={isDemo}/>
      <ServicesBenefitsDarkThree content={services.benefits}  isDemo={isDemo}/>
      <ServicesFaqDarkThree content={services.faq}  isDemo={isDemo}/>
      <ServicesCtaDarkThree slug={slug} content={services.finalCta}  isDemo={isDemo}/>
    </>
  );
}
