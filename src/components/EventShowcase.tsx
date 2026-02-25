"use client";
import Link from "next/link";
import Image from "next/image";
import { motion,  Variants} from "framer-motion";
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
export default function EventShowcase() {
  const events = [
    { title: "Glamorous Wedding", image: "https://via.placeholder.com/600x400", tag: "Wedding" },
    { title: "Wedding Anniversary", image: "https://via.placeholder.com/600x400", tag: "Anniversary" },
    { title: "Luxury Birthday", image: "https://via.placeholder.com/600x400", tag: "Birthday" },
    { title: "Cultural Event", image: "/cultural-deco.jpg", tag: "Cultural" },
  ];

  return (
    <section className="relative py-24 overflow-hidden" style={{ background: "#FAFAF8" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} variants={stagger}>

          {/* Header */}
          <motion.div variants={fadeUp} className="text-center mb-3">
            <span className="text-xs tracking-[0.5em] uppercase" style={{ color: G }}>Event Gallery</span>
          </motion.div>
          <motion.h2 variants={fadeUp}
            className="text-3xl md:text-4xl font-bold text-black text-center mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            Decoration Style
          </motion.h2>
          <motion.p variants={fadeUp} className="text-center text-gray-400 mb-16 max-w-md mx-auto"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem" }}>
            We are trailblazers in venue decoration, floral arrangements, and stage design.
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Event Cards Grid */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {events.map((event, i) => {
                const variant = i % 2 === 0 ? fadeLeft : fadeRight;
                return (
                  <motion.div key={i} variants={variant}
                    className="group relative rounded-2xl overflow-hidden cursor-pointer"
                    style={{ height: "260px", border: `1px solid rgba(0,0,0,0.06)`, boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}
                    whileHover={{ y: -6, transition: { duration: 0.3 } }}>

                    <Image src={event.image} alt={event.title} fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width:640px) 100vw, 33vw" />

                    {/* Overlay */}
                    <div className="absolute inset-0 transition-all duration-500"
                      style={{ background: "linear-gradient(to bottom, transparent 20%, rgba(0,0,0,0.88))" }} />

                    {/* Tag */}
                    <div className="absolute top-3 left-3">
                      <span className="text-xs tracking-widest uppercase px-3 py-1 rounded-full font-semibold"
                        style={{ background: `${G}EE`, color: "#000" }}>
                        {event.tag}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <div className="h-px w-6 mb-3 transition-all duration-300 group-hover:w-10"
                        style={{ background: G }} />
                      <h3 className="text-white font-bold text-base mb-2"
                        style={{ fontFamily: "'Playfair Display', serif" }}>
                        {event.title}
                      </h3>
                      <Link href="/media"
                        className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase transition-all duration-300 opacity-0 group-hover:opacity-100"
                        style={{ color: G }}>
                        View Detail <ArrowUpRight size={11} />
                      </Link>
                    </div>

                    {/* Gold bottom border on hover */}
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: `linear-gradient(90deg,transparent,${G},transparent)` }} />
                  </motion.div>
                );
              })}
            </div>

            {/* Right Side Text */}
            <motion.div variants={fadeRight} className="flex flex-col justify-center lg:pl-6">
              <span className="text-xs tracking-[0.5em] uppercase mb-4 block" style={{ color: G }}>
                Our Expertise
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                Events That
                <span className="block italic" style={{ color: G }}>Tell Stories</span>
              </h2>
              <div className="h-[2px] w-12 mb-6" style={{ background: G }} />
              <p className="text-gray-500 mb-4 leading-relaxed"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem", lineHeight: "1.9" }}>
                At EleganteBee, we provide the style and glamour your event needs — crafted with intention, delivered with precision.
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed italic border-l-2 pl-4"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", lineHeight: "1.9", borderColor: G }}>
                &ldquo;Every decoration tells a story. Ours speak of elegance.&rdquo;
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { number: "300+", label: "Events" },
                  { number: "5★", label: "Rated" },
                  { number: "10+", label: "Services" },
                  { number: "2", label: "Countries" },
                ].map((stat, i) => (
                  <div key={i} className="p-4 rounded-2xl text-center"
                    style={{ background: "#fff", border: `1px solid ${G}18`, boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                    <p className="text-2xl font-bold" style={{ color: G, fontFamily: "'Playfair Display', serif" }}>
                      {stat.number}
                    </p>
                    <p className="text-xs tracking-widest uppercase text-gray-400 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              <Link href="/gallery"
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:gap-5 w-fit"
                style={{ background: G, color: "#000" }}>
                View Gallery <ArrowUpRight size={15} />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}