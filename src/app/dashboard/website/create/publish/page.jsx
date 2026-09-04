import PublishPage from "@/components/dashboard/create-website/publish";
import { requireUser } from "@/lib/requireUser";
import { redirect } from "next/navigation";
import React from "react";

const templates = ["template-one", "template-one-dark", "template-two", "template-two-dark", "template-three", "template-three-dark"];

const PublishSitePage = async ({ searchParams }) => {

    // check the user and act
    const user = await requireUser();
    if(user?.websiteCreated) {
        redirect("/dashboard/website/create");
    }

    const { template, subdomain } = await searchParams;

    // check if the template is valid
    const isValidTemplate = templates.includes(template);
    if (!isValidTemplate) {
        redirect("/dashboard/website/create");
    }
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