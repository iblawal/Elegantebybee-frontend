// app/blog/page.tsx
"use client";

import { useState } from "react";


const posts = [
  {
    id: 1,
    title: "10 Elegant Wedding Trends for 2025",
    category: "Weddings",
    image: "/blog/wedding-trends.jpg",
    excerpt:
      "Discover the latest wedding inspirations that will make your big day unforgettable.",
    content: `
      <p>2025 is the year of bold elegance. From floral ceilings to sustainable decor, couples are embracing new inspirations while keeping classic traditions alive.</p>
      <h2 class="text-2xl font-bold mt-6 mb-3">🌸 Floral Overload</h2>
      <p>Think ceiling installations, flower walls, and lush garden themes.</p>
      <blockquote class="border-l-4 border-brand-gold pl-4 italic my-6 text-gray-700">
        "A wedding should feel like your love story blossoming into life."
      </blockquote>
      <h2 class="text-2xl font-bold mt-6 mb-3">✨ Tech-Savvy Celebrations</h2>
      <p>Drone shows, live streaming for guests abroad, and AR invitations are redefining the experience.</p>
    `,
  },
  {
    id: 2,
    title: "How to Plan a Flawless Corporate Gala",
    category: "Corporate Events",
    image: "/blog/corporate-gala.jpg",
    excerpt:
      "A step-by-step guide to hosting successful and memorable corporate events.",
    content: `<p>Hosting a gala is all about balance — professionalism with a touch of glamour. Here's how to impress stakeholders while keeping it elegant.</p>`,
  },
  {
    id: 3,
    title: "Top 5 Birthday Themes That Wow Guests",
    category: "Parties",
    image: "/blog/birthday-themes.jpg",
    excerpt: "From chic to playful, explore the most trending birthday themes.",
    content: `<p>From neon glow parties to royal masquerades, 2025 birthday trends are nothing short of dazzling.</p>`,
  },
];

export default function BlogPage() {
  const [activePost, setActivePost] = useState<number | null>(null);

  const post = posts.find((p) => p.id === activePost);

  return (
    <>
      

      {/* Hero Section */}
      <section
        className="relative h-[50vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('/blog/blog-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-4">ElegantByBee Blog</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Stories, tips, and inspirations from our world of unforgettable
            events.
          </p>
        </div>
      </section>

      {/* If a post is selected → Single Post */}
      {post ? (
        <article className="py-20 px-6 max-w-4xl mx-auto">
          <button
            onClick={() => setActivePost(null)}
            className="mb-8 text-brand-gold font-semibold hover:underline"
          >
            ← Back to Blog
          </button>
          <img
            src={post.image}
            alt={post.title}
            className="rounded-2xl shadow-lg mb-8 w-full object-cover"
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
        /* Blog Grid */
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <div
                key={post.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer"
                onClick={() => setActivePost(post.id)}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
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
