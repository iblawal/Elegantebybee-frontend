import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ContactSection from "@/components/ContactSection";
import { Check } from "lucide-react";

export default function Execution() {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Hero */}
      <Hero
        title="Execution"
        subtitle="Where every detail comes alive seamlessly"
        bgImage="/creative-process-hero-bg.jpg"
      />

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Bringing Plans to Life */}
        <section className="mb-16 sm:mb-20 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-2xl lg:text-3xl font-bold mb-4 pb-2 border-b-4 border-brand-gold  inline-block">
              Bringing Plans to Life
            </h2>
          </div>
          
          <div className="bg-gradient-to-br from-white to-yellow-50 p-6 sm:p-8 lg:p-12 rounded-2xl shadow-lg">
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed text-center">
              This is the moment everything you've dreamed of becomes reality.
              Our team takes charge of logistics, vendor coordination, timelines,
              and on-the-ground execution so you can stay present and enjoy the
              moment. No stress. No chaos. Just effortless elegance unfolding
              around you.
            </p>
          </div>
        </section>

        {/* What Execution Means */}
        <section className="mb-16 sm:mb-20 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-2xl lg:text-2xl font-bold mb-4 pb-2 border-b-4 border-brand-gold  inline-block">
              What Execution Means for You
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mt-8">
            {[
              'Flawless coordination with vendors and suppliers',
              'On-site supervision to keep everything on track',
              'Quick problem-solving so issues never reach you',
              'A seamless experience that feels effortless for you and your guests'
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-brand-gold -400 flex items-center justify-center">
                  <Check className="w-3 h-3 sm:w-4 sm:h-4 text-black" />
                </div>
                <p className="text-sm sm:text-base text-gray-700 pt-1">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Promise */}
        <section className="mb-16 sm:mb-20 max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-2xl lg:text-2xl font-bold mb-4 pb-2 border-b-4 border-brand-gold  inline-block">
              Our Promise
            </h2>
          </div>
          
          <div className="bg-black text-white p-6 sm:p-8 lg:p-12 rounded-2xl shadow-2xl">
            <p className="text-base sm:text-lg lg:text-l leading-relaxed text-center">
              On the day of your celebration, your only job is to smile, dance,
              and create memories. We handle the rest-quietly, efficiently, and
              with the signature elegance that defines{" "}
              <span className="font-bold text-brand-gold ">ELEGANTE BEE</span>.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}