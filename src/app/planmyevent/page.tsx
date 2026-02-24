"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const G = "#C9A84C";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

type FormData = {
  first_name: string; last_name: string; email: string; phone: string;
  event_occasion: string; event_location: string; event_date: string;
  venue: string; theme_of_decor: string; expected_guests: string; budget: string;
  food_nigerian_dishes: boolean; food_oriental_dishes: boolean;
  food_continental_dishes: boolean; food_desserts: boolean;
  food_finger_foods: boolean; food_other: boolean;
  drinks_alcoholic_cocktails: boolean; drinks_non_alcoholic_cocktails: boolean;
  drinks_alcoholic: boolean; drinks_non_alcoholic: boolean;
  drinks_red_wine: boolean; drinks_champagne: boolean; drinks_other: boolean;
  beverages_tea: boolean; beverages_coffee: boolean; beverages_cappuccino: boolean;
  beverages_hot_chocolate: boolean; beverages_other: boolean;
  service_event_coordination: boolean; service_marquee_rental: boolean;
  service_photography: boolean; service_videography: boolean;
  service_live_band: boolean; message: string;
};

const initialForm: FormData = {
  first_name: "", last_name: "", email: "", phone: "",
  event_occasion: "", event_location: "", event_date: "",
  venue: "", theme_of_decor: "", expected_guests: "", budget: "",
  food_nigerian_dishes: false, food_oriental_dishes: false,
  food_continental_dishes: false, food_desserts: false,
  food_finger_foods: false, food_other: false,
  drinks_alcoholic_cocktails: false, drinks_non_alcoholic_cocktails: false,
  drinks_alcoholic: false, drinks_non_alcoholic: false,
  drinks_red_wine: false, drinks_champagne: false, drinks_other: false,
  beverages_tea: false, beverages_coffee: false, beverages_cappuccino: false,
  beverages_hot_chocolate: false, beverages_other: false,
  service_event_coordination: false, service_marquee_rental: false,
  service_photography: false, service_videography: false,
  service_live_band: false, message: "",
};

const serviceGroups = [
  {
    category: "Food",
    items: [
      { label: "Nigerian Dishes", name: "food_nigerian_dishes" },
      { label: "Oriental Dishes", name: "food_oriental_dishes" },
      { label: "Continental Dishes", name: "food_continental_dishes" },
      { label: "Desserts", name: "food_desserts" },
      { label: "Finger Foods", name: "food_finger_foods" },
      { label: "Other Dishes", name: "food_other" },
    ],
  },
  {
    category: "Drinks",
    items: [
      { label: "Alcoholic Cocktails", name: "drinks_alcoholic_cocktails" },
      { label: "Non-Alcoholic Cocktails", name: "drinks_non_alcoholic_cocktails" },
      { label: "Alcoholic Drinks", name: "drinks_alcoholic" },
      { label: "Non-Alcoholic Drinks", name: "drinks_non_alcoholic" },
      { label: "Red Wine", name: "drinks_red_wine" },
      { label: "Champagne", name: "drinks_champagne" },
      { label: "Others", name: "drinks_other" },
    ],
  },
  {
    category: "Beverages",
    items: [
      { label: "Tea", name: "beverages_tea" },
      { label: "Coffee", name: "beverages_coffee" },
      { label: "Cappuccino", name: "beverages_cappuccino" },
      { label: "Hot Chocolate", name: "beverages_hot_chocolate" },
      { label: "Other Drinks", name: "beverages_other" },
    ],
  },
  {
    category: "Other Services",
    items: [
      { label: "Event Coordination", name: "service_event_coordination" },
      { label: "Marquee Rental / Hire", name: "service_marquee_rental" },
      { label: "Photography", name: "service_photography" },
      { label: "Videography", name: "service_videography" },
      { label: "Live Band", name: "service_live_band" },
    ],
  },
];

export default function PlanMyEventPage() {
  const [formData, setFormData] = useState<FormData>(initialForm);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [target.name]: target.type === "checkbox" ? target.checked : target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");
    try {
      const res = await fetch("http://127.0.0.1:8000/api/plan-my-event/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setSuccess(data.message);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setError("Something went wrong. Please check your inputs and try again.");
      }
    } catch {
      setError("Could not connect to server. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const inputCls = "w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300 bg-white/5 text-white placeholder-white/25";
  const inputStyle = { border: `1px solid ${G}22` };
  const labelCls = "block text-xs tracking-widest uppercase mb-2 font-medium";

  return (
    <>
      {/* Hero with Background Image */}
      <section className="relative min-h-[58vh] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/event-planning-cordination.jpg" alt="Plan My Event" fill className="object-cover object-center" sizes="100vw" priority />
        </div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.72) 55%, rgba(0,0,0,0.96) 100%)" }} />
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg,transparent,${G},transparent)` }} />

        <motion.div className="relative z-10 text-center px-6 mt-20" initial="hidden" animate="show" variants={stagger}>
          <motion.span variants={fadeUp} className="text-xs tracking-[0.5em] uppercase mb-5 block" style={{ color: G }}>
            Let&apos;s Create Something Extraordinary
          </motion.span>
          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-bold leading-tight mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            <span style={{ color: G }}>Plan</span> My Event
          </motion.h1>
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 my-5">
            <div className="h-px w-12" style={{ background: G }} />
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: G }} />
            <div className="h-px w-12" style={{ background: G }} />
          </motion.div>
          <motion.p variants={fadeUp} className="max-w-xl mx-auto text-white/65 leading-relaxed mb-8"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", lineHeight: "1.9" }}>
            Every extraordinary event begins with a conversation. Share your vision and let us bring it to life with elegance and precision.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-2 justify-center">
            {["Weddings", "Birthdays", "Corporate Events", "Anniversaries", "Graduations"].map((tag, i) => (
              <span key={i} className="text-xs px-4 py-1.5 rounded-full" style={{ border: `1px solid ${G}35`, color: G, background: `${G}10` }}>{tag}</span>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Messages */}
      {success && (
        <div className="max-w-4xl mx-auto px-6 mt-6">
          <div className="p-4 rounded-xl flex items-center gap-3" style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)", color: "#22c55e" }}>
            <CheckCircle2 size={18} /> {success}
          </div>
        </div>
      )}
      {error && (
        <div className="max-w-4xl mx-auto px-6 mt-6">
          <div className="p-4 rounded-xl text-red-400" style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)" }}>{error}</div>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} style={{ background: "#0A0A0A" }}>

        {/* Step 01 */}
        <section className="py-16 border-b" style={{ borderColor: `${G}12` }}>
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="mb-10">
                <span className="text-xs tracking-[0.5em] uppercase block mb-2" style={{ color: G }}>Step 01</span>
                <h2 className="text-2xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Personal Details</h2>
                <div className="h-[2px] w-10 mt-3" style={{ background: G }} />
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  { label: "First Name", name: "first_name", type: "text", required: true, placeholder: "Your first name" },
                  { label: "Last Name", name: "last_name", type: "text", required: true, placeholder: "Your last name" },
                  { label: "Email Address", name: "email", type: "email", required: true, placeholder: "your@email.com" },
                  { label: "Phone Number", name: "phone", type: "tel", required: true, placeholder: "+1 000 000 0000" },
                ].map((f, i) => (
                  <motion.div key={i} variants={fadeUp}>
                    <label className={labelCls} style={{ color: G }}>{f.label}</label>
                    <input type={f.type} name={f.name} value={formData[f.name as keyof FormData] as string}
                      onChange={handleChange} required={f.required} placeholder={f.placeholder}
                      className={inputCls} style={inputStyle} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Step 02 */}
        <section className="py-16 border-b" style={{ borderColor: `${G}12` }}>
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="mb-10">
                <span className="text-xs tracking-[0.5em] uppercase block mb-2" style={{ color: G }}>Step 02</span>
                <h2 className="text-2xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Event Details</h2>
                <div className="h-[2px] w-10 mt-3" style={{ background: G }} />
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  { label: "Event / Occasion", name: "event_occasion", type: "text", required: true, placeholder: "e.g. Wedding, Birthday, Corporate", span: false },
                  { label: "Event Location", name: "event_location", type: "text", required: true, placeholder: "City, State / Country", span: false },
                  { label: "Date of Event", name: "event_date", type: "date", required: true, placeholder: "", span: false },
                  { label: "Venue", name: "venue", type: "text", required: false, placeholder: "Venue name (if known)", span: false },
                  { label: "Theme of Décor", name: "theme_of_decor", type: "text", required: false, placeholder: "e.g. Rustic, Royal, Modern", span: false },
                  { label: "Expected Guests", name: "expected_guests", type: "number", required: false, placeholder: "Approx. number of guests", span: false },
                  { label: "Budget", name: "budget", type: "text", required: false, placeholder: "Your approximate budget", span: true },
                ].map((f, i) => (
                  <motion.div key={i} variants={fadeUp} className={f.span ? "md:col-span-2" : ""}>
                    <label className={labelCls} style={{ color: G }}>{f.label}</label>
                    <input type={f.type} name={f.name} value={formData[f.name as keyof FormData] as string}
                      onChange={handleChange} required={f.required} placeholder={f.placeholder}
                      className={inputCls} style={inputStyle} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Step 03 */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="mb-10">
                <span className="text-xs tracking-[0.5em] uppercase block mb-2" style={{ color: G }}>Step 03</span>
                <h2 className="text-2xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Select Your Services</h2>
                <p className="text-white/35 text-sm mt-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Choose everything you&apos;d like included in your event package.</p>
                <div className="h-[2px] w-10 mt-3" style={{ background: G }} />
              </motion.div>

              <div className="space-y-10">
                {serviceGroups.map((group, gi) => (
                  <motion.div key={gi} variants={fadeUp}>
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-xs font-bold tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.4)" }}>{group.category}</h3>
                      <div className="flex-1 h-px" style={{ background: `${G}18` }} />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {group.items.map((item, ii) => {
                        const checked = formData[item.name as keyof FormData] as boolean;
                        return (
                          <label key={ii} className="flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-300"
                            style={{ background: checked ? `${G}12` : "rgba(255,255,255,0.02)", border: `1px solid ${checked ? G + "50" : G + "12"}` }}>
                            <input type="checkbox" name={item.name} checked={checked} onChange={handleChange} className="sr-only" />
                            <div className="w-4 h-4 rounded flex items-center justify-center flex-shrink-0 transition-all duration-300"
                              style={{ background: checked ? G : "transparent", border: `1.5px solid ${checked ? G : G + "35"}` }}>
                              {checked && (
                                <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                                  <path d="M1 3L3.5 5.5L8 1" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              )}
                            </div>
                            <span className="text-xs font-medium transition-colors duration-300" style={{ color: checked ? G : "rgba(255,255,255,0.45)" }}>{item.label}</span>
                          </label>
                        );
                      })}
                    </div>
                  </motion.div>
                ))}

                {/* Message */}
                <motion.div variants={fadeUp}>
                  <label className={labelCls} style={{ color: G }}>Additional Message</label>
                  <textarea rows={5} name="message" value={formData.message} onChange={handleChange}
                    className={inputCls} style={inputStyle}
                    placeholder="Share any additional details, special requests, or vision for your event..." />
                </motion.div>

                {/* Submit */}
                <motion.div variants={fadeUp} className="text-center pt-4">
                  <button type="submit" disabled={loading}
                    className="inline-flex items-center gap-3 px-10 py-4 font-semibold rounded-full text-sm transition-all duration-300 hover:gap-5 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ background: loading ? "#555" : G, color: "#000" }}>
                    {loading ? "Submitting Your Request..." : "Submit Event Request"}
                    {!loading && <ArrowUpRight size={16} />}
                  </button>
                  <p className="text-white/25 text-xs mt-4">We&apos;ll get back to you within 24 hours</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </form>
    </>
  );
}