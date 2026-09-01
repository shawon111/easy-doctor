import React from "react";

const PublishPageHeader = () => {
    return (
        <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Review &amp; Publish
            </h1>
            <p className="max-w-xl text-sm text-muted-foreground sm:text-base">
                You are one step away from launching your new professional digital presence.
            </p>
        </div>
    );
};

export default PublishPageHeader;