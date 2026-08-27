import React from "react";
import { Button } from "@/components/ui/button";

const ProfilePhotoInput = ({ src, name }) => {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-foreground">Profile Photo</label>
      <div className="flex items-center gap-6">
        <div className="group relative h-24 w-24 flex-shrink-0 cursor-pointer overflow-hidden rounded-full border-2 border-card bg-muted shadow-sm">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt="Current Profile Photo"
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
            <Button variant="outline" size="sm" type="button">
              Change
            </Button>
            <Button
              variant="ghost"
              size="sm"
              type="button"
              className="text-destructive hover:bg-destructive/20 hover:text-destructive"
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