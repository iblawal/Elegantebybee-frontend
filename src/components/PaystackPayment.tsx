"use client";

interface PaystackPaymentProps {
  email: string;
  amount: number;
  name?: string;
  onSuccess?: (transaction: any) => void;
  onCancel?: () => void;
}

export default function PaystackPayment({
  email,
  amount,
  name = "Customer",
  onSuccess,
  onCancel,
}: PaystackPaymentProps) {
  const payWithPaystack = () => {
    const PaystackPop = (window as any).PaystackPop;

    const handler = PaystackPop.setup({
      key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY as string,
      email,
      amount: amount * 100,
      onClose: () => {
        if (onCancel) onCancel();
        alert("Payment cancelled");
      },
      callback: async (response: any) => {
        try {
          await fetch("http://127.0.0.1:8000/api/verify-paystack-payment/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              reference: response.reference,
              email,
              amount,
              name,
            }),
          });
        } catch (err) {
          console.error("Failed to record Paystack payment:", err);
        }

        if (onSuccess) onSuccess(response);
        alert("Payment Successful!");
      },
    });

    handler.openIframe();
  };

  return (
    <>
      <script src="https://js.paystack.co/v1/inline.js" async />
      <button
        onClick={payWithPaystack}
        className="bg-brand-gold text-black font-semibold px-8 py-3 rounded-xl hover:bg-black hover:text-brand-gold transition w-full"
      >
        Pay ₦{amount} Now
      </button>
    </>
  );
}