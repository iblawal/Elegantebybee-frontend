"use client";
import Hero from "@/components/Hero";
import Link from "next/link";
import { Check, ArrowUpRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

const G = "#C9A84C";
const fadeUp: Variants = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } };
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

export default function Discovery() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#0A0A0A" }}>
      <Hero title="Discovery Call" subtitle="Where we uncover your story and set the right foundation." bgImage="/creative-process-hero-bg.jpg" buttonText="Book a Call" buttonLink="/contact" />

      {/* Why It Matters */}
      <motion.section className="py-24" style={{ background: "#0A0A0A" }} initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
        <div className="max-w-4xl mx-auto px-6">
          <motion.div variants={fadeUp} className="text-center mb-14">
            <span className="text-xs tracking-[0.5em] uppercase block mb-3" style={{ color: G }}>The Foundation</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Why It Matters</h2>
            <div className="h-[2px] w-12 mx-auto mt-4" style={{ background: G }} />
          </motion.div>
          <motion.div variants={fadeUp} className="p-10 rounded-2xl" style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${G}18` }}>
            <p className="text-white/65 leading-relaxed text-center" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", lineHeight: "2.1" }}>
              Most planners start with a quote. We start with a conversation. Our discovery call allows us to understand not only your logistics, but also your values, your lifestyle, and your emotional goals for the event. It&apos;s where we uncover the{" "}
              <span className="font-bold italic" style={{ color: G }}>why</span> behind your celebration.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* What You Walk Away With */}
      <motion.section className="py-24" style={{ background: "#080808", borderTop: `1px solid ${G}10` }} initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
        <div className="max-w-4xl mx-auto px-6">
          <motion.div variants={fadeUp} className="text-center mb-14">
            <span className="text-xs tracking-[0.5em] uppercase block mb-3" style={{ color: G }}>The Outcome</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>What You&apos;ll Walk Away With</h2>
            <div className="h-[2px] w-12 mx-auto mt-4" style={{ background: G }} />
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              "A clear outline of your goals and event type",
              "Recommendations based on your personality, not just your budget",
              "Confidence that your planner sees you clearly",
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="p-7 rounded-2xl"
                style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${G}15` }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5" style={{ background: `${G}18`, color: G }}>
                  <Check size={18} />
                </div>
                <p className="text-white/65 text-sm leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", lineHeight: "1.85" }}>{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <section className="relative py-20 text-center overflow-hidden"
        style={{ backgroundImage: "url('/creative-process-hero-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.82)" }} />
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg,transparent,${G},transparent)` }} />
        <div className="relative z-10 max-w-xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>Ready to Start the Conversation?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm tracking-widest uppercase transition-all hover:gap-4" style={{ background: G, color: "#000" }}>
              Book a Discovery Call <ArrowUpRight size={14} />
            </Link>
            <Link href="/" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm tracking-widest uppercase" style={{ border: `1px solid ${G}35`, color: G }}>
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}