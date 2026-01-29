"use client";

import { HiCalendar } from "react-icons/hi";
import { SiLine } from "react-icons/si";
import { motion } from "framer-motion";

interface HeroCTAProps {
  hotpepperUrl: string;
  lineUrl: string;
}

export default function HeroCTA({ hotpepperUrl, lineUrl }: HeroCTAProps) {
  return (
    <section className="py-8 bg-[#4A4A4A]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={hotpepperUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-[#C9A962] text-white font-bold rounded hover:bg-[#D4BA7A] transition-colors shadow-md"
          >
            <HiCalendar className="w-5 h-5" />
            ホットペッパーで予約
          </a>
          <a
            href={lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-[#06C755] text-white font-bold rounded hover:brightness-110 transition-all shadow-md"
          >
            <SiLine className="w-5 h-5" />
            LINEで相談・予約
          </a>
        </motion.div>
      </div>
    </section>
  );
}
