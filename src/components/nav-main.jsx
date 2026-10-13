"use client"
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CreditCard } from "lucide-react";
import { isWebsiteActive } from "@/lib/subscription";

export function NavMain({
  items,
  user
}) {
  const pathname = usePathname();
  const { isMobile, setOpenMobile } = useSidebar();

  const isActive = (item) => {
    const itemUrl = item?.url;
    if (!itemUrl) return false;

    // Treat root ('/') as active only on exact match
    if (itemUrl === "/") return pathname === "/";

    if (item.matchChildren) return pathname === itemUrl || pathname.startsWith(itemUrl + "/");

    // exact match only
    return pathname === itemUrl;
  };

  const handleNavigate = () => {
    if (isMobile) {
      setOpenMobile(false);
    }
  };

  // menu item when subscription expires
  const menuItemExpired = {
    title: "Plan & Billing",
    url: "/dashboard/billing",
    icon: CreditCard,
  }
  const isActivePlan = isWebsiteActive(user?.expiresAt)
  const renderItem = (item) => {
    const Icon = item.icon;
    const active = isActive(item);
    return (
      <Link key={item.title} href={item.url} onClick={handleNavigate} className="cursor-pointer">
        <SidebarMenuItem>
          <SidebarMenuButton
            tooltip={item.title}
            isActive={active}
            className={`relative h-10 rounded-xl px-3 text-slate-400 transition-all hover:bg-slate-900 hover:text-slate-100 data-[active=true]:!bg-indigo-600 data-[active=true]:!text-white data-[active=true]:shadow-md data-[active=true]:shadow-indigo-600/30 text-xs font-medium ${active ? "font-semibold" : ""}`}
          >
            <Icon className={`size-4 ${active ? "text-white" : "text-slate-400"}`} />
            <span>{item.title}</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </Link>
    );
  };
  return (
    <SidebarGroup>
      <div className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500 group-data-[collapsible=icon]:hidden">
        Workspace
      </div>
      <SidebarMenu className="gap-y-1">
        {
          !isActivePlan ? renderItem(menuItemExpired) : items.map(renderItem)
        }

      </SidebarMenu>
    </SidebarGroup>
  );
}
