import { getAdminStats } from "@/services/admin.service";
import Link from "next/link";
import {
    Users,
    Globe,
    CreditCard,
    Zap,
    TrendingUp,
    AlertCircle,
    CheckCircle2,
    Clock,
} from "lucide-react";

export const metadata = {
    title: "Overview | BossDocx",
};

export default async function AdminOverviewPage() {
    const stats = await getAdminStats();

    return (
        <div className="space-y-8">
            {/* Page Header */}
            <div>
                <h1 className="text-2xl font-extrabold tracking-tight text-white">
                    Platform Control Center
                </h1>
                <p className="text-sm text-slate-400 mt-1">
                    Real-time metrics, system health, and high-level SaaS indicators.
                </p>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Users Stat */}
                <div className="rounded-2xl bg-slate-950/80 border border-slate-800/80 p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                            Total Doctors
                        </span>
                        <div className="size-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                            <Users className="size-4" />
                        </div>
                    </div>
                    <div className="mt-4 flex items-baseline gap-2">
                        <span className="text-3xl font-extrabold text-white">
                            {stats.users.total}
                        </span>
                        <span className="text-xs text-emerald-400 font-medium">
                            {stats.users.pro} Pro
                        </span>
                    </div>
                    <div className="mt-2 text-xs text-slate-500 flex justify-between">
                        <span>Free Tier: {stats.users.free}</span>
                        <span>Pro Ratio: {stats.users.total ? Math.round((stats.users.pro / stats.users.total) * 100) : 0}%</span>
                    </div>
                </div>

                {/* Websites Stat */}
                <div className="rounded-2xl bg-slate-950/80 border border-slate-800/80 p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                            Doctor Websites
                        </span>
                        <div className="size-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                            <Globe className="size-4" />
                        </div>
                    </div>
                    <div className="mt-4 flex items-baseline gap-2">
                        <span className="text-3xl font-extrabold text-white">
                            {stats.websites.total}
                        </span>
                        <span className="text-xs text-emerald-400 font-medium">
                            {stats.websites.ready} Ready
                        </span>
                    </div>
                    <div className="mt-2 text-xs text-slate-500 flex justify-between">
                        <span className="text-amber-400">{stats.websites.generating} Generating</span>
                        <span className="text-rose-400">{stats.websites.failed} Failed</span>
                    </div>
                </div>

                {/* Revenue Stat */}
                <div className="rounded-2xl bg-slate-950/80 border border-slate-800/80 p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                            Completed Revenue
                        </span>
                        <div className="size-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                            <CreditCard className="size-4" />
                        </div>
                    </div>
                    <div className="mt-4 flex items-baseline gap-2">
                        <span className="text-3xl font-extrabold text-white">
                            ৳{stats.payments.revenue.toLocaleString()}
                        </span>
                        <span className="text-xs text-slate-400 font-medium">BDT</span>
                    </div>
                    <div className="mt-2 text-xs text-slate-500">
                        From {stats.payments.completed} successful transactions
                    </div>
                </div>

                {/* Cache Quick Flush Card */}
                <div className="rounded-2xl bg-gradient-to-br from-indigo-950/50 to-purple-950/50 border border-indigo-800/60 p-5 shadow-sm flex flex-col justify-between">
                    <div>
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold text-indigo-300 uppercase tracking-wider">
                                Cache Manager
                            </span>
                            <Zap className="size-4 text-indigo-400" />
                        </div>
                        <p className="mt-2 text-xs text-slate-300">
                            Instant purging tools for doctor subdomains & global HTML caches.
                        </p>
                    </div>
                    <div className="mt-4">
                        <Link
                            href="/bossdocx/cache"
                            className="inline-flex w-full items-center justify-center rounded-xl bg-indigo-600 px-3 py-2 text-xs font-bold text-white shadow-md hover:bg-indigo-500 transition-colors"
                        >
                            Open Cache Controls →
                        </Link>
                    </div>
                </div>
            </div>

            {/* Recent Tables Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Users */}
                <div className="rounded-2xl bg-slate-950/80 border border-slate-800/80 p-5 shadow-sm">
                    <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                        <h2 className="text-sm font-bold text-white flex items-center gap-2">
                            <Users className="size-4 text-indigo-400" />
                            Recently Joined Doctors
                        </h2>
                        <Link
                            href="/bossdocx/users"
                            className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                        >
                            View all →
                        </Link>
                    </div>

                    <div className="mt-4 divide-y divide-slate-800/60">
                        {stats.recentUsers.map((u) => (
                            <div key={u._id.toString()} className="py-3 flex items-center justify-between">
                                <div className="min-w-0">
                                    <p className="text-xs font-semibold text-white truncate">{u.name}</p>
                                    <p className="text-[11px] text-slate-400 truncate">{u.email}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span
                                        className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                                            u.userLevel === "pro"
                                                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
                                                : "bg-slate-800 text-slate-400"
                                        }`}
                                    >
                                        {u.userLevel}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Websites */}
                <div className="rounded-2xl bg-slate-950/80 border border-slate-800/80 p-5 shadow-sm">
                    <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                        <h2 className="text-sm font-bold text-white flex items-center gap-2">
                            <Globe className="size-4 text-emerald-400" />
                            Recent Websites
                        </h2>
                        <Link
                            href="/bossdocx/websites"
                            className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                        >
                            View all →
                        </Link>
                    </div>

                    <div className="mt-4 divide-y divide-slate-800/60">
                        {stats.recentWebsites.map((w) => (
                            <div key={w._id.toString()} className="py-3 flex items-center justify-between">
                                <div className="min-w-0">
                                    <p className="text-xs font-semibold text-white truncate font-mono">
                                        {w.subdomain}.docxio.com
                                    </p>
                                    <p className="text-[11px] text-slate-400 truncate">
                                        Doctor: {w.userId?.name || "Unknown"}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span
                                        className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                                            w.status === "ready"
                                                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
                                                : w.status === "generating"
                                                ? "bg-amber-500/10 text-amber-400 border border-amber-500/30 animate-pulse"
                                                : "bg-rose-500/10 text-rose-400 border border-rose-500/30"
                                        }`}
                                    >
                                        {w.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
