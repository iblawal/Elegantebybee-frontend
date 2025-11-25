import Link from "next/link"; 
import Hero from "@/components/Hero";
import { ArrowRight, Calendar, CheckCircle, Clock, DollarSign, FileText, Sparkles, Users } from "lucide-react";

export default function Proposal() {
  return (
  <div className="min-h-screen flex flex-col">
        <Hero 
          title="Our Proposal" 
          subtitle="Detailed, personalized, and designed to impress" 
          bgImage="/creative-process-hero-bg.jpg"
        />
  
  {/* Main Content */}
  <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
  {/* What's Included */}
  <section className="mb-16 sm:mb-20 max-w-5xl mx-auto">
    <div className="text-center mb-8 sm:mb-12">
      <h2 className="text-2xl sm:text-2xl lg:text-2xl font-bold mb-4 pb-3 border-b-4 border-brand-gold  inline-block">
        What's Included in Your Proposal
      </h2>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {[
        {
          icon: <Sparkles className="w-6 h-6" />,
          title: "Event Concept & Theme",
          description: "A detailed vision of your event aesthetic, mood, and style direction tailored to your preferences"
        },
        {
          icon: <Calendar className="w-6 h-6" />,
          title: "Timeline & Milestones",
          description: "A comprehensive planning schedule with key dates, deadlines, and milestone checkpoints"
        },
        {
          icon: <Users className="w-6 h-6" />,
          title: "Vendor Recommendations",
          description: "Curated list of trusted vendors including caterers, florists, photographers, and entertainment"
        },
        {
          icon: <DollarSign className="w-6 h-6" />,
          title: "Budget Breakdown",
          description: "Transparent cost estimates for all services, allocations, and payment schedules"
        },
        {
          icon: <CheckCircle className="w-6 h-6" />,
          title: "Service Packages",
          description: "Flexible planning packages from full-service coordination to day-of execution"
        },
        {
          icon: <FileText className="w-6 h-6" />,
          title: "Detailed Scope of Work",
          description: "Clear outline of deliverables, responsibilities, and what you can expect from our team"
        }
      ].map((item, idx) => (
        <div key={idx} className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all border-t-4 border-brand-gold">
          <div className="w-12 h-12 rounded-full bg-brand-gold -400 flex items-center justify-center mb-4 text-black">
            {item.icon}
          </div>
          <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
          <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>
  </section>

  {/* How It Works */}
  <section className="mb-16 sm:mb-20 max-w-4xl mx-auto">
    <div className="text-center mb-8 sm:mb-12">
      <h2 className="text-2xl sm:text-2xl lg:text-2xl font-bold mb-4 pb-2 border-b-4 border-brand-gold  inline-block">
        How the Proposal Process Works
      </h2>
    </div>

    <div className="space-y-6">
      {[
        {
          step: "01",
          title: "Initial Consultation",
          description: "We start with a discovery call to understand your vision, guest count, budget range, and event priorities. This conversation helps us capture your unique style and needs."
        },
        {
          step: "02",
          title: "Custom Proposal Creation",
          description: "Our team crafts a personalized proposal including concept ideas, vendor recommendations, timeline, and pricing. We typically deliver this within 5-7 business days."
        },
        {
          step: "03",
          title: "Review & Refinement",
          description: "We walk you through the proposal, answer questions, and make adjustments based on your feedback. Your satisfaction is our priority."
        },
        {
          step: "04",
          title: "Contract & Planning Begins",
          description: "Once you're thrilled with the proposal, we finalize the contract and officially begin bringing your dream event to life."
        }
      ].map((item, idx) => (
        <div key={idx} className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-6 bg-gradient-to-r from-white to-yellow-50 rounded-xl shadow-md">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-brand-gold  flex items-center justify-center">
              <span className="text-2xl sm:text-2xl font-bold text-black">{item.step}</span>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-xl sm:text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>

  {/* Why Choose Our Proposals */}
  <section className="mb-16 sm:mb-20 max-w-4xl mx-auto">
    <div className="text-center mb-8 sm:mb-12">
      <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold mb-4 pb-2 border-b-4 border-brand-gold  inline-block">
        Why Our Proposals Stand Out
      </h2>
    </div>

    <div className="bg-gradient-to-br from-black to-gray-900 text-white p-6 sm:p-8 lg:p-12 rounded-2xl shadow-2xl">
      <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
        {[
          {
            title: "Personalized, Not Templated",
            description: "Every proposal is custom-crafted to reflect your unique vision and personality"
          },
          {
            title: "Transparent Pricing",
            description: "No hidden fees or surprises-just honest, detailed cost breakdowns"
          },
          {
            title: "Flexible Options",
            description: "Multiple service tiers and customizable packages to fit your needs and budget"
          },
          {
            title: "Visual Inspiration",
            description: "Mood boards and concept visuals to help you see your event come to life"
          }
        ].map((item, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-brand-gold -400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm sm:text-base">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Turnaround Time */}
  <section className="mb-16 sm:mb-20 max-w-4xl mx-auto">
    <div className="bg-yellow-50 p-6 sm:p-8 rounded-2xl border-l-4 border-brand-gold ">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <Clock className="w-12 h-12 text-brand-gold -500 flex-shrink-0" />
        <div>
          <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900">Quick Turnaround</h3>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Most proposals are delivered within <span className="font-bold text-brand-gold">5-7 business days</span> after 
            your initial consultation. Rush proposals available for urgent events with advance notice.
          </p>
        </div>
      </div>
    </div>
  </section>
</main>

{/* Call-to-Action Section */}
<section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-yellow-50">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold mb-6 sm:mb-8 pb-4 border-b-4 border-brand-gold  inline-block text-gray-900">
        Ready to Receive Your Custom Proposal?
      </h2>
      
      <p className="text-base sm:text-lg lg:text-l text-gray-700 mb-8 sm:mb-12 leading-relaxed mt-8">
        Let's start the conversation. Schedule your free consultation today and receive a 
        personalized proposal that brings your vision to life.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-12">
        <Link 
          href="/request-quote" 
          className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base bg-brand-gold  hover:bg-black text-black hover:text-brand-gold hover:shadow-lg hover:-translate-y-0.5"
        >
          Request Your Proposal
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </Link>
        <Link
          href="/" 
          className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base border-2 border-brand-gold  text-brand-gold  hover:bg-black"
        >
          Back to Home
        </Link>
      </div>

      {/* Additional Info Cards */}
      <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all">
          <h3 className="text-xl font-bold mb-3 text-gray-900">Quick Response</h3>
          <p className="text-sm text-gray-600">We'll get back to you within 24 hours</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all">
          <h3 className="text-xl font-bold mb-3 text-gray-900">Free Consultation</h3>
          <p className="text-sm text-gray-600">No obligation initial discovery call</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all">
          <h3 className="text-xl font-bold mb-3 text-gray-900">Zero Pressure</h3>
          <p className="text-sm text-gray-600">Take all the time you need to decide</p>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
);
}