import React from 'react';
import TemplateRenderer from '../TemplateRenderer';

const AboutPreview = async({ params }) => {
    const {template} = await params;
    return (
        <div>
            <TemplateRenderer page={"about"} slug={template} isDemo={true} template={template} />
        </div>
    );
};

export default AboutPreview;