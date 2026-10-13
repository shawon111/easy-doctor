import { AppSidebar } from '@/components/app-sidebar';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { TooltipProvider } from '@/components/ui/tooltip';
import { DashboardWebsiteActions } from '@/components/dashboard/DashboardWebsiteActions';
import { requireUser } from '@/lib/requireUser';
import { getWebsiteUrlForUser } from '@/services/website.service';
import { getSystemSettings } from '@/services/admin.service';
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
    const [websiteUrl, systemSettings] = await Promise.all([
        getWebsiteUrlForUser(currentUser._id),
        getSystemSettings().catch(() => null),
    ]);
    const sidebarUser = {
        _id: currentUser._id,
        name: currentUser.name,
        email: currentUser.email,
        userLevel: currentUser.userLevel,
        profilePicture: currentUser.profilePicture,
        expiresAt: currentUser.expiresAt,
    };

    return (
        <div className="dashboard-shell min-h-screen bg-slate-950 text-slate-100 flex antialiased">
            <TooltipProvider>
                <SidebarProvider className="font-sans">
                    <AppSidebar user={sidebarUser} />
                    <SidebarInset className="min-w-0 bg-slate-900 flex-1 flex flex-col">
                        <header
                            className="sticky top-0 z-30 flex h-16 shrink-0 items-center justify-between gap-3 border-b border-slate-800 bg-slate-950/80 px-4 backdrop-blur-md">
                            <div className="flex items-center gap-3">
                                <SidebarTrigger className="text-slate-400 hover:text-white hover:bg-slate-800" />
                                <span className="hidden h-5 w-px bg-slate-800 sm:block" />
                                <div className="flex items-center gap-2">
                                    <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                                    <span className="hidden text-[11px] font-bold uppercase tracking-widest text-slate-400 sm:block">
                                        Doctor Command Workspace
                                    </span>
                                </div>
                            </div>
                            <DashboardWebsiteActions websiteUrl={websiteUrl} />
                        </header>

                        {systemSettings?.noticeBanner?.enabled && systemSettings?.noticeBanner?.message && (
                            <div className="border-b border-amber-500/30 bg-amber-500/10 px-4 py-2.5 text-xs font-medium text-amber-300 flex items-center justify-center gap-2">
                                <span className="material-symbols-outlined text-[16px] text-amber-400">info</span>
                                <span>{systemSettings.noticeBanner.message}</span>
                            </div>
                        )}

                        {currentUser.userLevel !== 'pro' && (
                            <div className="border-b border-indigo-900/40 bg-gradient-to-r from-indigo-950/80 via-slate-900 to-purple-950/50 px-4 py-3 sm:px-6">
                                <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
                                    <div className="flex items-center gap-3">
                                        <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shadow-sm shadow-indigo-500/10">
                                            <Sparkles className="size-4" aria-hidden="true" />
                                        </span>
                                        <p className="text-xs font-medium text-slate-300">
                                            <span className="mr-2 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                                                Pro Tier
                                            </span>
                                            Unlock custom domains, Google Search console sync, and automated patient booking.
                                        </p>
                                    </div>
                                    <Link
                                        href="/dashboard/billing"
                                        className="inline-flex h-8 items-center justify-center rounded-xl bg-indigo-600 hover:bg-indigo-500 px-3.5 text-xs font-bold text-white shadow-md shadow-indigo-600/30 transition-all"
                                    >
                                        Upgrade to Pro →
                                    </Link>
                                </div>
                            </div>
                        )}

                        <div className="dashboard-canvas relative min-w-0 flex-1 bg-slate-900 p-4 sm:p-6 lg:p-8">
                            {children}
                        </div>
                    </SidebarInset>
                </SidebarProvider>
            </TooltipProvider>
        </div>
    );
};

export default DashboardLayout;
