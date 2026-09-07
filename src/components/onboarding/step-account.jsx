"use client";

import { useState } from "react";
import Image from "next/image";
import { useFormContext } from "react-hook-form";
import toast from "react-hot-toast";
import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { uploadToCloudinary } from "@/lib/uploadToCloudinary";
import { Field, TextField } from "./form-field";

export function StepAccount({ register, errors }) {
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
    try {
      const uploaded = await uploadToCloudinary(file);
      setValue("profilePicture", uploaded.url, { shouldValidate: true, shouldDirty: true });
      toast.success("Profile picture uploaded.");
    } catch (error) {
      toast.error(error.message || "Profile picture upload failed.");
    } finally {
      setUploading(false);
      event.target.value = "";
    }
  }

  return (
    <div className="space-y-4">
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
          placeholder="you@clinic.com"
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
          placeholder="••••••••"
          error={errors.password?.message}
          {...register("password")}
        />
      </Field>

      <Field
        label="Phone"
        htmlFor="phone"
        optional
        error={errors.phone?.message}
      >
        <TextField
          id="phone"
          type="tel"
          placeholder="+1 555 000 0000"
          error={errors.phone?.message}
          {...register("phone")}
        />
      </Field>

      <Field
        label="Profile picture"
        htmlFor="profilePicture"
        optional
        error={errors.profilePicture?.message}
      >
        <div className="flex items-center gap-3">
          {profilePicture ? (
            <Image
              src={profilePicture}
              alt="Profile preview"
              width={56}
              height={56}
              className="size-14 rounded-full object-cover"
            />
          ) : null}
          <Button type="button" variant="outline" disabled={uploading} asChild>
            <label htmlFor="profilePicture" className="cursor-pointer">
              <Upload className="size-4" />
              {uploading ? "Uploading..." : profilePicture ? "Change picture" : "Upload picture"}
            </label>
          </Button>
          <input id="profilePicture" type="file" accept="image/*" className="sr-only" onChange={handleImageChange} />
        </div>
      </Field>
    </div>
  );
}
