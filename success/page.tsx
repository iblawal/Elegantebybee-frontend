"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const session_id = searchParams.get("session_id");

    if (session_id) {
      fetch("http://127.0.0.1:8000/api/verify-stripe-payment/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          session_id,
          name: "Customer",
          package: localStorage.getItem("selectedPackage") || "",
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) setVerified(true);
        })
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg p-12 max-w-md w-full text-center">
        {loading ? (
          <>
            <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Verifying your payment...</p>
          </>
        ) : (
          <>
            <div className="flex justify-center mb-6">
              <CheckCircle className="text-green-500" size={80} />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Payment Successful!
            </h1>
            <p className="text-gray-600 mb-8">
              Thank you for your payment. We have received your booking and
              will be in touch shortly to confirm your event details.
            </p>
            <Link href="/">
              <button className="bg-brand-gold text-black font-semibold px-8 py-3 rounded-xl hover:bg-black hover:text-brand-gold transition">
                Back to Home
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}