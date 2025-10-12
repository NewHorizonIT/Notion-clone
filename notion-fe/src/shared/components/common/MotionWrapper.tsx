"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};

export const slideIn: Variants = {
  hidden: { x: -20, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.2 } },
  exit: { x: -20, opacity: 0, transition: { duration: 0.15 } },
};

export const slideInRight: Variants = {
  hidden: { x: 20, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.2 } },
  exit: { x: 20, opacity: 0, transition: { duration: 0.15 } },
};

export const scaleIn: Variants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.2 } },
  exit: { scale: 0.95, opacity: 0, transition: { duration: 0.15 } },
};

interface MotionWrapperProps {
  children: ReactNode;
  variant?: "fade" | "slide" | "slideRight" | "scale";
  className?: string;
  delay?: number;
}

export function MotionWrapper({
  children,
  variant = "fade",
  className,
  delay = 0,
}: MotionWrapperProps) {
  const variants = {
    fade: fadeIn,
    slide: slideIn,
    slideRight: slideInRight,
    scale: scaleIn,
  }[variant];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
