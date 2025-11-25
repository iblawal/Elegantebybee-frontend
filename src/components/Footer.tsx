"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram } from "lucide-react";
import { FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const [year, setYear] = useState("2024");

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="bg-[#bfa14d] text-black py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="flex items-center space-x-3">
          <Image
            src="/logo.png"
            alt="ELEGANTEBYBEE Logo"
            width={50}
            height={50}
            style={{ height: 'auto' }}
            className="rounded-full"
            priority
          />
          <h2 className="text-lg font-bold">ELEGANTEBY BEE</h2>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Event Blogging and Planning</li>
            <li>Birthday Shoutouts</li>
            <li>Fashion Influencing</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline">Services</Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">About</Link>
            </li>
            <li>
              <Link href="/media" className="hover:underline">Media</Link>
            </li>
            <li>
              <Link href="/blog" className="hover:underline">Blog</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
          <div className="flex space-x-4 text-2xl">
            <Link href="https://instagram.com/elegantebybee" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white transition-colors">
              <Instagram />
            </Link>
            <Link href="https://tiktok.com/@elegantebybee" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:text-white transition-colors">
              <FaTiktok />
            </Link>
            <Link href="https://facebook.com/elegant_by_bee" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-white transition-colors">
              <Facebook />
            </Link>
            <Link href="https://wa.me/2349167796186" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Nigeria" className="hover:text-white transition-colors">
              <FaWhatsapp />
            </Link>
            <Link href="https://wa.me/12406040025" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp US" className="hover:text-white transition-colors">
              <FaWhatsapp />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-black mt-10 pt-6 text-center text-sm">
        <p>Copyright {year} ELEGANTE BEE SERVICES. All rights reserved.</p>
      </div>
    </footer>
  );
}