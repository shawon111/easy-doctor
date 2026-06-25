import { requireUser } from '@/lib/requireUser';
import { redirect } from 'next/navigation';
import React from 'react';

const DashboardLayout = async ({ children }) => {
    const currentUser = await requireUser();
    if(!currentUser || !currentUser._id|| !currentUser.email || currentUser===null) {
        redirect('/login');
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default DashboardLayout;