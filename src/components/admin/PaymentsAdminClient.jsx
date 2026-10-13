"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import {
    CreditCard,
    Search,
    CheckCircle2,
    XCircle,
    Clock,
    AlertCircle,
    ArrowUpRight,
} from "lucide-react";

export default function PaymentsAdminClient({ initialData }) {
    const [payments, setPayments] = useState(initialData?.payments || []);
    const [pagination, setPagination] = useState(initialData?.pagination || {});
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("");
    const [loading, setLoading] = useState(false);
    const [actionLoading, setActionLoading] = useState(null);

    const fetchPayments = async (page = 1) => {
        setLoading(true);
        try {
            const params = new URLSearchParams({
                page,
                limit: 20,
                search,
                status: statusFilter,
            });
            const res = await fetch(`/api/admin/payments?${params.toString()}`);
            const data = await res.json();
            if (data.success) {
                setPayments(data.data.payments);
                setPagination(data.data.pagination);
            } else {
                toast.error(data.message);
            }
        } catch {
            toast.error("Failed to load payments");
        } finally {
            setLoading(false);
        }
    };

    const handleUpdateStatus = async (paymentId, status) => {
        if (!confirm(`Are you sure you want to mark this transaction as ${status}? This will update the doctor's subscription.`)) {
            return;
        }

        setActionLoading(paymentId);
        try {
            const res = await fetch("/api/admin/payments", {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ paymentId, status }),
            });
            const data = await res.json();
            if (data.success) {
                toast.success(data.message);
                fetchPayments(pagination.page);
            } else {
                toast.error(data.message);
            }
        } catch {
            toast.error("Failed to update status");
        } finally {
            setActionLoading(null);
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-extrabold text-white">Payments & Billing</h1>
                    <p className="text-sm text-slate-400 mt-1">
                        Track UddoktaPay transactions, verify missing payments, and resolve billing issues.
                    </p>
                </div>
                <div className="text-xs text-slate-400 font-mono">
                    Total: {pagination.total || 0} transactions
                </div>
            </div>

            {/* Filter controls */}
            <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                    <Search className="absolute left-3.5 top-3 size-4 text-slate-500" />
                    <input
                        type="text"
                        placeholder="Search by Payment ID or Transaction ID..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && fetchPayments(1)}
                        className="w-full rounded-xl bg-slate-950 border border-slate-800 py-2.5 pl-10 pr-4 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                    />
                </div>
                <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="rounded-xl bg-slate-950 border border-slate-800 px-3 py-2.5 text-xs text-slate-300 focus:outline-none focus:border-indigo-500"
                >
                    <option value="">All Statuses</option>
                    <option value="completed">Completed</option>
                    <option value="pending">Pending</option>
                    <option value="initiated">Initiated</option>
                    <option value="failed">Failed</option>
                </select>
                <button
                    onClick={() => fetchPayments(1)}
                    className="rounded-xl bg-indigo-600 px-4 py-2 text-xs font-semibold text-white hover:bg-indigo-500 transition-colors"
                >
                    Filter
                </button>
            </div>

            {/* Payments Table */}
            <div className="rounded-2xl bg-slate-950/80 border border-slate-800/80 overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-slate-800 bg-slate-900/40 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                                <th className="py-3 px-4">Transaction Details</th>
                                <th className="py-3 px-4">Doctor</th>
                                <th className="py-3 px-4">Plan & Amount</th>
                                <th className="py-3 px-4">Status</th>
                                <th className="py-3 px-4">Date</th>
                                <th className="py-3 px-4 text-right">Manual Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/60 text-xs text-slate-300">
                            {payments.map((p) => (
                                <tr key={p._id.toString()} className="hover:bg-slate-900/30 transition-colors">
                                    <td className="py-3.5 px-4 font-mono">
                                        <div className="font-semibold text-white text-[11px] truncate max-w-xs">
                                            ID: {p.paymentId}
                                        </div>
                                        {p.transactionId && (
                                            <div className="text-[10px] text-slate-400">
                                                Txn: {p.transactionId}
                                            </div>
                                        )}
                                        <div className="text-[10px] text-slate-500 uppercase">
                                            via {p.paymentMethod} ({p.provider})
                                        </div>
                                    </td>
                                    <td className="py-3.5 px-4">
                                        <div className="font-medium text-white">{p.userId?.name || "Unknown"}</div>
                                        <div className="text-[11px] text-slate-400">{p.userId?.email}</div>
                                    </td>
                                    <td className="py-3.5 px-4">
                                        <div className="font-bold text-white">৳{p.amount} {p.currency}</div>
                                        <div className="text-[10px] text-slate-400 uppercase tracking-wider">
                                            {p.plan}
                                        </div>
                                    </td>
                                    <td className="py-3.5 px-4">
                                        <span
                                            className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                                                p.status === "completed"
                                                    ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
                                                    : p.status === "pending" || p.status === "initiated"
                                                    ? "bg-amber-500/10 text-amber-400 border border-amber-500/30"
                                                    : "bg-rose-500/10 text-rose-400 border border-rose-500/30"
                                            }`}
                                        >
                                            {p.status}
                                        </span>
                                    </td>
                                    <td className="py-3.5 px-4 font-mono text-[11px] text-slate-400">
                                        {new Date(p.createdAt).toLocaleString()}
                                    </td>
                                    <td className="py-3.5 px-4 text-right">
                                        {p.status !== "completed" ? (
                                            <button
                                                disabled={actionLoading === p._id.toString()}
                                                onClick={() => handleUpdateStatus(p._id.toString(), "completed")}
                                                className="px-2.5 py-1 rounded-lg bg-emerald-600/80 hover:bg-emerald-600 text-white text-xs font-semibold transition-colors disabled:opacity-50"
                                                title="Manually verify & grant subscription"
                                            >
                                                {actionLoading === p._id.toString() ? "Saving..." : "Mark Paid"}
                                            </button>
                                        ) : (
                                            <span className="text-[11px] text-slate-500 italic">Verified</span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                            {payments.length === 0 && (
                                <tr>
                                    <td colSpan={6} className="py-8 text-center text-slate-500">
                                        No payment records found.
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
                                onClick={() => fetchPayments(pagination.page - 1)}
                                className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:bg-slate-800 disabled:opacity-40"
                            >
                                Previous
                            </button>
                            <button
                                disabled={pagination.page >= pagination.totalPages}
                                onClick={() => fetchPayments(pagination.page + 1)}
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
