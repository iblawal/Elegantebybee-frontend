"use client";
import Hero from "@/components/Hero";
import Link from "next/link";
import { ArrowUpRight, Calendar, CheckCircle, Clock, DollarSign, FileText, Sparkles, Users } from "lucide-react";
import { motion, Variants } from "framer-motion";

const G = "#C9A84C";
const fadeUp: Variants = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } };
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

export default function Proposal() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#0A0A0A" }}>
      <Hero title="Our Proposal" subtitle="Detailed, personalized, and designed to impress" bgImage="/creative-process-hero-bg.jpg" />

      {/* What's Included */}
      <motion.section className="py-24" style={{ background: "#0A0A0A" }} initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div variants={fadeUp} className="text-center mb-14">
            <span className="text-xs tracking-[0.5em] uppercase block mb-3" style={{ color: G }}>The Package</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>What&apos;s Included in Your Proposal</h2>
            <div className="h-[2px] w-12 mx-auto mt-4" style={{ background: G }} />
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <Sparkles className="w-5 h-5" />, title: "Event Concept & Theme", desc: "A detailed vision of your event aesthetic, mood, and style direction tailored to your preferences." },
              { icon: <Calendar className="w-5 h-5" />, title: "Timeline & Milestones", desc: "A comprehensive planning schedule with key dates, deadlines, and milestone checkpoints." },
              { icon: <Users className="w-5 h-5" />, title: "Vendor Recommendations", desc: "Curated list of trusted vendors including caterers, florists, photographers, and entertainment." },
              { icon: <DollarSign className="w-5 h-5" />, title: "Budget Breakdown", desc: "Transparent cost estimates for all services, allocations, and payment schedules." },
              { icon: <CheckCircle className="w-5 h-5" />, title: "Service Packages", desc: "Flexible planning packages from full-service coordination to day-of execution." },
              { icon: <FileText className="w-5 h-5" />, title: "Detailed Scope of Work", desc: "Clear outline of deliverables, responsibilities, and what you can expect from our team." },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="p-7 rounded-2xl transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${G}15`, borderTop: `2px solid ${G}` }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5" style={{ background: `${G}18`, color: G }}>
                  {item.icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.95rem", lineHeight: "1.85" }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* How It Works */}
      <motion.section className="py-24" style={{ background: "#080808", borderTop: `1px solid ${G}10` }} initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
        <div className="max-w-4xl mx-auto px-6">
          <motion.div variants={fadeUp} className="text-center mb-14">
            <span className="text-xs tracking-[0.5em] uppercase block mb-3" style={{ color: G }}>The Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>How the Proposal Process Works</h2>
            <div className="h-[2px] w-12 mx-auto mt-4" style={{ background: G }} />
          </motion.div>
          <div className="space-y-5">
            {[
              { step: "01", title: "Initial Consultation", desc: "We start with a discovery call to understand your vision, guest count, budget range, and event priorities." },
              { step: "02", title: "Custom Proposal Creation", desc: "Our team crafts a personalized proposal including concept ideas, vendor recommendations, timeline, and pricing." },
              { step: "03", title: "Review & Refinement", desc: "We walk you through the proposal, answer questions, and make adjustments based on your feedback." },
              { step: "04", title: "Contract & Planning Begins", desc: "Once you're thrilled with the proposal, we finalize the contract and officially begin bringing your dream event to life." },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="flex gap-6 p-7 rounded-2xl"
                style={{ background: "rgba(255,255,255,0.02)", border: `1px solid ${G}12` }}
                whileHover={{ y: -3, transition: { duration: 0.3 } }}>
                <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg" style={{ background: `${G}18`, color: G, fontFamily: "'Playfair Display', serif" }}>
                  {item.step}
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.98rem", lineHeight: "1.85" }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why We Stand Out */}
      <motion.section className="py-24" style={{ background: "#0A0A0A", borderTop: `1px solid ${G}10` }} initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
        <div className="max-w-4xl mx-auto px-6">
          <motion.div variants={fadeUp} className="text-center mb-14">
            <span className="text-xs tracking-[0.5em] uppercase block mb-3" style={{ color: G }}>Our Edge</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Why Our Proposals Stand Out</h2>
            <div className="h-[2px] w-12 mx-auto mt-4" style={{ background: G }} />
          </motion.div>
          <motion.div variants={fadeUp} className="p-10 rounded-2xl" style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${G}18` }}>
            <div className="grid sm:grid-cols-2 gap-7">
              {[
                { title: "Personalized, Not Templated", desc: "Every proposal is custom-crafted to reflect your unique vision and personality." },
                { title: "Transparent Pricing", desc: "No hidden fees or surprises — just honest, detailed cost breakdowns." },
                { title: "Flexible Options", desc: "Multiple service tiers and customizable packages to fit your needs and budget." },
                { title: "Visual Inspiration", desc: "Mood boards and concept visuals to help you see your event come to life." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: `${G}20` }}>
                    <CheckCircle size={14} style={{ color: G }} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>
                    <p className="text-white/45 text-sm leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Turnaround */}
      <motion.section className="py-10" style={{ background: "#080808", borderTop: `1px solid ${G}10` }} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 p-8 rounded-2xl" style={{ background: `${G}0A`, border: `1px solid ${G}25` }}>
            <Clock size={40} style={{ color: G, flexShrink: 0 }} />
            <div>
              <h3 className="text-white font-bold text-xl mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>Quick Turnaround</h3>
              <p className="text-white/50 text-sm leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem" }}>
                Most proposals are delivered within <span className="font-bold" style={{ color: G }}>5–7 business days</span> after your initial consultation. Rush proposals available for urgent events.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <section className="relative py-24 text-center overflow-hidden"
        style={{ backgroundImage: "url('/creative-process-hero-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}>
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.82)" }} />
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg,transparent,${G},transparent)` }} />
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <span className="text-xs tracking-[0.5em] uppercase block mb-3" style={{ color: G }}>Ready?</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Ready to Receive Your Custom Proposal?</h2>
          <p className="text-white/55 mb-10 leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", lineHeight: "1.9" }}>
            Let&apos;s start the conversation. Schedule your free consultation today and receive a personalized proposal that brings your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/request-quote" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:gap-4" style={{ background: G, color: "#000" }}>
              Request Your Proposal <ArrowUpRight size={15} />
            </Link>
            <Link href="/" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm tracking-widest uppercase" style={{ border: `1px solid ${G}35`, color: G }}>
              Back to Home
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg,transparent,${G},transparent)` }} />
      </section>
    </div>
  );
}