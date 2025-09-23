"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Hero from "@/components/Hero";
import PortfolioSection from "@/components/PortfolioSection";
import EventShowcase from "@/components/EventShowcase";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  fadeInCenter,
  staggerContainer,
} from "@/lib/animations";

export default function Home() {
  // Testimonials
  const testimonials = [
    {
      text: `"Everything you saw yesterday was beyond my expectations..."`,
    },
    {
      text: `"When choosing vendors, go with spirits who understand your style..."`,
    },
    {
      text: `Hello Beautiful Elegantebybee,
      Thank you for the classy coverage of my sister's 60th birthday party...
      Your professionalism stood out from start to finish. Truly one in a million! 🙏😍`,
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextTestimonial = () =>
    setCurrent((prev) => (prev + 1) % testimonials.length);

  const prevTestimonial = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % testimonials.length),
      5000
    );
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Elegance Meets Experience"
        subtitle="Your go-to for unforgettable events, style, and moments that matter."
        buttonText="Plan My Event"
        buttonLink="/planmyevent"
        bgImage="/home-hero.jpg"
      />

      {/* Services */}
      <motion.section
        id="services"
        className="py-20 text-white text-center bg-cover bg-center my-20"
        style={{ backgroundImage: "url('/service-bg.jpg')" }}
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-6xl mx-auto px-6 bg-black/60 p-8 rounded-lg">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold mb-4 text-black"
          >
            Our Signature Services
          </motion.h2>
          <motion.p variants={fadeInUp} className="mb-10">
            Crafted with flair, curated with elegance.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Card */}
            <motion.div
              variants={fadeInLeft}
              className="bg-brand-gold text-black rounded-lg shadow hover:bg-black hover:text-brand-gold hover:scale-105 transition-all"
            >
              <Image
                src="/event-planning.jpg"
                alt="Event Planning"
                width={400}
                height={300}
                className="rounded-t-lg w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="font-bold text-lg mb-2">
                  Event Blogging & Planning
                </h4>
                <p>
                  Documenting luxury moments and crafting unforgettable
                  experiences.
                </p>
              </div>
            </motion.div>

            {/* Center Card */}
            <motion.div
              variants={fadeInCenter}
              className="bg-brand-gold text-black rounded-lg shadow hover:bg-black hover:text-brand-gold hover:scale-105 transition-all"
            >
              <Image
                src="/birthday-shoutout.jpg"
                alt="Birthday Shoutouts"
                width={400}
                height={300}
                className="rounded-t-lg w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="font-bold text-lg mb-2">Birthday Shoutouts</h4>
                <p>
                  Luxury shoutouts for spotlight moments and digital elegance.
                </p>
              </div>
            </motion.div>

            {/* Right Card */}
            <motion.div
              variants={fadeInRight}
              className="bg-brand-gold text-black rounded-lg shadow hover:bg-black hover:text-brand-gold hover:scale-105 transition-all"
            >
              <Image
                src="/fashion-influencer.jpg"
                alt="Fashion Influencer"
                width={400}
                height={300}
                className="rounded-t-lg w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="font-bold text-lg mb-2">Fashion Influencer</h4>
                <p>
                  Elevating brands through visual storytelling and lifestyle
                  content.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeInUp}>
            <Link
              href="/services"
              className="inline-block mt-8 bg-brand-gold text-black px-6 py-3 rounded-lg font-semibold hover:bg-black hover:text-brand-gold transition"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Process Section (Concept, Proposal, Discovery, Execution) */}
      <motion.section
        className="py-16 bg-gray-50 text-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold mb-12 text-black"
          >
            Our Creative Process
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Concept", link: "/concept" },
              { title: "Proposal", link: "/proposal" },
              { title: "Discovery", link: "/discovery" },
              { title: "Execution", link: "/execution" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-brand-gold text-black rounded-lg shadow-lg p-6 hover:bg-black hover:text-brand-gold transition-all duration-300"
              >
                <h4 className="font-bold text-xl mb-4">{item.title}</h4>
                <p className="mb-6">
                  Learn how we craft unique {item.title.toLowerCase()}s that
                  bring your vision to life.
                </p>
                <Link
                  href={item.link}
                  className="inline-block bg-brand-gold text-black px-4 py-2 rounded-md font-semibold shadow-md hover:bg-black hover:text-brand-gold transition"
                >
                  Learn More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Power Section */}
      <motion.section
        className="py-16 bg-white text-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold mb-3 text-black"
          >
            The Power Behind ELEGANTE BEE
          </motion.h2>
          <motion.p variants={fadeInUp} className="mb-12 text-brand-dark">
            More than services, we build perception, experience, and lasting
            value.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Positioning Power",
                text: "We don't just show up, we stand out. Our brand voice and visuals elevate how the world sees you.",
                variant: fadeInLeft,
              },
              {
                title: "Experience-Centric",
                text: "Every client journey is designed as a luxury experience. We choreograph moments, not just manage events.",
                variant: fadeInCenter,
              },
              {
                title: "Service-Oriented",
                text: "Our capital is in the service we provide - rooted in trust, delivered with finesse, sealed with style.",
                variant: fadeInRight,
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                variants={card.variant}
                className="bg-[#bfa14d] rounded-2xl shadow-md p-6 hover:bg-black hover:scale-105 transition-all text-white"
              >
                <Image
                  src={`/${card.title.toLowerCase().replace(/\s+/g, "-")}.jpg`}
                  alt={card.title}
                  width={350}
                  height={200}
                  className="rounded-lg shadow mb-4 w-full h-48 object-cover"
                />
                <h4 className="font-bold text-lg">{card.title}</h4>
                <p className="mt-2">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* About */}
      <motion.section
        id="about"
        className="py-16 bg-white"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <motion.div variants={fadeInLeft}>
            <Image
              src="/about-section.jpg"
              alt="About Elegante Bee"
              width={500}
              height={600}
              className="rounded-lg shadow w-full"
            />
          </motion.div>
          <motion.div variants={fadeInRight}>
            <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
            <p>
              At <strong>ELEGANTE BEE SERVICES</strong>, &quot;We don&apos;t just
              design, we architect experiences&quot;
            </p>
            <p className="italic mt-2">
              &quot;We believe elegance is a language...&quot;
            </p>
            <Link
              href="/about"
              className="inline-block mt-4 bg-brand-gold text-black px-6 py-3 rounded-lg font-semibold hover:bg-black hover:text-white"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Portfolio + Showcase */}
      <PortfolioSection />
      <EventShowcase />

      {/* Testimonials */}
      <motion.section
        className="py-16 bg-brand-gold text-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
      >
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-6">
            What Our Clients Say
          </motion.h2>

          <motion.div
            animate={{ x: [0, -50, 0] }}
            transition={{ repeat: Infinity, duration: 10 }}
            className="relative bg-brand-gold p-6 rounded-lg shadow-lg min-h-[200px] text-black"
          >
            <p className="italic whitespace-pre-line">
              {testimonials[current].text}
            </p>

            {/* Controls */}
            <button
              onClick={prevTestimonial}
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-black text-white rounded-full p-2 hover:bg-gray-800"
            >
              &#10094;
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-black text-white rounded-full p-2 hover:bg-gray-800"
            >
              &#10095;
            </button>
          </motion.div>

          {/* Dots */}
          <div className="flex justify-center mt-4 gap-2">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`h-3 w-3 rounded-full ${i === current ? "bg-black scale-110" : "bg-gray-600"
                  }`}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Founder */}
      <motion.section
        className="py-16 bg-white"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
      >
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <motion.div variants={fadeInLeft}>
            <h2 className="text-3xl font-bold uppercase mb-4">
              Meet Our Founder
            </h2>
            <p>
              Elegance begins with vision, and our founder is the heart of it
              all.
            </p>
            <h5 className="mt-4 font-bold">Mrs Bukola Zubair Lawal</h5>
          </motion.div>
          <motion.div variants={fadeInRight} className="text-center">
            <Image
              src="https://via.placeholder.com/300x300?text=Founder"
              alt="Founder"
              width={300}
              height={300}
              className="rounded-full shadow mx-auto"
            />
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
