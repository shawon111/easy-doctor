import { templateOneDefaults } from "@/content/defaults/template-one";
import React from 'react';
import AppointmentHeroOne from './AppointmentHeroOne';
import AppointmentHowItWorksOne from './AppointmentHowItWorksOne';
import AppointmentScheduleOne from './AppointmentScheduleOne';
import AppointmentWhatsappCtaOne from './AppointmentWhatsappCtaOne';
import AppointmentFaqOne from './AppointmentFaqOne';

const AppointmentPageOne = ({ content }) => {
    const appointment = content?.pages?.appointment ?? templateOneDefaults.pages.appointment;

    return (
        <>
            <AppointmentHeroOne content={appointment.hero} />
            <AppointmentHowItWorksOne content={appointment.howItWorks} />
            <AppointmentScheduleOne content={appointment.schedule} />
            <AppointmentWhatsappCtaOne content={appointment.whatsappCta} />
            <AppointmentFaqOne content={appointment.faq} />
        </>
    );
};

export default AppointmentPageOne;
