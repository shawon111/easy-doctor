import { getAdminPayments } from "@/services/admin.service";
import PaymentsAdminClient from "@/components/admin/PaymentsAdminClient";

export const metadata = {
    title: "Payments | BossDocx",
};

export default async function AdminPaymentsPage() {
    const initialData = await getAdminPayments({ page: 1, limit: 20 });
    return <PaymentsAdminClient initialData={initialData} />;
}
