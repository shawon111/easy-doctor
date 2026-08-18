import TemplateRenderer from "./TemplateRenderer";

const HomePreview = async ({ params }) => {
    const { template } = await params;
    return (
        <div>
            <TemplateRenderer page={"home"} slug={template} isDemo={true} template={template} />
        </div>
    );
};

export default HomePreview;