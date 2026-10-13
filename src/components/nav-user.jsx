"use client"

import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { ChevronsUpDownIcon, SparklesIcon, BadgeCheckIcon, CreditCardIcon, BellIcon, LogOutIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

export function NavUser({
  user
}) {
  const { isMobile } = useSidebar()

  // use router
  const router = useRouter();

  // Get first two letters from name
  const getInitials = (name) => {
    return name
      .split(" ")
      .map(word => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2)
  }

  const initials = getInitials(user.name);

  // logout
  const handleLogOut = async() => {
    const response = await fetch("/api/auth/logout", {
      method: "POST"
    });
    const data = await response.json()
    if(data.data===true){
      router.push("/login");
      router.refresh()
    }
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="rounded-xl text-slate-200 hover:bg-white/[0.07] hover:text-white data-[state=open]:bg-white/[0.08] data-[state=open]:text-white">
              <Avatar className="h-8 w-8 rounded-lg">
                {
                  user.profilePicture ? <Image
                    width={32}
                    height={32}
                    alt="User Image"
                    src={user?.profilePicture}
                    className="rounded-full"
                  /> : <AvatarFallback className="rounded-lg">{initials}</AvatarFallback>
                }
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{user.name}</span>
                <span className="truncate text-xs">{user.email}</span>
              </div>
              <ChevronsUpDownIcon className="ml-auto size-4 text-slate-400" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-56 rounded-xl border border-slate-800 bg-slate-950 p-1.5 text-slate-200 shadow-xl"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={6}>
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2.5 px-2 py-2 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg border border-slate-700/60">
                  {
                    user.profilePicture ? <Image
                      width={32}
                      height={32}
                      alt="User Image"
                      src={user?.profilePicture}
                      className="rounded-full"
                    /> : <AvatarFallback className="rounded-lg bg-slate-800 text-slate-200 text-xs font-bold">{initials}</AvatarFallback>
                  }
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-bold text-white">{user.name}</span>
                  <span className="truncate text-xs text-slate-400">{user.email}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-slate-800 my-1" />
            <DropdownMenuGroup>
              <DropdownMenuItem asChild className="rounded-lg text-xs font-semibold text-slate-300 hover:bg-slate-900 hover:text-white cursor-pointer px-2.5 py-2">
                <Link className="flex gap-x-2.5 items-center w-full" href="/dashboard/billing">
                  <SparklesIcon className="size-4 text-indigo-400" />
                  Upgrade to Pro
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator className="bg-slate-800 my-1" />
            <DropdownMenuGroup>
              <DropdownMenuItem asChild className="rounded-lg text-xs font-semibold text-slate-300 hover:bg-slate-900 hover:text-white cursor-pointer px-2.5 py-2">
                <Link className="flex gap-x-2.5 items-center w-full" href="/dashboard/billing">
                  <CreditCardIcon className="size-4 text-slate-400" />
                  Billing & Invoices
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator className="bg-slate-800 my-1" />
            <DropdownMenuItem
              onClick={()=> handleLogOut()}
              className="rounded-lg text-xs font-semibold text-rose-400 hover:bg-rose-500/10 hover:text-rose-300 cursor-pointer px-2.5 py-2 flex gap-x-2.5 items-center"
            >
              <LogOutIcon className="size-4" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
