import { getSystemSettings } from "@/services/admin.service";
import SettingsAdminClient from "@/components/admin/SettingsAdminClient";

export const metadata = {
    title: "Settings | BossDocx",
};

export default async function AdminSettingsPage() {
    const settings = await getSystemSettings();
    return <SettingsAdminClient initialSettings={settings} />;
}
