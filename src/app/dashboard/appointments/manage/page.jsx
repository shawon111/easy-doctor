import { AppointmentManagementPage } from "@/components/dashboard/appointments/AppointmentManagementPage";
import UpgradeNotice from "@/components/dashboard/UpgradeNotice";
import { requireUser } from "@/lib/requireUser";
import { redirect } from "next/navigation";

const isWebsiteActive = (expireDate) =>
    expireDate && new Date(expireDate) > new Date();

export default async function ManageAppointmentsPage() {
    const user = await requireUser();
    if (!user) redirect("/login");
    if (!isWebsiteActive(user.expiresAt)) {
        return <UpgradeNotice />;
    }

    return <AppointmentManagementPage />;
}
