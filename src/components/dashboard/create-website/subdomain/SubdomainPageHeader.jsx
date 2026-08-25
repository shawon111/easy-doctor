import React from "react";

const SubdomainPageHeader = () => {
    return (
        <div className="flex flex-col gap-2">
            <h1 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                Choose your website address
            </h1>
            <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
                This is the URL where patients will find your practice online. You can change
                this later, or connect a custom domain.
            </p>
        </div>
    );
};

export default SubdomainPageHeader;