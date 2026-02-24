"use client";
import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const G = "#C9A84C";
const fadeUp: Variants = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } };
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

const usPrices = [
  { service: "100–250 guests (Maryland)", price: "$700" },
  { service: "251+ guests (Maryland)", price: "$1,000" },
  { service: "Confirmations (8)", price: "$100" },
  { service: "Red Carpet (1hr)", price: "$175" },
  { service: "2-Day Event", price: "Call 240-604-0025" },
  { service: "Outside DMV + Flight & Hotel by Host", price: "Call 240-604-0025" },
  { service: "Extra mileage (over 40 miles)", price: "+$150" },
  { service: "Advertising: Birthday Shoutout", price: "$75" },
  { service: "Business Advert (2 posts/week)", price: "Contact for Pricing" },
];

export default function RequestQuotePage() {
  const [region, setRegion] = useState<"US" | "NG" | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({ first_name: "", last_name: "", phone: "", email: "", service: "", message: "" });

  const nigeriaPhone = "09167796186";
  const nigeriaEmail = "elegantebybee@gmail.com";

  useEffect(() => {
    const saved = localStorage.getItem("region");
    if (saved === "US" || saved === "NG") { setRegion(saved); setShowModal(false); }
    else setShowModal(true);
  }, []);

  const handleRegionSelect = (r: "US" | "NG") => {
    setRegion(r); localStorage.setItem("region", r); setShowModal(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setLoading(true); setSuccess(""); setError("");
    try {
      const res = await fetch("http://127.0.0.1:8000/api/request-quote/", {
        method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) { setSuccess(data.message); setFormData({ first_name: "", last_name: "", phone: "", email: "", service: "", message: "" }); window.scrollTo({ top: 0, behavior: "smooth" }); }
      else setError("Something went wrong. Please check your inputs and try again.");
    } catch { setError("Could not connect to server. Please try again later."); }
    finally { setLoading(false); }
  };

  const inp = "w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300 bg-white/5 text-white placeholder-white/25";
  const inpStyle = { border: `1px solid ${G}22` };

  return (
    <div className="flex flex-col min-h-screen" style={{ background: "#0A0A0A" }}>

      {/* Region Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4" style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(12px)" }}>
          <div className="w-full max-w-sm p-8 rounded-2xl text-center" style={{ background: "#111", border: `1px solid ${G}25` }}>
            <div className="h-[2px] w-12 mx-auto mb-6" style={{ background: G }} />
            <h2 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Select Your Region</h2>
            <p className="text-white/40 text-sm mb-8">We'll tailor your experience based on your location.</p>
            <div className="grid grid-cols-2 gap-3">
              {(["US", "NG"] as const).map((r) => (
                <button key={r} onClick={() => handleRegionSelect(r)}
                  className="py-4 rounded-xl font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-90"
                  style={{ background: r === "US" ? G : "rgba(255,255,255,0.05)", color: r === "US" ? "#000" : "rgba(255,255,255,0.6)", border: r === "NG" ? `1px solid ${G}20` : "none" }}>
                  {r === "US" ? "🇺🇸 United States" : "🇳🇬 Nigeria"}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <Hero title="Request a Quote" subtitle="Get the best packages tailored for your event in the US and Nigeria." bgImage="/request-quote-hero.jpg" />

      <main className="max-w-5xl mx-auto w-full px-6 py-16 flex-1">

        {/* Region Switcher */}
        {region && (
          <div className="mb-10 flex justify-end items-center gap-3">
            <span className="text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.3)" }}>Region:</span>
            {(["US", "NG"] as const).map((r) => (
              <button key={r} onClick={() => handleRegionSelect(r)}
                className="px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all"
                style={{ background: region === r ? G : "rgba(255,255,255,0.05)", color: region === r ? "#000" : "rgba(255,255,255,0.4)", border: region !== r ? `1px solid ${G}15` : "none" }}>
                {r === "US" ? "🇺🇸 US" : "🇳🇬 NG"}
              </button>
            ))}
          </div>
        )}

        {/* Messages */}
        {success && (
          <div className="mb-6 p-4 rounded-xl flex items-center gap-3" style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)", color: "#22c55e" }}>
            <CheckCircle2 size={18} /> {success}
          </div>
        )}
        {error && (
          <div className="mb-6 p-4 rounded-xl text-red-400" style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)" }}>{error}</div>
        )}

        {/* Form */}
        <motion.form onSubmit={handleSubmit} initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          <motion.div variants={fadeUp} className="mb-8">
            <span className="text-xs tracking-[0.5em] uppercase block mb-2" style={{ color: G }}>Step 01</span>
            <h2 className="text-2xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Your Details</h2>
            <div className="h-[2px] w-10 mt-3" style={{ background: G }} />
          </motion.div>

          <div className="p-8 rounded-2xl mb-6" style={{ background: "rgba(255,255,255,0.02)", border: `1px solid ${G}12` }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { label: "First Name", name: "first_name", type: "text", required: true, span: false },
                { label: "Last Name", name: "last_name", type: "text", required: true, span: false },
                { label: "Phone", name: "phone", type: "tel", required: true, span: false },
                { label: "Email", name: "email", type: "email", required: true, span: false },
                { label: "Service Required", name: "service", type: "text", required: true, span: true, placeholder: "e.g. Wedding, Birthday, Corporate Event" },
              ].map((f, i) => (
                <motion.div key={i} variants={fadeUp} className={f.span ? "col-span-2" : ""}>
                  <label className="block text-xs tracking-widest uppercase mb-2 font-medium" style={{ color: G }}>{f.label}</label>
                  <input type={f.type} name={f.name} value={formData[f.name as keyof typeof formData]}
                    onChange={handleChange} required={f.required} placeholder={(f as { placeholder?: string }).placeholder || ""}
                    className={inp} style={inpStyle} />
                </motion.div>
              ))}
              <motion.div variants={fadeUp} className="col-span-2">
                <label className="block text-xs tracking-widest uppercase mb-2 font-medium" style={{ color: G }}>Event Details</label>
                <textarea rows={4} name="message" value={formData.message} onChange={handleChange} required
                  placeholder="Describe your event, date, location, guest count, any special requests..."
                  className={inp} style={{ ...inpStyle, resize: "none" }} />
              </motion.div>
            </div>
          </div>

          <motion.div variants={fadeUp} className="text-center mb-16">
            <button type="submit" disabled={loading}
              className="inline-flex items-center gap-3 px-10 py-4 font-bold rounded-full text-sm tracking-widest uppercase transition-all duration-300 hover:gap-5 disabled:opacity-50"
              style={{ background: loading ? "#444" : G, color: "#000" }}>
              {loading ? "Submitting..." : "Submit Request"} {!loading && <ArrowUpRight size={15} />}
            </button>
            <p className="text-white/25 text-xs mt-3">We respond within 24 hours</p>
          </motion.div>
        </motion.form>

        {/* US Price List */}
        {region === "US" && (
          <motion.section initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            className="relative rounded-2xl overflow-hidden mb-10"
            style={{ backgroundImage: "url('/request-quote-price-list-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.82)" }} />
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg,transparent,${G},transparent)` }} />
            <div className="relative z-10 p-8">
              <motion.div variants={fadeUp} className="text-center mb-8">
                <span className="text-xs tracking-[0.5em] uppercase block mb-2" style={{ color: G }}>US Pricing</span>
                <h2 className="text-2xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Price List</h2>
                <div className="h-[2px] w-10 mx-auto mt-3" style={{ background: G }} />
              </motion.div>
              <div className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${G}20` }}>
                <table className="w-full">
                  <thead>
                    <tr style={{ background: G }}>
                      <th className="px-6 py-3.5 text-left text-xs font-bold tracking-widest uppercase text-black">Service</th>
                      <th className="px-6 py-3.5 text-right text-xs font-bold tracking-widest uppercase text-black">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {usPrices.map((row, i) => (
                      <tr key={i} style={{ borderTop: `1px solid ${G}12`, background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent" }}>
                        <td className="px-6 py-4 text-sm text-white/70">{row.service}</td>
                        <td className="px-6 py-4 text-sm text-right font-semibold" style={{ color: G }}>{row.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.section>
        )}

        {/* Nigeria */}
        {region === "NG" && (
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="p-8 rounded-2xl text-center mb-10" style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${G}15` }}>
            <span className="text-xs tracking-[0.5em] uppercase block mb-3" style={{ color: G }}>Nigeria</span>
            <h2 className="text-xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Contact for Pricing</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${nigeriaPhone}`} className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all"
                style={{ background: G, color: "#000" }}>📞 {nigeriaPhone}</a>
              <a href={`mailto:${nigeriaEmail}`} className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all"
                style={{ border: `1px solid ${G}40`, color: G }}>✉️ {nigeriaEmail}</a>
            </div>
          </motion.div>
        )}

        {/* Payment CTA for US */}
        {region === "US" && (
          <div className="text-center">
            <Link href="/payment-page"
              className="inline-flex items-center gap-3 px-10 py-4 font-bold rounded-full text-sm tracking-widest uppercase transition-all duration-300 hover:gap-5"
              style={{ background: G, color: "#000" }}>
              Proceed to Payment <ArrowUpRight size={15} />
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}