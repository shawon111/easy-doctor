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
      className="rounded-2xl border border-rose-500/30 bg-slate-950/80 p-5 shadow-sm sm:p-6"
    >
      <div className="mb-5 flex items-center justify-between border-b border-rose-500/20 pb-4">
        <div>
          <h2 className="text-base font-bold text-rose-400">Danger Zone</h2>
          <p className="mt-0.5 text-xs text-slate-400">Irreversible account cancellation and practice data purging</p>
        </div>
      </div>

      <div className="flex flex-col items-stretch gap-4 rounded-xl border border-rose-500/20 bg-rose-500/5 p-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-bold text-rose-300">Delete Account & Clinical Presence</p>
          <p className="mt-1 text-xs text-slate-400">
            Permanently remove your doctor account, published website, patient records, and appointments.
          </p>
        </div>
        {!isConfirming ? (
          <Button
            type="button"
            onClick={() => setIsConfirming(true)}
            className="w-full rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold shadow-md shadow-rose-600/20 sm:w-auto"
          >
            Delete Account
          </Button>
        ) : null}
      </div>

      {isConfirming ? (
        <form
          onSubmit={handleDeleteAccount}
          className="mt-4 space-y-4 rounded-xl border border-rose-500/30 bg-slate-900/60 p-4"
        >
          <p className="text-xs text-slate-400">
            To confirm deletion of <strong className="text-white font-mono">{email}</strong>, type <span className="font-mono text-rose-400 font-bold">DELETE</span> and enter your current password.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="delete-confirmation" className="text-xs font-semibold text-slate-300">
                Type DELETE to confirm
              </label>
              <Input
                id="delete-confirmation"
                required
                autoComplete="off"
                value={confirmation}
                onChange={(event) => setConfirmation(event.target.value)}
                className="rounded-xl border-slate-800 bg-slate-900 text-white font-mono text-xs"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="delete-current-password" className="text-xs font-semibold text-slate-300">
                Current Password
              </label>
              <Input
                id="delete-current-password"
                type="password"
                autoComplete="current-password"
                required
                value={currentPassword}
                onChange={(event) => setCurrentPassword(event.target.value)}
                className="rounded-xl border-slate-800 bg-slate-900 text-white text-xs"
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
              className="rounded-xl border-slate-700 bg-slate-900 text-slate-200 hover:bg-slate-800 text-xs font-semibold"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={deleteMutation.isPending || confirmation !== "DELETE"}
              className="rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold shadow-md shadow-rose-600/20"
            >
              {deleteMutation.isPending ? "Deleting..." : "Permanently Delete Account"}
            </Button>
          </div>
        </form>
      ) : null}
    </section>
  );
}
