import { AppSidebar } from '@/components/app-sidebar';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { TooltipProvider } from '@/components/ui/tooltip';
import { DashboardWebsiteActions } from '@/components/dashboard/DashboardWebsiteActions';
import { requireUser } from '@/lib/requireUser';
import { getWebsiteUrlForUser } from '@/services/website.service';
import { redirect } from 'next/navigation';
import React from 'react';

const DashboardLayout = async ({ children }) => {
    const currentUser = await requireUser();
    if (!currentUser || !currentUser._id || !currentUser.email || currentUser === null) {
        redirect('/login');
    }
    const websiteUrl = await getWebsiteUrlForUser(currentUser._id);

    return (
        <div>
            <TooltipProvider>
                <SidebarProvider>
                    <AppSidebar user={currentUser} />
                    <SidebarInset>
                        <header
                            className="flex h-16 shrink-0 items-center justify-between gap-2 border-b border-[#64748B] bg-white transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                            <div className="flex items-center gap-2 px-4">
                                <SidebarTrigger className="-ml-1" />
                            </div>
                            <DashboardWebsiteActions websiteUrl={websiteUrl} />
                        </header>
                        <div className='bg-[#F7FAFD] sm:p-4'>
                            {children}
                        </div>
                    </SidebarInset>
                </SidebarProvider>
            </TooltipProvider>
        </div>
    );
};

export default DashboardLayout;
