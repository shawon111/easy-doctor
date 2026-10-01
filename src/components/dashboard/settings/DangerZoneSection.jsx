"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { deleteAccount } from "./settings-api";

export function DangerZoneSection({ email }) {
  const router = useRouter();
  const [isConfirming, setIsConfirming] = useState(false);
  const [confirmation, setConfirmation] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const deleteMutation = useMutation({
    mutationFn: deleteAccount,
    onSuccess: () => {
      toast.success("Your account has been deleted.");
      router.replace("/login");
    },
    onError: (error) => toast.error(error.message || "Unable to delete account."),
  });

  function handleDeleteAccount(event) {
    event.preventDefault();
    deleteMutation.mutate({ confirmation, currentPassword });
  }

  return (
    <section
      id="danger"
      className="rounded-2xl border border-[#FFDAD6] bg-white p-4 shadow-[0px_4px_12px_rgba(0,0,0,0.03)] sm:p-6"
    >
      <h2 className="mb-4 text-lg font-semibold text-[#BA1A1A]">Danger Zone</h2>
      <div className="flex flex-col items-stretch gap-4 rounded-lg border border-[#FED7D7] bg-[#FFF5F5] p-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-[#0F172A]">Delete Account</p>
          <p className="mt-1 text-sm text-[#64748B]">
            Permanently remove your account, website, appointments, and associated database data. This action cannot be undone.
          </p>
        </div>
        {!isConfirming ? (
          <Button
            type="button"
            onClick={() => setIsConfirming(true)}
            className="w-full bg-[#DC2626] text-white hover:bg-[#B91C1C] sm:w-auto"
          >
            Delete Account
          </Button>
        ) : null}
      </div>

      {isConfirming ? (
        <form
          onSubmit={handleDeleteAccount}
          className="mt-4 space-y-4 rounded-lg border border-[#FED7D7] bg-white p-4"
        >
          <p className="text-sm text-[#64748B]">
            To confirm deletion of <strong className="text-[#0F172A]">{email}</strong>, type DELETE and enter your current password.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="delete-confirmation" className="text-sm font-semibold text-[#0F172A]">
                Type DELETE to confirm
              </label>
              <Input
                id="delete-confirmation"
                required
                autoComplete="off"
                value={confirmation}
                onChange={(event) => setConfirmation(event.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="delete-current-password" className="text-sm font-semibold text-[#0F172A]">
                Current Password
              </label>
              <Input
                id="delete-current-password"
                type="password"
                autoComplete="current-password"
                required
                value={currentPassword}
                onChange={(event) => setCurrentPassword(event.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col-reverse justify-end gap-2 sm:flex-row">
            <Button
              type="button"
              variant="outline"
              disabled={deleteMutation.isPending}
              onClick={() => {
                setIsConfirming(false);
                setConfirmation("");
                setCurrentPassword("");
              }}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={deleteMutation.isPending || confirmation !== "DELETE"}
              className="bg-[#DC2626] text-white hover:bg-[#B91C1C]"
            >
              {deleteMutation.isPending ? "Deleting..." : "Permanently Delete Account"}
            </Button>
          </div>
        </form>
      ) : null}
    </section>
  );
}
