"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LoaderCircle } from "lucide-react";

export default function PaymentVerification({ invoiceId, children }) {
  const router = useRouter();
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    let isActive = true;

    async function verifyPayment() {
      if (!invoiceId) {
        router.replace("/payment/failed");
        return;
      }

      try {
        const response = await fetch(
          `/api/payment/callback?invoice_id=${encodeURIComponent(invoiceId)}`,
          { cache: "no-store" }
        );
        const result = await response.json();

        if (!response.ok || result.success !== true || result.data !== true) {
          router.replace("/payment/failed");
          return;
        }

        if (isActive) {
          setIsVerified(true);
        }
      } catch {
        router.replace("/payment/failed");
      }
    }

    verifyPayment();

    return () => {
      isActive = false;
    };
  }, [invoiceId, router]);

  if (isVerified) {
    return children;
  }

  return (
    <main
      className="flex min-h-svh items-center justify-center bg-slate-50 px-4 py-12"
      aria-live="polite"
      aria-busy="true"
    >
      <section className="w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-10">
        <LoaderCircle
          aria-hidden="true"
          className="mx-auto size-12 animate-spin text-primary"
        />
        <h1 className="mt-6 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Verifying your payment
        </h1>
        <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
          Please wait while we confirm your payment. Do not close this page.
        </p>
      </section>
    </main>
  );
}
