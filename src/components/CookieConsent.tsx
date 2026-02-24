"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";

const G = "#C9A84C";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Slight delay so it doesn't pop immediately on load
      const t = setTimeout(() => setShowBanner(true), 1500);
      return () => clearTimeout(t);
    }
  }, []);

  const handleConsent = (choice: "accepted" | "rejected") => {
    localStorage.setItem("cookie-consent", choice);
    setShowBanner(false);
  };

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          className="fixed bottom-5 left-1/2 z-[999]"
          style={{ translateX: "-50%", width: "min(95vw, 580px)" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div
            className="relative overflow-hidden"
            style={{
              background: "rgba(10,10,10,0.97)",
              border: `1px solid ${G}25`,
              borderRadius: "20px",
              backdropFilter: "blur(30px)",
              boxShadow: `0 30px 80px rgba(0,0,0,0.7), 0 0 0 1px ${G}08`,
            }}
          >
            {/* Gold top shimmer */}
            <div className="absolute top-0 left-0 right-0 h-px"
              style={{ background: `linear-gradient(90deg, transparent, ${G}, transparent)` }} />

            <div className="p-6">
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: `${G}15`, border: `1px solid ${G}40` }}>
                    🍪
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm tracking-wide"
                      style={{ fontFamily: "'Playfair Display', serif" }}>
                      Cookie Preferences
                    </p>
                    <p className="text-xs tracking-widest uppercase mt-0.5" style={{ color: G }}>
                      Elegante Bee Services
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleConsent("rejected")}
                  className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 hover:scale-110 mt-0.5"
                  style={{ border: `1px solid rgba(255,255,255,0.1)`, color: "rgba(255,255,255,0.3)" }}
                  aria-label="Close"
                >
                  <X size={12} />
                </button>
              </div>

              {/* Divider */}
              <div className="mb-4 h-px" style={{ background: `${G}12` }} />

              {/* Message */}
              <p className="text-white/50 text-sm leading-relaxed mb-5"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.97rem", lineHeight: "1.75" }}>
                We use cookies to enhance your browsing experience, personalize content, and analyze our traffic.
                By accepting, you agree to our use of cookies.{" "}
                <Link href="/privacy-policy" className="underline underline-offset-2 hover:text-white transition-colors duration-200"
                  style={{ color: G }}>
                  Learn more
                </Link>
              </p>

              {/* Buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleConsent("rejected")}
                  className="flex-1 py-2.5 rounded-full text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300"
                  style={{ border: `1px solid rgba(255,255,255,0.1)`, color: "rgba(255,255,255,0.4)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.25)";
                    (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.7)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                    (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.4)";
                  }}
                >
                  Decline
                </button>
                <button
                  onClick={() => handleConsent("accepted")}
                  className="flex-1 py-2.5 rounded-full text-xs tracking-[0.2em] uppercase font-bold transition-all duration-300 hover:opacity-90"
                  style={{ background: G, color: "#000" }}
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}