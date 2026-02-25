"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

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
type PortfolioImage = { src: string; alt: string; category: string };

export default function PortfolioSection() {
  const images: PortfolioImage[] = [
    { src: "/portfolio-3.jpg", alt: "Luxury Wedding Decor", category: "Wedding" },
    { src: "/portfolio-4.jpg", alt: "Elegant Event Setup", category: "Corporate" },
  ];

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  const showPrev = () => setSelectedIndex((p) => (p !== null && p > 0 ? p - 1 : p));
  const showNext = () => setSelectedIndex((p) => (p !== null && p < images.length - 1 ? p + 1 : p));

  return (
    <section className="relative py-24 overflow-hidden" style={{ background: "#080808" }}>
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(201,168,76,0.04) 0%, transparent 65%)" }} />
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg,transparent,${G},transparent)` }} />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          {/* Header */}
          <motion.div variants={fadeUp} className="text-center mb-3">
            <span className="text-xs tracking-[0.5em] uppercase" style={{ color: G }}>Our Work</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white text-center mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            Portfolio
          </motion.h2>
          <motion.p variants={fadeUp} className="text-center mb-14 max-w-md mx-auto"
            style={{ color: "rgba(255,255,255,0.35)", fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem" }}>
            A showcase of elegance, creativity, and timeless memories.
          </motion.p>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-5 mb-12">
            {images.map((img, i) => (
              <motion.div key={i} variants={fadeUp}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
                style={{ border: `1px solid ${G}15`, height: "420px" }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                onClick={() => openLightbox(i)}>
                <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width:768px) 100vw, 50vw" />
                {/* Overlay */}
                <div className="absolute inset-0 transition-all duration-500"
                  style={{ background: "linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.85))" }} />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "rgba(0,0,0,0.35)" }} />

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="text-xs tracking-widest uppercase px-3 py-1 rounded-full font-semibold"
                    style={{ background: `${G}EE`, color: "#000" }}>
                    {img.category}
                  </span>
                </div>

                {/* Zoom icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                  style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", border: `1px solid ${G}40` }}>
                  <ZoomIn size={15} style={{ color: G }} />
                </div>

                {/* Bottom text */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="h-px w-8 mb-3" style={{ background: G }} />
                  <p className="text-white font-bold text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>{img.alt}</p>
                  <p className="text-xs tracking-widest uppercase mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ color: G }}>
                    Click to view ↗
                  </p>
                </div>

                {/* Gold bottom border */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg,transparent,${G},transparent)` }} />
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div variants={fadeUp} className="text-center">
            <Link href="/gallery"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:gap-5"
              style={{ background: G, color: "#000" }}>
              View Full Gallery <ArrowUpRight size={15} />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg,transparent,${G},transparent)` }} />

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center"
            style={{ background: "rgba(0,0,0,0.95)", backdropFilter: "blur(20px)" }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={closeLightbox}>

            <motion.div
              className="relative"
              style={{ maxWidth: "90vw", maxHeight: "85vh" }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}>

              <div className="relative rounded-2xl overflow-hidden"
                style={{ border: `1px solid ${G}30`, boxShadow: `0 0 80px rgba(201,168,76,0.15)` }}>
                <Image
                  src={images[selectedIndex].src}
                  alt={images[selectedIndex].alt}
                  width={900} height={650}
                  className="object-contain max-h-[80vh]" />
              </div>

              {/* Close */}
              <button onClick={closeLightbox}
                className="absolute -top-4 -right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ background: G, color: "#000" }}>
                <X size={16} />
              </button>

              {/* Prev */}
              {selectedIndex > 0 && (
                <button onClick={showPrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  style={{ background: "rgba(255,255,255,0.1)", border: `1px solid ${G}40`, color: G }}>
                  <ChevronLeft size={18} />
                </button>
              )}

              {/* Next */}
              {selectedIndex < images.length - 1 && (
                <button onClick={showNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  style={{ background: "rgba(255,255,255,0.1)", border: `1px solid ${G}40`, color: G }}>
                  <ChevronRight size={18} />
                </button>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}