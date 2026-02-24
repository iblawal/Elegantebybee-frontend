"use client";
import { useState, useEffect } from "react";
import { CreditCard, Lock, Shield, CheckCircle, ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, Variants } from "framer-motion";

const G = "#C9A84C";
const fadeUp: Variants = { hidden: { opacity: 0, y: 25 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

const packages = [
  { id: "100-250", name: "100–250 Guests (Maryland)", price: 700, description: "Perfect for medium-sized events" },
  { id: "251+", name: "251+ Guests (Maryland)", price: 1000, description: "Large event coverage" },
  { id: "red-carpet", name: "Red Carpet (1hr)", price: 175, description: "Premium arrival experience" },
  { id: "confirmations", name: "Confirmations (8)", price: 100, description: "Guest confirmation service" },
  { id: "birthday", name: "Birthday Shoutout", price: 75, description: "Social media advertising" },
];

export default function PaymentPage() {
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);
  const [amount, setAmount] = useState(700);
  const [selectedPackage, setSelectedPackage] = useState("100-250");
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("region");
    if (!saved || saved !== "US") { router.replace("/request-quote"); return; }
    setIsReady(true);
  }, [router]);

  const handlePayment = async () => {
    setIsProcessing(true);
    try {
      localStorage.setItem("selectedPackage", selectedPkg?.name || "");
      const res = await fetch("/api/create-checkout-session", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, name: "Event Booking", email: "" }),
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
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#080808" }}>
        <div className="text-center">
          <div className="w-14 h-14 rounded-full border-2 border-t-transparent animate-spin mx-auto mb-4" style={{ borderColor: `${G} transparent transparent transparent` }} />
          <p className="text-white/40 text-sm tracking-widest uppercase">Preparing checkout...</p>
        </div>
      </div>
    );
  }

  const selectedPkg = packages.find((p) => p.id === selectedPackage);

  return (
    <div className="min-h-screen" style={{ background: "#080808" }}>

      {/* Header */}
      <div className="pt-28 pb-10 text-center px-6" style={{ borderBottom: `1px solid ${G}12` }}>
        <Link href="/request-quote" className="inline-flex items-center gap-2 text-xs tracking-widest uppercase mb-8 transition-colors duration-300 hover:opacity-70"
          style={{ color: G }}>
          <ArrowLeft size={14} /> Back to Quote
        </Link>
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ background: `${G}18`, border: `1px solid ${G}30` }}>
          <CreditCard size={26} style={{ color: G }} />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Complete Your Payment</h1>
        <p className="text-white/40 text-sm" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem" }}>Secure checkout for your event booking</p>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-14">
        <motion.div className="grid lg:grid-cols-3 gap-8" initial="hidden" animate="show" variants={stagger}>

          {/* Left — Package Selection */}
          <div className="lg:col-span-2 space-y-4">
            <motion.div variants={fadeUp}>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-black" style={{ background: G }}>1</span>
                <h2 className="text-lg font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Select Your Package</h2>
              </div>

              <div className="space-y-3">
                {packages.map((pkg) => {
                  const active = selectedPackage === pkg.id;
                  return (
                    <button key={pkg.id} onClick={() => { setSelectedPackage(pkg.id); setAmount(pkg.price); }}
                      className="w-full text-left p-5 rounded-2xl transition-all duration-300"
                      style={{
                        background: active ? `${G}10` : "rgba(255,255,255,0.03)",
                        border: `1px solid ${active ? G + "60" : G + "12"}`,
                      }}>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-white mb-0.5" style={{ fontFamily: "'Playfair Display', serif" }}>{pkg.name}</p>
                          <p className="text-xs text-white/35">{pkg.description}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-xl font-bold" style={{ color: G, fontFamily: "'Playfair Display', serif" }}>${pkg.price}</span>
                          {active && <CheckCircle size={20} style={{ color: G }} />}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>

            {/* Trust badges */}
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-8 pt-4">
              {[{ icon: <Shield size={15} />, label: "SSL Encrypted" }, { icon: <Lock size={15} />, label: "Secure Payment" }, { icon: <CheckCircle size={15} />, label: "100% Safe" }].map((b, i) => (
                <div key={i} className="flex items-center gap-2 text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
                  {b.icon} {b.label}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Summary */}
          <motion.div variants={fadeUp} className="lg:col-span-1">
            <div className="sticky top-8 p-6 rounded-2xl" style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${G}18` }}>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-black" style={{ background: G }}>2</span>
                <h2 className="text-lg font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Summary</h2>
              </div>

              <div className="space-y-4 mb-6">
                <div className="pb-4" style={{ borderBottom: `1px solid ${G}12` }}>
                  <p className="text-xs tracking-widest uppercase mb-1" style={{ color: `${G}60` }}>Selected Package</p>
                  <p className="text-white text-sm font-semibold">{selectedPkg?.name}</p>
                </div>
                <div className="pb-4" style={{ borderBottom: `1px solid ${G}12` }}>
                  <p className="text-xs tracking-widest uppercase mb-1" style={{ color: `${G}60` }}>Region</p>
                  <p className="text-white text-sm font-semibold">🇺🇸 United States</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-white/50">
                    <span>Subtotal</span><span>${amount}</span>
                  </div>
                  <div className="flex justify-between text-xs text-white/30">
                    <span>Processing fee</span><span>Included</span>
                  </div>
                </div>
                <div className="pt-4" style={{ borderTop: `1px solid ${G}25` }}>
                  <div className="flex justify-between items-center">
                    <span className="text-white font-bold">Total</span>
                    <span className="text-2xl font-bold" style={{ color: G, fontFamily: "'Playfair Display', serif" }}>${amount}</span>
                  </div>
                  <p className="text-white/25 text-xs mt-1">All taxes included</p>
                </div>
              </div>

              <button onClick={handlePayment} disabled={isProcessing}
                className="w-full py-3.5 rounded-full font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50"
                style={{ background: isProcessing ? "#444" : G, color: "#000" }}>
                {isProcessing ? (
                  <><div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" /><span>Processing...</span></>
                ) : (
                  <><Lock size={14} /><span>Pay ${amount} Now</span><ArrowUpRight size={14} /></>
                )}
              </button>

              <p className="text-center text-white/25 text-xs mt-4">Your information is secure &amp; encrypted</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Powered by */}
        <div className="mt-14 text-center">
          <p className="text-white/25 text-xs tracking-widest uppercase mb-5">Powered by trusted payment providers</p>
          <div className="flex items-center justify-center gap-6">
            {["STRIPE", "256-BIT SSL"].map((label, i) => (
              <div key={i} className="px-6 py-3 rounded-xl text-xs font-bold tracking-widest" style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${G}12`, color: "rgba(255,255,255,0.3)" }}>
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
