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
            className={`relative h-11 rounded-xl px-3 text-slate-300 transition-all hover:bg-white/[0.07] hover:text-white data-[active=true]:!bg-[#17294a] data-[active=true]:!text-white data-[active=true]:shadow-none before:absolute before:left-0 before:top-1/2 before:h-5 before:w-[3px] before:-translate-y-1/2 before:rounded-full before:bg-transparent data-[active=true]:before:bg-cyan-300 ${active ? "font-semibold" : ""}`}
          >
            <Icon className={`size-[18px] ${active ? "text-cyan-300" : "text-slate-400"}`} />
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
