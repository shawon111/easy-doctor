import HeaderOne from './header/Header';
import FooterOne from './footer/Footer';

const TemplateOne = ({ children }) => {
    return (
        <div className="template-1 overflow-x-hidden">
            <HeaderOne />
            <main className="pt-20">
                {children}
            </main>
            <FooterOne />
        </div>
    );
};

export default TemplateOne;