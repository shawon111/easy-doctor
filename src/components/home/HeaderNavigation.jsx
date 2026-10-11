"use client";

import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const homeLinks = [
  { label: "How It Works", section: "how-it-works" },
  { label: "Doctor Portal", section: "dashboard-preview" },
  { label: "Pricing", section: "pricing" },
  { label: "FAQ", section: "faq" },
];

function getNavigationLinks(isTemplatesPage) {
  return [
    {
      label: "Find a Doctor",
      href: "/doctors",
    },
    {
      label: "Templates",
      href: isTemplatesPage ? "#templates" : "/templates",
    },
    {
      label: "Pricing",
      href: isTemplatesPage ? "/#pricing" : "#pricing",
    },
  ];
}

function getMoreLinks(isTemplatesPage) {
  return homeLinks
    .filter(({ label }) => label !== "Pricing")
    .map(({ label, section }) => ({
      label,
      href: isTemplatesPage ? `/#${section}` : `#${section}`,
    }));
}

function CreateWebsiteLink({ className = "" }) {
  return (
    <Link
      className={`inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-slate-800 ${className}`}
      href="/dashboard/website/create"
    >
      Create My Website
      <span className="material-symbols-outlined ml-1.5 text-[16px]">arrow_forward</span>
    </Link>
  );
}

export default function HeaderNavigation({ isTemplatesPage, isLoggedIn }) {
  const links = getNavigationLinks(isTemplatesPage);
  const moreLinks = getMoreLinks(isTemplatesPage);
  const mobileLinks = [...links, ...moreLinks];
  const accountHref = isLoggedIn ? "/dashboard" : "/login";
  const accountLabel = isLoggedIn ? "Dashboard" : "Log In";

  return (
    <div className="flex items-center">
      <nav className="hidden items-center gap-5 xl:flex" aria-label="Main navigation">
        {links.map(({ label, href }) => (
          <Link
            key={label}
            className="whitespace-nowrap text-sm font-semibold text-slate-600 transition-colors hover:text-slate-900"
            href={href}
          >
            {label}
          </Link>
        ))}
        <DropdownMenu>
          <DropdownMenuTrigger className="inline-flex cursor-pointer items-center gap-1 whitespace-nowrap text-sm font-semibold text-slate-600 transition-colors hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
            More
            <ChevronDown aria-hidden="true" className="size-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            {moreLinks.map(({ label, href }) => (
              <DropdownMenuItem key={label} asChild>
                <Link
                  className="cursor-pointer px-2.5 py-2 text-sm font-medium text-slate-700"
                  href={href}
                >
                  {label}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
      <div className="ml-3 hidden items-center gap-3 xl:flex">
        <Link
          className="px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:text-slate-900"
          href={accountHref}
        >
          {accountLabel}
        </Link>
        <CreateWebsiteLink />
      </div>

      <Sheet>
        <SheetTrigger
          className="inline-flex size-10 items-center justify-center rounded-lg text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary xl:hidden"
          aria-label="Open navigation menu"
        >
          <Menu aria-hidden="true" size={24} />
        </SheetTrigger>
        <SheetContent side="right" className="w-[min(85vw,24rem)] border-slate-200 bg-white p-0">
          <SheetHeader className="border-b border-slate-200 px-6 py-5">
            <SheetTitle className="text-left text-lg font-bold text-slate-900">
              Navigation
            </SheetTitle>
            <SheetDescription className="sr-only">
              Navigate the site or access your account.
            </SheetDescription>
          </SheetHeader>
          <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile navigation">
            {mobileLinks.map(({ label, href }) => (
              <SheetClose asChild key={label}>
                <Link
                  className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900"
                  href={href}
                >
                  {label}
                </Link>
              </SheetClose>
            ))}
            <div className="my-3 border-t border-slate-200" />
            <SheetClose asChild>
              <Link
                className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900"
                href={accountHref}
              >
                {accountLabel}
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-slate-800"
                href="/dashboard/website/create"
              >
                Create My Website
                <span className="material-symbols-outlined ml-1.5 text-[16px]">arrow_forward</span>
              </Link>
            </SheetClose>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
