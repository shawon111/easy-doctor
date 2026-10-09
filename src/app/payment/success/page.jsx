import PaymentResultPage from "@/components/payment/PaymentResultPage";

export const metadata = {
  title: "Payment successful",
  description: "Your payment checkout is complete.",
};

export default function PaymentSuccessPage() {
  return <PaymentResultPage status="success" />;
}
