"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

const G = "#C9A84C";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Media", href: "/media" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(8,8,8,0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? `1px solid ${G}18` : "none",
          padding: scrolled ? "12px 0" : "20px 0",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex-shrink-0">
              <img src="/logo.png" alt="Eleganteby Bee Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-lg tracking-widest uppercase"
                style={{ fontFamily: "'Playfair Display', serif", color: G }}>
                Eleganteby Bee
              </span>
              <span className="text-[10px] tracking-[0.4em] uppercase transition-colors duration-300"
                style={{ color: scrolled ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.55)" }}>
                Services
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link key={link.href} href={link.href}
                  className="relative text-xs font-bold tracking-widest uppercase transition-all duration-300 group/link"
                  style={{ color: scrolled ? (isActive ? G : "rgba(255,255,255,0.85)") : (isActive ? G : "#000") }}>
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px transition-all duration-300"
                    style={{ width: isActive ? "100%" : "0%", background: G }} />
                  <span className="absolute -bottom-1 left-0 h-px w-0 group-hover/link:w-full transition-all duration-500"
                    style={{ background: G }} />
                </Link>
              );
            })}
          </div>

          <div className="hidden md:block">
            <Link href="/request-quote"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:gap-3"
              style={{ background: G, color: "#000" }}>
              Request a Quote <ArrowUpRight size={13} />
            </Link>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-full transition-all duration-300"
            style={{ color: scrolled ? "white" : G, background: menuOpen ? `${G}15` : "transparent" }}
            aria-label="Toggle menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 md:hidden transition-all duration-400"
        style={{
          background: "rgba(0,0,0,0.65)",
          backdropFilter: "blur(6px)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
        }}
        onClick={() => setMenuOpen(false)}
      />

      {/* Sidebar Panel */}
      <div
        className="fixed top-0 right-0 z-50 h-full md:hidden flex flex-col"
        style={{
          width: "min(320px, 85vw)",
          background: "linear-gradient(160deg, #0e0e0e 0%, #080808 100%)",
          borderLeft: `1px solid ${G}20`,
          borderRadius: "24px 0 0 24px",
          boxShadow: "-24px 0 80px rgba(0,0,0,0.9), inset 1px 0 0 rgba(201,168,76,0.1)",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.45s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5"
          style={{ borderBottom: `1px solid ${G}12` }}>
          <div className="flex items-center gap-2.5">
            <img src="/logo.png" alt="Logo" className="w-8 h-8 object-contain" />
            <span className="font-bold text-sm tracking-widest uppercase"
              style={{ fontFamily: "'Playfair Display', serif", color: G }}>
              EleganteBee
            </span>
          </div>
          <button onClick={() => setMenuOpen(false)}
            className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white/10"
            style={{ border: `1px solid ${G}25`, color: G }}>
            <X size={15} />
          </button>
        </div>

        {/* Gold shimmer */}
        <div className="h-px mx-6 mb-2" style={{ background: `linear-gradient(90deg, transparent, ${G}35, transparent)` }} />

        {/* Links */}
        <div className="flex-1 flex flex-col px-5 py-6 gap-1 overflow-y-auto">
          {navLinks.map((link, i) => {
            const isActive = pathname === link.href;
            return (
              <Link key={link.href} href={link.href}
                onClick={() => setMenuOpen(false)}
                className="group flex items-center justify-between px-4 py-3.5 rounded-2xl transition-all duration-300"
                style={{
                  background: isActive ? `${G}10` : "transparent",
                  border: isActive ? `1px solid ${G}25` : "1px solid transparent",
                }}>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-300"
                    style={{ background: isActive ? G : "rgba(255,255,255,0.12)" }} />
                  <span className="text-sm font-bold tracking-widest uppercase"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: isActive ? G : "rgba(255,255,255,0.6)",
                    }}>
                    {link.label}
                  </span>
                </div>
                <ArrowUpRight size={12}
                  className="opacity-0 group-hover:opacity-100 transition-all duration-300"
                  style={{ color: G }} />
              </Link>
            );
          })}
        </div>

        {/* Bottom */}
        <div className="px-5 pb-8">
          <div className="h-px mb-5" style={{ background: `${G}12` }} />
          <Link href="/request-quote" onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:opacity-90"
            style={{ background: G, color: "#000" }}>
            Request a Quote <ArrowUpRight size={13} />
          </Link>
          <p className="text-center text-xs mt-4"
            style={{ color: "rgba(255,255,255,0.18)", fontFamily: "'Cormorant Garamond', serif", letterSpacing: "0.15em" }}>
            Elegance is a language ✦
          </p>
        </div>
      </div>
    </>
  );
}

