"use client"

import * as React from "react"
import {
  Activity,
  CalendarDays,
  CreditCard,
  Globe2,
  LayoutDashboard,
  Link2,
  Search,
  Settings2,
  ShieldCheck,
  Stethoscope,
  WandSparkles,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// menu data
const data = {
  navMain: [
    {
      title: "Overview",
      url: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "My Website",
      url: "/dashboard/my-website",
      icon: Globe2,
    },
    {
      title: "Create Website",
      url: "/dashboard/website/create",
      icon: WandSparkles,
      matchChildren: true,
    },
    {
      title: "Edit Website",
      url: "/dashboard/website/edit",
      icon: Activity,
    },
    {
      title: "Google Presence",
      url: "/dashboard/google-presence",
      icon: Search,
    },
    {
      title: "Appointments",
      url: "/dashboard/appointments",
      icon: CalendarDays,
    },
    {
      title: "Manage Appointments",
      url: "/dashboard/appointments/manage",
      icon: Stethoscope,
      matchChildren: true,
    },
    {
      title: "Google Business",
      url: "/dashboard/google-business",
      icon: Globe2
    },
    {
      title: "Verification",
      url: "/dashboard/verification",
      icon: ShieldCheck,
    },
    {
      title: "Plan & Billing",
      url: "/dashboard/billing",
      icon: CreditCard,
    },{
      title: "Custom Domain",
      url: "/dashboard/domain",
      icon: Link2,
    },
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: Settings2,
    },
  ],
}

export function AppSidebar({
  user, ...props
}) {
  return (
    <Sidebar
      style={{ backgroundColor: "#0b1530" }}
      className="border-r border-slate-800 text-slate-100"
      collapsible="offcanvas" 
      {...props}>
      <SidebarHeader className="px-4 pb-5 pt-6">
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent className="px-2">
        <NavMain user={user} items={data.navMain} />
      </SidebarContent>
      <SidebarFooter className="border-t border-white/10 p-3">
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
