import { templateOneDefaults } from "@/content/defaults/template-one";
import { resolveTemplateContent } from "@/lib/content/resolve-template-content";
import AboutPreviewOneDark from "./AboutPreviewOneDark";
import AppointmentProcessOneDark from "./AppointmentProcessOneDark";
import ClinicLocationsOneDark from "./ClinicLocationsOneDark";
import FinalCTAOneDark from "./FinalCTAOneDark";
import HeroOneDark from "./HeroOneDark";
import ServicesOneDark from "./ServicesOneDark";
import TrustBadgesOneDark from "./TrustBadgesOneDark";
import WhyChooseUsOneDark from "./WhyChooseUsOneDark";

export default function HomeOneDark({ slug, content, isDemo = false }) {
  const home = resolveTemplateContent(content?.pages?.home, templateOneDefaults.pages.home, isDemo);

  return (
    <>
      <HeroOneDark content={home.hero} slug={slug}  isDemo={isDemo}/>
      <TrustBadgesOneDark content={home.trustBadges}  isDemo={isDemo}/>
      <AboutPreviewOneDark content={home.aboutPreview} slug={slug}  isDemo={isDemo}/>
      <ServicesOneDark content={home.services}  isDemo={isDemo}/>
      <WhyChooseUsOneDark content={home.whyChooseUs}  isDemo={isDemo}/>
      <AppointmentProcessOneDark content={home.appointmentProcess}  isDemo={isDemo}/>
      <ClinicLocationsOneDark content={home.clinicLocations}  isDemo={isDemo}/>
      <FinalCTAOneDark content={home.finalCta} slug={slug}  isDemo={isDemo}/>
    </>
  );
}
