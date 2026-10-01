import { SettingsPage } from "@/components/dashboard/settings";
import UpgradeNotice from "@/components/dashboard/UpgradeNotice";
import { requireUser } from "@/lib/requireUser";

// check website activeness
const isWebsiteActive = (expireDate) => {
    return expireDate && new Date(expireDate) > new Date()
}

export default async function Settings() {
  const user = await requireUser();
  const isActivePlan = isWebsiteActive(user?.expiresAt);
  if (!isActivePlan) {
    return <UpgradeNotice />;
  }

  return <SettingsPage />;
}
