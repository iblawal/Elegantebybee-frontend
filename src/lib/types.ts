/**
 * TypeScript type definitions for ELEGANTE BEE SERVICES
 * Enterprise-grade type safety and component interfaces
 */

// Navigation types
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// Hero component types
export interface HeroProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  bgImage?: string;
  children?: React.ReactNode;
}

// Service types
export interface Service {
  id: string;
  name: string;
  description: string;
  image: string;
  category: ServiceCategory;
  features: string[];
  pricing?: {
    startingPrice: number;
    currency: string;
  };
}

export type ServiceCategory =
  | "event-planning"
  | "photography"
  | "catering"
  | "entertainment"
  | "fashion"
  | "coordination";

// Testimonial types
export interface Testimonial {
  id: string;
  text: string;
  author?: {
    name: string;
    title?: string;
    image?: string;
  };
  rating?: number;
}

// Contact form types
export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  eventType: EventType;
  eventDate?: string;
  guestCount?: number;
  budget?: BudgetRange;
  message: string;
}

export type EventType =
  | "wedding"
  | "birthday"
  | "corporate"
  | "anniversary"
  | "graduation"
  | "other";

export type BudgetRange = "under-5k" | "5k-15k" | "15k-30k" | "30k-50k" | "over-50k";

// Animation types
export interface AnimationVariant {
  hidden: {
    opacity?: number;
    x?: number;
    y?: number;
    scale?: number;
  };
  show: {
    opacity?: number;
    x?: number;
    y?: number;
    scale?: number;
    transition?: {
      duration?: number;
      ease?: string | number[];
      delay?: number;
      staggerChildren?: number;
      when?: string;
    };
  };
}

// Portfolio types
export interface PortfolioItem {
  id: string;
  title: string;
  category: ServiceCategory;
  images: string[];
  description: string;
  client?: string;
  date: string;
  featured: boolean;
}

// Blog types
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  tags: string[];
  featuredImage: string;
  readTime: number;
}

// SEO types
export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonicalUrl?: string;
}

// API Response types
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: Record<string, string[]>;
}

// Component props base type
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}
