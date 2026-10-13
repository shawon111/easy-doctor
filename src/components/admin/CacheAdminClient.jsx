"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import {
    Zap,
    RotateCcw,
    Globe,
    Layers,
    Server,
    CheckCircle2,
    AlertCircle,
} from "lucide-react";

export default function CacheAdminClient() {
    const [subdomain, setSubdomain] = useState("");
    const [loading, setLoading] = useState(false);
    const [lastAction, setLastAction] = useState(null);

    const handlePurge = async (target, customSubdomain = null) => {
        setLoading(true);
        try {
            const body = { target };
            if (target === "single") {
                body.subdomain = (customSubdomain || subdomain).trim().toLowerCase();
                if (!body.subdomain) {
                    toast.error("Please enter a subdomain");
                    setLoading(false);
                    return;
                }
            }

            const res = await fetch("/api/admin/cache", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });
            const data = await res.json();
            if (data.success) {
                toast.success(data.message);
                setLastAction({
                    time: new Date().toLocaleTimeString(),
                    message: data.message,
                    target,
                });
                if (target === "single") setSubdomain("");
            } else {
                toast.error(data.message);
            }
        } catch {
            toast.error("Purge request failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-extrabold text-white">Cache & Performance Center</h1>
                <p className="text-sm text-slate-400 mt-1">
                    Manage Next.js Data Cache tags (`unstable_cache`) and on-demand ISR paths for doctor websites.
                </p>
            </div>

            {/* Status Feedback */}
            {lastAction && (
                <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 flex items-center justify-between text-xs text-emerald-400">
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="size-4 shrink-0" />
                        <span>{lastAction.message}</span>
                    </div>
                    <span className="font-mono text-emerald-500/80">at {lastAction.time}</span>
                </div>
            )}

            {/* Cache Actions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Global Tag Invalidation */}
                <div className="rounded-2xl bg-slate-950/80 border border-slate-800/80 p-6 flex flex-col justify-between shadow-sm">
                    <div>
                        <div className="flex items-center gap-3">
                            <div className="size-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                                <Zap className="size-5" />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-white">
                                    Purge All Doctor Websites
                                </h3>
                                <p className="text-[11px] text-slate-400 font-mono mt-0.5">
                                    revalidateTag(&quot;doctor-websites&quot;)
                                </p>
                            </div>
                        </div>

                        <p className="mt-4 text-xs text-slate-300 leading-relaxed">
                            Immediately busts the Next.js cache for <strong>every doctor website</strong> on the platform simultaneously. The next visitor to any doctor homepage or subpage will receive freshly resolved content directly from MongoDB.
                        </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-800/80">
                        <button
                            disabled={loading}
                            onClick={() => handlePurge("all_doctors")}
                            className="w-full flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-indigo-500 transition-colors disabled:opacity-50 shadow-md shadow-indigo-600/20"
                        >
                            <RotateCcw className={`size-3.5 ${loading ? "animate-spin" : ""}`} />
                            {loading ? "Flushing..." : "Flush Global Doctor Cache Now"}
                        </button>
                    </div>
                </div>

                {/* Target Single Website */}
                <div className="rounded-2xl bg-slate-950/80 border border-slate-800/80 p-6 flex flex-col justify-between shadow-sm">
                    <div>
                        <div className="flex items-center gap-3">
                            <div className="size-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                                <Globe className="size-5" />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-white">
                                    Purge Specific Subdomain
                                </h3>
                                <p className="text-[11px] text-slate-400 font-mono mt-0.5">
                                    revalidateTag(&quot;website-content:subdomain&quot;)
                                </p>
                            </div>
                        </div>

                        <p className="mt-4 text-xs text-slate-300 leading-relaxed">
                            Target a single doctor website by subdomain (e.g. <code>dr-smith</code>). Flushes all routes including <code>/</code>, <code>/about</code>, <code>/services</code>, and <code>/appointment</code>.
                        </p>

                        <div className="mt-4">
                            <input
                                type="text"
                                placeholder="e.g. dr-shawon or dr-smith"
                                value={subdomain}
                                onChange={(e) => setSubdomain(e.target.value)}
                                className="w-full rounded-xl bg-slate-900 border border-slate-800 py-2.5 px-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 font-mono"
                            />
                        </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-800/80">
                        <button
                            disabled={loading || !subdomain.trim()}
                            onClick={() => handlePurge("single")}
                            className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-emerald-500 transition-colors disabled:opacity-50 shadow-md shadow-emerald-600/20"
                        >
                            <RotateCcw className={`size-3.5 ${loading ? "animate-spin" : ""}`} />
                            {loading ? "Purging..." : "Purge Subdomain Cache"}
                        </button>
                    </div>
                </div>
            </div>

            {/* Architecture Explanation */}
            <div className="rounded-2xl bg-slate-950/40 border border-slate-800/60 p-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                    <Server className="size-4 text-slate-500" />
                    How Caching Works in Docxio
                </h4>
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-400 leading-relaxed">
                    <div className="rounded-xl bg-slate-900/60 p-3 border border-slate-800/40">
                        <strong className="text-slate-200 block mb-1">1. Generating Guard</strong>
                        Sites with status <code>generating</code> bypass cache completely so empty templates are never cached.
                    </div>
                    <div className="rounded-xl bg-slate-900/60 p-3 border border-slate-800/40">
                        <strong className="text-slate-200 block mb-1">2. Two-Tier Tags</strong>
                        Every ready site is tagged with both <code>website-content:slug</code> and global <code>doctor-websites</code>.
                    </div>
                    <div className="rounded-xl bg-slate-900/60 p-3 border border-slate-800/40">
                        <strong className="text-slate-200 block mb-1">3. Automated Revalidation</strong>
                        AI completion and doctor content updates auto-invalidate tags via Next.js cache.
                    </div>
                </div>
            </div>
        </div>
    );
}
