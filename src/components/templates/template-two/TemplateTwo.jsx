import { templateTwoDefaults } from "@/content/defaults/template-two";
import { resolveTemplateContent } from "@/lib/content/resolve-template-content";
import FooterTwo from './footer/FooterTwo';
import HeaderTwo from './header/HeaderTwo';

const TemplateTwo = ({ children, content, page, slug, isDemo = false }) => {
    return (
        <div className="template-two bg-background text-on-background selection:bg-tertiary/20">
            <HeaderTwo content={resolveTemplateContent(content?.header, templateTwoDefaults.header, isDemo)} slug={slug} page={page} isDemo={isDemo} />
            <main>
                {children}
            </main>
            <FooterTwo content={resolveTemplateContent(content?.footer, templateTwoDefaults.footer, isDemo)} slug={slug} isDemo={isDemo} />
        </div>
    );
};

export default TemplateTwo;
