"use client";
import Hero from "@/components/Hero";
import Link from "next/link";
import { Check, ArrowUpRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

const G = "#C9A84C";
const fadeUp: Variants = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } };
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

export default function Execution() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#0A0A0A" }}>
      <Hero title="Execution" subtitle="Where every detail comes alive — seamlessly." bgImage="/creative-process-hero-bg.jpg" />

      {/* Bringing Plans to Life */}
      <motion.section className="py-24" style={{ background: "#0A0A0A" }} initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
        <div className="max-w-4xl mx-auto px-6">
          <motion.div variants={fadeUp} className="text-center mb-14">
            <span className="text-xs tracking-[0.5em] uppercase block mb-3" style={{ color: G }}>The Moment</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Bringing Plans to Life</h2>
            <div className="h-[2px] w-12 mx-auto mt-4" style={{ background: G }} />
          </motion.div>
          <motion.div variants={fadeUp} className="p-10 rounded-2xl" style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${G}18` }}>
            <p className="text-white/65 leading-relaxed text-center" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", lineHeight: "2.1" }}>
              This is the moment everything you&apos;ve dreamed of becomes reality. Our team takes charge of logistics, vendor coordination, timelines, and on-the-ground execution so you can stay present and enjoy the moment. No stress. No chaos. Just{" "}
              <span className="italic font-bold" style={{ color: G }}>effortless elegance</span> unfolding around you.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* What Execution Means */}
      <motion.section className="py-24" style={{ background: "#080808", borderTop: `1px solid ${G}10` }} initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
        <div className="max-w-4xl mx-auto px-6">
          <motion.div variants={fadeUp} className="text-center mb-14">
            <span className="text-xs tracking-[0.5em] uppercase block mb-3" style={{ color: G }}>What This Means for You</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>What Execution Looks Like</h2>
            <div className="h-[2px] w-12 mx-auto mt-4" style={{ background: G }} />
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              "Flawless coordination with vendors and suppliers",
              "On-site supervision to keep everything on track",
              "Quick problem-solving so issues never reach you",
              "A seamless experience that feels effortless for you and your guests",
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

      {/* Our Promise */}
      <motion.section className="py-24" style={{ background: "#0A0A0A", borderTop: `1px solid ${G}10` }} initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
        <div className="max-w-3xl mx-auto px-6">
          <motion.div variants={fadeUp} className="text-center mb-14">
            <span className="text-xs tracking-[0.5em] uppercase block mb-3" style={{ color: G }}>Our Commitment</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Our Promise</h2>
            <div className="h-[2px] w-12 mx-auto mt-4" style={{ background: G }} />
          </motion.div>
          <motion.div variants={fadeUp} className="relative p-10 rounded-2xl overflow-hidden" style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${G}20` }}>
            <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: `linear-gradient(90deg,transparent,${G},transparent)` }} />
            <p className="text-white/70 leading-relaxed text-center italic" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", lineHeight: "2.1" }}>
              &ldquo;On the day of your celebration, your only job is to smile, dance, and create memories. We handle the rest — quietly, efficiently, and with the signature elegance that defines{" "}
              <span className="font-bold not-italic" style={{ color: G }}>ELEGANTE BEE</span>.&rdquo;
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA */}
      <section className="relative py-20 text-center overflow-hidden"
        style={{ backgroundImage: "url('/creative-process-hero-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.82)" }} />
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg,transparent,${G},transparent)` }} />
        <div className="relative z-10 max-w-xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>Ready for Flawless Execution?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/request-quote" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm tracking-widest uppercase transition-all hover:gap-4" style={{ background: G, color: "#000" }}>
              Request a Quote <ArrowUpRight size={14} />
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