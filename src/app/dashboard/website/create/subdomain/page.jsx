import SubdomainPage from '@/components/dashboard/create-website/subdomain';
import { requireUser } from '@/lib/requireUser';
import { redirect } from 'next/navigation';
import React from 'react';

const templates = ["template-one", "template-one-dark", "template-two", "template-two-dark", "template-three", "template-three-dark"];

const SubdomainSelectPage = async ({ searchParams }) => {

    // check the user and act
    const user = await requireUser();
    if (user?.websiteCreated) {
        redirect("/dashboard/website/create");
    }

    const { template } = await searchParams;

    // redirect to the previous page if the template is not present in the query params
    const isValidTemplate = templates.includes(template);
    if (!isValidTemplate) {
        redirect("/dashboard/website/create");
    }
    if (template?.length === 0 || template === undefined) {
        redirect("/dashboard/website/create");
    }
    return (
        <div>
            <SubdomainPage />
        </div>
    );
};

export default SubdomainSelectPage;