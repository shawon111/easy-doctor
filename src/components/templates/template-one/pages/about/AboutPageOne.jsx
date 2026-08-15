import { templateOneDefaults } from "@/content/defaults/template-one";
import { resolveTemplateContent } from "@/lib/content/resolve-template-content";
import React from 'react';
import AboutHeroOne from './AboutHeroOne';
import AboutPhilosophyOne from './AboutPhilosophyOne';
import AboutBioStatsOne from './AboutBioStatsOne';
import AboutTimelineOne from './AboutTimelineOne';
import AboutChambersOne from './AboutChambersOne';
import AboutFinalCtaOne from './AboutFinalCtaOne';

const AboutPageOne = ({ slug, content, isDemo = false }) => {
    const about = resolveTemplateContent(content?.pages?.about, templateOneDefaults.pages.about, isDemo);

    return (
        <>
            <AboutHeroOne content={about.hero} user={isDemo ? undefined : content?.user}  isDemo={isDemo}/>
            <AboutPhilosophyOne content={about.philosophy}  isDemo={isDemo}/>
            <AboutBioStatsOne content={about.bioStats} user={isDemo ? undefined : content?.user}  isDemo={isDemo}/>
            <AboutTimelineOne content={about.timeline}  isDemo={isDemo}/>
            <AboutChambersOne content={about.chambers}  isDemo={isDemo}/>
            <AboutFinalCtaOne content={about.finalCta} slug={slug}  isDemo={isDemo}/>
        </>
    );
};

export default AboutPageOne;
