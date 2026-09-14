import PrivacyPolicyContent from "@/components/templates/PrivacyPolicyContent";

const PrivacyPolicyPreview = async ({ params }) => {
    const { template } = await params;

    return (
        <div>
            <PrivacyPolicyContent name="Jonathan Doe" homeHref={`/preview/${template}`} />
        </div>
    );
};

export default PrivacyPolicyPreview;