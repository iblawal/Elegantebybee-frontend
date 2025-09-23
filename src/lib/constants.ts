/**
 * Application constants for ELEGANTE BEE SERVICES
 * Centralized configuration and content management
 */

import { NavItem, Testimonial, Service } from "./types";

// Company Information
export const COMPANY_INFO = {
  name: "ELEGANTE BEE SERVICES",
  tagline: "Premier Event Planning & Luxury Services",
  description: "Your premier event planning company in United States and Nigeria",
  email: "contact@elegantebeeservices.com",
  phone: "+1 (555) 123-4567",
  address: {
    street: "123 Luxury Avenue",
    city: "New York",
    state: "NY",
    zip: "10001",
    country: "United States",
  },
  social: {
    instagram: "https://instagram.com/elegantebeeservices",
    twitter: "https://twitter.com/elegantebee",
    facebook: "https://facebook.com/elegantebeeservices",
    linkedin: "https://linkedin.com/company/elegante-bee-services",
  },
} as const;

// Navigation Structure
export const NAVIGATION: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "All Services", href: "/services" },
      { label: "Event Planning", href: "/services/event-planning" },
      { label: "Photography", href: "/services/photography" },
      { label: "Catering", href: "/services/catering" },
      { label: "Request Quote", href: "/request-quote" },
    ],
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Portfolio",
    href: "/media",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

// Services Data
export const SERVICES: Service[] = [
  {
    id: "event-planning",
    name: "Event Planning & Coordination",
    description: "Documenting luxury moments and crafting unforgettable experiences.",
    image: "/event-planning.jpg",
    category: "event-planning",
    features: [
      "Full event planning and coordination",
      "Vendor management and coordination",
      "Timeline and logistics planning",
      "Day-of coordination services",
    ],
    pricing: {
      startingPrice: 2500,
      currency: "USD",
    },
  },
  {
    id: "fashion-influence",
    name: "Fashion & Influence",
    description: "Style curation and influencer event management.",
    image: "/fashion-influencer.jpg",
    category: "fashion",
    features: [
      "Fashion event coordination",
      "Influencer management",
      "Brand activation events",
      "Style consultation",
    ],
    pricing: {
      startingPrice: 1500,
      currency: "USD",
    },
  },
  {
    id: "event-scouting",
    name: "Event Scouting",
    description: "Location scouting and venue selection for perfect settings.",
    image: "/event-scouting-copy.jpg",
    category: "coordination",
    features: [
      "Venue research and selection",
      "Location scouting",
      "Vendor recommendations",
      "Budget optimization",
    ],
    pricing: {
      startingPrice: 800,
      currency: "USD",
    },
  },
];

// Testimonials
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "testimonial-1",
    text: '"Everything you saw yesterday was beyond my expectations..."',
    rating: 5,
  },
  {
    id: "testimonial-2",
    text: '"When choosing vendors, go with spirits who understand your style..."',
    rating: 5,
  },
  {
    id: "testimonial-3",
    text: "Hello Beautiful Elegantebybee, Thank you for the classy coverage of my sister's 60th birthday party... Your professionalism stood out from start to finish. Truly one in a million! 🙏😍",
    rating: 5,
  },
];

// Routes Configuration
export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  SERVICES: "/services",
  MEDIA: "/media",
  BLOG: "/blog",
  CONTACT: "/contact",
  REQUEST_QUOTE: "/request-quote",
  PLAN_EVENT: "/plan-my-event", // ✅ Updated to match new folder name
  CONCEPT: "/concept",
  DISCOVERY: "/discovery",
  PROPOSAL: "/proposal",
  EXECUTION: "/execution",
} as const;

// Animation Constants
export const ANIMATION_DURATION = {
  FAST: 0.2,
  NORMAL: 0.4,
  SLOW: 0.6,
  VERY_SLOW: 1.0,
} as const;

export const ANIMATION_EASING = {
  EASE_OUT: [0.25, 0.1, 0.25, 1],
  EASE_IN: [0.4, 0.0, 1, 1],
  EASE_IN_OUT: [0.4, 0.0, 0.2, 1],
  BOUNCE: [0.68, -0.55, 0.265, 1.55],
} as const;

// Breakpoints (matching Tailwind)
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  "2XL": 1536,
} as const;

// Z-Index Scale
export const Z_INDEX = {
  DROPDOWN: 1000,
  STICKY: 1020,
  FIXED: 1030,
  MODAL_BACKDROP: 1040,
  MODAL: 1050,
  POPOVER: 1060,
  TOOLTIP: 1070,
  TOAST: 1080,
} as const;
