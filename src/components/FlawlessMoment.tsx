"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { flawlessText, flawlessButton } from "@/lib/animations";

export default function FlawlessMoment() {
  return (
    <section
      className="relative h-screen flex items-center justify-center text-center text-white my-20 py-20"
      style={{
        backgroundImage: "url('/flawless-img.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center px-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={flawlessText}
      >
        <h2 className="text-4xl md:text-6xl font-bold max-w-3xl leading-tight">
          Let’s Make This Moment Flawless
        </h2>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="absolute bottom-6 right-6 z-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={flawlessButton}
      >
        <Link
          href="/request-quote"
          className="inline-block bg-brand-gold text-black px-6 py-3 rounded-lg shadow-lg font-medium hover:bg-black hover:text-brand-gold transition"
        >
          Send a Request
        </Link>
      </motion.div>
    </section>
  );
}
