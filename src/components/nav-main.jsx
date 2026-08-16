"use client"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { ChevronRightIcon } from "lucide-react"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavMain({
  items
}) {
  const pathname = usePathname();
  const { isMobile, setOpenMobile } = useSidebar();

  const isActive = (itemUrl) => {
    return pathname === itemUrl || pathname.startsWith(itemUrl + "/");
  };

  const handleNavigate = () => {
    if (isMobile) {
      setOpenMobile(false);
    }
  };

  return (
    <SidebarGroup>
      <SidebarMenu className="gap-y-4">
        {items.map((item) => (
          <Link key={item.title} href={item.url} onClick={handleNavigate}>
            <SidebarMenuItem>
              <SidebarMenuButton 
                tooltip={item.title}
                isActive={isActive(item.url)}
                className={isActive(item.url) ? "bg-sidebar-accent text-sidebar-accent-foreground" : ""}
              >
                <Image
                  alt={`${item.title} icon`}
                  src={item.icon}
                  height={16}
                  width={16}
                  className="md:w-5 md:h-5"
                />
                <span>{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </Link>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
