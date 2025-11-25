
import Hero from "@/components/Hero";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";


export default function ConceptDevelopment() {
  return (
    <div className="min-h-screen flex flex-col">
      
      
      <Hero 
        title="Concept Development" 
        subtitle="Where your vision meets our expertise" 
        bgImage="/creative-process-hero-bg.jpg"
      />

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-16 sm:mb-20">
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed text-center">
            We transform simple ideas into luxurious realities with mood boards, theme planning, 
            and signature elements that leave a lasting impression.
          </p>
        </div>

        {/* Creative Process Section */}
        <section className="mb-16 sm:mb-20 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-2xl lg:text-2xl font-bold mb-4 pb-2 border-b-4 border-brand-gold  inline-block">
              Our Creative Process
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mt-8">
            {[
              'Idea brainstorming & concept sketching',
              'Event mood board creation',
              'Theme development with luxe details',
              'Venue layout & aesthetic planning'
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 sm:p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-brand-gold flex items-center justify-center">
                  <Check className="w-3 h-3 sm:w-4 sm:h-4 text-black" />
                </div>
                <p className="text-sm sm:text-base text-gray-700 pt-1">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Style Section */}
        <section className="mb-16 sm:mb-20 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-2xl lg:text-2xl font-bold mb-4 pb-2 border-b-4 border-brand-gold inline-block">
              Designs That Speak Your Style
            </h2>
          </div>
          
          <div className="bg-gradient-to-br from-yellow-50 to-white p-6 sm:p-8 lg:p-12 rounded-2xl shadow-lg">
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed text-center">
              Whether it's minimal elegance or extravagant grandeur, our creative team ensures 
              every detail of your concept reflects <span className="font-bold text-brand-gold">you</span>.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <a 
            href="/services" 
            className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base bg-brand-gold hover:bg-black text-black  hover:text-brand-gold hover:shadow-lg hover:-translate-y-0.5"
          >
            Explore Our Services
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>
      </main>
    </div>
  );
}