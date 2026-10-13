import { getAdminUsers } from "@/services/admin.service";
import UsersAdminClient from "@/components/admin/UsersAdminClient";

export const metadata = {
    title: "Users & Doctors | BossDocx",
};

export default async function AdminUsersPage() {
    const initialData = await getAdminUsers({ page: 1, limit: 20 });
    return <UsersAdminClient initialData={initialData} />;
}
