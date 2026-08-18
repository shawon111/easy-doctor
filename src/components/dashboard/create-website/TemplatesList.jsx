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
        description: "lorem ipsum dolor sit amet. lorem ipsum dolor sit amet",
        badge: "Standard",
        image: templateOneImg
    },
    {
        title: "Template One dark",
        identifier: "template-one-dark",
        description: "lorem ipsum dolor sit amet. lorem ipsum dolor sit amet",
        badge: "Popular",
        image: templateOnedarkImg
    },
    {
        title: "Template Two",
        identifier: "template-two",
        description: "lorem ipsum dolor sit amet. lorem ipsum dolor sit amet",
        badge: "Premium",
        image: templateTwoImg
    },
    {
        title: "Template Two Dark",
        identifier: "template-two-dark",
        description: "lorem ipsum dolor sit amet. lorem ipsum dolor sit amet",
        badge: "Luxury",
        image: templateTwodarkImg
    },
    {
        title: "Template Three",
        identifier: "template-three",
        description: "lorem ipsum dolor sit amet. lorem ipsum dolor sit amet",
        badge: "Best",
        image: templateThreeImg
    },
    {
        title: "Template Three dark",
        identifier: "template-three-dark",
        description: "lorem ipsum dolor sit amet. lorem ipsum dolor sit amet",
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