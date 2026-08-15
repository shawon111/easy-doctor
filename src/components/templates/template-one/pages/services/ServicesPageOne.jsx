import { templateOneDefaults } from "@/content/defaults/template-one";
import { resolveTemplateContent } from "@/lib/content/resolve-template-content";
import React from 'react';
import ServicesHeroOne from './ServicesHeroOne';
import ServicesTreatmentsGridOne from './ServicesTreatmentsGridOne';
import ServicesBenefitsOne from './ServicesBenefitsOne';
import ServicesFaqOne from './ServicesFaqOne';
import ServicesCtaBannerOne from './ServicesCtaBannerOne';

const ServicesPageOne = ({ slug, content, isDemo = false }) => {
    const services = resolveTemplateContent(content?.pages?.services, templateOneDefaults.pages.services, isDemo);

    return (
        <>
            <ServicesHeroOne content={services.hero}  isDemo={isDemo}/>
            <ServicesTreatmentsGridOne content={services.treatmentsGrid}  isDemo={isDemo}/>
            <ServicesBenefitsOne content={services.benefits}  isDemo={isDemo}/>
            <ServicesFaqOne content={services.faq}  isDemo={isDemo}/>
            <ServicesCtaBannerOne content={services.ctaBanner} slug={slug}  isDemo={isDemo}/>
        </>
    );
};

export default ServicesPageOne;
