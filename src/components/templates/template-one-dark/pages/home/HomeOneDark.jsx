import AboutPreviewOneDark from "./AboutPreviewOneDark";
import AppointmentProcessOneDark from "./AppointmentProcessOneDark";
import ClinicLocationsOneDark from "./ClinicLocationsOneDark";
import FinalCTAOneDark from "./FinalCTAOneDark";
import HeroOneDark from "./HeroOneDark";
import ServicesOneDark from "./ServicesOneDark";
import TrustBadgesOneDark from "./TrustBadgesOneDark";
import WhyChooseUsOneDark from "./WhyChooseUsOneDark";

export default function HomeOneDark({ slug }) {
  return (
    <>
      <HeroOneDark slug={slug} />
      <TrustBadgesOneDark />
      <AboutPreviewOneDark slug={slug} />
      <ServicesOneDark />
      <WhyChooseUsOneDark />
      <AppointmentProcessOneDark />
      <ClinicLocationsOneDark />
      <FinalCTAOneDark slug={slug} />
    </>
  );
}
