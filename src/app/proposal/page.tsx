import Link from "next/link"; // add this at the top



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
