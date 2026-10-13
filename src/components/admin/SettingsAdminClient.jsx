"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import {
    Settings,
    Save,
    AlertTriangle,
    Shield,
    Sparkles,
    CreditCard,
} from "lucide-react";

export default function SettingsAdminClient({ initialSettings }) {
    const [settings, setSettings] = useState(initialSettings || {});
    const [loading, setLoading] = useState(false);

    const handleSave = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch("/api/admin/settings", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(settings),
            });
            const data = await res.json();
            if (data.success) {
                toast.success("Settings saved successfully!");
                setSettings(data.data);
            } else {
                toast.error(data.message);
            }
        } catch {
            toast.error("Failed to save settings");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSave} className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-extrabold text-white">Platform Settings</h1>
                    <p className="text-sm text-slate-400 mt-1">
                        Configure SaaS platform defaults, system notices, registration controls, and AI models.
                    </p>
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-indigo-500 transition-colors shadow-md shadow-indigo-600/20 disabled:opacity-50"
                >
                    <Save className="size-4" />
                    {loading ? "Saving..." : "Save Platform Settings"}
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* General Platform Controls */}
                <div className="rounded-2xl bg-slate-950/80 border border-slate-800/80 p-6 space-y-4 shadow-sm">
                    <h3 className="text-sm font-bold text-white flex items-center gap-2">
                        <Settings className="size-4 text-indigo-400" />
                        General Information & Trial
                    </h3>

                    <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                            Platform Name
                        </label>
                        <input
                            type="text"
                            value={settings.siteName || ""}
                            onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
                            className="w-full rounded-xl bg-slate-900 border border-slate-800 px-3 py-2 text-xs text-white"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                            Support Email
                        </label>
                        <input
                            type="email"
                            value={settings.supportEmail || ""}
                            onChange={(e) => setSettings({ ...settings, supportEmail: e.target.value })}
                            className="w-full rounded-xl bg-slate-900 border border-slate-800 px-3 py-2 text-xs text-white"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                            Default Free Trial Duration (Days)
                        </label>
                        <input
                            type="number"
                            value={settings.trialDays || 15}
                            onChange={(e) =>
                                setSettings({ ...settings, trialDays: parseInt(e.target.value) || 15 })
                            }
                            className="w-full rounded-xl bg-slate-900 border border-slate-800 px-3 py-2 text-xs text-white"
                        />
                    </div>

                    <div className="pt-2">
                        <label className="flex items-center gap-3 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={settings.allowNewRegistrations ?? true}
                                onChange={(e) =>
                                    setSettings({ ...settings, allowNewRegistrations: e.target.checked })
                                }
                                className="size-4 rounded border-slate-700 bg-slate-900 text-indigo-600 focus:ring-0"
                            />
                            <span className="text-xs font-medium text-slate-300">
                                Allow New Doctor Registrations
                            </span>
                        </label>
                    </div>
                </div>

                {/* AI Configuration */}
                <div className="rounded-2xl bg-slate-950/80 border border-slate-800/80 p-6 space-y-4 shadow-sm">
                    <h3 className="text-sm font-bold text-white flex items-center gap-2">
                        <Sparkles className="size-4 text-purple-400" />
                        Gemini AI Configuration
                    </h3>

                    <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                            Active Gemini Generation Model
                        </label>
                        <input
                            type="text"
                            value={settings.aiSettings?.model || "gemini-3.1-flash-lite"}
                            onChange={(e) =>
                                setSettings({
                                    ...settings,
                                    aiSettings: { ...settings.aiSettings, model: e.target.value },
                                })
                            }
                            className="w-full rounded-xl bg-slate-900 border border-slate-800 px-3 py-2 text-xs text-white font-mono"
                        />
                        <p className="text-[10px] text-slate-500 mt-1">
                            Recommended: <code>gemini-3.1-flash-lite</code> or <code>gemini-1.5-flash</code>
                        </p>
                    </div>
                </div>

                {/* Broadcast Banner */}
                <div className="rounded-2xl bg-slate-950/80 border border-slate-800/80 p-6 space-y-4 shadow-sm md:col-span-2">
                    <h3 className="text-sm font-bold text-white flex items-center gap-2">
                        <AlertTriangle className="size-4 text-amber-400" />
                        System Notice Banner
                    </h3>

                    <div className="flex items-center gap-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={settings.noticeBanner?.enabled ?? false}
                                onChange={(e) =>
                                    setSettings({
                                        ...settings,
                                        noticeBanner: {
                                            ...settings.noticeBanner,
                                            enabled: e.target.checked,
                                        },
                                    })
                                }
                                className="size-4 rounded border-slate-700 bg-slate-900 text-indigo-600 focus:ring-0"
                            />
                            <span className="text-xs font-semibold text-slate-200">
                                Display Global Banner on Doctor Dashboards
                            </span>
                        </label>
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                            Banner Message
                        </label>
                        <input
                            type="text"
                            placeholder="e.g. Scheduled maintenance tonight at 2:00 AM BDT. Sites remain online."
                            value={settings.noticeBanner?.message || ""}
                            onChange={(e) =>
                                setSettings({
                                    ...settings,
                                    noticeBanner: { ...settings.noticeBanner, message: e.target.value },
                                })
                            }
                            className="w-full rounded-xl bg-slate-900 border border-slate-800 px-3 py-2 text-xs text-white"
                        />
                    </div>
                </div>
            </div>
        </form>
    );
}
