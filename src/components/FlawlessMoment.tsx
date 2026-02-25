"use client";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const G = "#C9A84C";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};
const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};
const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};
const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export default function FlawlessMoment() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage: "url('/flawless-img.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "520px",
      }}
    >
      {/* Layered overlays for depth */}
      <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.72)" }} />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(201,168,76,0.08) 0%, transparent 65%)" }} />

      {/* Gold top border */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg,transparent,${G},transparent)` }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-[520px] px-6 py-24">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="flex flex-col items-center"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUp} className="mb-6">
            <span className="text-xs tracking-[0.5em] uppercase px-4 py-2 rounded-full border"
              style={{ color: G, borderColor: `${G}35` }}>
              Begin Your Journey
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h2 variants={fadeUp}
            className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-3xl mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            Let&apos;s Make This
            <span className="block italic" style={{ color: G }}>
              Moment Flawless
            </span>
          </motion.h2>

          {/* Divider */}
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
            <div className="h-px w-12" style={{ background: G }} />
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: G }} />
            <div className="h-px w-12" style={{ background: G }} />
          </motion.div>

          {/* Subtitle */}
          <motion.p variants={fadeUp}
            className="text-white/60 max-w-lg leading-relaxed mb-12"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem", lineHeight: "1.9" }}>
            Every extraordinary event begins with a single conversation. Share your vision — we&apos;ll handle the rest.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-4">
            <Link href="/request-quote"
              className="inline-flex items-center gap-3 px-9 py-4 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:gap-5 hover:opacity-90"
              style={{ background: G, color: "#000" }}>
              Send a Request <ArrowUpRight size={15} />
            </Link>
            <Link href="/planmyevent"
              className="inline-flex items-center gap-3 px-9 py-4 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:gap-5"
              style={{ border: `1px solid ${G}50`, color: G }}>
              Plan My Event <ArrowUpRight size={15} />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Gold bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg,transparent,${G},transparent)` }} />
    </section>
  );
}
