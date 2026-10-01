import {
    DoctorProfileCard,
} from "@/components/dashboard/my-website/DoctorProfileCard";
import { MyWebsiteHeader } from "@/components/dashboard/my-website/MyWebsiteHeader";
import { WebsiteSummaryCard } from "@/components/dashboard/my-website/WebsiteSummaryCard";
import { requireUser } from "@/lib/requireUser";
import { getMyWebsiteDetails } from "@/services/website.service";

export default async function MyWebsitePage() {
    const user = await requireUser();
    const { doctor, website } = await getMyWebsiteDetails(user._id);

    return (
        <main className="mx-auto w-full max-w-5xl space-y-5 p-4 pb-12 sm:p-6 md:p-8">
            <MyWebsiteHeader />
            <WebsiteSummaryCard website={website} expiresAt={doctor.expiresAt} />
            <DoctorProfileCard doctor={doctor} />
        </main>
    );
}
