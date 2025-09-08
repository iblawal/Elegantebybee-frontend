"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram } from "lucide-react";
import { FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#bfa14d] text-black py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand (Logo + Name) */}
        <div className="flex items-center space-x-3">
          <Image
            src="/logo.png"
            alt="ELEGANTEBYBEE Logo"
            width={50}
            height={50}
            className="rounded-full"
            priority
          />
          <h2 className="text-lg font-bold">ELEGANTEBY BEE</h2>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Event Blogging & Planning</li>
            <li>Birthday Shoutouts</li>
            <li>Fashion Influencing</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/media" className="hover:underline">
                Media
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:underline">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
          <div className="flex space-x-4 text-2xl">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-white"
            >
              <Instagram />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="hover:text-white"
            >
              <FaTiktok />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-white"
            >
              <Facebook />
            </a>
            <a
              href="https://wa.me/2349167796186"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Nigeria"
              className="hover:text-white"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://wa.me/12406040025"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp US"
              className="hover:text-white"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-black mt-10 pt-6 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} ELEGANTE BEE SERVICES. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
