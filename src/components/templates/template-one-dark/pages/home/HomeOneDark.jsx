import { templateOneDefaults } from "@/content/defaults/template-one";
import { resolveTemplateContent } from "@/lib/content/resolve-template-content";
import AboutPreviewOneDark from "./AboutPreviewOneDark";
import AppointmentProcessOneDark from "./AppointmentProcessOneDark";
import ClinicLocationsOneDark from "./ClinicLocationsOneDark";
import FeesContactOneDark from "./FeesContactOneDark";
import FinalCTAOneDark from "./FinalCTAOneDark";
import HeroOneDark from "./HeroOneDark";
import ServicesOneDark from "./ServicesOneDark";
import TrustBadgesOneDark from "./TrustBadgesOneDark";
import WhyChooseUsOneDark from "./WhyChooseUsOneDark";

export default function HomeOneDark({ slug, content, isDemo = false }) {
  const home = resolveTemplateContent(content?.pages?.home, templateOneDefaults.pages.home, isDemo);
  const fees = isDemo ? templateOneDefaults.fees : (content?.fees || templateOneDefaults.fees);
  const phone = isDemo ? (templateOneDefaults.contact?.phone || "+880 1888-876512") : (content?.phone || "");

  return (
    <>
      <HeroOneDark content={home.hero} slug={slug} isDemo={isDemo} fees={fees} phone={phone} />
      <TrustBadgesOneDark content={home.trustBadges} isDemo={isDemo} />
      <FeesContactOneDark content={home.feesContact} fees={fees} phone={phone} clinics={content?.clinics} isDemo={isDemo} />
      <AboutPreviewOneDark content={home.aboutPreview} slug={slug} isDemo={isDemo} />
      <ServicesOneDark content={home.services} isDemo={isDemo} />
      <WhyChooseUsOneDark content={home.whyChooseUs} isDemo={isDemo} />
      <AppointmentProcessOneDark content={home.appointmentProcess} isDemo={isDemo} />
      <ClinicLocationsOneDark content={home.clinicLocations} isDemo={isDemo} />
      <FinalCTAOneDark content={home.finalCta} slug={slug} isDemo={isDemo} />
    </>
  );
}
