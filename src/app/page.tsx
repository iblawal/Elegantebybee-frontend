"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Hero from "@/components/Hero";
import PortfolioSection from "@/components/PortfolioSection";
import EventShowcase from "@/components/EventShowcase";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { fadeInLeft, fadeInRight, fadeInCenter } from "@/lib/animations";
import { ArrowUpRight, Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const G = "#C9A84C";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};
const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export default function Home() {
  const testimonials = [
    { text: "Everything you saw yesterday was beyond my expectations. Elegante Bee turned my vision into something I couldn't have even dreamed of.", author: "Client — Wedding Event", stars: 5 },
    { text: "When choosing vendors, go with spirits who understand your style. Elegante Bee understood mine from the very first conversation.", author: "Client — Corporate Event", stars: 5 },
    { text: "Hello Beautiful Elegantebybee, thank you for the classy coverage of my sister's 60th birthday party. Your professionalism stood out from start to finish. Truly one in a million!", author: "Client — Birthday Celebration", stars: 5 },
  ];

  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((p) => (p + 1) % testimonials.length);
  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      {/* Hero  */}
      <Hero
        title="Elegance Meets Experience"
        subtitle="Your go-to for unforgettable events, style, and moments that matter."
        buttonText="Plan My Event"
        buttonLink="/planmyevent"
        bgImage="/home-hero.jpg"
      />

      {/* Marquee Stats  */}
      <div className="mt-16 mb-16"
        style={{ background: "#080808", borderTop: `1px solid ${G}15`, borderBottom: `1px solid ${G}15`, overflow: "hidden", padding: "22px 0" }}>
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex items-center whitespace-nowrap"
          style={{ width: "max-content" }}
        >
          {[...Array(2)].map((_, dupIdx) => (
            <div key={dupIdx} className="flex items-center">
              {[
                { number: "300+", label: "Events Executed" },
                { number: "5+", label: "Years Experience" },
                { number: "2", label: "Countries Served" },
                { number: "100%", label: "Client Satisfaction" },
                { number: "20+", label: "Luxury Weddings" },
                { number: "200+", label: "Happy Clients" },
                { number: "15+", label: "Brand Activations" },
                { number: "5★", label: "Rated Service" },
              ].map((s, i) => (
                <div key={i} className="flex items-center">
                  <div className="flex items-center gap-4 px-10">
                    <span className="text-2xl font-bold" style={{ color: G, fontFamily: "'Playfair Display', serif" }}>{s.number}</span>
                    <span className="text-white/40 text-xs tracking-[0.3em] uppercase">{s.label}</span>
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: `${G}50` }} />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Services  */}
      <motion.section
        id="services"
        className="relative py-24 overflow-hidden"
        style={{ backgroundImage: "url('/service-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.85)" }} />
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg,transparent,${G},transparent)` }} />
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg,transparent,${G},transparent)` }} />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div variants={fadeUp} className="text-center mb-2">
            <span className="text-xs tracking-[0.5em] uppercase" style={{ color: G }}>What We Offer</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white text-center mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Signature Services
          </motion.h2>
          <motion.p variants={fadeUp} className="text-center text-white/40 mb-14 text-sm" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem" }}>
            Crafted with flair, curated with elegance.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { image: "/event-planning.jpg", title: "Event Blogging & Planning", desc: "Documenting luxury moments and crafting unforgettable experiences from concept to flawless execution.", tag: "Planning", variant: fadeInLeft },
              { image: "/birthday-shoutout.jpg", title: "Birthday Shoutouts", desc: "Luxury shoutouts for spotlight moments — digital elegance that makes you feel celebrated and seen.", tag: "Personal", variant: fadeInCenter },
              { image: "/fashion-influencer.jpg", title: "Fashion Influencer", desc: "Elevating brands through visual storytelling, lifestyle content, and bold creative direction.", tag: "Lifestyle", variant: fadeInRight },
            ].map((card, i) => (
              <motion.div
                key={i}
                variants={card.variant}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
                style={{ border: `1px solid ${G}18`, background: "rgba(255,255,255,0.02)" }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="relative h-52 overflow-hidden">
                  <Image src={card.image} alt={card.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width:768px) 100vw, 33vw" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom,transparent 30%,rgba(0,0,0,0.92))" }} />
                  <div className="absolute top-3 left-3">
                    <span className="text-xs tracking-widest uppercase px-3 py-1 rounded-full font-semibold" style={{ background: `${G}EC`, color: "#000" }}>{card.tag}</span>
                  </div>
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: `${G}20`, border: `1px solid ${G}50` }}>
                      <ArrowUpRight size={14} style={{ color: G }} />
                    </div>
                  </div>
                </div>
                <div className="p-6" style={{ background: "#0D0D0D" }}>
                  <div className="h-px w-8 mb-4" style={{ background: G }} />
                  <h4 className="font-bold text-lg text-white mb-3 leading-snug" style={{ fontFamily: "'Playfair Display', serif" }}>{card.title}</h4>
                  <p className="text-white/45 text-sm leading-relaxed mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.98rem", lineHeight: "1.85" }}>{card.desc}</p>
                  <Link href="/services" className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase group/link" style={{ color: G }}>
                    Explore Service <ArrowUpRight size={12} className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                  </Link>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `linear-gradient(90deg,transparent,${G},transparent)` }} />
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUp} className="text-center mt-12">
            <Link href="/services" className="inline-flex items-center gap-3 px-8 py-3.5 font-semibold rounded-full text-sm transition-all duration-300 hover:gap-5" style={{ background: G, color: "#000" }}>
              View All Services <ArrowUpRight size={15} />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* ── 4. Spacer ── */}
      <div className="py-8 bg-[#FAFAF8]" />

      {/* ── 5. Process ── */}
      <motion.section
        className="py-24"
        style={{ background: "#FAFAF8" }}
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div variants={fadeUp} className="text-center mb-2">
            <span className="text-xs tracking-[0.5em] uppercase" style={{ color: G }}>How We Work</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-black text-center mb-14" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Creative Process
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-5">
            {[
              { number: "01", title: "Concept", desc: "We capture your vision, understand your taste, and craft a creative direction unique to you.", link: "/concept" },
              { number: "02", title: "Proposal", desc: "A tailored proposal is curated with precision, outlining every detail of your dream event.", link: "/proposal" },
              { number: "03", title: "Discovery", desc: "We deep-dive into your preferences, refining every element to perfection before execution.", link: "/discovery" },
              { number: "04", title: "Execution", desc: "Your vision comes to life — flawlessly managed, beautifully delivered, timelessly remembered.", link: "/execution" },
            ].map((step, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group relative p-7 rounded-2xl overflow-hidden cursor-pointer"
                style={{ background: "#fff", border: `1px solid ${G}18`, boxShadow: "0 4px 24px rgba(0,0,0,0.05)" }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl" style={{ background: "linear-gradient(145deg,#0a0a0a,#120f02)" }} />
                <div className="relative z-10">
                  <span className="block text-5xl font-bold mb-4 leading-none select-none" style={{ color: `${G}12`, fontFamily: "'Playfair Display', serif" }}>{step.number}</span>
                  <div className="h-[2px] w-8 mb-4" style={{ background: G }} />
                  <h4 className="font-bold text-lg text-black group-hover:text-white mb-3 transition-colors duration-300" style={{ fontFamily: "'Playfair Display', serif" }}>{step.title}</h4>
                  <p className="text-gray-500 group-hover:text-white/50 text-sm leading-relaxed mb-5 transition-colors duration-300" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.95rem", lineHeight: "1.8" }}>{step.desc}</p>
                  <Link href={step.link} className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase" style={{ color: G }}>
                    Learn More <ArrowUpRight size={12} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Spacer */}
      <div className="py-8 bg-[#080808]" />

      {/* Power */}
      <motion.section
        className="relative py-24"
        style={{ background: "#080808" }}
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center,rgba(201,168,76,0.05) 0%,transparent 65%)" }} />
        <div className="max-w-6xl mx-auto px-6">
          <motion.div variants={fadeUp} className="text-center mb-2">
            <span className="text-xs tracking-[0.5em] uppercase" style={{ color: G }}>Our Strength</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white text-center mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            The Power Behind ELEGANTE BEE
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/35 text-center mb-14 max-w-lg mx-auto" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem" }}>
            More than services — we build perception, experience, and lasting value.
          </motion.p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { image: "/positioning-power.jpg", title: "Positioning Power", text: "We don't just show up, we stand out. Our brand voice and visuals elevate how the world sees you.", variant: fadeInLeft },
              { image: "/experience-centric.jpg", title: "Experience-Centric", text: "Every client journey is designed as a luxury experience. We choreograph moments, not just manage events.", variant: fadeInCenter },
              { image: "/service-oriented.jpg", title: "Service-Oriented", text: "Our capital is in the service we provide — rooted in trust, delivered with finesse, sealed with style.", variant: fadeInRight },
            ].map((card, i) => (
              <motion.div
                key={i}
                variants={card.variant}
                className="group relative rounded-2xl overflow-hidden"
                style={{ border: `1px solid ${G}15` }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image src={card.image} alt={card.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width:768px) 100vw, 33vw" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom,transparent 20%,rgba(0,0,0,0.96))" }} />
                </div>
                <div className="p-6" style={{ background: "#0D0D0D" }}>
                  <div className="h-px w-8 mb-3" style={{ background: G }} />
                  <h4 className="text-white font-bold text-lg mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{card.title}</h4>
                  <p className="text-white/45 text-sm leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.95rem", lineHeight: "1.85" }}>{card.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Spacer */}
      <div className="py-8 bg-white" />

      {/* About Snippet */}
      <motion.section
        id="about"
        className="py-24 bg-white"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeInLeft} className="relative">
            <div className="relative rounded-2xl overflow-hidden" style={{ height: "460px" }}>
              <Image src="/about-section.jpg" alt="About Elegante Bee" fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
            </div>
            <div className="absolute -bottom-5 -right-5 w-28 h-28 rounded-2xl flex flex-col items-center justify-center" style={{ background: G }}>
              <span className="text-black font-bold text-base" style={{ fontFamily: "'Playfair Display', serif" }}>Est.</span>
              <span className="text-black font-bold text-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>2014</span>
            </div>
          </motion.div>
          <motion.div variants={fadeInRight}>
            <span className="text-xs tracking-[0.5em] uppercase mb-4 block" style={{ color: G }}>Our Story</span>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-5 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>Who We Are</h2>
            <div className="h-[2px] w-12 mb-6" style={{ background: G }} />
            <p className="text-gray-600 mb-4 leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem", lineHeight: "1.9" }}>
              At <strong className="text-black">ELEGANTE BEE SERVICES</strong>, we don&apos;t just design — we architect experiences that live in memory long after the last guest leaves.
            </p>
            <p className="text-gray-500 italic mb-8 leading-relaxed border-l-2 pl-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", borderColor: G }}>
              &ldquo;We believe elegance is a language — and every event is a story waiting to be told.&rdquo;
            </p>
            <Link href="/about" className="inline-flex items-center gap-3 px-8 py-3.5 font-semibold rounded-full text-sm transition-all duration-300 hover:gap-5" style={{ background: G, color: "#000" }}>
              Our Full Story <ArrowUpRight size={15} />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Portfolio + Showcase  */}
      <div className="mt-16">
        <PortfolioSection />
      </div>

      <div className="mt-16">
        <EventShowcase />
      </div>

      {/* Spacer*/}
      <div className="py-8" style={{ background: "#080808" }} />

      {/* Testimonials */}
      <motion.section
        className="relative py-24 overflow-hidden"
        style={{ backgroundImage: "url('/contact-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.82)" }} />
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg,transparent,${G},transparent)` }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div variants={fadeUp} className="mb-2">
            <span className="text-xs tracking-[0.5em] uppercase" style={{ color: G }}>Testimonials</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white mb-14" style={{ fontFamily: "'Playfair Display', serif" }}>
            What Our Clients Say
          </motion.h2>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative p-10 rounded-2xl"
              style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(20px)", border: `1px solid ${G}22` }}
            >
              <Quote className="mx-auto mb-5" size={28} style={{ color: G, opacity: 0.4 }} />
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[current].stars)].map((_, i) => <Star key={i} size={13} fill={G} style={{ color: G }} />)}
              </div>
              <p className="text-white/75 leading-relaxed mb-8 italic" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", lineHeight: "2" }}>
                &ldquo;{testimonials[current].text}&rdquo;
              </p>
              <div className="h-px w-12 mx-auto mb-4" style={{ background: G }} />
              <p className="text-xs tracking-widest uppercase" style={{ color: G }}>{testimonials[current].author}</p>
            </motion.div>
          </AnimatePresence>
          <div className="flex items-center justify-center gap-6 mt-8">
            <button onClick={prev} className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110" style={{ border: `1px solid ${G}35`, color: G }}>
              <ChevronLeft size={16} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} className="rounded-full transition-all duration-300"
                  style={{ width: i === current ? "22px" : "7px", height: "7px", background: i === current ? G : `${G}35` }} />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110" style={{ border: `1px solid ${G}35`, color: G }}>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </motion.section>

      {/* Spacer  */}
      <div className="py-8 bg-[#FAFAF8]" />

      {/* Founder */}
      <motion.section
        className="py-24 bg-[#FAFAF8]"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeInLeft}>
            <span className="text-xs tracking-[0.5em] uppercase mb-4 block" style={{ color: G }}>The Visionary</span>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-2 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>Meet Our Founder</h2>
            <div className="h-[2px] w-12 mb-5" style={{ background: G }} />
            <h4 className="text-xl font-bold text-black mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>Mrs Bukola Zubair Lawal</h4>
            <p className="italic text-sm mb-6" style={{ color: G }}>Founder &amp; CEO, Elegante Bee Services</p>
            <p className="text-gray-600 leading-relaxed mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem", lineHeight: "1.9" }}>
              A woman who truly believes that elegance is not just a look — it is a lifestyle. Her love for beautiful experiences and well-crafted moments is at the center of everything she does.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8 italic border-l-2 pl-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", lineHeight: "1.9", borderColor: G }}>
              &ldquo;For her, event planning is more than work — it is a calling. Through ELEGANTE BEE, she pours dedication into making every event flourish.&rdquo;
            </p>
            <Link href="/about" className="inline-flex items-center gap-3 px-8 py-3.5 font-semibold rounded-full text-sm transition-all duration-300 hover:gap-5" style={{ background: G, color: "#000" }}>
              Read Her Story <ArrowUpRight size={15} />
            </Link>
          </motion.div>
          <motion.div variants={fadeInRight} className="relative flex justify-center">
            <div className="relative rounded-2xl overflow-hidden" style={{ width: "320px", height: "400px", border: `2px solid ${G}` }}>
              <Image src="https://via.placeholder.com/320x400?text=Founder" alt="Mrs Bukola Zubair Lawal" fill className="object-cover" sizes="320px" />
            </div>
            <div className="absolute -bottom-5 -left-5 w-20 h-20 rounded-2xl" style={{ border: `2px solid ${G}35` }} />
            <div className="absolute -top-5 -right-5 w-12 h-12 rounded-full" style={{ border: `2px solid ${G}25` }} />
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}