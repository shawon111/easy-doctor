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
import planAndBillingIcon from "@/assets/icons/plan-and-billing-icon.png"
// check website activeness
const isWebsiteActive = (expireDate) => {
  return expireDate && new Date(expireDate) > new Date()
}

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
    icon: planAndBillingIcon,
  }
  const isActivePlan = isWebsiteActive(user?.expiresAt)
  console.log("check from nav", isActivePlan)
  return (
    <SidebarGroup>
      <SidebarMenu className="gap-y-4">
        {
          !isActivePlan ? <Link href={menuItemExpired.url} onClick={handleNavigate} className="cursor-pointer">
            <SidebarMenuItem>
              <SidebarMenuButton
                tooltip={menuItemExpired.title}
                className={`cursor-pointer`}
              >
                <Image
                  alt={`${menuItemExpired.title} icon`}
                  src={menuItemExpired.icon}
                  height={16}
                  width={16}
                  className="md:w-5 md:h-5"
                />
                <span>{menuItemExpired.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </Link> : <>
            {items.map((item) => (
              <Link key={item.title} href={item.url} onClick={handleNavigate} className="cursor-pointer">
                <SidebarMenuItem>
                  <SidebarMenuButton
                    tooltip={item.title}
                    isActive={isActive(item)}
                    className={`${isActive(item) ? "bg-sidebar-accent text-sidebar-accent-foreground" : ""} cursor-pointer`}
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
          </>
        }

      </SidebarMenu>
    </SidebarGroup>
  );
}
