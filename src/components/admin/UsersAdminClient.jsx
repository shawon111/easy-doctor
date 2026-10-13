"use client";

import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import {
    Users,
    Search,
    Shield,
    Calendar,
    Crown,
    Filter,
    Check,
    X,
} from "lucide-react";

export default function UsersAdminClient({ initialData }) {
    const [users, setUsers] = useState(initialData?.users || []);
    const [pagination, setPagination] = useState(initialData?.pagination || {});
    const [search, setSearch] = useState("");
    const [levelFilter, setLevelFilter] = useState("");
    const [roleFilter, setRoleFilter] = useState("");
    const [loading, setLoading] = useState(false);
    const [editingUser, setEditingUser] = useState(null);

    const fetchUsers = async (page = 1) => {
        setLoading(true);
        try {
            const params = new URLSearchParams({
                page,
                limit: 20,
                search,
                level: levelFilter,
                role: roleFilter,
            });
            const res = await fetch(`/api/admin/users?${params.toString()}`);
            const data = await res.json();
            if (data.success) {
                setUsers(data.data.users);
                setPagination(data.data.pagination);
            } else {
                toast.error(data.message);
            }
        } catch {
            toast.error("Failed to fetch users");
        } finally {
            setLoading(false);
        }
    };

    const handleUpdateUser = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("/api/admin/users", {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(editingUser),
            });
            const data = await res.json();
            if (data.success) {
                toast.success("User updated!");
                setEditingUser(null);
                fetchUsers(pagination.page);
            } else {
                toast.error(data.message);
            }
        } catch {
            toast.error("Failed to update user");
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-extrabold text-white">Doctors & Users</h1>
                    <p className="text-sm text-slate-400 mt-1">
                        Manage doctor accounts, subscription access, pro levels, and admin roles.
                    </p>
                </div>
                <div className="text-xs text-slate-400 font-mono">
                    Total: {pagination.total || 0} registered
                </div>
            </div>

            {/* Filter and Search Bar */}
            <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                    <Search className="absolute left-3.5 top-3 size-4 text-slate-500" />
                    <input
                        type="text"
                        placeholder="Search by name, email, phone, specialization..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && fetchUsers(1)}
                        className="w-full rounded-xl bg-slate-950 border border-slate-800 py-2.5 pl-10 pr-4 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                    />
                </div>
                <select
                    value={levelFilter}
                    onChange={(e) => setLevelFilter(e.target.value)}
                    className="rounded-xl bg-slate-950 border border-slate-800 px-3 py-2.5 text-xs text-slate-300 focus:outline-none focus:border-indigo-500"
                >
                    <option value="">All Tiers</option>
                    <option value="free">Free</option>
                    <option value="pro">Pro</option>
                </select>
                <select
                    value={roleFilter}
                    onChange={(e) => setRoleFilter(e.target.value)}
                    className="rounded-xl bg-slate-950 border border-slate-800 px-3 py-2.5 text-xs text-slate-300 focus:outline-none focus:border-indigo-500"
                >
                    <option value="">All Roles</option>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                </select>
                <button
                    onClick={() => fetchUsers(1)}
                    className="rounded-xl bg-indigo-600 px-4 py-2 text-xs font-semibold text-white hover:bg-indigo-500 transition-colors"
                >
                    Filter
                </button>
            </div>

            {/* Users Table */}
            <div className="rounded-2xl bg-slate-950/80 border border-slate-800/80 overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-slate-800 bg-slate-900/40 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                                <th className="py-3 px-4">Doctor</th>
                                <th className="py-3 px-4">Specialization</th>
                                <th className="py-3 px-4">Tier</th>
                                <th className="py-3 px-4">Role</th>
                                <th className="py-3 px-4">Expires At</th>
                                <th className="py-3 px-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/60 text-xs text-slate-300">
                            {users.map((u) => {
                                const isExpired = u.expiresAt && new Date(u.expiresAt) < new Date();
                                return (
                                    <tr key={u._id.toString()} className="hover:bg-slate-900/30 transition-colors">
                                        <td className="py-3.5 px-4">
                                            <div className="font-semibold text-white">{u.name}</div>
                                            <div className="text-[11px] text-slate-400">{u.email}</div>
                                            {u.phone && <div className="text-[10px] text-slate-500">{u.phone}</div>}
                                        </td>
                                        <td className="py-3.5 px-4">
                                            <span className="text-slate-300">{u.specialization || "General"}</span>
                                        </td>
                                        <td className="py-3.5 px-4">
                                            <span
                                                className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                                                    u.userLevel === "pro"
                                                        ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
                                                        : "bg-slate-800 text-slate-400"
                                                }`}
                                            >
                                                {u.userLevel}
                                            </span>
                                        </td>
                                        <td className="py-3.5 px-4">
                                            <span
                                                className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                                                    u.role === "admin"
                                                        ? "bg-purple-500/10 text-purple-400 border border-purple-500/30"
                                                        : "bg-slate-800 text-slate-400"
                                                }`}
                                            >
                                                {u.role || "user"}
                                            </span>
                                        </td>
                                        <td className="py-3.5 px-4">
                                            {u.expiresAt ? (
                                                <div className="flex items-center gap-1.5">
                                                    <span
                                                        className={`size-1.5 rounded-full ${
                                                            isExpired ? "bg-rose-500" : "bg-emerald-500"
                                                        }`}
                                                    />
                                                    <span className={isExpired ? "text-rose-400 font-mono" : "font-mono"}>
                                                        {new Date(u.expiresAt).toLocaleDateString()}
                                                    </span>
                                                </div>
                                            ) : (
                                                <span className="text-slate-500 italic">No expiry</span>
                                            )}
                                        </td>
                                        <td className="py-3.5 px-4 text-right">
                                            <button
                                                onClick={() =>
                                                    setEditingUser({
                                                        userId: u._id.toString(),
                                                        name: u.name,
                                                        role: u.role || "user",
                                                        userLevel: u.userLevel || "free",
                                                        expiresAtDays: 30,
                                                    })
                                                }
                                                className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
                                            >
                                                Edit Access
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                            {users.length === 0 && (
                                <tr>
                                    <td colSpan={6} className="py-8 text-center text-slate-500">
                                        No users found.
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
                                onClick={() => fetchUsers(pagination.page - 1)}
                                className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:bg-slate-800 disabled:opacity-40"
                            >
                                Previous
                            </button>
                            <button
                                disabled={pagination.page >= pagination.totalPages}
                                onClick={() => fetchUsers(pagination.page + 1)}
                                className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:bg-slate-800 disabled:opacity-40"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Edit User Modal */}
            {editingUser && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
                    <div className="w-full max-w-md rounded-2xl bg-slate-950 border border-slate-800 p-6 shadow-2xl">
                        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                            <h3 className="text-sm font-bold text-white">
                                Edit Access: {editingUser.name}
                            </h3>
                            <button
                                onClick={() => setEditingUser(null)}
                                className="text-slate-400 hover:text-white"
                            >
                                <X className="size-4" />
                            </button>
                        </div>

                        <form onSubmit={handleUpdateUser} className="mt-4 space-y-4">
                            <div>
                                <label className="block text-xs font-semibold text-slate-300 mb-1">
                                    Account Tier
                                </label>
                                <select
                                    value={editingUser.userLevel}
                                    onChange={(e) =>
                                        setEditingUser({ ...editingUser, userLevel: e.target.value })
                                    }
                                    className="w-full rounded-xl bg-slate-900 border border-slate-800 px-3 py-2 text-xs text-slate-200"
                                >
                                    <option value="free">Free Tier</option>
                                    <option value="pro">Pro Tier</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-300 mb-1">
                                    Admin Role
                                </label>
                                <select
                                    value={editingUser.role}
                                    onChange={(e) =>
                                        setEditingUser({ ...editingUser, role: e.target.value })
                                    }
                                    className="w-full rounded-xl bg-slate-900 border border-slate-800 px-3 py-2 text-xs text-slate-200"
                                >
                                    <option value="user">Regular User</option>
                                    <option value="admin">Super Admin (BossDocx)</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-300 mb-1">
                                    Extend Subscription By (Days from today)
                                </label>
                                <input
                                    type="number"
                                    value={editingUser.expiresAtDays}
                                    onChange={(e) =>
                                        setEditingUser({
                                            ...editingUser,
                                            expiresAtDays: parseInt(e.target.value) || 0,
                                        })
                                    }
                                    className="w-full rounded-xl bg-slate-900 border border-slate-800 px-3 py-2 text-xs text-slate-200"
                                />
                            </div>

                            <div className="flex justify-end gap-3 pt-3">
                                <button
                                    type="button"
                                    onClick={() => setEditingUser(null)}
                                    className="px-4 py-2 rounded-xl bg-slate-900 text-xs font-semibold text-slate-300 hover:bg-slate-800"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 rounded-xl bg-indigo-600 text-xs font-semibold text-white hover:bg-indigo-500"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
