import React from "react";
import { motion } from "framer-motion";

export default function TopNames() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="
        flex 
        justify-center 
        items-center 
        gap-5
        py-4
        relative
      "
    >
      {/* Subtle Ambient Gold Backglow */}
      <div className="absolute w-44 h-12 bg-gradient-to-r from-transparent via-[#d4af37]/15 to-transparent blur-xl pointer-events-none -z-10" />

      {/* Monogram A Container */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.15, y: -2 }}
        className="
          w-14 h-14
          rounded-2xl
          bg-[#7e445f]
          backdrop-blur-md
          border border-[#7e445f]/30
          shadow-[0_10px_30px_rgba(126,68,95,0.15)]
          flex items-center justify-center
          cursor-pointer
          group
        "
      >
        <span className="
          font-serif
          text-3xl
          text-white
          font-light
          tracking-wider
          group-hover:text-[#d4af37]
          transition-colors
          duration-300
        ">
          A
        </span>
      </motion.div>

      {/* Pulsing Luxury Heart */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          filter: ["drop-shadow(0 0 6px rgba(212,175,55,0.3))", "drop-shadow(0 0 12px rgba(212,175,55,0.6))", "drop-shadow(0 0 6px rgba(212,175,55,0.3))"]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="text-[#d4af37] text-2xl px-1"
      >
        ♥
      </motion.div>

      {/* Monogram Y Container */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.1 }}
        whileHover={{ scale: 1.15, y: -2 }}
        className="
          w-14 h-14
          rounded-2xl
          bg-[#7e445f]
          backdrop-blur-md
          border border-[#7e445f]/30
          shadow-[0_10px_30px_rgba(126,68,95,0.15)]
          flex items-center justify-center
          cursor-pointer
          group
        "
      >
        <span className="
          font-serif
          text-3xl
          text-white
          font-light
          tracking-wider
          group-hover:text-[#d4af37]
          transition-colors
          duration-300
        ">
          Y
        </span>
      </motion.div>
    </motion.div>
  );
}