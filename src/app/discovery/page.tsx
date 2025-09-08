import Hero from "@/components/Hero";
import { Link } from "lucide-react";

export default function DiscoveryCall() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <Hero
        title="Discovery Call"
        subtitle="Where we uncover your story and set the right foundation."
        bgImage="/images/discovery-call-hero.jpg"
        buttonText="Book a Call"
        buttonLink="/contact"
      />

      {/* Content */}
      <main className="flex-1 container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-center mb-6">Why It Matters</h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed mb-10">
          Most planners start with a quote. We start with a conversation. Our discovery
          call allows us to understand not only your logistics, but also your values,
          your lifestyle, and your emotional goals for the event. It&apos;s where we
          uncover the <span className="font-semibold">why</span> behind your
          celebration.
        </p>

        <h2 className="text-2xl font-bold mb-4">What You’ll Walk Away With</h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>A clear outline of your goals and event type</li>
          <li>Recommendations based on your personality, not just your budget</li>
          <li>Confidence that your planner sees you clearly</li>
        </ul>

        <div className="text-center mt-10">
          <Link
            href="/"
            className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white font-medium px-6 py-3 rounded-lg transition"
          >
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
