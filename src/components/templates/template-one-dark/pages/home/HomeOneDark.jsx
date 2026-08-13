import { templateOneDefaults } from "@/content/defaults/template-one";
import AboutPreviewOneDark from "./AboutPreviewOneDark";
import AppointmentProcessOneDark from "./AppointmentProcessOneDark";
import ClinicLocationsOneDark from "./ClinicLocationsOneDark";
import FinalCTAOneDark from "./FinalCTAOneDark";
import HeroOneDark from "./HeroOneDark";
import ServicesOneDark from "./ServicesOneDark";
import TrustBadgesOneDark from "./TrustBadgesOneDark";
import WhyChooseUsOneDark from "./WhyChooseUsOneDark";

export default function HomeOneDark({ slug, content }) {
  const home = content?.pages?.home ?? templateOneDefaults.pages.home;

  return (
    <>
      <HeroOneDark content={home.hero} slug={slug} />
      <TrustBadgesOneDark content={home.trustBadges} />
      <AboutPreviewOneDark content={home.aboutPreview} slug={slug} />
      <ServicesOneDark content={home.services} />
      <WhyChooseUsOneDark content={home.whyChooseUs} />
      <AppointmentProcessOneDark content={home.appointmentProcess} />
      <ClinicLocationsOneDark content={home.clinicLocations} />
      <FinalCTAOneDark content={home.finalCta} slug={slug} />
    </>
  );
}
