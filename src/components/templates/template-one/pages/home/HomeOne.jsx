import { templateOneDefaults } from "@/content/defaults/template-one";
import React from 'react';
import HeroOne from './Hero';
import TrustBadgesOne from './TrustBadges';
import AboutPreviewOne from './AboutPreview';
import ServicesOne from './Services';
import WhyChooseUsOne from './WhyChooseUs';
import AppointmentProcessOne from './AppointmentProcess';
import ClinicLocationsOne from './ClinicLocations';
import FinalCTAOne from './FinalCTA';

const HomeOne = ({ slug, content }) => {
    const home = content?.pages?.home ?? templateOneDefaults.pages.home;

    return (
        <>
            <HeroOne content={home.hero} slug={slug} />
            <TrustBadgesOne content={home.trustBadges} />
            <AboutPreviewOne content={home.aboutPreview} slug={slug} />
            <ServicesOne content={home.services} />
            <WhyChooseUsOne content={home.whyChooseUs} />
            <AppointmentProcessOne content={home.appointmentProcess} />
            <ClinicLocationsOne content={home.clinicLocations} />
            <FinalCTAOne content={home.finalCta} slug={slug} />
        </>
    );
};

export default HomeOne;
