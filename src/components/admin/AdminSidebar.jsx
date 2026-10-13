"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Users,
    Globe,
    CreditCard,
    Zap,
    Settings,
    LogOut,
    ShieldAlert,
} from "lucide-react";

const navigationItems = [
    { name: "Overview", href: "/bossdocx", icon: LayoutDashboard },
    { name: "Doctors & Users", href: "/bossdocx/users", icon: Users },
    { name: "Websites", href: "/bossdocx/websites", icon: Globe },
    { name: "Payments & Revenue", href: "/bossdocx/payments", icon: CreditCard },
    { name: "Cache & Performance", href: "/bossdocx/cache", icon: Zap },
    { name: "Platform Settings", href: "/bossdocx/settings", icon: Settings },
];

export default function AdminSidebar({ admin }) {
    const pathname = usePathname();

    return (
        <aside className="w-full md:w-64 bg-slate-950 border-r border-slate-800 flex flex-col shrink-0">
            {/* Brand Logo / Header */}
            <div className="h-16 flex items-center gap-3 px-6 border-b border-slate-800">
                <div className="size-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
                    <ShieldAlert className="size-5" />
                </div>
                <div>
                    <h1 className="font-extrabold text-sm tracking-tight text-white">BossDocx</h1>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">
                        Super Admin
                    </p>
                </div>
            </div>

            {/* Navigation links */}
            <nav className="flex-1 px-3 py-5 space-y-1">
                {navigationItems.map((item) => {
                    const Icon = item.icon;
                    const isActive =
                        item.href === "/bossdocx"
                            ? pathname === "/bossdocx"
                            : pathname.startsWith(item.href);

                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                                isActive
                                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
                            }`}
                        >
                            <Icon className={`size-4 ${isActive ? "text-white" : "text-slate-500"}`} />
                            {item.name}
                        </Link>
                    );
                })}
            </nav>

            {/* User Profile Card */}
            <div className="p-4 border-t border-slate-800/80 bg-slate-950/60">
                <div className="flex items-center gap-3 p-2 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="size-8 rounded-lg bg-indigo-950 text-indigo-400 border border-indigo-800 flex items-center justify-center font-bold text-xs uppercase">
                        {admin.name?.charAt(0) || "A"}
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-slate-200 truncate">{admin.name}</p>
                        <p className="text-[10px] text-slate-500 truncate">{admin.email}</p>
                    </div>
                </div>
            </div>
        </aside>
    );
}
