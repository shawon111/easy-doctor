import PaymentResultPage from "@/components/payment/PaymentResultPage";
import PaymentVerification from "@/components/payment/PaymentVerification";

export const metadata = {
  title: "Payment successful",
  description: "Your payment checkout is complete.",
};

export default async function PaymentSuccessPage({ searchParams }) {
  const params = await searchParams;

  return (
    <PaymentVerification invoiceId={params?.invoice_id ?? null}>
      <PaymentResultPage status="success" />
    </PaymentVerification>
  );
}
