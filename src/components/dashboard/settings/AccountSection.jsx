"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { uploadToCloudinary } from "@/lib/uploadToCloudinary";
import { saveAccountSettings } from "./settings-api";

export function AccountSection({ user }) {
  const router = useRouter();
  const queryClient = useQueryClient();
  const fileInputRef = useRef(null);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [profilePicture, setProfilePicture] = useState(user.profilePicture);
  const uploadMutation = useMutation({ mutationFn: uploadToCloudinary });
  const saveMutation = useMutation({
    mutationFn: saveAccountSettings,
    onSuccess: (updatedSettings) => {
      queryClient.setQueryData(["account-settings"], updatedSettings);
      setName(updatedSettings.name);
      setEmail(updatedSettings.email);
      setPhone(updatedSettings.phone);
      setProfilePicture(updatedSettings.profilePicture);
      toast.success("Account information saved.");
      router.refresh();
    },
    onError: (error) => toast.error(error.message || "Unable to save account details."),
  });

  async function handlePhotoChange(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      toast.error("Choose an image file.");
      event.target.value = "";
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      toast.error("Profile photos must be smaller than 5MB.");
      event.target.value = "";
      return;
    }

    try {
      const uploaded = await uploadMutation.mutateAsync(file);
      setProfilePicture(uploaded.url);
      toast.success("Photo uploaded. Save your changes to apply it.");
    } catch (error) {
      toast.error(error.message || "Photo upload failed.");
    } finally {
      event.target.value = "";
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    saveMutation.mutate({ name, email, phone, profilePicture });
  }

  return (
    <section
      id="account"
      className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5 shadow-sm sm:p-6"
    >
      <div className="mb-6 flex items-center justify-between border-b border-slate-800/80 pb-4">
        <div>
          <h2 className="text-base font-bold text-white">Account Information</h2>
          <p className="mt-0.5 text-xs text-slate-400">Personal doctor credentials and contact point</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-6 flex flex-col items-start gap-4 sm:mb-8 sm:flex-row sm:items-center sm:gap-6">
          {profilePicture ? (
            <Image
              src={profilePicture}
              alt="Profile photo"
              width={80}
              height={80}
              unoptimized
              className="h-20 w-20 rounded-2xl border border-slate-700/80 object-cover shadow-sm"
            />
          ) : (
            <div
              aria-label="No profile photo"
              className="flex h-20 w-20 items-center justify-center rounded-2xl border border-slate-700/80 bg-slate-900 text-2xl font-bold text-indigo-400 shadow-sm"
            >
              {name.trim().charAt(0).toUpperCase()}
            </div>
          )}
          <div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="sr-only"
              onChange={handlePhotoChange}
            />
            <Button
              type="button"
              variant="outline"
              size="sm"
              disabled={uploadMutation.isPending}
              onClick={() => fileInputRef.current?.click()}
              className="mb-2 rounded-xl border-slate-700 bg-slate-900 text-slate-200 hover:bg-slate-800 text-xs font-semibold"
            >
              {uploadMutation.isPending ? "Uploading..." : "Change Photo"}
            </Button>
            <p className="text-xs text-slate-400">JPG, GIF or PNG. Maximum size 5MB.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="settings-name" className="text-xs font-semibold text-slate-300">
              Full Name
            </label>
            <Input
              id="settings-name"
              required
              maxLength={120}
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="rounded-xl border-slate-800 bg-slate-900 text-white text-xs"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="settings-email" className="text-xs font-semibold text-slate-300">
              Email Address
            </label>
            <Input
              id="settings-email"
              type="email"
              required
              maxLength={254}
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="rounded-xl border-slate-800 bg-slate-900 text-white text-xs"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="settings-phone" className="text-xs font-semibold text-slate-300">
              Phone Number
            </label>
            <Input
              id="settings-phone"
              type="tel"
              maxLength={40}
              autoComplete="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              className="rounded-xl border-slate-800 bg-slate-900 text-white text-xs"
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <Button
            type="submit"
            disabled={saveMutation.isPending || uploadMutation.isPending}
            className="w-full rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-md shadow-indigo-600/20 sm:w-auto"
          >
            {saveMutation.isPending ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </form>
    </section>
  );
}
