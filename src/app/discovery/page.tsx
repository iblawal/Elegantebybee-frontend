import Hero from "@/components/Hero";
import { Link } from "lucide-react";
import { Check } from "lucide-react";

export default function DiscoveryCall() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <Hero
        title="Discovery Call"
        subtitle="Where we uncover your story and set the right foundation."
        bgImage="/creative-process-hero-bg.jpg"
        buttonText="Book a Call"
        buttonLink="/contact"
      />

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Why It Matters */}
        <section className="mb-16 sm:mb-20 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-2xl lg:text-2xl font-bold mb-4 pb-2 border-b-4 border-brand-gold  inline-block">
              Why It Matters
            </h2>
          </div>
          
          <div className="bg-white p-6 sm:p-8 lg:p-12 rounded-2xl shadow-lg">
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
              Most planners start with a quote. We start with a conversation. Our discovery
              call allows us to understand not only your logistics, but also your values,
              your lifestyle, and your emotional goals for the event. It's where we
              uncover the <span className="font-bold text-brand-gold">why</span> behind your celebration.
            </p>
          </div>
        </section>

        {/* What You'll Walk Away With */}
        <section className="mb-16 sm:mb-20 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-2xl lg:text-2xl font-bold mb-4 pb-3 border-b-4 border-brand-gold  inline-block">
              What You'll Walk Away With
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8">
            {[
              'A clear outline of your goals and event type',
              'Recommendations based on your personality, not just your budget',
              'Confidence that your planner sees you clearly'
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-gradient-to-br from-white to-yellow-50 rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-gold  flex items-center justify-center mb-4">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                </div>
                <p className="text-sm sm:text-base text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/page" 
            className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base bg-brand-gold hover:bg-black text-black hover:text-brand-gold hover:shadow-lg hover:-translate-y-0.5"
          >
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}