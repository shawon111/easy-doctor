import Image from "next/image"

export function TeamSwitcher() {
  return (
    <div className="flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-xl bg-white shadow-lg shadow-black/10">
          <Image
            src="/docxio-logo.png"
            width={30}
            height={30}
            alt="Docxio Logo"
            className="size-7 object-contain"
          />
        </div>
        <div className="group-data-[collapsible=icon]:hidden">
          <p className="text-base font-bold tracking-tight text-white">Docxio</p>
          <p className="text-[10px] font-medium uppercase tracking-[0.17em] text-slate-400">Doctor workspace</p>
        </div>
    </div>
  );
}
