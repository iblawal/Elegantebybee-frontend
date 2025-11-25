
import Hero from "@/components/Hero";
import Image from "next/image";


export default function About() {
  return (
    <>
  

      {/* Hero Section */}
      <Hero
        title="About Us"
        subtitle="Crafting unforgettable experiences with elegance, creativity, and precision."
        bgImage="/about-hero.jpg" 
      />

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {}
            <div className="bg-gray-200 rounded-2xl h-96 shadow-lg flex items-center justify-center">
             <Image
               src="/about-us-page.jpg"   
               alt="About us"
               width={600}
               height={600}
               className="w-full h-full object-cover"
              />
            </div>

            {/* About Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
                More About Elegante Bee
              </h2>
              <p className="mb-4 text-brand-dark">
                ELEGANTE BEE SERVICES is more than a brand, it’s a lifestyle.
                We are driven by the belief that events should not only be seen,
                but felt.
              </p>
              <p className="mb-4">
                With years of experience crafting luxurious weddings, corporate
                events, birthday celebration, fashion activations, and influencer experiences, we’ve
                mastered the art of detail and emotion.
              </p>
              <p className="mb-4">
                Our founder built ELEGANTE BEE from the ground up, fusing
                industry expertise, media exposure, and bold creative vision
                into one name trusted across the United States and beyond.
              </p>
              <p className="italic text-lg mb-6 text-brand-dark">
                Our passion is elegance. Our tool is excellence.
              </p>
              <p>
                Founded on a passion for style and rooted in the art of
                execution, we’ve become a leading name in bespoke event
                production. Our work is defined by{" "}
                <strong>creative storytelling</strong>,{" "}
                <strong>flawless logistics</strong>, and an uncompromising
                standard of beauty.
              </p>
            </div>
          </div>

          {/* Philosophy */}
          <div className="mt-20">
            <h3 className="text-2xl font-semibold mb-4 text-black">
              Our Philosophy
            </h3>
            <p className="mb-4 text-brand-dark">
              We don’t believe in cookie-cutter. Every event is a canvas, and
              every client is the muse. Whether you’re planning a multi-day
              destination celebration or an intimate proposal, our team brings{" "}
              <strong>precision, creativity, and purpose</strong> to every
              detail.
            </p>
            <p className="text-brand-dark">
              We infuse our events with{" "}
              <strong>visual harmony, emotional depth, and lifestyle
              relevance</strong>, ensuring that guests don’t just attend,
              they feel.
            </p>
          </div>

          {/* What We Do Best */}
          <div className="mt-20">
            <h3 className="text-2xl font-semibold mb-4 text-black">
              What We Do Best
            </h3>
            <ul className="list-disc list-inside space-y-2 text-brand-dark">
              <li>Full-service event planning & production</li>
              <li>Concept & moodboard design</li>
              <li>Brand & influencer activations</li>
              <li>Luxury shoutouts & media campaigns</li>
              <li>Vendor curation & coordination</li>
              <li>On-site management & execution</li>
              <li>Event blogging & digital storytelling</li>
            </ul>
          </div>

          {/* Why Clients Choose Us */}
          <div className="mt-20">
            <h3 className="text-2xl font-semibold mb-4 text-black">
              Why Clients Choose Us
            </h3>
            <ul className="list-disc list-inside space-y-2 text-brand-gold">
              <li>
                <strong>Luxury without ego</strong>: We blend prestige with
                humility.
              </li>
              <li>
                <strong>Creative consulting</strong>: Your ideas + our
                innovation = unmatched synergy.
              </li>
              <li>
                <strong>Trust & transparency</strong>: You know what’s
                happening, when, and why.
              </li>
              <li>
                <strong>Experience-minded</strong>: We think like producers,
                stylists, and guests.
              </li>
            </ul>
          </div>

          {/* Vision */}
          <div className="mt-20">
            <h3 className="text-2xl font-semibold mb-4 text-black">Our Vision</h3>
            <p className="text-brand-dark">
              To become the go-to event brand across the United States and
              beyond, known not just for elegant aesthetics, but for the{" "}
              <strong>feeling</strong> guests carry long after the music stops.
            </p>
          </div>
        </div>
      </section>


    </>
  );
}
