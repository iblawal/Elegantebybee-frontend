"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// Animations
const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

export default function EventShowcase() {
  const events = [
    {
      title: "Glamorous Wedding",
      image: "https://via.placeholder.com/600x400",
      link: "/events/wedding",
    },
    {
      title: "Weddinng Anniversary",
      image: "https://via.placeholder.com/600x400",
      link: "/events/anniversary",
    },
    {
      title: "Luxury Birthday",
      image: "https://via.placeholder.com/600x400",
      link: "/events/birthday",
    },
    {
      title: "Cultural Event",
      image: "/cultural-deco.jpg",
      link: "/events/cultural",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Left side: Event cards */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {events.map((event, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                className="relative group rounded-xl overflow-hidden shadow-lg"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={isEven ? fadeInLeft : fadeInRight}
              >
                <Image
                  src={event.image}
                  alt={event.title}
                  width={600}
                  height={400}
                  className="w-full h-60 object-cover group-hover:scale-105 transition"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition"></div>
                {/* Text */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-10">
                  <h3 className="text-xl font-bold">{event.title}</h3>
                  <Link
                    href="/media"
                    className="mt-2 text-brand-gold font-semibold hover:underline"
                  >
                    View Detail
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {}
        <motion.div
          className="flex flex-col justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInRight}
        >
          <h4 className="text-lg font-semibold text-gray-600">Events</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Decoration Style
          </h2>
          <p className="text-gray-700 mb-3">
            At Elegante Bee, we provide the style and glamour your event needs.
          </p>
          <p className="text-gray-700 mb-6">
            We are trailblazers in venue decoration, floral arrangements, and
            stage design.
          </p>

          <Link
            href="/gallery"
            className="bg-brand-gold text-black font-semibold px-6 py-3 rounded-lg shadow hover:text-brand-gold hover:bg-black transition text-center w-fit"
          >
            View Our Gallery
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
