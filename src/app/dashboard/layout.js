import { AppSidebar } from '@/components/app-sidebar';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { TooltipProvider } from '@/components/ui/tooltip';
import { DashboardWebsiteActions } from '@/components/dashboard/DashboardWebsiteActions';
import { requireUser } from '@/lib/requireUser';
import { getWebsiteUrlForUser } from '@/services/website.service';
import { redirect } from 'next/navigation';

const DashboardLayout = async ({ children }) => {
    const currentUser = await requireUser();
    if (!currentUser || !currentUser._id || !currentUser.email || currentUser === null) {
        redirect('/login');
    }
    const websiteUrl = await getWebsiteUrlForUser(currentUser._id);

    return (
        <div>
            <TooltipProvider>
                <SidebarProvider className="font-sans">
                    <AppSidebar user={currentUser} />
                    <SidebarInset className="min-w-0">
                        <header
                            className="flex h-16 shrink-0 items-center justify-between gap-2 border-b border-slate-200 bg-white transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                            <div className="flex items-center gap-2 px-4">
                                <SidebarTrigger className="-ml-1" />
                            </div>
                            <DashboardWebsiteActions websiteUrl={websiteUrl} />
                        </header>
                        <div className="min-w-0 flex-1 bg-[#F7FAFD]">
                            {children}
                        </div>
                    </SidebarInset>
                </SidebarProvider>
            </TooltipProvider>
        </div>
    );
};

export default DashboardLayout;
