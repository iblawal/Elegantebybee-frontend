"use client";
import Hero from "@/components/Hero";
import Link from "next/link";
import { Check, ArrowUpRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

const G = "#C9A84C";
const fadeUp: Variants = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } };
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

export default function ConceptDevelopment() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#0A0A0A" }}>
      <Hero title="Concept Development" subtitle="Where your vision meets our expertise." bgImage="/creative-process-hero-bg.jpg" />

      {/* Intro */}
      <motion.section className="py-24" style={{ background: "#0A0A0A" }} initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
        <div className="max-w-4xl mx-auto px-6">
          <motion.div variants={fadeUp} className="text-center mb-14">
            <span className="text-xs tracking-[0.5em] uppercase block mb-3" style={{ color: G }}>The Vision</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>From Idea to Reality</h2>
            <div className="h-[2px] w-12 mx-auto mt-4" style={{ background: G }} />
          </motion.div>
          <motion.div variants={fadeUp} className="p-10 rounded-2xl" style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${G}18` }}>
            <p className="text-white/65 leading-relaxed text-center" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", lineHeight: "2.1" }}>
              We transform simple ideas into luxurious realities with mood boards, theme planning, and signature elements that leave a lasting impression. Every great event starts with a clear, beautiful concept —
              and that&apos;s exactly what we build for you.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Creative Process */}
      <motion.section className="py-24" style={{ background: "#080808", borderTop: `1px solid ${G}10` }} initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
        <div className="max-w-4xl mx-auto px-6">
          <motion.div variants={fadeUp} className="text-center mb-14">
            <span className="text-xs tracking-[0.5em] uppercase block mb-3" style={{ color: G }}>How We Do It</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Our Creative Process</h2>
            <div className="h-[2px] w-12 mx-auto mt-4" style={{ background: G }} />
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              "Idea brainstorming & concept sketching",
              "Event mood board creation",
              "Theme development with luxe details",
              "Venue layout & aesthetic planning",
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="flex items-start gap-4 p-6 rounded-2xl"
                style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${G}12` }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}>
                <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: `${G}18`, color: G }}>
                  <Check size={16} />
                </div>
                <p className="text-white/60 text-sm leading-relaxed pt-1" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", lineHeight: "1.85" }}>{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Designs That Speak Your Style */}
      <motion.section className="py-24" style={{ background: "#0A0A0A", borderTop: `1px solid ${G}10` }} initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
        <div className="max-w-4xl mx-auto px-6">
          <motion.div variants={fadeUp} className="text-center mb-14">
            <span className="text-xs tracking-[0.5em] uppercase block mb-3" style={{ color: G }}>The Aesthetic</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Designs That Speak Your Style</h2>
            <div className="h-[2px] w-12 mx-auto mt-4" style={{ background: G }} />
          </motion.div>

          {/* Style cards */}
          <div className="grid sm:grid-cols-3 gap-5 mb-12">
            {[
              { label: "Minimal Elegance", desc: "Clean lines, soft palettes, and refined details that let the moment breathe." },
              { label: "Extravagant Grandeur", desc: "Bold statements, lavish florals, and dramatic lighting that commands a room." },
              { label: "Bespoke & Unique", desc: "Completely custom concepts built around your personality, not trends." },
            ].map((style, i) => (
              <motion.div key={i} variants={fadeUp} className="p-7 rounded-2xl"
                style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${G}15`, borderTop: `2px solid ${G}` }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}>
                <div className="h-[2px] w-8 mb-4" style={{ background: G }} />
                <h3 className="text-white font-bold text-lg mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{style.label}</h3>
                <p className="text-white/45 text-sm leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.95rem", lineHeight: "1.85" }}>{style.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUp} className="relative p-10 rounded-2xl overflow-hidden" style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${G}20` }}>
            <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: `linear-gradient(90deg,transparent,${G},transparent)` }} />
            <p className="text-white/65 leading-relaxed text-center italic" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem", lineHeight: "2" }}>
              Whether it&apos;s minimal elegance or extravagant grandeur, our creative team ensures every detail of your concept reflects{" "}
              <span className="font-bold not-italic" style={{ color: G }}>you</span>.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA */}
      <section className="relative py-24 text-center overflow-hidden"
        style={{ backgroundImage: "url('/creative-process-hero-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.82)" }} />
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg,transparent,${G},transparent)` }} />
        <div className="relative z-10 max-w-xl mx-auto px-6">
          <span className="text-xs tracking-[0.5em] uppercase block mb-3" style={{ color: G }}>Next Step</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Ready to Build Your Concept?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/services" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm tracking-widest uppercase transition-all hover:gap-4" style={{ background: G, color: "#000" }}>
              Explore Our Services <ArrowUpRight size={14} />
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