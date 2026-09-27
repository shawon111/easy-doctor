import { GooglePresencePage } from '@/components/dashboard/google-presence';
import UpgradeNotice from '@/components/dashboard/UpgradeNotice';
import { requireUser } from '@/lib/requireUser';
import React from 'react';

// check website activeness
const isWebsiteActive = (expireDate) => {
    return expireDate && new Date(expireDate) > new Date()
}

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