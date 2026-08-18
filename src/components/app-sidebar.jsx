"use client"

import * as React from "react"

// import menu icons
import overviewIcon from "@/assets/icons/overview-icon.png"
import createWebsiteIcon from "@/assets/icons/create-website-icon.png"
import editWebsiteIcon from "@/assets/icons/edit-website-icon.png"
import googlePresenceIcon from "@/assets/icons/google-presence-icon.png"
import appointmentsIcon from "@/assets/icons/appointments-icon.png"
import planAndBillingIcon from "@/assets/icons/plan-and-billing-icon.png"
import settingsIcon from "@/assets/icons/settings-icon.png"

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
      icon: overviewIcon,
    },
    {
      title: "Create Website",
      url: "/dashboard/website/create",
      icon: createWebsiteIcon,
    },
    {
      title: "Edit Website",
      url: "/dashboard/website/edit",
      icon: editWebsiteIcon,
    },
    {
      title: "Google Presence",
      url: "/dashboard/google-presence",
      icon: googlePresenceIcon,
    },
    {
      title: "Appointments",
      url: "/dashboard/appointments",
      icon: appointmentsIcon,
    },
    {
      title: "Plan & Billing",
      url: "/dashboard/billing",
      icon: planAndBillingIcon,
    },
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: settingsIcon,
    },
  ],
}

export function AppSidebar({
  user, ...props
}) {
  return (
    <Sidebar 
      style={{ backgroundColor: "#F7FAFD" }}
      className="border-r border-[#64748B]" 
      collapsible="offcanvas" 
      {...props}>
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
