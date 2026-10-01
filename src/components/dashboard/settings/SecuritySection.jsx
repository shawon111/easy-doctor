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
      className="rounded-2xl border border-[#E2E8F0] bg-white p-4 shadow-[0px_4px_12px_rgba(0,0,0,0.03)] sm:p-6"
    >
      <h2 className="mb-5 text-lg font-semibold text-[#0F172A] sm:mb-6">Security</h2>

      <div className="space-y-6">
        <form onSubmit={handlePasswordSubmit}>
          <h3 className="mb-4 text-base font-medium text-[#0F172A]">Change Password</h3>
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="current-password" className="text-sm font-semibold text-[#0F172A]">
                Current Password
              </label>
              <Input
                id="current-password"
                type="password"
                autoComplete="current-password"
                required
                value={currentPassword}
                onChange={(event) => setCurrentPassword(event.target.value)}
                className="border-[#D1D5DB] bg-white focus-visible:border-[#0066FF] focus-visible:ring-[#E5F0FF]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="new-password" className="text-sm font-semibold text-[#0F172A]">
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
                className="border-[#D1D5DB] bg-white focus-visible:border-[#0066FF] focus-visible:ring-[#E5F0FF]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="confirm-password" className="text-sm font-semibold text-[#0F172A]">
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
                className="border-[#D1D5DB] bg-white focus-visible:border-[#0066FF] focus-visible:ring-[#E5F0FF]"
              />
            </div>
          </div>
          <Button
            type="submit"
            disabled={passwordMutation.isPending}
            variant="secondary"
            className="mt-4 w-full bg-[#E5F0FF] text-[#0066FF] hover:bg-[#DAE1FF] sm:w-auto"
          >
            {passwordMutation.isPending ? "Updating..." : "Update Password"}
          </Button>
        </form>

        <div className="border-t border-[#E2E8F0] pt-6">
          <h3 className="mb-4 text-base font-medium text-[#0F172A]">Current Session</h3>
          <div className="flex flex-col gap-3 rounded-lg border border-[#E2E8F0] bg-[#F1F4F7] p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex min-w-0 items-start gap-3 sm:items-center sm:gap-4">
              <span className="material-symbols-outlined shrink-0 text-[#555F6C]">computer</span>
              <div className="min-w-0">
                <p className="text-sm font-medium text-[#0F172A]">This browser</p>
                <p className="mt-1 text-xs text-[#64748B]">Your currently signed-in account session</p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              disabled={signOutMutation.isPending}
              onClick={handleSignOut}
              className="w-full sm:w-auto"
            >
              {signOutMutation.isPending ? "Signing out..." : "Sign out"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
