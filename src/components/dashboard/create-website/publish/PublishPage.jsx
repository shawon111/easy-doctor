import React from "react";
import PublishPageHeader from "./PublishPageHeader";
import WebsitePreviewCard from "./WebsitePreviewCard";
import ConfigurationSummaryCard from "./ConfigurationSummaryCard";
import LaunchGuidanceCard from "./LaunchGuidanceCard";
import PublishActionCard from "./PublishActionCard";

const PublishPage = () => {
    return (
        <div className="mx-auto w-full max-w-6xl flex-1 space-y-8 p-4 pb-12 sm:p-6 sm:pb-16 md:p-8 md:pb-20">
            <PublishPageHeader />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
                <div className="md:col-span-3">
                    <WebsitePreviewCard />
                </div>

                <div className="flex flex-col gap-6 md:col-span-2">
                    <LaunchGuidanceCard />
                    <PublishActionCard />
                    <ConfigurationSummaryCard />
                </div>
            </div>
        </div>
    );
};

export default PublishPage;