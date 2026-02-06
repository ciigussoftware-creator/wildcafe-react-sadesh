import { useEffect, useState } from 'react';
import { motion, useScroll } from 'motion/react';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald via-teal to-amber origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
