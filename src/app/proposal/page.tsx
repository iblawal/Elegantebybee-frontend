import Link from "next/link";

export default function ProposalPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-yellow-500 to-yellow-600">
        <div className="container mx-auto text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
            Event Proposal
          </h1>
          <p className="text-xl text-black/80 max-w-2xl mx-auto">
            Get a customized proposal tailored to your event needs
          </p>
        </div>
      </section>

      {/* Proposal Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Your Custom Event Proposal
            </h2>
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                Thank you for considering ELEGANTE BEE SERVICES for your upcoming event.
                We specialize in creating unforgettable experiences that exceed expectations.
              </p>

              <h3 className="text-2xl font-bold mb-4">What We Offer</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Complete event planning and coordination</li>
                <li>Venue scouting and selection</li>
                <li>Entertainment and activities management</li>
                <li>Catering coordination</li>
                <li>Media coverage and documentation</li>
                <li>Birthday shoutouts and special moments</li>
              </ul>

              <h3 className="text-2xl font-bold mb-4">Our Process</h3>
              <ol className="list-decimal pl-6 mb-6 text-gray-700">
                <li>Initial consultation to understand your vision</li>
                <li>Detailed proposal with timeline and budget</li>
                <li>Planning phase with regular updates</li>
                <li>Execution with professional coordination</li>
                <li>Post-event follow-up and documentation</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Planning?
          </h2>
          <p className="max-w-2xl mx-auto text-lg mb-8 text-gray-700">
            Contact us today to discuss your event and let us create a proposal
            that brings your vision to life.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/request-quote"
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg font-semibold transition"
            >
              Request a Quote
            </Link>
            <Link
              href="/"
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg font-semibold transition"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
