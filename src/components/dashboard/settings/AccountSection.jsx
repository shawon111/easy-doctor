"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function AccountSection() {
  return (
    <section
      id="account"
      className="rounded-2xl border border-[#E2E8F0] bg-white p-4 shadow-[0px_4px_12px_rgba(0,0,0,0.03)] sm:p-6"
    >
      <h2 className="mb-6 text-lg font-semibold text-[#0F172A]">Account Information</h2>

      <div className="mb-6 flex flex-col items-start gap-4 sm:mb-8 sm:flex-row sm:items-center sm:gap-6">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8-eNaDdnS7QB5t4e83gv6yuusQ7W8xeTtogFzbztUAuIS3mLejtKU_9mkIrpyWMjWNB-XUUninVbdKurUBgLfKzaWPEh7gqEbnWw9H22W4genm1RjxEJfssfT_RYbiYl7PA2mWTLxnfXnUNgvVIbbW2FydZMTES307LkujaorHIhY7hEsQvD5aMGmviM624koTgUAh_wiWw0t8GteDGFWuf9G59veZSGpLk7QnTdIA_3iXMsZYaTl6w"
          alt="Profile Photo"
          className="h-20 w-20 rounded-full border border-[#E2E8F0] object-cover"
        />
        <div>
          <Button
            variant="secondary"
            size="sm"
            className="mb-2 bg-[#E5F0FF] text-[#0066FF] hover:bg-[#DAE1FF]"
          >
            Change Photo
          </Button>
          <p className="text-xs text-[#64748B]">JPG, GIF or PNG. Max size of 800K</p>
        </div>
      </div>

      {/* Form fields */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-[#0F172A]">Full Name</label>
          <Input type="text" defaultValue="Dr. Sarah Jenkins" className="border-[#D1D5DB] bg-white text-[#0F172A] focus-visible:border-[#0066FF] focus-visible:ring-[#E5F0FF]" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-[#0F172A]">Email Address</label>
          <Input type="email" defaultValue="sarah.jenkins@clinic.com" className="border-[#D1D5DB] bg-white text-[#0F172A] focus-visible:border-[#0066FF] focus-visible:ring-[#E5F0FF]" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-[#0F172A]">Phone Number</label>
          <Input type="tel" defaultValue="+1 (555) 123-4567" className="border-[#D1D5DB] bg-white text-[#0F172A] focus-visible:border-[#0066FF] focus-visible:ring-[#E5F0FF]" />
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <Button className="w-full bg-[#0066FF] text-white hover:bg-[#0050CB] sm:w-auto">
          Save Changes
        </Button>
      </div>
    </section>
  );
}
