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

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex-shrink-0">
              <img
                src="/logo.png"
                alt="Eleganteby Bee Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className="font-bold text-lg tracking-widest uppercase"
                style={{ fontFamily: "'Playfair Display', serif", color: G }}
              >
                Eleganteby Bee
              </span>
              <span
                className="text-[10px] tracking-[0.4em] uppercase transition-colors duration-300"
                style={{ color: scrolled ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.55)" }}
              >
                Services
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-xs font-bold tracking-widest uppercase transition-all duration-300 group/link"
                  style={{
                    color: scrolled
                      ? isActive ? G : "rgba(255,255,255,0.85)"
                      : isActive ? G : "#000",
                  }}
                >
                  {link.label}
                  {/* Active underline */}
                  <span
                    className="absolute -bottom-1 left-0 h-px transition-all duration-300"
                    style={{ width: isActive ? "100%" : "0%", background: G }}
                  />
                  {/* Hover underline */}
                  <span
                    className="absolute -bottom-1 left-0 h-px w-0 group-hover/link:w-full transition-all duration-500"
                    style={{ background: G }}
                  />
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="/request-quote"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:gap-3 hover:opacity-90"
              style={{ background: G, color: "#000" }}
            >
              Request a Quote
              <ArrowUpRight size={13} />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2"
            style={{ color: scrolled ? "white" : G }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className="fixed inset-0 z-40 flex flex-col pt-24 px-8 pb-12 transition-all duration-400 md:hidden"
        style={{
          background: "rgba(5,5,5,0.98)",
          backdropFilter: "blur(24px)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
          transform: menuOpen ? "translateY(0)" : "translateY(-12px)",
        }}
      >
        <div className="flex flex-col gap-7">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-bold uppercase tracking-widest transition-colors duration-200"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: pathname === link.href ? G : "rgba(255,255,255,0.65)",
                transitionDelay: `${i * 40}ms`,
              }}
            >
              {link.label}
            </Link>
          ))}
          <div className="h-px mt-2" style={{ background: `${G}20` }} />
          <Link
            href="/request-quote"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold tracking-widest uppercase w-fit"
            style={{ background: G, color: "#000" }}
          >
            Request a Quote <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </>
  );
}


