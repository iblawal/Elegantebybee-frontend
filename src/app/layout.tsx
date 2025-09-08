
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import FlawlessMoment from "@/components/FlawlessMoment";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ELEGANTEBY BEE SERVICES - Premier Event Planning",
  description: "Your premier event planning company in United States and Nigeria",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Navbar */}
        <Navbar />

        {/* Page Content (spaced for fixed navbar) */}
        <main className="pt-20">{children}</main>

        {/* Flawless Moment */}
        <FlawlessMoment />

        {/* Contact Section */}
        <ContactSection />

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
