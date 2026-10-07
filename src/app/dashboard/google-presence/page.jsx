import { GooglePresencePage } from '@/components/dashboard/google-presence';
import UpgradeNotice from '@/components/dashboard/UpgradeNotice';
import { requireUser } from '@/lib/requireUser';
import { isWebsiteActive } from '@/lib/subscription';
import React from 'react';

const GooglePresence = async() => {
    const user = await requireUser();
        const isActivePlan = isWebsiteActive(user?.expiresAt)
        if (!isActivePlan) {
            return <UpgradeNotice />
        }
    return (
        <>
            <GooglePresencePage />
        </>
    );
};

export default GooglePresence;