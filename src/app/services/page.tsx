"use client";

import Hero from "@/components/Hero";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

// Animation Variants)
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }, 
  },
};

const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

export default function ServicesPage() {
  return (
    <main>
      {/* Hero Section */}
      <Hero
        title="Our Services"
        subtitle="Discover the elegance, creativity, and precision that define every experience we create."
        bgImage="/services-hero.jpg"
      />

      {/* What We Do */}
      <motion.section
        className="py-16 text-center bg-white"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold text-black"
          >
            What We Do
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-gray-700 max-w-3xl mx-auto"
          >
            At <span className="font-semibold">ELEGANTE BEE</span>, we
            specialize in crafting timeless events with a touch of luxury, love,
            and personalization. Whether it&apos;s a wedding, birthday,
            anniversary, or brand launch, we make it memorable, meaningful, and
            magical.
          </motion.p>
        </div>
      </motion.section>

      {/* Services List */}
      <motion.section
        className="space-y-20 py-12"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <ServiceItem
          title="Event Planning & Coordination"
          text="We handle every detail from concept to execution, ensuring your event runs smoothly and reflects your unique style and vision."
          imageSrc="/event-planning-cordination.jpg"
          imageAlt="Professional event planning and coordination"
        />
        <ServiceItem
          title="Birthday Shoutout"
          text="Celebrate your special day in style with a personalized luxury birthday shoutout that makes you feel seen, valued, and celebrated."
          imageSrc="/birthday-shoutouts.jpg"
          imageAlt="Luxury birthday shoutout"
        />
         <ServiceItem
          title="Fashion Influencing"
          text="Step into the world of trends with my creative fashion influencing-bringing you style inspiration, brand collaborations, and bold looks that stand out."
          imageSrc="/fashion-influencing.jpg"
          imageAlt=""
        />
        <ServiceItem
          title="Event Venue Scouting"
          text=" We don't just plan events, we help you find the perfect venue that fits your style, vision, and guest count, whether it's an intimate rooftop or a grand ballroom."
          imageSrc="/event-venue.jpg"
          imageAlt="Beautiful event venues and locations"
          reverse
        />
        <ServiceItem
          title="Decoration & Styling"
          text="We transform spaces with elegant floral arrangements, luxurious tablescapes, and customized decor that speaks your vibe and event theme."
          imageSrc="/decoration-styling.jpg"
          imageAlt="Elegant event decoration and styling"
        />
        <ServiceItem
          title="Entertainment & Activities"
          text="We provide engaging entertainment options, from live bands to DJs, performers, and interactive activities that keep your guests entertained."
          imageSrc="/entertainment-activities.jpg"
          imageAlt="Event entertainment and activities"
        />
        <ServiceItem
          title="Photography & Videography"
          text="We capture every moment with professional photography and videography, ensuring your memories are preserved beautifully."
          imageSrc="/photography-videography.jpg"
          imageAlt="Professional event photography and videography"
        />
        <ServiceItem
          title="Media Coverage"
          text="We ensure your event is captured beautifully with professional photography, video coverage, and media publicity if desired. Your story deserves to be told."
          imageSrc="/media-coverage.jpg"
          imageAlt="Professional media coverage and publicity"
        />
      </motion.section>
    </main>
  );
}


function ServiceItem({
  title,
  text,
  imageSrc,
  imageAlt,
  reverse,
}: {
  title: string;
  text: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}) {
  return (
    <motion.div
      variants={fadeInUp}
      className={`container mx-auto px-4 flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-10`}
    >
      <div className="md:w-1/2 relative rounded-xl overflow-hidden h-64 w-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="md:w-1/2">
        <h3 className="text-2xl font-bold text-black">{title}</h3>
        <p className="mt-4 text-gray-700">{text}</p>
      </div>
    </motion.div>
  );
}
