import { getAdminWebsites } from "@/services/admin.service";
import WebsitesAdminClient from "@/components/admin/WebsitesAdminClient";

export const metadata = {
    title: "Websites | BossDocx",
};

export default async function AdminWebsitesPage() {
    const initialData = await getAdminWebsites({ page: 1, limit: 20 });
    return <WebsitesAdminClient initialData={initialData} />;
}
