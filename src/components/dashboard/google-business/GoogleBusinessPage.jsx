
import GoogleBusinessHeader from "./GoogleBusinessHeader";
import SetupStatus from "./SetupStatus";
import WebsiteUrlCard from "./WebsiteUrlCard";
import SetupSteps from "./SetupSteps";
import SetupConfirmation from "./SetupConfirmation";
import GoogleBusinessNote from "./GoogleBusinessNote";
import { requireUser } from "@/lib/requireUser";
import Website from "@/models/website.model";
import { connectDB } from "@/config/database";
import { markGoogleBusinessComplete } from "@/services/google.service";

const BASE_DOMAIN = process.env.NEXT_PUBLIC_BASE_DOMAIN;


export default async function GoogleBusinessPage() {
    const user = await requireUser();

    await connectDB();

    const website = await Website.findOne({
        userId: user._id,
    })
        .select("subdomain")
        .lean();

    const isCompleted = user.googleBusinessSetup === true;

    const websiteUrl = website?.subdomain
        ? `https://${website.subdomain}.${BASE_DOMAIN}`
        : null;

    return (
        <div className="mx-auto w-full max-w-360 space-y-6 p-4 pb-12 sm:space-y-8 sm:p-6 sm:pb-16 md:p-8 md:pb-20">
            <GoogleBusinessHeader />

            <SetupStatus
                isCompleted={isCompleted}
            />

            <WebsiteUrlCard
                websiteUrl={websiteUrl}
            />

            <SetupSteps />

            {!isCompleted && (
                <SetupConfirmation
                    websiteUrl={websiteUrl}
                    action={markGoogleBusinessComplete}
                />
            )}

            <GoogleBusinessNote />
        </div>
    );
}