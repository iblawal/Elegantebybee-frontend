"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link"; 
import { motion } from "framer-motion";

// Animation variants
const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

type PortfolioImage = {
  src: string;
  alt: string;
};

export default function PortfolioSection() {
  const images: PortfolioImage[] = [
    { src: "https://via.placeholder.com/600x400", alt: "Portfolio Image 1" },
    { src: "https://via.placeholder.com/600x400", alt: "Portfolio Image 2" },
    { src: "/portfolio-3.jpg", alt: "Portfolio Image 3" },
    { src: "/portfolio-4.jpg", alt: "Portfolio Image 4" },
  ];

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  const showPrev = () =>
    setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev));
  const showNext = () =>
    setSelectedIndex((prev) =>
      prev !== null && prev < images.length - 1 ? prev + 1 : prev
    );

  const currentImage = selectedIndex !== null ? images[selectedIndex] : null;

  return (
    <section
      id="portfolio"
      className="relative py-16 text-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/portfolio-section.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content wrapper (to stay above overlay) */}
      <div className="relative max-w-6xl mx-auto px-4 bg-white/80 rounded-lg p-6">
        <h2 className="text-3xl font-bold mb-3 text-gray-900">Portfolio</h2>
        <p className="mb-8 text-gray-700">
          A showcase of elegance, creativity, and timeless memories.
        </p>

        {/* Portfolio Grid with Animations */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {images.map((img, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.button
                type="button"
                key={index}
                className="rounded-lg overflow-hidden shadow-lg cursor-pointer group"
                onClick={() => openLightbox(index)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={isEven ? fadeInLeft : fadeInRight}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </motion.button>
            );
          })}
        </div>

        {}
        <Link
          href="/gallery"
          className="inline-block bg-brand-gold text-black px-6 py-3 rounded-lg font-semibold shadow hover:bg-black hover:text-brand-gold transition"
        >
          View Gallery
        </Link>
      </div>

      {}
      {selectedIndex !== null && currentImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={closeLightbox}
        >
          <div
            className="relative max-h-[80vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-center min-h-screen">
              <div className="relative max-h-[80vh] max-w-[90vw] rounded-lg shadow-lg overflow-hidden bg-white p-4">
                <Image
                  src={currentImage.src}
                  alt={currentImage.alt}
                  width={800}
                  height={600}
                  className="object-contain"
                />
              </div>
            </div>

            {}
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute top-3 right-3 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-gray-200"
              aria-label="Close"
            >
              ✕
            </button>

            {}
            {selectedIndex > 0 && (
              <button
                type="button"
                onClick={showPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-black rounded-full w-12 h-12 flex items-center justify-center shadow hover:bg-gray-200"
                aria-label="Previous image"
              >
                ←
              </button>
            )}

            {}
            {selectedIndex < images.length - 1 && (
              <button
                type="button"
                onClick={showNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-black rounded-full w-12 h-12 flex items-center justify-center shadow hover:bg-gray-200"
                aria-label="Next image"
              >
                →
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
