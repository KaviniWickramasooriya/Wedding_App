import React from "react";
import { motion } from "framer-motion";

export default function VideoHero() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="
        flex
        flex-col
        justify-center
        items-center
        relative
        px-6
        py-6
        bg-transparent
        overflow-hidden
        w-full
        lg:max-w-5xl
        mx-auto
      "
    >
      {/* Main Arch Frame Container */}
      <motion.div
        whileHover={{ scale: 1.015, y: -4 }}
        transition={{
          duration: 0.6,
          type: "spring",
          stiffness: 250,
          damping: 22,
        }}
        className="
          w-[82vw]
          max-w-xs
          lg:max-w-sm
          aspect-[4/5]
          rounded-t-[12rem]
          overflow-hidden
          shadow-[0_25px_70px_rgba(145,109,177,0.3)]
          border-[6px]
          border-white
          relative
          z-10
          cursor-pointer
          group
        "
      >
        {/* Hero Image with smooth parallax zoom on hover */}
        <motion.img 
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          src="/photos/image.png"
          alt="Anu & Yasith"
          loading="eager"
          decoding="async"
          className="
            w-full
            h-full
            object-cover
            transition-transform
            duration-1000
            group-hover:scale-110
          "
        />

        {/* Luxury Gold Inner Border Accent */}
        <div className="absolute inset-3.5 border border-[#d4af37]/80 rounded-t-[11rem] pointer-events-none z-20 shadow-[inset_0_0_15px_rgba(212,175,55,0.2)] transition-colors duration-500 group-hover:border-[#d4af37]" />

        {/* Floating Glassmorphic Date Badge inside top of image */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute top-6 left-1/2 -translate-x-1/2 z-30 bg-white/20 backdrop-blur-md border border-white/40 px-3.5 py-1 rounded-full shadow-md"
        >
          <p className="text-[9px] tracking-[0.3em] uppercase text-white font-serif font-medium">
            02 . 12 . 2026
          </p>
        </motion.div>
      </motion.div>

      {/* Editorial Content Displayed Underneath the Image with Added Spacing */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-8 text-center z-30 px-4"
      >
        <h2 className="font-cursive text-4xl md:text-5xl text-[#b8973c] drop-shadow-sm mb-3">
          Anu & Yasith
        </h2>
        <div className="flex items-center justify-center gap-3">
          <span className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#b8973c]/60"></span>
          <p className="font-serif text-[10px] md:text-[11px] text-lavender-700 tracking-[0.35em] uppercase font-semibold">
            Are Getting Married
          </p>
          <span className="h-[1px] w-8 bg-gradient-to-l from-transparent to-[#b8973c]/60"></span>
        </div>
      </motion.div>

      {/* Ambient Pulsing Glow Aura */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          w-[140%]
          h-[140%]
          bg-gradient-to-tr
          from-lavender-300/30
          to-lavender-400/10
          blur-[100px]
          rounded-full
          -z-10
          pointer-events-none
        "
      />
    </motion.div>
  );
}