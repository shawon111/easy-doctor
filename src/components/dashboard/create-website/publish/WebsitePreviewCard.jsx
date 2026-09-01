"use client";

import TemplateListItem from "../TemplateListItem";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import templateOneImg from "@/assets/templates/template-one-home.png"
import templateOnedarkImg from "@/assets/templates/template-one-dark-home.png"
import templateTwoImg from "@/assets/templates/template-two-home.png"
import templateTwodarkImg from "@/assets/templates/template-two-dark-home.png"
import templateThreeImg from "@/assets/templates/template-three-home.png"
import templateThreeDarkImg from "@/assets/templates/template-three-dark-home.png"
import { useSearchParams } from "next/navigation";

const templates = [
    {
        title: "Template One",
        identifier: "template-one",
        description: "lorem ipsum dolor sit amet. lorem ipsum dolor sit amet",
        badge: "Standard",
        image: templateOneImg
    },
    {
        title: "Template One Dark",
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
        title: "Template Three Dark",
        identifier: "template-three-dark",
        description: "lorem ipsum dolor sit amet. lorem ipsum dolor sit amet",
        badge: "Modern",
        image: templateThreeDarkImg
    },
]

const WebsitePreviewCard = () => {
    const searchparams = useSearchParams();
    const template = searchparams.get("template");
    // find the selected template
    const selectedTemplate = templates.find((data)=> data.identifier === template.toLowerCase()) || templates[0];
    return (
        <Card className="p-0">
            <CardHeader className="flex-row items-center justify-between gap-3 px-6 pt-6">
                <CardTitle className="text-lg">Website Preview</CardTitle>
                <Badge
                    variant="secondary"
                    className="bg-secondary-container text-on-secondary-container hover:bg-secondary-container">
                    Selected Template
                </Badge>
            </CardHeader>
            <CardContent className="p-4 md:p-6">
                <TemplateListItem hideChoose={true} template={selectedTemplate} />
            </CardContent>
        </Card>
    );
};

export default WebsitePreviewCard;