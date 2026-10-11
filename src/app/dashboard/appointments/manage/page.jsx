import { AppointmentManagementPage } from "@/components/dashboard/appointments/AppointmentManagementPage";
import UpgradeNotice from "@/components/dashboard/UpgradeNotice";
import { requireUser } from "@/lib/requireUser";
import { isWebsiteActive } from "@/lib/subscription";
import { redirect } from "next/navigation";

export const metadata = { title: "Manage Appointments" };

export default async function ManageAppointmentsPage() {
    const user = await requireUser();
    if (!user) redirect("/login");
    if (!isWebsiteActive(user.expiresAt)) {
        return <UpgradeNotice />;
    }

    return <AppointmentManagementPage />;
}
