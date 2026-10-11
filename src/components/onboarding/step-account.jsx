"use client";

import { useState } from "react";
import Image from "next/image";
import { useFormContext } from "react-hook-form";
import toast from "react-hot-toast";
import { Camera, Check, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { uploadToCloudinary } from "@/lib/uploadToCloudinary";
import { Field, TextField } from "./form-field";

export function StepAccount({ register, errors, setIsUploading }) {
  const { setValue, watch } = useFormContext();
  const [uploading, setUploading] = useState(false);
  const profilePicture = watch("profilePicture");

  async function handleImageChange(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      toast.error("Profile pictures must be smaller than 5MB.");
      return;
    }

    setUploading(true);
    setIsUploading(true)
    try {
      const uploaded = await uploadToCloudinary(file);
      setValue("profilePicture", uploaded.url, { shouldValidate: true, shouldDirty: true });
      toast.success("Profile picture uploaded.");
    } catch (error) {
      toast.error(error.message || "Profile picture upload failed.");
    } finally {
      setUploading(false);
      setIsUploading(false)
      event.target.value = "";
    }
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-5 sm:grid-cols-2">
      <Field
        label="Full name"
        htmlFor="name"
        required
        error={errors.name?.message}
      >
        <TextField
          id="name"
          placeholder="Dr. Jane Smith"
          error={errors.name?.message}
          {...register("name")}
        />
      </Field>

      <Field
        label="Email"
        htmlFor="email"
        required
        error={errors.email?.message}
      >
        <TextField
          id="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          error={errors.email?.message}
          {...register("email")}
        />
      </Field>

      <Field
        label="Password"
        htmlFor="password"
        required
        hint="At least 8 characters"
        error={errors.password?.message}
      >
        <TextField
          id="password"
          type="password"
          autoComplete="new-password"
          placeholder="••••••••"
          error={errors.password?.message}
          {...register("password")}
        />
      </Field>

      <Field
        label="Phone Number"
        htmlFor="phone"
        required
        error={errors.phone?.message}
      >
        <TextField
          id="phone"
          type="tel"
          autoComplete="tel"
          placeholder="Include country code"
          error={errors.phone?.message}
          {...register("phone")}
        />
      </Field>
      </div>

      <Field
        label="Professional photo"
        htmlFor="profilePicture"
        optional
        error={errors.profilePicture?.message}
      >
        <div className="flex flex-col gap-4 rounded-2xl border border-dashed border-slate-300 bg-slate-50/70 p-4 sm:flex-row sm:items-center">
          <div className="flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white text-slate-400 shadow-sm">
            {profilePicture ? (
              <Image src={profilePicture} alt="Profile preview" width={64} height={64} className="size-16 object-cover" />
            ) : (
              <Camera className="size-6" />
            )}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-slate-800">
              {profilePicture ? "Your photo is ready" : "Add a friendly, professional photo"}
            </p>
            <p className="mt-1 text-xs text-slate-500">JPG or PNG, up to 5 MB. You can add this later too.</p>
          </div>
          <Button type="button" variant="outline" disabled={uploading} asChild className="h-10 rounded-xl bg-white">
            <label htmlFor="profilePicture" className="cursor-pointer">
              {profilePicture ? <Check className="size-4" /> : <Upload className="size-4" />}
              {uploading ? "Uploading..." : profilePicture ? "Change photo" : "Choose photo"}
            </label>
          </Button>
          <input
            id="profilePicture"
            type="file"
            accept="image/*"
            className="sr-only"
            onChange={handleImageChange}
          />
        </div>
      </Field>
    </div>
  );
}
