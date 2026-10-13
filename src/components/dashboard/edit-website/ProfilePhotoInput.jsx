import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const ProfilePhotoInput = ({ src, name }) => {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-foreground">Profile Photo</label>
      <div className="flex items-center gap-6">
        <div className="group relative h-24 w-24 flex-shrink-0 cursor-pointer overflow-hidden rounded-full border-2 border-card bg-muted shadow-sm">
          <Image
            src={src}
            alt="Current Profile Photo"
            width={96}
            height={96}
            unoptimized
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-foreground/40 opacity-0 transition-opacity group-hover:opacity-100">
            <span className="material-symbols-outlined text-[24px] text-white">
              photo_camera
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              type="button"
              className="rounded-xl border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs font-semibold text-slate-200 transition-colors hover:border-indigo-500/50 hover:bg-slate-800 hover:text-white"
            >
              Change
            </Button>
            <Button
              variant="outline"
              size="sm"
              type="button"
              className="rounded-xl border border-rose-500/30 bg-rose-500/10 px-3 py-1.5 text-xs font-semibold text-rose-300 transition-colors hover:border-rose-500/60 hover:bg-rose-500/20 hover:text-white"
            >
              Remove
            </Button>
          </div>
          <span className="text-xs font-medium text-muted-foreground">
            Recommended: 800x800px, max 5MB
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfilePhotoInput;