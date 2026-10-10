import { AppSidebar } from '@/components/app-sidebar';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { TooltipProvider } from '@/components/ui/tooltip';
import { DashboardWebsiteActions } from '@/components/dashboard/DashboardWebsiteActions';
import { requireUser } from '@/lib/requireUser';
import { getWebsiteUrlForUser } from '@/services/website.service';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export const metadata = {
    title: "Dashboard",
    robots: { index: false, follow: false },
};

const DashboardLayout = async ({ children }) => {
    const currentUser = await requireUser();
    if (!currentUser || !currentUser._id || !currentUser.email || currentUser === null) {
        redirect('/login');
    }
    const websiteUrl = await getWebsiteUrlForUser(currentUser._id);
    const sidebarUser = {
        _id: currentUser._id,
        name: currentUser.name,
        email: currentUser.email,
        userLevel: currentUser.userLevel,
        profilePicture: currentUser.profilePicture,
        expiresAt: currentUser.expiresAt,
    };

    return (
        <div>
            <TooltipProvider>
                <SidebarProvider className="font-sans">
                    <AppSidebar user={sidebarUser} />
                    <SidebarInset className="min-w-0">
                        <header
                            className="flex h-16 shrink-0 items-center justify-between gap-2 border-b border-slate-200 bg-white transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                            <div className="flex items-center gap-2 px-4">
                                <SidebarTrigger className="-ml-1" />
                            </div>
                            <DashboardWebsiteActions websiteUrl={websiteUrl} />
                        </header>
                        {currentUser.userLevel !== 'pro' && (
                            <div className="border-b border-amber-200 bg-amber-50 px-4 py-3 sm:px-6">
                                <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
                                    <p className="text-sm font-medium text-amber-950">
                                        Upgrade to Pro to keep your website and premium features active.
                                    </p>
                                    <Link
                                        href="/dashboard/billing"
                                        className="inline-flex min-h-9 items-center justify-center rounded-lg bg-amber-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-amber-800"
                                    >
                                        View billing plans
                                    </Link>
                                </div>
                            </div>
                        )}
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
