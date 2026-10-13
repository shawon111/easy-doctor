"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { savePassword, signOut } from "./settings-api";

export function SecuritySection() {
  const router = useRouter();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const passwordMutation = useMutation({
    mutationFn: savePassword,
    onSuccess: () => {
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      toast.success("Password updated.");
    },
    onError: (error) => toast.error(error.message || "Unable to update password."),
  });
  const signOutMutation = useMutation({
    mutationFn: signOut,
    onSuccess: () => router.replace("/login"),
    onError: (error) => toast.error(error.message || "Unable to sign out."),
  });

  function handlePasswordSubmit(event) {
    event.preventDefault();
    if (newPassword !== confirmPassword) {
      toast.error("New passwords do not match.");
      return;
    }

    passwordMutation.mutate({ currentPassword, newPassword });
  }

  function handleSignOut() {
    signOutMutation.mutate();
  }

  return (
    <section
      id="security"
      className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5 shadow-sm sm:p-6"
    >
      <div className="mb-6 flex items-center justify-between border-b border-slate-800/80 pb-4">
        <div>
          <h2 className="text-base font-bold text-white">Security & Access</h2>
          <p className="mt-0.5 text-xs text-slate-400">Manage doctor portal passwords and active sessions</p>
        </div>
      </div>

      <div className="space-y-6">
        <form onSubmit={handlePasswordSubmit}>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-300">Update Password</h3>
          <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="current-password" className="text-xs font-semibold text-slate-300">
                Current Password
              </label>
              <Input
                id="current-password"
                type="password"
                autoComplete="current-password"
                required
                value={currentPassword}
                onChange={(event) => setCurrentPassword(event.target.value)}
                className="rounded-xl border-slate-800 bg-slate-900 text-white text-xs"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="new-password" className="text-xs font-semibold text-slate-300">
                New Password
              </label>
              <Input
                id="new-password"
                type="password"
                autoComplete="new-password"
                minLength={8}
                maxLength={128}
                required
                value={newPassword}
                onChange={(event) => setNewPassword(event.target.value)}
                className="rounded-xl border-slate-800 bg-slate-900 text-white text-xs"
              />
            </div>
            <div className="flex flex-col gap-1.5 md:col-span-2">
              <label htmlFor="confirm-password" className="text-xs font-semibold text-slate-300">
                Confirm New Password
              </label>
              <Input
                id="confirm-password"
                type="password"
                autoComplete="new-password"
                minLength={8}
                maxLength={128}
                required
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                className="rounded-xl border-slate-800 bg-slate-900 text-white text-xs md:max-w-md"
              />
            </div>
          </div>
          <Button
            type="submit"
            disabled={passwordMutation.isPending}
            className="mt-5 w-full rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-md shadow-indigo-600/20 sm:w-auto"
          >
            {passwordMutation.isPending ? "Updating..." : "Update Password"}
          </Button>
        </form>

        <div className="border-t border-slate-800/80 pt-6">
          <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-300">Current Session</h3>
          <div className="flex flex-col gap-3 rounded-xl border border-slate-800/80 bg-slate-900/60 p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex min-w-0 items-start gap-3 sm:items-center sm:gap-3.5">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shadow-sm">
                <span className="material-symbols-outlined text-[20px]">computer</span>
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold text-white">This Device & Browser</p>
                <p className="mt-0.5 text-xs text-slate-400">Authenticated doctor session with encrypted JWT token</p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              disabled={signOutMutation.isPending}
              onClick={handleSignOut}
              className="w-full sm:w-auto rounded-xl border-slate-700 bg-slate-900 text-slate-200 hover:bg-slate-800 text-xs font-semibold"
            >
              {signOutMutation.isPending ? "Signing out..." : "Sign out"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
