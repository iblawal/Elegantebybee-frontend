"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, ArrowUpRight } from "lucide-react";
import { FaTiktok, FaWhatsapp } from "react-icons/fa";
import { Cinzel_Decorative } from "next/font/google";

const cinzel = Cinzel_Decorative({ subsets: ["latin"], weight: "700" });
const G = "#C9A84C";

const socials = [
  { icon: <Instagram size={18} />, href: "https://instagram.com/elegantebybee", label: "Instagram" },
  { icon: <FaTiktok size={16} />, href: "https://tiktok.com/@elegantebybee", label: "TikTok" },
  { icon: <Facebook size={18} />, href: "https://facebook.com/elegant_by_bee", label: "Facebook" },
  { icon: <FaWhatsapp size={18} />, href: "https://wa.me/2349167796186", label: "WhatsApp NG" },
  { icon: <FaWhatsapp size={18} />, href: "https://wa.me/12406040025", label: "WhatsApp US" },
];

const services = [
  "Event Blogging & Planning",
  "Birthday Shoutouts",
  "Fashion Influencing",
  "Brand Activations",
  "Event Coordination",
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Media", href: "/media" },
  { label: "Contact", href: "/contact" },
  { label: "Request a Quote", href: "/request-quote" },
];

export default function Footer() {
  const [year, setYear] = useState("2024");
  useEffect(() => { setYear(new Date().getFullYear().toString()); }, []);

  return (
    <footer style={{ background: "#060606" }}>
      {/* Gold shimmer top border */}
      <div className="h-px w-full" style={{ background: `linear-gradient(90deg, transparent, ${G}, transparent)` }} />

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

          {/* Brand Column */}
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0"
                style={{ border: `1.5px solid ${G}60` }}>
                <Image src="/logo.png" alt="Elegante Bee Logo" fill className="object-cover" sizes="56px" priority />
              </div>
              <span className={`${cinzel.className} text-base tracking-wider text-white`}
                style={{ letterSpacing: "0.1em" }}>
                ELEGANTEBYBEE
              </span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-8 max-w-xs"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", lineHeight: "1.85" }}>
              Crafting unforgettable experiences with elegance, creativity, and precision — across the United States and beyond.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map((s, i) => (
                <Link key={i} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{ border: `1px solid ${G}30`, color: `${G}80`, background: "rgba(255,255,255,0.02)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = G;
                    (e.currentTarget as HTMLElement).style.color = G;
                    (e.currentTarget as HTMLElement).style.background = `${G}10`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${G}30`;
                    (e.currentTarget as HTMLElement).style.color = `${G}80`;
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)";
                  }}>
                  {s.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-3 md:pl-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-5" style={{ background: G }} />
              <h3 className="text-xs tracking-[0.4em] uppercase font-bold" style={{ color: G }}>Our Services</h3>
            </div>
            <ul className="space-y-3">
              {services.map((s, i) => (
                <li key={i} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: `${G}50` }} />
                  <span className="text-white/40 text-sm hover:text-white/70 transition-colors duration-200 cursor-default"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.95rem" }}>
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-5" style={{ background: G }} />
              <h3 className="text-xs tracking-[0.4em] uppercase font-bold" style={{ color: G }}>Quick Links</h3>
            </div>
            <ul className="space-y-3">
              {quickLinks.map((l, i) => (
                <li key={i}>
                  <Link href={l.href}
                    className="flex items-center gap-2 text-white/40 hover:text-white transition-colors duration-200 group/link text-sm"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.95rem" }}>
                    <ArrowUpRight size={11} className="opacity-0 group-hover/link:opacity-100 transition-opacity flex-shrink-0" style={{ color: G }} />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Column */}
          <div className="md:col-span-3">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-5" style={{ background: G }} />
              <h3 className="text-xs tracking-[0.4em] uppercase font-bold" style={{ color: G }}>Let&apos;s Create</h3>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.95rem", lineHeight: "1.8" }}>
              Ready to create something extraordinary? Let&apos;s bring your vision to life.
            </p>
            <Link href="/planmyevent"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs tracking-[0.2em] uppercase font-bold transition-all duration-300 hover:gap-4 mb-3 w-full justify-center"
              style={{ background: G, color: "#000" }}>
              Plan My Event <ArrowUpRight size={13} />
            </Link>
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300 w-full justify-center"
              style={{ border: `1px solid ${G}30`, color: `${G}90` }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = G;
                (e.currentTarget as HTMLElement).style.color = G;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${G}30`;
                (e.currentTarget as HTMLElement).style.color = `${G}90`;
              }}>
              Get In Touch
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 pb-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: `1px solid ${G}12` }}>
          <p className="text-white/25 text-xs tracking-widest">
            © {year} ELEGANTE BEE SERVICES. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: G }} />
            <p className="text-white/20 text-xs tracking-wider" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Elegance is a language.
            </p>
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: G }} />
          </div>
        </div>
      </div>
    </footer>
  );
}