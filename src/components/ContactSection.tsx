"use client";
import { motion } from "framer-motion";
import { fadeInUp, cardPop, staggerContainer } from "@/lib/animations";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

interface ContactSectionProps {
  children?: React.ReactNode;
}

export default function ContactSection({ children }: ContactSectionProps) {
  const contacts = [
    {
      icon: Mail,
      label: "Email Us",
      value: "elegantbybee@gmail.com",
      href: "mailto:elegantbybee@gmail.com",
      accent: "#C9A84C",
    },
    {
      icon: Phone,
      label: "Call Us",
      value: "+1 240 604-0025",
      href: "tel:+12406040025",
      accent: "#C9A84C",
    },
    {
      icon: MapPin,
      label: "Visit Us",
      value: "3600 Leonardtown Rd #203, Waldorf, MD 20601, USA",
      href: "https://maps.google.com",
      accent: "#C9A84C",
    },
  ];

  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-center text-white px-6 py-24 overflow-hidden"
      style={{
        backgroundImage: "url('/contact-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Multi-layer overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      {/* Decorative gold line top */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center w-full max-w-6xl mx-auto"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        {/* Eyebrow label */}
        <motion.div variants={fadeInUp} className="mb-6">
          <span
            className="text-xs tracking-[0.4em] uppercase font-medium px-4 py-2 border rounded-full"
            style={{ color: "#C9A84C", borderColor: "#C9A84C40" }}
          >
            Connect With Us
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h2
          className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-4"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          variants={fadeInUp}
        >
          Let&apos;s Create
          <span
            className="block italic"
            style={{ color: "#C9A84C" }}
          >
            Something Extraordinary
          </span>
        </motion.h2>

        <motion.p
          className="mt-4 max-w-xl text-white/70 text-lg leading-relaxed mb-14"
          variants={fadeInUp}
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.1rem" }}
        >
          Every remarkable event begins with a single conversation. Reach out and let us bring your vision to life.
        </motion.p>

        {/* Premium Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full"
          variants={staggerContainer}
        >
          {contacts.map((contact, idx) => (
            <motion.a
              key={idx}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              variants={cardPop}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative flex flex-col items-start text-left p-8 rounded-2xl overflow-hidden cursor-pointer"
              style={{
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(201,168,76,0.2)",
              }}
            >
              {/* Hover glow effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{
                  background: "radial-gradient(ellipse at top left, rgba(201,168,76,0.12), transparent 70%)",
                }}
              />

              {/* Gold top border on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }}
              />

              {/* Icon container */}
              <div
                className="relative z-10 mb-5 p-3 rounded-xl"
                style={{
                  background: "rgba(201,168,76,0.1)",
                  border: "1px solid rgba(201,168,76,0.25)",
                }}
              >
                <contact.icon size={22} style={{ color: "#C9A84C" }} strokeWidth={1.5} />
              </div>

              {/* Label */}
              <p
                className="relative z-10 text-xs tracking-[0.3em] uppercase mb-2"
                style={{ color: "#C9A84C", fontFamily: "'Cormorant Garamond', serif" }}
              >
                {contact.label}
              </p>

              {/* Value */}
              <p
                className="relative z-10 text-white/90 text-sm leading-relaxed flex-1"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1rem" }}
              >
                {contact.value}
              </p>

              {/* Arrow */}
              <div className="relative z-10 mt-5 self-end">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center opacity-40 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                  style={{ border: "1px solid #C9A84C" }}
                >
                  <ArrowUpRight size={15} style={{ color: "#C9A84C" }} />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          variants={fadeInUp}
          className="mt-16 flex items-center gap-4 w-full max-w-xs"
        >
          <div className="flex-1 h-px" style={{ background: "rgba(201,168,76,0.3)" }} />
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#C9A84C" }} />
          <div className="flex-1 h-px" style={{ background: "rgba(201,168,76,0.3)" }} />
        </motion.div>

        {/* Extra children */}
        {children && <div className="mt-10 w-full">{children}</div>}
      </motion.div>

      {/* Decorative gold line bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px]"
        style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }}
      />
    </section>
  );
}