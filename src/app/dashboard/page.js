import { OverviewPage } from '@/components/dashboard/overview';
import UpgradeNotice from '@/components/dashboard/UpgradeNotice';
import { requireUser } from '@/lib/requireUser';
import { isWebsiteActive } from '@/lib/subscription';
import React from 'react';

const DashboardPage = async () => {
    const user = await requireUser();
    const isActivePlan = isWebsiteActive(user?.expiresAt)
    if (!isActivePlan) {
        return <UpgradeNotice />
    }
    return (
        <>
            <OverviewPage />
        </>
    );
};

export default DashboardPage;