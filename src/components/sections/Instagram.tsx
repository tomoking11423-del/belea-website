"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SectionTitle from "../common/SectionTitle";
import { SiInstagram } from "react-icons/si";

const instagramPosts = [
  { id: 1, image: "/images/instagram/post1.png" },
  { id: 2, image: "/images/instagram/post2.png" },
  { id: 3, image: "/images/instagram/post3.png" },
  { id: 4, image: "/images/instagram/post4.png" },
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
          <SectionTitle englishTitle="INSTAGRAM" japaneseTitle="@facewax_belea" />
        </motion.div>

        {/* Instagram Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-10"
        >
          {instagramPosts.map((post, index) => (
            <a
              key={post.id}
              href="https://www.instagram.com/facewax_belea"
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
            href="https://www.instagram.com/facewax_belea"
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
