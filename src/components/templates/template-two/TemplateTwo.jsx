import React from 'react';
import FooterTwo from './footer/FooterTwo';
import HeaderTwo from './header/HeaderTwo';

const TemplateTwo = ({ children }) => {
    return (
        <div className="template-two dstwo-root text-[#1a1c1e] selection:bg-[#D4AF37]/20">
            <HeaderTwo />
            <main>
                {children}
            </main>
            <FooterTwo />
        </div>
    );
};

export default TemplateTwo;