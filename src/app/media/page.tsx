"use client";

import Hero from "@/components/Hero";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

export default function MediaPage() {
  // Gallery items (replace with real images)
  const galleryItems = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    title: `Gallery ${i + 1}`,
    type: "Images",
    src: "/placeholder.jpg",
  }));

  
  const videoItems = [
    { id: 1, title: "Wedding Highlights", src: "/wedding.mp4" },
    { id: 2, title: "Birthday Event", src: "/birthday.mp4" },
    { id: 3, title: "Corporate Party", src: "/corporate.mp4" },
    { id: 4, title: "Engagement Event", src: "/engagement.mp4" },
    { id: 5, title: "Cultural Event", src: "/video/cultural.mp4" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Gallery"
        subtitle="Explore our latest media updates and insights."
        bgImage="/gallary-hero.jpg"
      />

      {/* Gallery Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="mb-10 text-center text-3xl font-bold text-gray-800">
            Our Image Gallery
          </h2>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            loop
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {galleryItems.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="group relative overflow-hidden rounded-xl shadow-md">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="h-64 w-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end bg-white/80 p-4">
                    <h5 className="text-lg font-bold text-gray-900">
                      {item.title}
                    </h5>
                    <span className="text-sm text-gray-700">{item.type}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="mb-10 text-center text-3xl font-bold text-gray-800">
            Our Video Highlights
          </h2>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            loop
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {videoItems.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="overflow-hidden rounded-xl bg-black shadow-md">
                  {}
                  <video
                    controls
                    width="100%"
                    height="240"
                    className="w-full h-[240px]"
                  >
                    <source src={item.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="p-4">
                    <h5 className="text-lg font-bold text-gray-900">
                      {item.title}
                    </h5>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Call-to-Action */}
      <section
        className="bg-cover bg-center px-6 py-24 text-center"
        style={{ backgroundImage: "url('/images/media-cta.jpg')" }}
      >
        <h2 className="mb-2 text-4xl font-bold text-brand-gold">
          Let&apos;s Make This Moment
        </h2>
        <h3 className="text-2xl font-light text-brand-gold">Flawless</h3>
        <Link
          href="/request-quote"
          className="mt-6 inline-block rounded-lg bg-brand-gold  px-6 py-3 font-semibold text-black transition hover:bg-black hover:text-brand-gold  hover:shadow-lg"
        >
          Send Request
        </Link>
      </section>
    </div>
  );
}
