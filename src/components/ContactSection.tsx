"use client";
import { motion } from "framer-motion";
import { fadeInUp, cardPop, staggerContainer } from "@/lib/animations";

interface ContactSectionProps {
  children?: React.ReactNode;
}

export default function ContactSection({ children }: ContactSectionProps) {
  return (
    <section
      className="relative h-screen flex items-center justify-center text-center text-white px-6"
      style={{
        backgroundImage: "url('/contact-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-6xl font-bold max-w-3xl leading-tight"
          variants={fadeInUp}
        >
          Get in Touch With Us
        </motion.h2>

        <motion.p className="mt-4 max-w-xl" variants={fadeInUp}>
          Reach out today and let’s start planning something amazing.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 w-full max-w-5xl">
          <motion.div
            className="bg-white/90 text-black rounded-2xl shadow-lg p-6"
            variants={cardPop}
          >
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p>elegantbybee@gmail.com</p>
          </motion.div>

          <motion.div
            className="bg-white/90 text-black rounded-2xl shadow-lg p-6"
            variants={cardPop}
          >
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p>+1 240 604-0025</p>
            <p></p>
          </motion.div>

          <motion.div
            className="bg-white/90 text-black rounded-2xl shadow-lg p-6"
            variants={cardPop}
          >
            <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
            <p>3600 Leonardtown Rd #203, Waldorf, MD 20601, USA.</p>
          </motion.div>
        </div>

        {/* Extra children  */}
        {children && <div className="mt-10 w-full">{children}</div>}
      </motion.div>
    </section>
  );
}
