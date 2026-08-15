import { templateOneDefaults } from "@/content/defaults/template-one";
import { resolveTemplateContent } from "@/lib/content/resolve-template-content";
import FooterOne from './footer/Footer';
import HeaderOne from './header/Header';

const TemplateOne = ({ children, content, page, slug, isDemo = false }) => {
    return (
        <div className="template-1 overflow-x-hidden">
            <HeaderOne content={resolveTemplateContent(content?.header, templateOneDefaults.header, isDemo)} slug={slug} page={page} isDemo={isDemo} />
            <main className="pt-20">
                {children}
            </main>
            <FooterOne content={resolveTemplateContent(content?.footer, templateOneDefaults.footer, isDemo)} slug={slug} isDemo={isDemo} />
        </div>
    );
};

export default TemplateOne;
