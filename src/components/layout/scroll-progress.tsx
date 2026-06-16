"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 160, damping: 28, mass: 0.2 });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 top-0 z-[90] h-1 w-full origin-left bg-gradient-to-r from-blue-600 via-blue-400 to-teal-400"
      style={{ scaleX }}
    />
  );
}
