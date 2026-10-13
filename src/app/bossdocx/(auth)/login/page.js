"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { ShieldAlert, KeyRound, Mail, Lock, ArrowRight } from "lucide-react";

export default function BossdocxLoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [adminSecret, setAdminSecret] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("/api/admin/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password, adminSecret }),
            });

            const data = await res.json();

            if (data.success) {
                toast.success("Admin identity verified. Welcome!");
                router.push("/bossdocx");
                router.refresh();
            } else {
                toast.error(data.message || "Authentication failed");
            }
        } catch {
            toast.error("Failed to connect to authentication service");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-md">
            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-8 shadow-2xl shadow-black/80">
                {/* Header Badge */}
                <div className="flex flex-col items-center text-center">
                    <div className="size-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-xl shadow-indigo-500/30">
                        <ShieldAlert className="size-6" />
                    </div>
                    <h1 className="mt-4 text-xl font-extrabold tracking-tight text-white">
                        BossDocx Command Center
                    </h1>
                    <p className="mt-1 text-xs text-slate-400">
                        Restricted Super Admin Access Portal
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                    <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                            <Mail className="size-3.5 text-slate-500" />
                            Admin Email
                        </label>
                        <input
                            type="email"
                            required
                            placeholder="admin@docxio.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2.5 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                            <Lock className="size-3.5 text-slate-500" />
                            Password
                        </label>
                        <input
                            type="password"
                            required
                            placeholder="••••••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2.5 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                            <KeyRound className="size-3.5 text-amber-500" />
                            <span>Admin Secret Key</span>
                            <span className="text-[10px] text-amber-500/80 font-mono">(ADMIN_SECRET)</span>
                        </label>
                        <input
                            type="password"
                            required
                            placeholder="Enter system master secret"
                            value={adminSecret}
                            onChange={(e) => setAdminSecret(e.target.value)}
                            className="w-full rounded-xl bg-slate-950 border border-slate-800 px-3.5 py-2.5 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-500 font-mono"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="mt-6 w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-indigo-600/30 hover:from-indigo-500 hover:to-purple-500 transition-all disabled:opacity-50"
                    >
                        {loading ? (
                            "Authenticating..."
                        ) : (
                            <>
                                <span>Verify & Access Dashboard</span>
                                <ArrowRight className="size-3.5" />
                            </>
                        )}
                    </button>
                </form>

                <div className="mt-6 pt-4 border-t border-slate-800/80 text-center">
                    <p className="text-[11px] text-slate-500">
                        General users & doctors must use the{" "}
                        <a href="/login" className="text-indigo-400 hover:underline">
                            Doctor Login
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
