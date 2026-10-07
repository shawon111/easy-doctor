import UpgradeNotice from "@/components/dashboard/UpgradeNotice";
import { VerificationPage } from "@/components/dashboard/verification";
import { requireUser } from "@/lib/requireUser";
import { isWebsiteActive } from "@/lib/subscription";

export default async function Verification() {
    const user = await requireUser();
    if (!isWebsiteActive(user?.expiresAt)) {
        return <UpgradeNotice />;
    }

    return <VerificationPage />;
}
