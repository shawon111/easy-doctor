import { templateOneDefaults } from "@/content/defaults/template-one";
import React from 'react';
import AboutHeroOne from './AboutHeroOne';
import AboutPhilosophyOne from './AboutPhilosophyOne';
import AboutBioStatsOne from './AboutBioStatsOne';
import AboutTimelineOne from './AboutTimelineOne';
import AboutChambersOne from './AboutChambersOne';
import AboutFinalCtaOne from './AboutFinalCtaOne';

const AboutPageOne = ({ slug, content }) => {
    const about = content?.pages?.about ?? templateOneDefaults.pages.about;

    return (
        <>
            <AboutHeroOne content={about.hero} user={content?.user} />
            <AboutPhilosophyOne content={about.philosophy} />
            <AboutBioStatsOne content={about.bioStats} user={content?.user} />
            <AboutTimelineOne content={about.timeline} />
            <AboutChambersOne content={about.chambers} />
            <AboutFinalCtaOne content={about.finalCta} slug={slug} />
        </>
    );
};

export default AboutPageOne;
