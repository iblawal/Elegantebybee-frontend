"use client";
import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import Link from "next/link";

export default function RequestQuotePage() {
  const [region, setRegion] = useState<"US" | "NG" | null>(null);
  const [showModal, setShowModal] = useState(false);

  const nigeriaPhone = "09167796186"; 
  const nigeriaEmail = "elegantebybee@gmail.com"; 

  useEffect(() => {
    const saved = localStorage.getItem("region");
    if (saved === "US" || saved === "NG") {
      setRegion(saved);
      setShowModal(false);
    } else {
      setShowModal(true);
    }
  }, []);

  
  const handleRegionSelect = (selectedRegion: "US" | "NG") => {
    setRegion(selectedRegion);
    localStorage.setItem("region", selectedRegion);
    setShowModal(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-96 rounded-2xl bg-white p-8 text-center shadow-lg">
            <h2 className="mb-4 text-lg font-bold">Select Your Region</h2>
            <select
              className="w-full rounded-lg border px-4 py-3"
              onChange={(e) => {
                const value = e.target.value as "US" | "NG";
                if (value) handleRegionSelect(value);
              }}
              defaultValue=""
            >
              <option value="" disabled>
                -- Choose Region --
              </option>
              <option value="US">United States</option>
              <option value="NG">Nigeria</option>
            </select>
          </div>
        </div>
      )}

      {}
      <Hero
        title="Request a Quote"
        subtitle="Get the best packages tailored for your event in the US and Nigeria."
        bgImage="/request-quote-hero.jpg" 
      />

      <main className="mx-auto max-w-6xl flex-1 px-6 py-16">
        {/* Region Switcher */}
        {region && (
          <div className="mb-8 text-right">
            <label className="mr-2 font-medium">Change Region:</label>
            <select
              className="rounded-lg border px-3 py-2"
              value={region}
              onChange={(e) => handleRegionSelect(e.target.value as "US" | "NG")}
            >
              <option value="US">United States</option>
              <option value="NG">Nigeria</option>
            </select>
          </div>
        )}

        {/* Quote Form */}
        <div className="rounded-2xl bg-white p-8 shadow-lg">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block font-medium">First Name</label>
              <input
                type="text"
                className="w-full rounded-lg border px-4 py-3"
              />
            </div>
            <div>
              <label className="mb-2 block font-medium">Last Name</label>
              <input
                type="text"
                className="w-full rounded-lg border px-4 py-3"
              />
            </div>
            <div>
              <label className="mb-2 block font-medium">Phone</label>
              <input
                type="tel"
                className="w-full rounded-lg border px-4 py-3"
              />
            </div>
            <div>
              <label className="mb-2 block font-medium">Email</label>
              <input
                type="email"
                className="w-full rounded-lg border px-4 py-3"
              />
            </div>
            <div className="col-span-2">
              <label className="mb-2 block font-medium">Event Details</label>
              <textarea
                rows={4}
                className="w-full rounded-lg border px-4 py-3"
              ></textarea>
            </div>
            <div className="col-span-2 mt-6 text-center">
              <button
                type="button"
                className="rounded-xl bg-brand-gold px-8 py-3 font-semibold text-black transition hover:bg-black hover:text-brand-gold"
              >
                Submit Request
              </button>
            </div>
          </div>
        </div>

        {}
        {region === "US" && (
          <section
            className="relative mt-12 rounded-2xl overflow-hidden"
            style={{
              backgroundImage: "url('/request-quote-price-list-bg.jpg')", 
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/40" /> {}

            <div className="relative z-10 p-8">
              <h2 className="mb-6 text-center text-3xl font-bold text-white">
                Price List
              </h2>
              <div className="overflow-x-auto rounded-2xl bg-white shadow-lg">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-brand-gold text-black">
                      <th className="px-6 py-3 text-left font-semibold">
                        Service
                      </th>
                      <th className="px-6 py-3 text-right font-semibold">
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="px-6 py-4">100–250 guests (Maryland)</td>
                      <td className="px-6 py-4 text-right font-medium">$700</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">251+ guests (Maryland)</td>
                      <td className="px-6 py-4 text-right font-medium">$1000</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Confirmations (8)</td>
                      <td className="px-6 py-4 text-right font-medium">$100</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Red Carpet (1hr)</td>
                      <td className="px-6 py-4 text-right font-medium">$175</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">2-Day Event</td>
                      <td className="px-6 py-4 text-right">
                        Call <strong>240-604-0025</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">
                        Outside DMV + Flight &amp; Hotel by Host
                      </td>
                      <td className="px-6 py-4 text-right">
                        Call <strong>240-604-0025</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Extra mileage (over 40 miles)</td>
                      <td className="px-6 py-4 text-right font-medium">+$150</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">
                        Advertising: Birthday Shoutout
                      </td>
                      <td className="px-6 py-4 text-right font-medium">$75</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">
                        Business Advert (2 posts/week)
                      </td>
                      <td className="px-6 py-4 text-right italic">
                        Contact for Pricing
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {/* NG Contact Section */}
        {region === "NG" && (
          <section
            className="relative mt-12 rounded-2xl overflow-hidden"
            style={{
              backgroundImage: "url('/request-quote-price-list-bg.jpg')", 
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/40" /> {}

            <div className="relative z-10 p-8">
              <h2 className="mb-6 text-center text-3xl font-bold text-white">
                Contact for Pricing
              </h2>
              <div className="overflow-x-auto rounded-2xl bg-white shadow-lg">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-brand-gold text-black">
                      <th className="px-6 py-3 text-left font-semibold">
                        Contact Type
                      </th>
                      <th className="px-6 py-3 text-right font-semibold">
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="px-6 py-4">Phone</td>
                      <td className="px-6 py-4 text-right">{nigeriaPhone}</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Email</td>
                      <td className="px-6 py-4 text-right">{nigeriaEmail}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {/* Payment Button -  for US */}
        {region === "US" && (
          <div className="mt-12 text-center">
            <Link href="/payment-page">
              <button className="rounded-xl bg-brand-gold px-10 py-4 text-lg font-bold text-black transition hover:bg-black hover:text-brand-gold">
                Make Payment
              </button>
            </Link>
          </div>
        )}

        {/* Contact Message for Nigeria */}
        {region === "NG" && (
          <div className="mt-12 text-center p-6 bg-blue-50 rounded-2xl">
            <p className="text-lg font-medium text-gray-800">
              Please contact us directly for payment arrangements in Nigeria
            </p>
            <div className="mt-4 flex items-center justify-center gap-6">
              <a href={`tel:${nigeriaPhone}`} className="text-brand-gold font-semibold hover:underline">
                 {nigeriaPhone}
              </a>
              <a href={`mailto:${nigeriaEmail}`} className="text-brand-gold font-semibold hover:underline">
                {nigeriaEmail}
              </a>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}