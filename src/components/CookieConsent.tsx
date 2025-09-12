"use client";
import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user already made a choice
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleConsent = (choice: "accepted" | "rejected") => {
    localStorage.setItem("cookie-consent", choice);
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[95%] md:w-[600px] bg-black text-white rounded-lg shadow-lg p-4 flex flex-col md:flex-row items-center justify-between gap-4 z-50">
      <p className="text-sm">
        We use cookies to enhance your browsing experience. By continuing, you agree to our use of cookies.
      </p>
      <div className="flex gap-2">
        <button
          onClick={() => handleConsent("rejected")}
          className="bg-gray-500 hover:bg-gray-600 px-4 py-2 rounded-md text-sm transition"
        >
          Reject
        </button>
        <button
          onClick={() => handleConsent("accepted")}
          className="bg-brand-gold text-black hover:bg-black hover:text-brand-gold px-4 py-2 rounded-md text-sm transition"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
