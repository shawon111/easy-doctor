import TemplateOneDarkPageRenderer from "@/components/templates/template-one-dark/TemplateOneDarkPageRenderer";
import TemplateOnePageRenderer from "@/components/templates/template-one/TemplateOnePageRenderer";
import TemplateThreeDarkPageRenderer from "@/components/templates/template-three-dark/TemplateThreeDarkPageRenderer";
import TemplateThreePageRenderer from "@/components/templates/template-three/TemplateThreePageRenderer";
import TemplateTwoDarkPageRenderer from "@/components/templates/template-two-dark/TemplateTwoDarkPageRenderer";
import TemplateTwoPageRenderer from "@/components/templates/template-two/TemplateTwoPageRenderer";

const TemplateRenderer = ({ template, ...props }) => {
    switch (template) {
        case "template-one":
            return <TemplateOnePageRenderer {...props} />;

        case "template-one-dark":
            return <TemplateOneDarkPageRenderer {...props} />;

        case "template-two":
            return <TemplateTwoPageRenderer {...props} />;

        case "template-two-dark":
            return <TemplateTwoDarkPageRenderer {...props} />;

        case "template-three":
            return <TemplateThreePageRenderer {...props} />;

        case "template-three-dark":
            return <TemplateThreeDarkPageRenderer {...props} />;

        default:
            return <div>Template not found</div>;
    }
};

export default TemplateRenderer;