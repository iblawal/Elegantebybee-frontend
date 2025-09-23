/**
 * Framer Motion animation variants for ELEGANTE BEE SERVICES
 * Enterprise-grade animations with consistent timing and easing
 */

import { Variants, Easing } from "framer-motion";
import { ANIMATION_DURATION, ANIMATION_EASING } from "./constants";

/** Optimized easing curves */
const easeOutExpo: Easing = ANIMATION_EASING.EASE_OUT;

/** Generic fade animations */
export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: ANIMATION_DURATION.NORMAL,
      ease: easeOutExpo,
    },
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: ANIMATION_DURATION.NORMAL,
      ease: easeOutExpo,
    },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATION.NORMAL,
      ease: easeOutExpo,
    },
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATION.NORMAL,
      ease: easeOutExpo,
    },
  },
};

export const fadeInCenter: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: ANIMATION_DURATION.NORMAL,
      ease: easeOutExpo,
    },
  },
};

/** Container animations for staggering children */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: ANIMATION_DURATION.FAST,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

/** Scale animations */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: ANIMATION_DURATION.NORMAL,
      ease: easeOutExpo,
    },
  },
};

/** Slide animations */
export const slideInFromBottom: Variants = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATION.SLOW,
      ease: easeOutExpo,
    },
  },
};

/** Portfolio specific animations */
export const portfolioLeft: Variants = {
  hidden: { opacity: 0, x: -80 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: ANIMATION_DURATION.SLOW,
      ease: easeOutExpo,
    },
  },
};

export const portfolioRight: Variants = {
  hidden: { opacity: 0, x: 80 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: ANIMATION_DURATION.SLOW,
      ease: easeOutExpo,
    },
  },
};

/** Button hover animations */
export const buttonHover = {
  scale: 1.05,
  transition: { duration: ANIMATION_DURATION.FAST },
};

export const buttonTap = {
  scale: 0.95,
  transition: { duration: ANIMATION_DURATION.FAST },
};

/** Hero specific animations */
export const heroBox: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATION.NORMAL,
      ease: easeOutExpo,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

/** Testimonial animations */
export const testimonialSlide: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

/** Loading animations */
export const loadingSpinner: Variants = {
  start: {
    rotate: 0,
  },
  end: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

/** Contact Section specific animations */
export const cardPop: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATION.NORMAL,
      ease: easeOutExpo,
    },
  },
};

/** Flawless Moment specific animations */
export const flawlessText: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATION.SLOW,
      ease: easeOutExpo,
    },
  },
};

export const flawlessButton: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: ANIMATION_DURATION.NORMAL,
      ease: easeOutExpo,
      delay: 0.3,
    },
  },
};
