import { templateTwoDefaults } from "@/content/defaults/template-two";
import FooterTwo from './footer/FooterTwo';
import HeaderTwo from './header/HeaderTwo';

const TemplateTwo = ({ children, content, page, slug }) => {
    return (
        <div className="template-two bg-background text-on-background selection:bg-tertiary/20">
            <HeaderTwo content={content?.header ?? templateTwoDefaults.header} slug={slug} page={page} />
            <main>
                {children}
            </main>
            <FooterTwo content={content?.footer ?? templateTwoDefaults.footer} slug={slug} />
        </div>
    );
};

export default TemplateTwo;
