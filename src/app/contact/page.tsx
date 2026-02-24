"use client";
import { useState } from "react";
import Hero from "@/components/Hero";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Mail, Phone, MapPin } from "lucide-react";

const G = "#C9A84C";
const fadeUp: Variants = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } };
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

export default function Contact() {
  const [formData, setFormData] = useState({ first_name: "", last_name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); setSuccess(""); setError("");
    try {
      const res = await fetch("http://127.0.0.1:8000/api/contact/", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) { setSuccess(data.message); setFormData({ first_name: "", last_name: "", email: "", subject: "", message: "" }); }
      else setError("Something went wrong. Please check your inputs and try again.");
    } catch { setError("Could not connect to server. Please try again later."); }
    finally { setLoading(false); }
  };

  const inp = "w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300 bg-white/5 text-white placeholder-white/25";
  const inpStyle = { border: `1px solid ${G}22` };

  return (
    <>
      <Hero title="Contact Us" subtitle="We'd love to hear from you. Let's make something amazing together." bgImage="/contact-hero.jpg" />

      {/* Contact Cards */}
      <motion.section className="py-16" style={{ background: "#080808" }}
        initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: <Mail size={22} />, label: "Email Us", value: "elegantebybee@gmail.com", sub: "We reply within 24 hours" },
              { icon: <Phone size={22} />, label: "Call Us (US)", value: "240-604-0025", sub: "Mon–Sat, 9am–6pm EST" },
              { icon: <MapPin size={22} />, label: "Based In", value: "Maryland, USA", sub: "& Lagos, Nigeria" },
            ].map((card, i) => (
              <motion.div key={i} variants={fadeUp} className="group p-6 rounded-2xl transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${G}15` }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `${G}18`, color: G }}>
                  {card.icon}
                </div>
                <p className="text-xs tracking-widest uppercase mb-1" style={{ color: `${G}80` }}>{card.label}</p>
                <p className="text-white font-semibold mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{card.value}</p>
                <p className="text-white/35 text-xs">{card.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Form Section */}
      <section className="py-20" style={{ background: "#0A0A0A", borderTop: `1px solid ${G}10` }}>
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <span className="text-xs tracking-[0.5em] uppercase block mb-3" style={{ color: G }}>Send a Message</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Get In Touch</h2>
              <div className="h-[2px] w-12 mx-auto mt-4" style={{ background: G }} />
            </motion.div>

            {success && (
              <motion.div variants={fadeUp} className="mb-6 p-4 rounded-xl flex items-center gap-3"
                style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)", color: "#22c55e" }}>
                <CheckCircle2 size={18} /> {success}
              </motion.div>
            )}
            {error && (
              <motion.div variants={fadeUp} className="mb-6 p-4 rounded-xl text-red-400"
                style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)" }}>{error}
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  { label: "First Name", name: "first_name", type: "text", placeholder: "Your first name" },
                  { label: "Last Name", name: "last_name", type: "text", placeholder: "Your last name" },
                ].map((f, i) => (
                  <div key={i}>
                    <label className="block text-xs tracking-widest uppercase mb-2 font-medium" style={{ color: G }}>{f.label}</label>
                    <input type={f.type} name={f.name} value={formData[f.name as keyof typeof formData]}
                      onChange={handleChange} required placeholder={f.placeholder} className={inp} style={inpStyle} />
                  </div>
                ))}
              </motion.div>

              {[
                { label: "Email Address", name: "email", type: "email", placeholder: "your@email.com" },
                { label: "Subject", name: "subject", type: "text", placeholder: "What's this about?" },
              ].map((f, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <label className="block text-xs tracking-widest uppercase mb-2 font-medium" style={{ color: G }}>{f.label}</label>
                  <input type={f.type} name={f.name} value={formData[f.name as keyof typeof formData]}
                    onChange={handleChange} required placeholder={f.placeholder} className={inp} style={inpStyle} />
                </motion.div>
              ))}

              <motion.div variants={fadeUp}>
                <label className="block text-xs tracking-widest uppercase mb-2 font-medium" style={{ color: G }}>Your Message</label>
                <textarea rows={5} name="message" value={formData.message} onChange={handleChange} required
                  placeholder="Tell us about your event or enquiry..."
                  className={inp} style={{ ...inpStyle, resize: "none" }} />
              </motion.div>

              <motion.div variants={fadeUp} className="pt-2">
                <button type="submit" disabled={loading}
                  className="inline-flex items-center gap-3 px-8 py-3.5 font-bold rounded-full text-sm tracking-widest uppercase transition-all duration-300 hover:gap-5 disabled:opacity-50"
                  style={{ background: loading ? "#444" : G, color: "#000" }}>
                  {loading ? "Sending..." : "Send Message"}
                  {!loading && <ArrowUpRight size={15} />}
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}