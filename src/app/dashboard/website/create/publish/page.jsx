import PublishPage from "@/components/dashboard/create-website/publish";
import { redirect } from "next/navigation";
import React from "react";

const templates = ["template-one", "template-one-dark","template-two","template-two-dark", "template-three", "template-three-dark"];

const PublishSitePage = async ({ searchParams }) => {
    const { template, subdomain } = await searchParams;
    const isValidTemplate = templates.includes(template);
    // redirect to the previous page if the template or subdomain is not present in the query params
    if (template?.length === 0 || template === undefined) {
        redirect("/dashboard/website/create");
    } else if (subdomain?.length === 0 || subdomain === undefined) {
        redirect("/dashboard/website/create/subdomain");
    } 
    return (
            <div>
                <PublishPage />
            </div>
        );
};

export default PublishSitePage;