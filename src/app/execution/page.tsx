import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ContactSection from "@/components/ContactSection";

export default function Execution() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <Hero
        title="Execution"
        subtitle="Where every detail comes alive seamlessly"
      />

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-6 py-16">
        {/* Section: Bringing Plans to Life */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Bringing Plans to Life</h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
            This is the moment everything you’ve dreamed of becomes reality.
            Our team takes charge of logistics, vendor coordination, timelines,
            and on-the-ground execution so you can stay present and enjoy the
            moment. No stress. No chaos. Just effortless elegance unfolding
            around you.
          </p>
        </section>

        {/* Section: What Execution Means for You */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">
            What Execution Means for You
          </h2>
          <ul className="list-disc pl-8 space-y-3 text-gray-700 max-w-3xl mx-auto text-lg">
            <li>Flawless coordination with vendors and suppliers</li>
            <li>On-site supervision to keep everything on track</li>
            <li>Quick problem-solving so issues never reach you</li>
            <li>
              A seamless experience that feels effortless for you and your guests
            </li>
          </ul>
        </section>

        {/* Section: Our Promise */}
        <section className="text-center mb-20">
          <h2 className="text-3xl font-bold mb-6">Our Promise</h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
            On the day of your celebration, your only job is to smile, dance,
            and create memories. We handle the rest—quietly, efficiently, and
            with the signature elegance that defines{" "}
            <span className="font-semibold text-brand-gold">ELEGANTE BEE</span>.
          </p>
        </section>

      </main>
    </div>
  );
}
