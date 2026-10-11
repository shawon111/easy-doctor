import { AppSidebar } from '@/components/app-sidebar';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { TooltipProvider } from '@/components/ui/tooltip';
import { DashboardWebsiteActions } from '@/components/dashboard/DashboardWebsiteActions';
import { requireUser } from '@/lib/requireUser';
import { getWebsiteUrlForUser } from '@/services/website.service';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { Sparkles } from 'lucide-react';

export const metadata = {
    title: {
        default: "Overview | Docxio",
        template: "%s | Docxio",
    },
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
        <div className="dashboard-shell">
            <TooltipProvider>
                <SidebarProvider className="font-sans">
                    <AppSidebar user={sidebarUser} />
                    <SidebarInset className="min-w-0 bg-[#f4f7fc]">
                        <header
                            className="sticky top-0 z-30 flex h-[68px] shrink-0 items-center justify-between gap-2 border-b border-white/70 bg-white/80 px-2 shadow-[0_8px_28px_-24px_rgba(15,23,42,0.45)] backdrop-blur-xl transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 sm:px-4">
                            <div className="flex items-center gap-3 px-2">
                                <SidebarTrigger className="-ml-1" />
                                <span className="hidden h-5 w-px bg-slate-200 sm:block" />
                                <span className="hidden text-xs font-medium tracking-wide text-slate-500 sm:block">
                                    DOCTOR WORKSPACE
                                </span>
                            </div>
                            <DashboardWebsiteActions websiteUrl={websiteUrl} />
                        </header>
                        {currentUser.userLevel !== 'pro' && (
                            <div className="border-b border-blue-100 bg-gradient-to-r from-blue-50 via-white to-cyan-50 px-4 py-3 sm:px-6">
                                <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
                                    <div className="flex items-center gap-3">
                                        <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                                            <Sparkles className="size-4" aria-hidden="true" />
                                        </span>
                                        <p className="text-sm font-medium text-slate-700">
                                            <span className="mr-2 rounded-full bg-blue-100 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-800">
                                                Pro
                                            </span>
                                            Keep your website and premium features active.
                                        </p>
                                    </div>
                                    <Link
                                        href="/dashboard/billing"
                                        className="inline-flex min-h-9 items-center justify-center rounded-xl bg-slate-950 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-slate-950/10 transition-colors hover:bg-blue-950"
                                    >
                                        Explore Pro
                                    </Link>
                                </div>
                            </div>
                        )}
                        <div className="dashboard-canvas relative min-w-0 flex-1 bg-[radial-gradient(ellipse_at_top_right,_rgba(37,99,235,0.08),_transparent_38%),radial-gradient(ellipse_at_bottom_left,_rgba(6,182,212,0.06),_transparent_34%)]">
                            {children}
                        </div>
                    </SidebarInset>
                </SidebarProvider>
            </TooltipProvider>
        </div>
    );
};

export default DashboardLayout;
