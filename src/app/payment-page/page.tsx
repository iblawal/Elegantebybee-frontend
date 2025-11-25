"use client";

import { useState, useEffect } from "react";
import { CreditCard, Lock, Shield, CheckCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function PaymentPage() {
  const router = useRouter();

  const [region, setRegion] = useState<"US" | null>(null);
  const [isReady, setIsReady] = useState(false); 
  const [amount, setAmount] = useState(700);
  const [selectedPackage, setSelectedPackage] = useState("100-250");
  const [isProcessing, setIsProcessing] = useState(false);

  const packages = [
    { id: "100-250", name: "100–250 Guests (Maryland)", price: 700, description: "Perfect for medium-sized events" },
    { id: "251+", name: "251+ Guests (Maryland)", price: 1000, description: "Large event coverage" },
    { id: "red-carpet", name: "Red Carpet (1hr)", price: 175, description: "Premium arrival experience" },
    { id: "confirmations", name: "Confirmations (8)", price: 100, description: "Guest confirmation service" },
    { id: "birthday", name: "Birthday Shoutout", price: 75, description: "Social media advertising" },
  ];

  useEffect(() => {
    // Runs ONLY on client
    const saved = localStorage.getItem("region");

    if (!saved || saved !== "US") {
      router.replace("/request-quote");
      return;
    }

    setRegion("US");
    setIsReady(true);
  }, [router]);

  const handlePayment = async () => {
    setIsProcessing(true);

    try {
      const res = await fetch("/api/stripe-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      });

      const data = await res.json();
      window.location.href = data.url;
    } catch (err) {
      console.error(err);
      alert("Payment error. Try again.");
      setIsProcessing(false);
    }
  };

  
  if (!isReady) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Preparing secure checkout...</p>
        </div>
      </div>
    );
  }

  const selectedPkg = packages.find(p => p.id === selectedPackage);
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <Link
            href="/request-quote"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-4"
          >
            <ArrowLeft size={20} />
            <span>Back to Quote</span>
          </Link>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
              <CreditCard className="text-yellow-600" size={32} strokeWidth={2} />
            </div>

            <h1 className="text-2xl font-bold text-gray-700 mb-2">Complete Your Payment</h1>
            <p className="text-gray-500 text-lg">Secure checkout for your event booking</p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">

          {}
          <div className="lg:col-span-2 space-y-6">

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-700 text-lg font-bold">
                  1
                </div>
                <h2 className="text-1xl font-bold text-gray-700">Select Your Package</h2>
              </div>

              <div className="space-y-3">
                {packages.map((pkg) => (
                  <button
                    key={pkg.id}
                    onClick={() => {
                      setSelectedPackage(pkg.id);
                      setAmount(pkg.price);
                    }}
                    className={`w-full text-left p-5 rounded-xl border-2 transition-all duration-200 ${
                      selectedPackage === pkg.id
                        ? "border-yellow-500 bg-yellow-50 shadow-md"
                        : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-gray-900">{pkg.name}</p>
                        <p className="text-sm text-gray-500">{pkg.description}</p>
                      </div>

                      <div className="flex items-center gap-3">
                        <p className="text-xl font-bold">${pkg.price}</p>
                        {selectedPackage === pkg.id && (
                          <CheckCircle className="text-yellow-500" size={24} />
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {}
            <div className="flex items-center justify-center gap-8 text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <Shield size={18} /> SSL Encrypted
              </div>
              <div className="flex items-center gap-2">
                <Lock size={18} /> Secure Payment
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={18} /> 100% Safe
              </div>
            </div>
          </div>

          {}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 sticky top-6">

              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center text-brand-gold text-lg font-bold">
                  2
                </div>
                <h2 className="text-1xl font-bold text-gray-800">Summary</h2>
              </div>

              <div className="space-y-4 mb-6">

                <div className="pb-4 border-b border-gray-200">
                  <p className="text-sm text-gray-500">Selected Package</p>
                  <p className="font-semibold text-gray-600">
                    {selectedPkg?.name}
                  </p>
                </div>

                <div className="pb-4 border-b border-gray-200">
                  <p className="text-sm text-gray-500">Region</p>
                  <p className="font-semibold text-gray-600">US  United States</p>
                </div>

                <div>
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>${amount}</span>
                  </div>

                  <div className="flex justify-between text-gray-600 text-sm">
                    <span>Processing fee</span>
                    <span>Included</span>
                  </div>
                </div>

                <div className="pt-4 border-t-2 border-gray-900">
                  <div className="flex justify-between items-baseline">
                    <span className="text-lg font-semibold text-gray-900">Total</span>
                    <span className="text-lg font-bold text-gray-900">${amount}</span>
                  </div>
                  <p className="text-xs text-gray-500 text-right">All taxes included</p>
                </div>
              </div>

                <button
                  onClick={handlePayment}
                  disabled={isProcessing}
                  className={`w-full py-3 rounded-lg text-white font-semibold transition-colors flex items-center justify-center gap-2 ${
                    isProcessing
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-brand-gold hover:bg-black"
                  }`}
                >
                  {isProcessing ? (
                    <>
                       <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                       <span>Processing..</span>
                    </>
                  ) : (
                    <>
                    <Lock size={16} />
                    <span>Pay ${amount} Now</span>
                    </>
                  )}
                </button> 
              <p className="text-center text-gray-500 text-xs mt-4">
                Your payment information is secure and encrypted
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm mb-4">Powered by trusted payment providers</p>

          <div className="flex items-center justify-center gap-8">
            <div className="px-6 py-3 bg-white rounded-lg border border-gray-200">
              <span className="text-gray-500 font-bold text-sm">
                STRIPE
              </span>
            </div>

            <div className="px-6 py-3 bg-white rounded-lg border border-gray-200">
              <span className="text-gray-500 font-bold text-sm">
                256-BIT SSL
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
