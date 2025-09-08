

import Hero from "@/components/Hero";
import Link from "next/link";


export default function ConceptDevelopment() {
  return (
    <div className="min-h-screen flex flex-col">
      
      
      <Hero 
        title="Concept Development" 
        subtitle="Where your vision meets our expertise" 
        bgImage="/images/concept-development-hero.jpg"
      />

      <main className="flex-1 container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-center mb-6">Concept Development That Captivates</h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed mb-10">
          Before any event takes form, we go deep into your vision and elevate it. We transform simple 
          ideas into luxurious realities with mood boards, theme planning, and signature elements 
          that leave a lasting impression.
        </p>

        <h2 className="text-2xl font-bold mb-4">Our Creative Process</h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>Idea brainstorming & concept sketching</li>
          <li>Event mood board creation</li>
          <li>Theme development with luxe details</li>
          <li>Venue layout & aesthetic planning</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4">Designs That Speak Your Style</h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed mb-8">
          Whether it’s minimal elegance or extravagant grandeur, our creative team ensures every detail 
          of your concept reflects <span className="font-semibold">you</span>.
        </p>

        <div className="text-center">
          <Link href="/services" className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white font-medium px-6 py-3 rounded-lg transition">
            Explore Our Services
          </Link>
        </div>
      </main>



    
    </div>
  );
}
