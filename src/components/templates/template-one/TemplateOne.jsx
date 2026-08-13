import { templateOneDefaults } from "@/content/defaults/template-one";
import FooterOne from './footer/Footer';
import HeaderOne from './header/Header';

const TemplateOne = ({ children, content, page, slug }) => {
    return (
        <div className="template-1 overflow-x-hidden">
            <HeaderOne content={content?.header ?? templateOneDefaults.header} slug={slug} page={page} />
            <main className="pt-20">
                {children}
            </main>
            <FooterOne content={content?.footer ?? templateOneDefaults.footer} slug={slug} />
        </div>
    );
};

export default TemplateOne;
