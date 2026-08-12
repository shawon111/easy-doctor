import AboutCtaDarkThree from "./AboutCtaDarkThree";
import AboutHeroDarkThree from "./AboutHeroDarkThree";
import AboutJourneyDarkThree from "./AboutJourneyDarkThree";
import AboutLocationsDarkThree from "./AboutLocationsDarkThree";
import AboutPillarsDarkThree from "./AboutPillarsDarkThree";
import AboutTimelineDarkThree from "./AboutTimelineDarkThree";

export default function AboutPageDarkThree({ slug }) {
  return (
    <div className="relative">
      <div className="absolute inset-0 noise-overlay pointer-events-none" />
      <AboutHeroDarkThree />
      <AboutJourneyDarkThree />
      <AboutTimelineDarkThree />
      <AboutPillarsDarkThree />
      <AboutLocationsDarkThree />
      <AboutCtaDarkThree slug={slug} />
    </div>
  );
}
