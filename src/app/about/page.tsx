"use client";
import Hero from "@/components/Hero";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight, Quote } from "lucide-react";

const G = "#C9A84C";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};
const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};
const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};
const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13 } },
};

export default function About() {
  return (
    <>
      {/* Hero */}
      <Hero
        title="About Us"
        subtitle="Crafting unforgettable experiences with elegance, creativity, and precision."
        bgImage="/about-hero.jpg"
      />

      {/* Opening Quote Banner */}
      <section className="relative py-20 overflow-hidden" style={{ background: "#080808" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at top center, rgba(201,168,76,0.07) 0%, transparent 65%)" }} />
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg,transparent,${G},transparent)` }} />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="mb-5 flex justify-center">
              <Quote size={32} style={{ color: G, opacity: 0.35 }} />
            </motion.div>
            <motion.p variants={fadeUp} className="text-2xl md:text-3xl font-bold text-white leading-relaxed italic"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              &ldquo;We believe elegance is a language — and every event is a story waiting to be told.&rdquo;
            </motion.p>
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mt-8">
              <div className="h-px w-12" style={{ background: G }} />
              <span className="text-xs tracking-widest uppercase" style={{ color: G }}>Elegante Bee Services</span>
              <div className="h-px w-12" style={{ background: G }} />
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg,transparent,${G},transparent)` }} />
      </section>

      {/* About Content */}
      <motion.section className="py-24 bg-white" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} variants={stagger}>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeLeft} className="relative">
            <div className="relative rounded-2xl overflow-hidden" style={{ height: "500px" }}>
              <Image src="/about-us-page.jpg" alt="About Elegante Bee" fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
            </div>
            <div className="absolute -bottom-5 -right-5 w-28 h-28 rounded-2xl flex flex-col items-center justify-center" style={{ background: G }}>
              <span className="text-black font-bold text-base" style={{ fontFamily: "'Playfair Display', serif" }}>Est.</span>
              <span className="text-black font-bold text-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>2014</span>
            </div>
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl" style={{ border: `2px solid ${G}30` }} />
          </motion.div>
          <motion.div variants={fadeRight}>
            <span className="text-xs tracking-[0.5em] uppercase mb-4 block" style={{ color: G }}>Our Story</span>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-5 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              More Than a Brand —<br />
              <span className="italic" style={{ color: G }}>A Lifestyle</span>
            </h2>
            <div className="h-[2px] w-12 mb-6" style={{ background: G }} />
            <p className="text-gray-600 mb-4 leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem", lineHeight: "1.9" }}>
              <strong className="text-black">ELEGANTE BEE SERVICES</strong> is more than a brand, it&apos;s a lifestyle. We are driven by the belief that events should not only be seen, but <em>felt</em>.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem", lineHeight: "1.9" }}>
              With years of experience crafting luxurious weddings, corporate events, birthday celebrations, fashion activations, and influencer experiences, we&apos;ve mastered the art of detail and emotion.
            </p>
            <p className="text-gray-500 italic border-l-2 pl-4 mb-8 leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem", lineHeight: "1.9", borderColor: G }}>
              &ldquo;Our passion is elegance. Our tool is excellence.&rdquo;
            </p>
            <Link href="/request-quote" className="inline-flex items-center gap-3 px-8 py-3.5 font-semibold rounded-full text-sm transition-all duration-300 hover:gap-5" style={{ background: G, color: "#000" }}>
              Work With Us <ArrowUpRight size={15} />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Founder Story */}
      <motion.section className="py-24" style={{ background: "#FAFAF8" }} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} variants={stagger}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div variants={fadeUp} className="text-center mb-3">
            <span className="text-xs tracking-[0.5em] uppercase" style={{ color: G }}>The Founder</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-black text-center mb-16" style={{ fontFamily: "'Playfair Display', serif" }}>
            The Heart Behind Elegante Bee
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeLeft} className="relative flex justify-center order-2 md:order-1">
              <div className="relative rounded-2xl overflow-hidden" style={{ width: "340px", height: "440px", border: `2px solid ${G}` }}>
                <Image src="https://via.placeholder.com/340x440?text=Mrs+Bukola" alt="Mrs Bukola Zubair Lawal" fill className="object-cover" sizes="340px" />
              </div>
              <div className="absolute -bottom-5 -right-5 w-20 h-20 rounded-2xl" style={{ border: `2px solid ${G}35` }} />
              <div className="absolute -top-5 -left-5 w-14 h-14 rounded-full" style={{ border: `2px solid ${G}25` }} />
            </motion.div>
            <motion.div variants={fadeRight} className="order-1 md:order-2">
              <span className="text-xs tracking-[0.5em] uppercase mb-4 block" style={{ color: G }}>Meet The Visionary</span>
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>Mrs Bukola Zubair Lawal</h3>
              <p className="italic text-sm mb-6" style={{ color: G }}>Founder &amp; CEO, Elegante Bee Services</p>
              <div className="h-[2px] w-12 mb-6" style={{ background: G }} />
              <p className="text-gray-600 mb-4 leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem", lineHeight: "1.9" }}>
                A woman who truly believes that elegance is not just a look - it is a lifestyle. Her love for beautiful experiences and well-crafted moments is at the center of everything she does.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem", lineHeight: "1.9" }}>
                With a calm spirit, a creative mind, and a heart that pays attention to even the smallest details, she brings life into every event. Her passion for excellence shows in the way she plans, organizes, and adds that touch of class that makes each celebration stand out.
              </p>
              <p className="text-gray-500 italic border-l-2 pl-4 mb-6 leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem", lineHeight: "1.9", borderColor: G }}>
                &ldquo;For her, event planning is more than work - it is a calling. And through ELEGANTE BEE, she continues to pour her dedication into making every event flourish, leaving lasting memories for everyone who walks through the doors.&rdquo;
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Philosophy */}
      <motion.section className="relative py-24 overflow-hidden" style={{ background: "#080808" }}
        initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(201,168,76,0.05) 0%, transparent 70%)" }} />
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg,transparent,${G},transparent)` }} />
        <div className="max-w-6xl mx-auto px-6">
          <motion.div variants={fadeUp} className="text-center mb-3">
            <span className="text-xs tracking-[0.5em] uppercase" style={{ color: G }}>What We Stand For</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white text-center mb-14" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Philosophy
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { title: "Creative Storytelling", text: "Every event is a canvas. We infuse your story into every detail — from décor to execution. Nothing is generic, everything is intentional." },
              { title: "Emotional Depth", text: "We don't just design spaces — we design feelings. Guests don't just attend our events, they feel them long after they leave." },
              { title: "Flawless Logistics", text: "Behind every beautiful moment is meticulous planning. Our team ensures everything runs perfectly so you can be fully present." },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="p-7 rounded-2xl"
                style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${G}15` }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}>
                <div className="h-[2px] w-10 mb-5" style={{ background: G }} />
                <h4 className="text-white font-bold text-lg mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h4>
                <p className="text-white/45 text-sm leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.98rem", lineHeight: "1.85" }}>{item.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            <motion.div variants={fadeLeft}>
              <h3 className="text-xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>What We Do Best</h3>
              <div className="space-y-3">
                {[
                  "Full-service event planning & production",
                  "Concept & moodboard design",
                  "Brand & influencer activations",
                  "Luxury shoutouts & media campaigns",
                  "Vendor curation & coordination",
                  "On-site management & execution",
                  "Event blogging & digital storytelling",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: G }} />
                    <p className="text-white/55 text-sm" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem" }}>{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div variants={fadeRight}>
              <h3 className="text-xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Why Clients Choose Us</h3>
              <div className="space-y-4">
                {[
                  { title: "Luxury without ego", text: "We blend prestige with humility - making every client feel like royalty." },
                  { title: "Creative consulting", text: "Your ideas + our innovation = an unmatched creative synergy." },
                  { title: "Trust & transparency", text: "You know what's happening, when, and why at every step." },
                  { title: "Experience-minded", text: "We think like producers, stylists, and guests - all at once." },
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-xl" style={{ background: "rgba(255,255,255,0.02)", border: `1px solid ${G}12` }}>
                    <p className="font-bold text-sm mb-1" style={{ color: G, fontFamily: "'Playfair Display', serif" }}>{item.title}</p>
                    <p className="text-white/45 text-sm" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.95rem" }}>{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg,transparent,${G},transparent)` }} />
      </motion.section>

      {/* Vision CTA */}
      <motion.section className="relative py-24 text-center overflow-hidden"
        style={{ backgroundImage: "url('/about-hero.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}
        initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.78)" }} />
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg,transparent,${G},transparent)` }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <motion.div variants={fadeUp} className="mb-3">
            <span className="text-xs tracking-[0.5em] uppercase" style={{ color: G }}>Where We&apos;re Headed</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Vision
          </motion.h2>
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-12" style={{ background: G }} />
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: G }} />
            <div className="h-px w-12" style={{ background: G }} />
          </motion.div>
          <motion.p variants={fadeUp} className="text-white/70 leading-relaxed mb-10"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem", lineHeight: "2" }}>
            To become the go-to event brand across the United States and beyond — known not just for elegant aesthetics, but for the <em style={{ color: G }}>feeling</em> guests carry long after the music stops. We are building a legacy of moments, one event at a time.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link href="/planmyevent" className="inline-flex items-center gap-3 px-9 py-3.5 font-semibold rounded-full text-sm transition-all duration-300 hover:gap-5" style={{ background: G, color: "#000" }}>
              Start Planning With Us <ArrowUpRight size={15} />
            </Link>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg,transparent,${G},transparent)` }} />
      </motion.section>
    </>
  );
}