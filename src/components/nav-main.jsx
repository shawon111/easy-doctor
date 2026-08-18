"use client"
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavMain({
  items
}) {
  const pathname = usePathname();
  const { isMobile, setOpenMobile } = useSidebar();

  const isActive = (itemUrl) => {
    if (!itemUrl) return false;

    if (itemUrl === "/") return pathname === "/";
    // Active only on exact match (no parent-route matching)
    return pathname === itemUrl;
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
          <Link key={item.title} href={item.url} onClick={handleNavigate} className="cursor-pointer">
            <SidebarMenuItem>
              <SidebarMenuButton 
                tooltip={item.title}
                isActive={isActive(item.url)}
                className={`${isActive(item.url) ? "bg-sidebar-accent text-sidebar-accent-foreground" : ""} cursor-pointer`}
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
