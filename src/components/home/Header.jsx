import Image from "next/image";
import Link from "next/link";
import { getCurrentUser } from "@/services/user.service";
import HeaderNavigation from "@/components/home/HeaderNavigation";

export default async function Header({ isTemplatesPage = false }) {
  const user = await getCurrentUser();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link className="flex items-center gap-2" href="/">
            <Image
              alt="Docxio Logo"
              className="object-contain"
              width={160}
              height={36}
              src="/docxio-logo.webp"
            />
          </Link>
          <span className="hidden md:inline-flex text-[10px] font-bold uppercase tracking-[0.2em] px-2 py-0.5 bg-slate-100 text-slate-600 rounded">
            Physician CMS
          </span>
        </div>
        <HeaderNavigation isTemplatesPage={isTemplatesPage} isLoggedIn={Boolean(user)} />
      </div>
    </header>
  );
}
