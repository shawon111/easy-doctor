import templateOneImg from "@/assets/templates/template-one-home.png"
import templateOnedarkImg from "@/assets/templates/template-one-dark-home.png"
import templateTwoImg from "@/assets/templates/template-two-home.png"
import templateTwodarkImg from "@/assets/templates/template-two-dark-home.png"
import templateThreeImg from "@/assets/templates/template-three-home.png"
import templateThreeDarkImg from "@/assets/templates/template-three-dark-home.png"
import TemplateListItem from "./TemplateListItem"

const templates = [
    {
        title: "Template One",
        identifier: "template-one",
        description: "A bright, clean layout with clear sections for your profile, expertise, and practice.",
        badge: "Standard",
        image: templateOneImg
    },
    {
        title: "Template One Dark",
        identifier: "template-one-dark",
        description: "A refined dark palette that gives your professional profile a distinctive presence.",
        badge: "Popular",
        image: templateOnedarkImg
    },
    {
        title: "Template Two",
        identifier: "template-two",
        description: "A balanced, modern design built to make key doctor and contact details easy to find.",
        badge: "Premium",
        image: templateTwoImg
    },
    {
        title: "Template Two Dark",
        identifier: "template-two-dark",
        description: "A confident dark design with a premium feel and strong visual hierarchy.",
        badge: "Luxury",
        image: templateTwodarkImg
    },
    {
        title: "Template Three",
        identifier: "template-three",
        description: "A warm, approachable design that brings your biography and services forward.",
        badge: "Best",
        image: templateThreeImg
    },
    {
        title: "Template Three Dark",
        identifier: "template-three-dark",
        description: "A sleek dark variation with crisp contrast and a contemporary look.",
        badge: "Modern",
        image: templateThreeDarkImg
    },
]

const TemplatesList = () => {
    return (
        <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {
                    templates.map((item) => {
                        return <TemplateListItem key={item.identifier} template={item} />
                    })
                }
            </div>
        </div>
    );
};

export default TemplatesList;