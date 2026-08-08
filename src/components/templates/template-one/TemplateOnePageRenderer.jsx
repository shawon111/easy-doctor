import React from 'react';
import HomeOne from './pages/home/HomeOne';
import ServicesPageOne from './pages/services/ServicesPageOne';
import AboutPageOne from './pages/about/AboutPageOne';
import AppointmentPageOne from './pages/appointment/AppointmentPageOne';
import TemplateOne from './TemplateOne';

const pages = {
    home: HomeOne,
    services: ServicesPageOne,
    about: AboutPageOne,
    appointment: AppointmentPageOne,
}

const TemplateOnePageRenderer = ({page}) => {

    const PageComponent = pages[page];

    return (
        <div>
            <TemplateOne>
                {PageComponent ? <PageComponent /> : <div>Page not found</div>}
            </TemplateOne>
        </div>
    );
};

export default TemplateOnePageRenderer;