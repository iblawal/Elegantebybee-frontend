"use client";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { fadeInCenter, fadeInLeft } from "@/lib/animations";

type HeroProps = {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  bgImage?: string;
  children?: React.ReactNode;
};

const boxVariant: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
};

// Each child element animation
const item: Variants = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function Hero({
  title,
  subtitle,
  buttonText,
  buttonLink,
  bgImage,
  children,
}: HeroProps) {
  return (
    <section
      className="relative h-[80vh] flex items-center justify-center text-center"
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : "url('/default-hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Animated Content Box */}
      <motion.div
        variants={fadeInLeft}
        initial="hidden"
        animate="show" 
        className="relative z-10 bg-white/70 backdrop-blur-md p-8 md:p-12 rounded-2xl w-[90%] max-w-4xl mx-auto shadow-xl"
      >
        {title && (
          <motion.h1
            variants={fadeInLeft}
            className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 leading-tight"
          >
            {title}
          </motion.h1>
        )}

        {subtitle && (
          <motion.p
            variants={fadeInLeft}
            className="text-lg md:text-xl mb-6 text-gray-700"
          >
            {subtitle}
          </motion.p>
        )}

        {buttonText && buttonLink && (
          <motion.div variants={fadeInCenter}>
            <Link
              href={buttonLink}
              className="inline-block bg-[#bfa14d] text-black px-6 py-3 rounded-lg font-semibold hover:bg-black hover:text-brand-gold transition-colors duration-300 mb-6"
            >
              {buttonText}
            </Link>
          </motion.div>
        )}

        {children && (
          <motion.div variants={fadeInLeft} className="mt-4">
            {children}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
