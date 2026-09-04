import PreviewClient from "./PreviewClient";

const HomePreview = async ({ params }) => {
    const { template } = await params;
    return (
        <div>
            <PreviewClient template={template} />
        </div>
    );
};

export default HomePreview;