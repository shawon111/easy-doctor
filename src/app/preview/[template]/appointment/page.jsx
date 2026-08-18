import React from 'react';
import TemplateRenderer from '../TemplateRenderer';

const AppointmentPagepreview = async ({ params }) => {
    const { template } = await params;
    return (
        <div>
            <TemplateRenderer page={"appointment"} slug={template} isDemo={true} template={template} />
        </div>
    );
};

export default AppointmentPagepreview;