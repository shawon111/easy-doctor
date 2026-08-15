import {
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from "next/image"

export async function TeamSwitcher() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <div
          className="flex items-start justify-start rounded-lg">
          <Image
            src="/docxio-logo.png"
            width={120}
            height={32}
            alt="Docxio Logo"
          />
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
