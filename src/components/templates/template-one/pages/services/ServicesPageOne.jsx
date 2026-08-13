import { templateOneDefaults } from "@/content/defaults/template-one";
import React from 'react';
import ServicesHeroOne from './ServicesHeroOne';
import ServicesTreatmentsGridOne from './ServicesTreatmentsGridOne';
import ServicesBenefitsOne from './ServicesBenefitsOne';
import ServicesFaqOne from './ServicesFaqOne';
import ServicesCtaBannerOne from './ServicesCtaBannerOne';

const ServicesPageOne = ({ slug, content }) => {
    const services = content?.pages?.services ?? templateOneDefaults.pages.services;

    return (
        <>
            <ServicesHeroOne content={services.hero} />
            <ServicesTreatmentsGridOne content={services.treatmentsGrid} />
            <ServicesBenefitsOne content={services.benefits} />
            <ServicesFaqOne content={services.faq} />
            <ServicesCtaBannerOne content={services.ctaBanner} slug={slug} />
        </>
    );
};

export default ServicesPageOne;
