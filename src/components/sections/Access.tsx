"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import SectionTitle from "../common/SectionTitle";
import { stores } from "@/data/stores";
import { HiLocationMarker, HiClock, HiPhone } from "react-icons/hi";

export default function Access() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const store = stores[0]; // Current single store

  return (
    <section id="access" className="py-20 md:py-28 bg-[#F5F2ED]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle englishTitle="ACCESS" japaneseTitle="店舗情報" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="aspect-[4/3] bg-[#D4C8B8] rounded-lg overflow-hidden shadow-md relative"
          >
            <Image
              src="/images/stores/shinjuku.jpg"
              alt="BELEA 新宿店 店内"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          {/* Store Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-lg p-6 md:p-8 shadow-md"
          >
            {/* Store Name */}
            <h3
              className="text-2xl text-[#C9A962] mb-1"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Face Wax Salon
            </h3>
            <h4
              className="text-3xl text-[#C9A962] mb-6"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              BELEA
            </h4>

            {/* Divider */}
            <div className="w-12 h-0.5 bg-[#C9A962] mb-6"></div>

            {/* Info List */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <HiLocationMarker className="w-5 h-5 text-[#C9A962] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-[#6B6B6B]">住所</p>
                  <p className="text-[#4A4A4A]">
                    〒160-0023<br />
                    新宿区西新宿7-6-5<br />
                    グローリア初穂生沼801
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <HiClock className="w-5 h-5 text-[#C9A962] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-[#6B6B6B]">営業時間</p>
                  <p className="text-[#4A4A4A]">{store.hours}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <HiPhone className="w-5 h-5 text-[#C9A962] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-[#6B6B6B]">電話番号</p>
                  <a href="tel:03-5358-9225" className="text-[#4A4A4A] hover:text-[#C9A962] transition-colors">
                    03-5358-9225
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5"></div>
                <div>
                  <p className="text-sm text-[#6B6B6B]">定休日</p>
                  <p className="text-[#4A4A4A]">{store.holidays}</p>
                </div>
              </div>
            </div>

            {/* Google Maps Link */}
            <div className="mt-8 pt-6 border-t border-[#E8E6E3]">
              <a
                href="https://maps.app.goo.gl/fhhJuMoWJBU5KQEC7"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-sm text-[#C9A962] hover:underline"
              >
                Googleマップで見る →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
