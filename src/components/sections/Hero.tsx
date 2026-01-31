"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full pt-[70px]">
      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full"
      >
        <img
          src="/images/common/hero-bg.jpg"
          alt="BELEA - Face Wax Salon"
          className="w-full h-auto"
        />
      </motion.div>
    </section>
  );
}
