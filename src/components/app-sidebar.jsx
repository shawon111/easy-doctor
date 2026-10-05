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
import googleBusinessIcon from "@/assets/icons/google.png"
import customDomainIcon from "@/assets/icons/domain.png"
import myWebsiteIcon from "@/assets/icons/website.png"

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
      title: "My Website",
      url: "/dashboard/my-website",
      icon: myWebsiteIcon,
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
      title: "Manage Appointments",
      url: "/dashboard/appointments/manage",
      icon: appointmentsIcon,
    },
    {
      title: "Google Business",
      url: "/dashboard/google-business",
      icon: googleBusinessIcon
    },
    {
      title: "Plan & Billing",
      url: "/dashboard/billing",
      icon: planAndBillingIcon,
    },{
      title: "Custom Domain",
      url: "/dashboard/domain",
      icon: customDomainIcon,
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
      className="border-r border-slate-200"
      collapsible="offcanvas" 
      {...props}>
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavMain user={user} items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
