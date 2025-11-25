export default function Contact() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        className="relative h-[50vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('/contact-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
          <p className="mt-4 text-lg md:text-xl">
            We’d love to hear from you. Let’s make something amazing together.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        className="relative min-h-screen flex items-center justify-center px-6 py-12"
        style={{
          backgroundImage: "url('/images/contact-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/70"></div>

        {/* Form */}
        <div className="relative bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-8 max-w-3xl w-full">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Get in Touch
          </h2>

          <form className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-gold focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-gold  focus:outline-none"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-gold  focus:outline-none"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-gold  focus:outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Message <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:to-brand-gold focus:outline-none"
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="bg-brand-gold text-black  font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-black hover:text-brand-gold transition w-full md:w-auto"
            >
              Submit Form
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
