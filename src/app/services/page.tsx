import Hero from "@/components/Hero";
import Image from "next/image";

export default function ServicesPage() {
  return (
    <main>
      {/* Hero Section */}
      <Hero
        title="Our Services"
        subtitle="Discover the elegance, creativity, and precision that define every experience we create."
        bgImage="/images/services-hero.jpg"
      />

      {/* What We Do */}
      <section className="py-16 text-center bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-black">What We Do</h2>
          <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
            At <span className="font-semibold">ELEGANTE BEE</span>, we
            specialize in crafting timeless events with a touch of luxury, love,
            and personalization. Whether it&apos;s a wedding, birthday,
            anniversary, or brand launch, we make it memorable, meaningful, and
            magical.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="space-y-20 py-12">
        <ServiceItem
          title="Event Planning & Coordination"
          text="We handle every detail from concept to execution, ensuring your event runs smoothly and reflects your unique style and vision."
          imageSrc="/evvent-planning-coordination.jpg"
          imageAlt="Professional event planning and coordination"
        />
        <ServiceItem
          title="Event Venue Scouting"
          text="We help you find the perfect venue that fits your style, vision, and guest count, whether it's an intimate rooftop or a grand ballroom."
          imageSrc="/"
          imageAlt="Beautiful event venues and locations"
          reverse
        />
        <ServiceItem
          title="Decoration & Styling"
          text="We transform spaces with elegant floral arrangements, luxurious tablescapes, and customized decor that speaks your vibe and event theme."
          imageSrc="/scouting.jpg"
          imageAlt="Elegant event decoration and styling"
        />
        <ServiceItem
          title="Catering & Menu Design"
          text="We curate exquisite menus with gourmet catering options that delight your guests and elevate your event experience."
          imageSrc="/catering-menu.jpg"
          imageAlt="Gourmet catering and menu design"
          reverse
        />
        <ServiceItem
          title="Entertainment & Activities"
          text="We provide engaging entertainment options, from live bands to DJs, performers, and interactive activities that keep your guests entertained."
          imageSrc="/entertainment-activities.jpg"
          imageAlt="Event entertainment and activities"
        />
        <ServiceItem
          title="Photography & Videography"
          text="We capture every moment with professional photography and videography, ensuring your memories are preserved beautifully."
          imageSrc="/"
          imageAlt="Professional event photography and videography"
        />
        <ServiceItem
          title="Media Coverage"
          text="We ensure your event is captured beautifully with professional photography, video coverage, and media publicity if desired. Your story deserves to be told."
          imageSrc="/media-coverage.jpg"
          imageAlt="Professional media coverage and publicity"
        />
      </section>
    </main>
  );
}

/* Reusable Service Item */
function ServiceItem({
  title,
  text,
  imageSrc,
  imageAlt,
  reverse,
}: {
  title: string;
  text: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}) {
  return (
    <div
      className={`container mx-auto px-4 flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-10`}
    >
      <div className="md:w-1/2 relative rounded-xl overflow-hidden h-64 w-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="md:w-1/2">
        <h3 className="text-2xl font-bold text-black">{title}</h3>
        <p className="mt-4 text-gray-700">{text}</p>
      </div>
    </div>
  );
}