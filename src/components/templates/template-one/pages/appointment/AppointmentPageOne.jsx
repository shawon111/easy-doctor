import { templateOneDefaults } from "@/content/defaults/template-one";
import { resolveTemplateContent } from "@/lib/content/resolve-template-content";
import React from 'react';
import AppointmentHeroOne from './AppointmentHeroOne';
import AppointmentHowItWorksOne from './AppointmentHowItWorksOne';
import AppointmentScheduleOne from './AppointmentScheduleOne';
import AppointmentWhatsappCtaOne from './AppointmentWhatsappCtaOne';
import AppointmentFaqOne from './AppointmentFaqOne';
import DoctorBookingPage from "@/components/appointment-booking/DoctorBookingPage";

const AppointmentPageOne = async({ content, isDemo = false }) => {
    const appointment = resolveTemplateContent(content?.pages?.appointment, templateOneDefaults.pages.appointment, isDemo);
    return (
        <>
            <AppointmentHeroOne content={appointment.hero} isDemo={isDemo}/>
            <AppointmentHowItWorksOne content={appointment.howItWorks} isDemo={isDemo}/>
            <AppointmentScheduleOne content={appointment.schedule} clinics={content?.clinics ?? []}  isDemo={isDemo}/>
            <DoctorBookingPage />
            <AppointmentWhatsappCtaOne content={appointment.whatsappCta} clinics={content?.clinics ?? []} isDemo={isDemo}/>
            <AppointmentFaqOne content={appointment.faq} isDemo={isDemo}/>
        </>
    );
};

export default AppointmentPageOne;
