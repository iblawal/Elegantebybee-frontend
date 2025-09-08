"use client";


export default function PlanMyEventPage() {
  return (
    <>
  

      {/* Hero Section */}
      <section className="relative bg-black text-white py-20 mt-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold">
            <span className="text-brand-gold">Plan</span> My Event
          </h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Fill out the form below to request a quote for our services.
          </p>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 shadow-lg rounded-2xl">
            {[
              { label: "First Name", type: "text", required: true },
              { label: "Last Name", type: "text", required: true },
              { label: "Email", type: "email", required: true },
              { label: "Phone", type: "tel", required: true },
              { label: "Event/Occasion", type: "text", required: true },
              { label: "Event Location", type: "text", required: true },
              { label: "Date of Event", type: "date", required: true },
              { label: "Venue", type: "text" },
              { label: "Theme of Décor (if any)", type: "text" },
              { label: "Expected Number of Guests", type: "number" },
              { label: "Budget (if any)", type: "text" },
            ].map((field, idx) => (
              <div key={idx}>
                <label className="block mb-2 font-medium">{field.label}</label>
                <input
                  type={field.type}
                  className="w-full border rounded-lg px-4 py-3"
                  required={field.required}
                />
              </div>
            ))}
          </form>
        </div>
      </section>

      {/* Services Checklist */}
      <section className="py-16">
        <div className="container mx-auto bg-white p-8 shadow-lg rounded-2xl">
          <h2 className="text-3xl font-bold text-center mb-4">Plan My Event</h2>
          <p className="text-center mb-8 text-gray-600">
            Please select the services you’d like included in your event package.
          </p>

          <form className="space-y-8">
            {/* Food */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Food</h3>
              {[
                "Nigeria dishes",
                "Oriental dishes",
                "Continental dishes",
                "Desserts",
                "Finger Foods",
                "Other Dishes",
              ].map((item, idx) => (
                <label key={idx} className="block text-gray-700">
                  <input type="checkbox" className="mr-2" /> {item}
                </label>
              ))}
            </div>

            {/* Drinks */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Drinks</h3>
              {[
                "Alcoholic Cocktails",
                "Non-Alcoholic Cocktails",
                "Alcoholic Drinks",
                "Non-Alcoholic Drinks",
                "Red Wine",
                "Champagne",
                "Others",
              ].map((item, idx) => (
                <label key={idx} className="block text-gray-700">
                  <input type="checkbox" className="mr-2" /> {item}
                </label>
              ))}
            </div>

            {/* Beverages */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Beverages</h3>
              {["Tea", "Coffee", "Cappuccino", "Hot Chocolate", "Other Drinks"].map(
                (item, idx) => (
                  <label key={idx} className="block text-gray-700">
                    <input type="checkbox" className="mr-2" /> {item}
                  </label>
                )
              )}
            </div>

            {/* Other Services */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Other Services</h3>
              {[
                "Event Coordination",
                "Marquee Rental/Hire",
                "Photography",
                "Videography",
                "Live Band",
              ].map((item, idx) => (
                <label key={idx} className="block text-gray-700">
                  <input type="checkbox" className="mr-2" /> {item}
                </label>
              ))}
            </div>

            {/* Message */}
            <div>
              <label className="block mb-2 font-medium">Message</label>
              <textarea
                rows={5}
                className="w-full border rounded-lg px-4 py-3"
                placeholder="Tell us more about your project..."
              ></textarea>
            </div>

            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-brand-gold hover:bg-black hover:text-brand-gold text-black font-semibold px-8 py-4 rounded-xl transition"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
