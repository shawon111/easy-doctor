
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
        <div className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl space-y-8">

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
        </div>
    );
}