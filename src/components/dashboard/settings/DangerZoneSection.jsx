"use client";

import { Button } from "@/components/ui/button";

export function DangerZoneSection() {
  return (
    <section
      id="danger"
      className="rounded-2xl border border-[#FFDAD6] bg-white p-4 shadow-[0px_4px_12px_rgba(0,0,0,0.03)] sm:p-6"
    >
      <h2 className="mb-4 text-lg font-semibold text-[#BA1A1A]">Danger Zone</h2>
      <div className="flex flex-col items-stretch gap-4 rounded-lg border border-[#FED7D7] bg-[#FFF5F5] p-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-[#0F172A]">Delete Account</p>
          <p className="mt-1 text-sm text-[#64748B]">
            Permanently remove your account and all associated data. This action cannot be undone.
          </p>
        </div>
        <Button className="w-full bg-[#DC2626] text-white hover:bg-[#B91C1C] sm:w-auto">
          Delete Account
        </Button>
      </div>
    </section>
  );
}
