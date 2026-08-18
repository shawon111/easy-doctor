import React from 'react';

const CreateWebsitePageHeader = () => {
    return (
        <div className="flex flex-col gap-2">
            <h1 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                Create Your Professional Website
            </h1>
            <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
                Choose a design that represents you.
            </p>
        </div>
    );
};

export default CreateWebsitePageHeader;