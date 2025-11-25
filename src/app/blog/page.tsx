"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const posts = [
  {
    id: 1,
    title: "10 Elegant Wedding Trends for 2025",
    category: "Weddings",
    image: "/placeholder.jpg",
    excerpt: "Discover the latest wedding inspirations that will make your big day unforgettable.",
    content: `
      <p>Weddings in 2025 are becoming more expressive and elegant. Couples are choosing bold décor, soft lighting, and stylish floral designs that make the whole space feel warm and beautiful. It's that perfect blend of modern taste with the touch of tradition we all love.</p>
      <h2 class="text-2xl font-bold mt-6 mb-3">Floral Overload</h2>
      <p>Imagine walking into a venue filled with flowers - on the ceiling, around the entrance, and across the photo areas. It creates a calm, fresh, and romantic atmosphere that guests naturally fall in love with.</p>
      <blockquote class="border-l-4 border-brand-gold pl-4 italic my-6 text-gray-700">
        "A wedding should feel like your love story blossoming into life."
      </blockquote>
      <h2 class="text-2xl font-bold mt-6 mb-3">Tech-Savvy Celebrations</h2>
      <p>Your wedding should feel like your love story beautifully coming to life.</p>
    `,
  },
  {
    id: 2,
    title: "Wedding Anniversary Celebration Ideas",
    category: "Casual Events",
    image: "/placeholder.jpg",
    excerpt: "Beautiful and thoughtful ways to celebrate your wedding anniversary in a memorable, relaxed style.",
    content: `<p>Wedding anniversaries are special moments to appreciate love and celebrate your journey together. Even simple gestures can make the day meaningful and memorable.</p>`,
  },
  {
    id: 3,
    title: "Top 5 Birthday Themes That Wow Guests",
    category: "Parties",
    image: "/placeholder.jpg",
    excerpt: "Explore the most trending birthday themes people are loving right now.",
    content: `<p>Birthday celebrations in 2025 are all about making the day feel special in a simple but stylish way. People are choosing themes that match their vibe — whether it's bright and fun, calm and elegant, or something unique that tells their own story. The goal is to create a celebration everyone can enjoy and remember.</p>`,
  },
];

export default function BlogPage() {
  const [activePost, setActivePost] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading blog...</p>
        </div>
      </div>
    );
  }

  const post = posts.find((p) => p.id === activePost);

  return (
    <>
      <section
        className="relative h-[50vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('/placeholder.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-4">ElegantByBee Blog</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Stories, tips, and inspirations from our world of unforgettable events.
          </p>
        </div>
      </section>

      {post ? (
        <article className="py-20 px-6 max-w-4xl mx-auto">
          <button
            onClick={() => setActivePost(null)}
            className="mb-8 text-brand-gold font-semibold hover:underline"
          >
            ← Back to Blog
          </button>
          <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={400}
            className="rounded-2xl shadow-lg mb-8 w-full object-cover"
            style={{ height: 'auto' }}
          />
          <span className="text-sm uppercase tracking-wide text-brand-gold font-semibold">
            {post.category}
          </span>
          <h2 className="text-3xl font-bold mt-2 mb-6 text-black">
            {post.title}
          </h2>
          <div
            className="prose lg:prose-lg prose-headings:text-black prose-p:text-gray-700"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      ) : (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <div
                key={post.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer"
                onClick={() => setActivePost(post.id)}
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={300}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  style={{ height: 'auto' }}
                />
                <div className="p-6">
                  <span className="text-xs uppercase tracking-wide text-brand-gold font-semibold">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold mt-2 mb-3 text-black group-hover:text-brand-gold transition">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <span className="text-brand-gold font-semibold hover:underline">
                    Read More →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}