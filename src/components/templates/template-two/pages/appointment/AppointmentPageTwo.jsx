import React from 'react';
import AppointmentHeroTwo from './AppointmentHeroTwo';
import AppointmentSchedulesTwo from './AppointmentSchedulesTwo';
import AppointmentWhatsappTwo from './AppointmentWhatsappTwo';
import AppointmentFaqTwo from './AppointmentFaqTwo';
import AppointmentCtaTwo from './AppointmentCtaTwo';

const AppointmentPageTwo = () => {
    return (
        <div className="max-w-container-max mx-auto overflow-hidden">
            <AppointmentHeroTwo />
            <AppointmentSchedulesTwo />
            <AppointmentWhatsappTwo />
            <AppointmentFaqTwo />
            <AppointmentCtaTwo />
        </div>
    );
};

export default AppointmentPageTwo;