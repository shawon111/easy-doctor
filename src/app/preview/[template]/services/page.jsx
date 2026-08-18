import React from 'react';
import TemplateRenderer from '../TemplateRenderer';

const ServicesPreview = async({params}) => {
    const { template } = await params;
    return (
        <div>
            <TemplateRenderer page={"services"} slug={template} isDemo={true} template={template} />
        </div>
    );
};

export default ServicesPreview;