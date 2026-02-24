"use client";
import Link from "next/link";
import { XCircle } from "lucide-react";

export default function CancelPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg p-12 max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          <XCircle className="text-red-500" size={80} />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Payment Cancelled
        </h1>
        <p className="text-gray-600 mb-8">
          Your payment was cancelled. No charges were made. 
          Please try again or contact us if you need help.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/payment-page">
            <button className="bg-brand-gold text-black font-semibold px-8 py-3 rounded-xl hover:bg-black hover:text-brand-gold transition">
              Try Again
            </button>
          </Link>
          <Link href="/contact">
            <button className="bg-gray-100 text-gray-800 font-semibold px-8 py-3 rounded-xl hover:bg-gray-200 transition">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}