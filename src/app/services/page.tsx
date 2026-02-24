"use client";

import Hero from "@/components/Hero";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const services = [
  {
    number: "01",
    title: "Event Planning & Coordination",
    text: "We handle every detail from concept to execution, ensuring your event runs smoothly and reflects your unique style and vision.",
    imageSrc: "/event-planning-cordination.jpg",
    imageAlt: "Professional event planning and coordination",
    tag: "Full Service",
  },
  {
    number: "02",
    title: "Birthday Shoutout",
    text: "Celebrate your special day in style with a personalized luxury birthday shoutout that makes you feel seen, valued, and celebrated.",
    imageSrc: "/birthday-shoutouts.jpg",
    imageAlt: "Luxury birthday shoutout",
    tag: "Personal",
    reverse: true,
  },
  {
    number: "03",
    title: "Fashion Influencing",
    text: "Step into the world of trends with our creative fashion influencing — bringing you style inspiration, brand collaborations, and bold looks that stand out.",
    imageSrc: "/fashion-influencing.jpg",
    imageAlt: "Fashion influencing",
    tag: "Lifestyle",
  },
  {
    number: "04",
    title: "Event Venue Scouting",
    text: "We don't just plan events — we help you find the perfect venue that fits your style, vision, and guest count, whether it's an intimate rooftop or a grand ballroom.",
    imageSrc: "/event-venue.jpg",
    imageAlt: "Beautiful event venues and locations",
    tag: "Locations",
    reverse: true,
  },
  {
    number: "05",
    title: "Decoration & Styling",
    text: "We transform spaces with elegant floral arrangements, luxurious tablescapes, and customized decor that speaks your vibe and event theme.",
    imageSrc: "/decoration-styling.jpg",
    imageAlt: "Elegant event decoration and styling",
    tag: "Aesthetics",
  },
  {
    number: "06",
    title: "Entertainment & Activities",
    text: "We provide engaging entertainment options, from live bands to DJs, performers, and interactive activities that keep your guests entertained.",
    imageSrc: "/entertainment-activities.jpg",
    imageAlt: "Event entertainment and activities",
    tag: "Experience",
    reverse: true,
  },
  {
    number: "07",
    title: "Photography & Videography",
    text: "We capture every moment with professional photography and videography, ensuring your memories are preserved beautifully.",
    imageSrc: "/photography-videography.jpg",
    imageAlt: "Professional event photography and videography",
    tag: "Memory",
  },
  {
    number: "08",
    title: "Media Coverage",
    text: "We ensure your event is captured beautifully with professional photography, video coverage, and media publicity if desired. Your story deserves to be told.",
    imageSrc: "/media-coverage.jpg",
    imageAlt: "Professional media coverage and publicity",
    tag: "Publicity",
    reverse: true,
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#FAFAF8]">

      {/* Hero */}
      <Hero
        title="Our Services"
        subtitle="Discover the elegance, creativity, and precision that define every experience we create."
        bgImage="/services-hero.jpg"
      />

      {/* What We Do */}
      <motion.section
        className="py-14 bg-white relative overflow-hidden"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div
          className="absolute top-4 left-1/2 -translate-x-1/2 text-[6rem] font-bold tracking-widest select-none pointer-events-none whitespace-nowrap"
          style={{ color: "rgba(201,168,76,0.04)", fontFamily: "'Playfair Display', serif" }}
        >
          ELEGANTE
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div variants={fadeInUp} className="mb-3">
            <span
              className="text-xs tracking-[0.4em] uppercase font-medium"
              style={{ color: "#C9A84C" }}
            >
              Who We Are
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-bold text-black leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Crafting Moments That
            <span className="block italic" style={{ color: "#C9A84C" }}>
              Last a Lifetime
            </span>
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center gap-3 my-5"
          >
            <div className="h-px w-12" style={{ background: "#C9A84C" }} />
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#C9A84C" }} />
            <div className="h-px w-12" style={{ background: "#C9A84C" }} />
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-gray-600 max-w-2xl mx-auto leading-relaxed"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1rem",
              lineHeight: "1.9",
            }}
          >
            At <span className="font-semibold text-black">ELEGANTE BEE</span>, we specialize in crafting
            timeless events with a touch of luxury, love, and personalization. Whether it&apos;s a wedding,
            birthday, anniversary, or brand launch — we make it memorable, meaningful, and magical.
          </motion.p>
        </div>
      </motion.section>

      {/* Services List */}
      <section className="py-4 bg-[#FAFAF8]">
        {services.map((service, idx) => (
          <ServiceItem key={idx} {...service} isLast={idx === services.length - 1} />
        ))}
      </section>

      {/* Bottom CTA with Background Image */}
      <motion.section
        className="relative py-24 text-center overflow-hidden"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/event-planning-cordination.jpg"
            alt="Dream event background"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
        </div>

        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.70) 60%, rgba(0,0,0,0.80) 100%)",
          }}
        />

        {/* Gold shimmer line top */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{
            background: "linear-gradient(90deg, transparent, #C9A84C, transparent)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6">
          <motion.p
            variants={fadeInUp}
            className="text-xs tracking-[0.5em] uppercase mb-5 font-medium"
            style={{ color: "#C9A84C" }}
          >
            Ready to Begin?
          </motion.p>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Your Dream Event
          </motion.h2>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold italic mb-8 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif", color: "#C9A84C" }}
          >
            Awaits
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-white/70 max-w-md mx-auto mb-10 leading-relaxed"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.05rem",
            }}
          >
            Let&apos;s start a conversation and turn your vision into an unforgettable experience.
          </motion.p>

          <motion.a
            variants={fadeInUp}
            href="/request-quote"
            className="inline-flex items-center gap-3 px-9 py-3.5 text-black font-semibold rounded-full transition-all duration-300 hover:gap-5 text-sm"
            style={{ background: "#C9A84C" }}
          >
            Request a Quote
            <ArrowUpRight size={15} />
          </motion.a>
        </div>

        {/* Gold shimmer line bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[2px]"
          style={{
            background: "linear-gradient(90deg, transparent, #C9A84C, transparent)",
          }}
        />
      </motion.section>

    </main>
  );
}

function ServiceItem({
  number,
  title,
  text,
  imageSrc,
  imageAlt,
  reverse,
  tag,
  isLast,
}: {
  number: string;
  title: string;
  text: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  tag: string;
  isLast?: boolean;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
      className={`relative py-12 ${!isLast ? "border-b border-gray-100" : ""}`}
    >
      <div
        className={`container mx-auto px-6 flex flex-col ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        } items-center gap-10`}
      >
        {/* Image */}
        <motion.div
          variants={fadeInUp}
          className="md:w-5/12 relative rounded-2xl overflow-hidden w-full"
          style={{ height: "240px" }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            sizes="(max-width: 768px) 100vw, 42vw"
          />
          <div className="absolute top-3 left-3">
            <span
              className="text-xs tracking-[0.2em] uppercase px-3 py-1 rounded-full font-medium"
              style={{ background: "rgba(201,168,76,0.92)", color: "#000" }}
            >
              {tag}
            </span>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div variants={fadeInUp} className="md:w-7/12 flex flex-col">
          <span
            className="text-5xl font-bold leading-none mb-1 select-none"
            style={{ color: "rgba(201,168,76,0.1)", fontFamily: "'Playfair Display', serif" }}
          >
            {number}
          </span>

          <h3
            className="text-xl md:text-2xl font-bold text-black leading-snug mb-3"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {title}
          </h3>

          <div className="h-[2px] w-10 mb-3" style={{ background: "#C9A84C" }} />

          <p
            className="text-gray-600 leading-relaxed mb-5"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1rem",
              lineHeight: "1.8",
            }}
          >
            {text}
          </p>

          <a
            href="/request-quote"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase group w-fit"
            style={{ color: "#C9A84C" }}
          >
            Learn More
            <ArrowUpRight
              size={13}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}