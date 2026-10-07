import UpgradeNotice from "@/components/dashboard/UpgradeNotice";
import { VerificationPage } from "@/components/dashboard/verification";
import { requireUser } from "@/lib/requireUser";

export default async function Verification() {
    const user = await requireUser();
    if (!user?.expiresAt || new Date(user.expiresAt) <= new Date()) {
        return <UpgradeNotice />;
    }

    return <VerificationPage />;
}
