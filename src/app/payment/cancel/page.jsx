import PaymentResultPage from "@/components/payment/PaymentResultPage";

export const metadata = {
  title: "Payment canceled",
  description: "Your payment checkout was canceled.",
};

export default function PaymentCancelPage() {
  return <PaymentResultPage status="cancel" />;
}
