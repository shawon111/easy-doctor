import PaymentResultPage from "@/components/payment/PaymentResultPage";

export const metadata = {
  title: "Payment failed",
  description: "Your payment could not be verified.",
};

export default function PaymentFailedPage() {
  return <PaymentResultPage status="failed" />;
}
