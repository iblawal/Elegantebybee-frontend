// app/media/page.tsx
"use client";

import Hero from "@/components/Hero";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import ReactPlayer from "react-player";
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

  // Video items (replace with real URLs)
  const videoItems = [
    { id: 1, title: "Wedding Highlights", src: "https://www.youtube.com/watch?v=ysz5S6PUM-U" },
    { id: 2, title: "Birthday Event", src: "https://vimeo.com/76979871" },
    { id: 3, title: "Corporate Party", src: "/sample-video.mp4" }, // Example local file
    { id: 4, title: "Engagement Event", src: "https://www.youtube.com/watch?v=jNQXAC9IVRw" },
    { id: 5, title: "Concert Night", src: "https://vimeo.com/22439234" },
  ];

  return (
    <div className="flex flex-col min-h-screen">


      {/* Hero Section */}
      <Hero
        title="Gallery"
        subtitle="Explore our latest media updates and insights."
        bgImage="/images/media-hero.jpg" // ✅ replace with your own image
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
                    <h5 className="text-lg font-bold text-gray-900">{item.title}</h5>
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
                  <ReactPlayer
                    url={item.src}
                    width="100%"
                    height="240px"
                    controls
                  />
                  <div className="p-4">
                    <h5 className="text-lg font-bold text-gray-900">{item.title}</h5>
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
        style={{ backgroundImage: "url('/images/media-cta.jpg')" }} // ✅ replace with real image
      >
        <h2 className="mb-2 text-4xl font-bold text-yellow-600">
          Let&apos;s Make This Moment
        </h2>
        <h3 className="text-2xl font-light text-yellow-600">Flawless</h3>
        <Link
          href="/request-quote"
          className="mt-6 inline-block rounded-lg bg-yellow-600 px-6 py-3 font-semibold text-white transition hover:bg-yellow-700"
        >
          Send Request
        </Link>
      </section>

    </div>
  );
}
