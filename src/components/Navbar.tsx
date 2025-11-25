"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Cinzel_Decorative } from "next/font/google";

const cinzel = Cinzel_Decorative({ subsets: ["latin"], weight: "700" });

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-[#bfa14d] px-6 py-4 flex justify-between items-center z-50 shadow-md">
      {/* Logo + Brand */}
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src="/logo.png"
          alt="Elegant By Bee Logo"
          width={60}
          height={60}
          style={{ height: 'auto' }}
          priority
        />
        <span
          className={`${cinzel.className} text-xl md:text-2xl text-black tracking-wide`}
        >
          ELEGANTEBYBEE
        </span>
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-6 font-medium">
        <li>
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
        </li>

        {/* Services Dropdown */}
        <li className="group relative">
          <span className="cursor-pointer hover:text-white transition">
            Services
          </span>
          <ul className="absolute left-0 hidden group-hover:block bg-white text-black mt-2 rounded-lg shadow-md w-40">
            <li>
              <Link
                href="/services"
                className="block px-4 py-2 hover:bg-gray-100 rounded-t-lg"
              >
                All Services
              </Link>
            </li>
            <li>
              <Link
                href="/request-quote"
                className="block px-4 py-2 hover:bg-gray-100 rounded-b-lg"
              >
                Request a Quote
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <Link href="/about" className="hover:text-white transition">
            About
          </Link>
        </li>
        <li>
          <Link href="/media" className="hover:text-white transition">
            Media
          </Link>
        </li>
        <li>
          <Link href="/blog" className="hover:text-white transition">
            Blog
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-white transition">
            Contact
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-black"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#bfa14d] text-black shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center p-4 border-b border-black/20">
          <span className="font-bold text-lg">Menu</span>
          <button onClick={() => setIsOpen(false)} aria-label="Close Menu">
            <X size={24} />
          </button>
        </div>

        {/* Sidebar Links */}
        <ul className="flex flex-col gap-4 p-4 font-medium">
          <li>
            <Link href="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/services" onClick={() => setIsOpen(false)}>
              Services
            </Link>
          </li>
          <li>
            <Link href="/request-quote" onClick={() => setIsOpen(false)}>
              Request a Quote
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link href="/media" onClick={() => setIsOpen(false)}>
              Media
            </Link>
          </li>
          <li>
            <Link href="/blog" onClick={() => setIsOpen(false)}>
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
