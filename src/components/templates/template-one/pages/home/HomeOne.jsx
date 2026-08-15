import { templateOneDefaults } from "@/content/defaults/template-one";
import { resolveTemplateContent } from "@/lib/content/resolve-template-content";
import React from 'react';
import HeroOne from './Hero';
import TrustBadgesOne from './TrustBadges';
import AboutPreviewOne from './AboutPreview';
import ServicesOne from './Services';
import WhyChooseUsOne from './WhyChooseUs';
import AppointmentProcessOne from './AppointmentProcess';
import ClinicLocationsOne from './ClinicLocations';
import FinalCTAOne from './FinalCTA';

const HomeOne = ({ slug, content, isDemo = false }) => {
    const home = resolveTemplateContent(content?.pages?.home, templateOneDefaults.pages.home, isDemo);

    return (
        <>
            <HeroOne content={home.hero} slug={slug}  isDemo={isDemo}/>
            <TrustBadgesOne content={home.trustBadges}  isDemo={isDemo}/>
            <AboutPreviewOne content={home.aboutPreview} slug={slug}  isDemo={isDemo}/>
            <ServicesOne content={home.services}  isDemo={isDemo}/>
            <WhyChooseUsOne content={home.whyChooseUs}  isDemo={isDemo}/>
            <AppointmentProcessOne content={home.appointmentProcess}  isDemo={isDemo}/>
            <ClinicLocationsOne content={home.clinicLocations}  isDemo={isDemo}/>
            <FinalCTAOne content={home.finalCta} slug={slug}  isDemo={isDemo}/>
        </>
    );
};

export default HomeOne;
