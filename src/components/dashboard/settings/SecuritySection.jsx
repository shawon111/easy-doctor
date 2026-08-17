"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function SecuritySection() {
  return (
    <section
      id="security"
      className="rounded-2xl border border-[#E2E8F0] bg-white p-4 shadow-[0px_4px_12px_rgba(0,0,0,0.03)] sm:p-6"
    >
      <h2 className="mb-5 text-lg font-semibold text-[#0F172A] sm:mb-6">Security</h2>

      <div className="space-y-6">
        <div>
          <h3 className="mb-4 text-base font-medium text-[#0F172A]">Change Password</h3>
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="current-password" className="text-sm font-semibold text-[#0F172A]">
                Current Password
              </label>
              <Input id="current-password" type="password" autoComplete="current-password" className="border-[#D1D5DB] bg-white focus-visible:border-[#0066FF] focus-visible:ring-[#E5F0FF]" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="new-password" className="text-sm font-semibold text-[#0F172A]">
                New Password
              </label>
              <Input id="new-password" type="password" autoComplete="new-password" className="border-[#D1D5DB] bg-white focus-visible:border-[#0066FF] focus-visible:ring-[#E5F0FF]" />
            </div>
          </div>
          <Button variant="secondary" className="mt-4 w-full bg-[#E5F0FF] text-[#0066FF] hover:bg-[#DAE1FF] sm:w-auto">
            Update Password
          </Button>
        </div>

        <div className="border-t border-[#E2E8F0] pt-6">
          <h3 className="mb-4 text-base font-medium text-[#0F172A]">Active Sessions</h3>
          <div className="flex flex-col gap-3 rounded-lg border border-[#E2E8F0] bg-[#F1F4F7] p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex min-w-0 items-start gap-3 sm:items-center sm:gap-4">
              <span className="material-symbols-outlined shrink-0 text-[#555F6C]">computer</span>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-[#0F172A]">MacBook Pro - Chrome</p>
                <p className="mt-1 text-xs text-[#64748B]">San Francisco, CA • Current Session</p>
              </div>
            </div>
            <span className="w-fit shrink-0 rounded-full bg-[#10B981]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#065F46]">
              Active
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
