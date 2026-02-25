import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FlawlessMoment from "@/components/FlawlessMoment";
import ContactSection from "@/components/ContactSection";
import CookieConsent from "@/components/CookieConsent";
import AIChatbot from "@/components/AIChatbot";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ELEGANTEBY BEE SERVICES - Premier Event Planning",
  description: "Your premier event planning company in United States and Nigeria",
};

// mobile scaling
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="pt-20">{children}</main>
        <FlawlessMoment />
        <ContactSection />
        <CookieConsent />
        <AIChatbot />
        <Footer />
      </body>
    </html>
  );
}
