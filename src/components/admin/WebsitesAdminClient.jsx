"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import {
    Globe,
    Search,
    ExternalLink,
    RefreshCw,
    Trash2,
    Zap,
    AlertTriangle,
    CheckCircle2,
} from "lucide-react";

export default function WebsitesAdminClient({ initialData }) {
    const [websites, setWebsites] = useState(initialData?.websites || []);
    const [pagination, setPagination] = useState(initialData?.pagination || {});
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("");
    const [templateFilter, setTemplateFilter] = useState("");
    const [loading, setLoading] = useState(false);
    const [actionLoading, setActionLoading] = useState(null);

    const fetchWebsites = async (page = 1) => {
        setLoading(true);
        try {
            const params = new URLSearchParams({
                page,
                limit: 20,
                search,
                status: statusFilter,
                template: templateFilter,
            });
            const res = await fetch(`/api/admin/websites?${params.toString()}`);
            const data = await res.json();
            if (data.success) {
                setWebsites(data.data.websites);
                setPagination(data.data.pagination);
            } else {
                toast.error(data.message);
            }
        } catch {
            toast.error("Failed to load websites");
        } finally {
            setLoading(false);
        }
    };

    const handleAction = async (action, websiteId) => {
        setActionLoading(`${action}-${websiteId}`);
        try {
            const res = await fetch("/api/admin/websites", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ action, websiteId }),
            });
            const data = await res.json();
            if (data.success) {
                toast.success(data.message);
                fetchWebsites(pagination.page);
            } else {
                toast.error(data.message);
            }
        } catch {
            toast.error("Action failed");
        } finally {
            setActionLoading(null);
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-extrabold text-white">Doctor Websites</h1>
                    <p className="text-sm text-slate-400 mt-1">
                        Monitor generated sites, regenerate failed AI jobs, and purge website caches.
                    </p>
                </div>
                <div className="text-xs text-slate-400 font-mono">
                    Total: {pagination.total || 0} websites
                </div>
            </div>

            {/* Filter controls */}
            <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                    <Search className="absolute left-3.5 top-3 size-4 text-slate-500" />
                    <input
                        type="text"
                        placeholder="Search by subdomain or custom domain..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && fetchWebsites(1)}
                        className="w-full rounded-xl bg-slate-950 border border-slate-800 py-2.5 pl-10 pr-4 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                    />
                </div>
                <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="rounded-xl bg-slate-950 border border-slate-800 px-3 py-2.5 text-xs text-slate-300 focus:outline-none focus:border-indigo-500"
                >
                    <option value="">All Statuses</option>
                    <option value="ready">Ready</option>
                    <option value="generating">Generating</option>
                    <option value="failed">Failed</option>
                </select>
                <select
                    value={templateFilter}
                    onChange={(e) => setTemplateFilter(e.target.value)}
                    className="rounded-xl bg-slate-950 border border-slate-800 px-3 py-2.5 text-xs text-slate-300 focus:outline-none focus:border-indigo-500"
                >
                    <option value="">All Templates</option>
                    <option value="template-one">Template One</option>
                    <option value="template-two">Template Two</option>
                    <option value="template-three">Template Three</option>
                </select>
                <button
                    onClick={() => fetchWebsites(1)}
                    className="rounded-xl bg-indigo-600 px-4 py-2 text-xs font-semibold text-white hover:bg-indigo-500 transition-colors"
                >
                    Filter
                </button>
            </div>

            {/* Websites Table */}
            <div className="rounded-2xl bg-slate-950/80 border border-slate-800/80 overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-slate-800 bg-slate-900/40 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                                <th className="py-3 px-4">Website</th>
                                <th className="py-3 px-4">Doctor</th>
                                <th className="py-3 px-4">Template</th>
                                <th className="py-3 px-4">Status</th>
                                <th className="py-3 px-4">Created</th>
                                <th className="py-3 px-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/60 text-xs text-slate-300">
                            {websites.map((w) => {
                                const liveUrl = w.domain
                                    ? `https://${w.domain}`
                                    : `/doctor/${w.subdomain}`;
                                return (
                                    <tr key={w._id.toString()} className="hover:bg-slate-900/30 transition-colors">
                                        <td className="py-3.5 px-4">
                                            <div className="flex items-center gap-2">
                                                <span className="font-semibold text-white font-mono">
                                                    {w.subdomain}
                                                </span>
                                                <a
                                                    href={liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-slate-400 hover:text-indigo-400"
                                                    title="Open live site"
                                                >
                                                    <ExternalLink className="size-3.5" />
                                                </a>
                                            </div>
                                            {w.domain && (
                                                <div className="text-[11px] text-emerald-400 font-mono">
                                                    Custom: {w.domain} ({w.domainStatus})
                                                </div>
                                            )}
                                        </td>
                                        <td className="py-3.5 px-4">
                                            <div className="font-medium text-white">{w.userId?.name || "Unknown"}</div>
                                            <div className="text-[11px] text-slate-400">{w.userId?.email}</div>
                                        </td>
                                        <td className="py-3.5 px-4">
                                            <span className="text-slate-300">{w.templateType}</span>
                                            <div className="text-[10px] text-slate-500 uppercase">{w.variant}</div>
                                        </td>
                                        <td className="py-3.5 px-4">
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
                                            {w.generationError && (
                                                <div className="text-[10px] text-rose-400 max-w-xs truncate mt-0.5" title={w.generationError}>
                                                    {w.generationError}
                                                </div>
                                            )}
                                        </td>
                                        <td className="py-3.5 px-4 font-mono text-[11px] text-slate-400">
                                            {new Date(w.createdAt).toLocaleDateString()}
                                        </td>
                                        <td className="py-3.5 px-4 text-right space-x-2">
                                            {/* Purge Cache Button */}
                                            <button
                                                disabled={actionLoading !== null}
                                                onClick={() => handleAction("purge_cache", w._id.toString())}
                                                className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors disabled:opacity-50"
                                                title="Purge Next.js HTML Cache"
                                            >
                                                {actionLoading === `purge_cache-${w._id}` ? "Purging..." : "Purge Cache"}
                                            </button>

                                            {/* Regenerate AI Content */}
                                            <button
                                                disabled={actionLoading !== null}
                                                onClick={() => handleAction("regenerate_ai", w._id.toString())}
                                                className="px-2.5 py-1 rounded-lg bg-indigo-600/80 hover:bg-indigo-600 text-white text-xs font-semibold transition-colors disabled:opacity-50"
                                                title="Trigger Gemini AI Generation"
                                            >
                                                {actionLoading === `regenerate_ai-${w._id}` ? "Generating..." : "Regen AI"}
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                            {websites.length === 0 && (
                                <tr>
                                    <td colSpan={6} className="py-8 text-center text-slate-500">
                                        No websites found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                {pagination.totalPages > 1 && (
                    <div className="p-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                        <span>
                            Page {pagination.page} of {pagination.totalPages}
                        </span>
                        <div className="flex gap-2">
                            <button
                                disabled={pagination.page <= 1}
                                onClick={() => fetchWebsites(pagination.page - 1)}
                                className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:bg-slate-800 disabled:opacity-40"
                            >
                                Previous
                            </button>
                            <button
                                disabled={pagination.page >= pagination.totalPages}
                                onClick={() => fetchWebsites(pagination.page + 1)}
                                className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:bg-slate-800 disabled:opacity-40"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
