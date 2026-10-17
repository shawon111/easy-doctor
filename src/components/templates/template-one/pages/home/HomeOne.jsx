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
import FeesContactOne from './FeesContactOne';
import FinalCTAOne from './FinalCTA';

const HomeOne = ({ slug, content, isDemo = false }) => {
    const home = resolveTemplateContent(content?.pages?.home, templateOneDefaults.pages.home, isDemo);
    const fees = isDemo ? templateOneDefaults.fees : (content?.fees || templateOneDefaults.fees);
    const phone = isDemo ? (templateOneDefaults.contact?.phone || "+880 1888-876512") : (content?.phone || "");

    return (
        <>
            <HeroOne content={home.hero} slug={slug} isDemo={isDemo} fees={fees} phone={phone} />
            <TrustBadgesOne content={home.trustBadges} isDemo={isDemo} />
            <FeesContactOne content={home.feesContact} fees={fees} phone={phone} clinics={content?.clinics} isDemo={isDemo} />
            <AboutPreviewOne content={home.aboutPreview} slug={slug} isDemo={isDemo} />
            <ServicesOne content={home.services} isDemo={isDemo} />
            <WhyChooseUsOne content={home.whyChooseUs} isDemo={isDemo} />
            <AppointmentProcessOne content={home.appointmentProcess} isDemo={isDemo} />
            <ClinicLocationsOne content={home.clinicLocations} isDemo={isDemo} />
            <FinalCTAOne content={home.finalCta} slug={slug} isDemo={isDemo} />
        </>
    );
};

export default HomeOne;
