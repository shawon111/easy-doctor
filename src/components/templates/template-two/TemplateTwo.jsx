import React from 'react';
import FooterTwo from './footer/FooterTwo';
import HeaderTwo from './header/HeaderTwo';

const TemplateTwo = ({ children }) => {
    return (
        <div className="template-two bg-background text-on-background selection:bg-tertiary/20">
            <HeaderTwo />
            <main>
                {children}
            </main>
            <FooterTwo />
        </div>
    );
};

export default TemplateTwo;