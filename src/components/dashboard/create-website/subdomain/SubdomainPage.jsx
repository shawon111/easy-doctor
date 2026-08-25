"use client";

import React, { useState } from "react";
import SubdomainPageHeader from "./SubdomainPageHeader";
import SubdomainInputCard from "./SubdomainInputCard";
import SubdomainInfoCard from "./SubdomainInfoCard";
import BrowserPreviewCard from "./BrowserPreviewCard";

const SubdomainPage = () => {
    const [subdomain, setSubdomain] = useState("dr-ahmed");

    return (
        <div className="mx-auto w-full max-w-4xl flex-1 space-y-8 p-4 pb-12 sm:p-6 sm:pb-16 md:p-8 md:pb-20">
            <SubdomainPageHeader />

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                <SubdomainInputCard
                    className="lg:col-span-2"
                    value={subdomain}
                    onChange={setSubdomain}
                />

                <div className="flex flex-col gap-6 lg:col-span-1">
                    <SubdomainInfoCard />
                    <BrowserPreviewCard subdomain={subdomain} />
                </div>
            </div>
        </div>
    );
};

export default SubdomainPage;