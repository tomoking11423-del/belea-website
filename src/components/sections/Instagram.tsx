"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SectionTitle from "../common/SectionTitle";
import { SiInstagram } from "react-icons/si";

// Placeholder images - replace with actual Instagram feed
const instagramPosts = [
  { id: 1, image: "/images/gallery/treatment.jpg" },
  { id: 2, image: "/images/stores/honten/interior.jpg" },
  { id: 3, image: "/images/gallery/treatment.jpg" },
  { id: 4, image: "/images/stores/honten/interior.jpg" },
  { id: 5, image: "/images/gallery/treatment.jpg" },
  { id: 6, image: "/images/stores/honten/interior.jpg" },
];

export default function Instagram() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle englishTitle="INSTAGRAM" japaneseTitle="@belea_official" />
        </motion.div>

        {/* Instagram Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-4 mb-10"
        >
          {instagramPosts.map((post, index) => (
            <a
              key={post.id}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square bg-[#E8E6E3] rounded overflow-hidden group"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundImage: `url(${post.image})` }}
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#4A4A4A]/0 group-hover:bg-[#4A4A4A]/60 transition-all duration-300 flex items-center justify-center">
                <SiInstagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </a>
          ))}
        </motion.div>

        {/* Follow Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white rounded hover:opacity-90 transition-opacity font-medium"
          >
            <SiInstagram className="w-5 h-5" />
            Instagramをフォローする
          </a>
        </motion.div>
      </div>
    </section>
  );
}
