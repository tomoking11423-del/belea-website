"use client";

import { useState, useEffect } from "react";
import { HiCalendar } from "react-icons/hi";
import { SiLine } from "react-icons/si";

interface FixedCTAProps {
  hotpepperUrl: string;
  lineUrl: string;
}

export default function FixedCTA({ hotpepperUrl, lineUrl }: FixedCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section
      setIsVisible(window.scrollY > window.innerHeight * 0.5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex h-[70px] shadow-lg">
        {/* HotPepper Button */}
        <a
          href={hotpepperUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-[#C9A962] text-white font-bold text-sm sm:text-base hover:bg-[#D4BA7A] transition-colors"
        >
          <HiCalendar className="w-5 h-5" />
          <span>ホットペッパーで予約</span>
        </a>

        {/* LINE Button */}
        <a
          href={lineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-[#06C755] text-white font-bold text-sm sm:text-base hover:brightness-110 transition-all"
        >
          <SiLine className="w-5 h-5" />
          <span>LINEで相談・予約</span>
        </a>
      </div>
    </div>
  );
}
