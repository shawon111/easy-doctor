import { requireAdmin } from "@/lib/requireAdmin";
import { redirect } from "next/navigation";
import Link from "next/link";
import AdminSidebar from "@/components/admin/AdminSidebar";

export const metadata = {
    title: "BossDocx | Super Admin",
    robots: { index: false, follow: false },
};

export default async function AdminLayout({ children }) {
    const admin = await requireAdmin();

    if (!admin) {
        // Redirect unauthorized visitors to the separate admin login page
        redirect("/bossdocx/login");
    }

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col md:flex-row antialiased">
            {/* Admin Sidebar */}
            <AdminSidebar admin={admin} />

            {/* Main content view */}
            <div className="flex-1 flex flex-col min-w-0 min-h-screen bg-slate-900 overflow-y-auto">
                <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-slate-800 bg-slate-950/80 px-6 backdrop-blur-md">
                    <div className="flex items-center gap-3">
                        <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                            Docxio Command Center
                        </span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link
                            href="/dashboard"
                            className="text-xs font-medium text-slate-400 hover:text-white transition-colors bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/60"
                        >
                            ← Back to Doctor App
                        </Link>
                        <div className="flex items-center gap-2">
                            <span className="size-7 rounded-full bg-indigo-600 flex items-center justify-center text-xs font-bold text-white uppercase">
                                {admin.name?.charAt(0) || "A"}
                            </span>
                            <span className="text-xs font-medium text-slate-300 hidden sm:inline">
                                {admin.name}
                            </span>
                        </div>
                    </div>
                </header>

                <main className="flex-1 p-6 sm:p-8 max-w-7xl w-full mx-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}
