import AboutCtaThree from "./AboutCtaThree";
import AboutHeroThree from "./AboutHeroThree";
import AboutJourneyThree from "./AboutJourneyThree";
import AboutLocationsThree from "./AboutLocationsThree";
import AboutPillarsThree from "./AboutPillarsThree";
import AboutTimelineThree from "./AboutTimelineThree";

export default function AboutPageThree({ slug }) {
  return (
    <div className="relative">
      <div className="absolute inset-0 noise-overlay pointer-events-none" />
      <AboutHeroThree />
      <AboutJourneyThree />
      <AboutTimelineThree />
      <AboutPillarsThree />
      <AboutLocationsThree />
      <AboutCtaThree slug={slug} />
    </div>
  );
}
