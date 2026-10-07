import { AppointmentsPage } from '@/components/dashboard/appointments';
import UpgradeNotice from '@/components/dashboard/UpgradeNotice';
import { requireUser } from '@/lib/requireUser';
import { isWebsiteActive } from '@/lib/subscription';
import React from 'react';
import { redirect } from 'next/navigation';

const Appointments = async () => {
    const user = await requireUser();
    if (!user) redirect('/login');
    const isActivePlan = isWebsiteActive(user?.expiresAt)
    if (!isActivePlan) {
        return <UpgradeNotice />
    }
    return (
        <>
            <AppointmentsPage
                chambers={(user.clinicAddress || []).map((chamber) => ({
                    id: chamber._id.toString(),
                    name: chamber.chamberName,
                    address: chamber.address,
                }))}
            />
        </>
    );
};

export default Appointments;