"use client";

import Hero from "@/components/Hero";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Page() {
  const galleryItems = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    title: `Gallery ${i + 1}`,
    type: "Images",
    src: "/placeholder.jpg",
  }));

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
                    <span className="text-sm text-gray-700">
                      {item.type}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
}
