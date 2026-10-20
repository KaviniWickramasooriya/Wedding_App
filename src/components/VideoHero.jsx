import React from "react";
import { motion } from "framer-motion";

// Expanded array of floating stars & sparkling particles with mixed pink & lavender tones
const floatingStars = [
  { top: "10%", left: "5%", size: 4, duration: 3, delay: 0, color: "bg-purple-300" },
  { top: "18%", left: "90%", size: 3, duration: 4, delay: 1, color: "bg-pink-300" },
  { top: "40%", left: "8%", size: 5, duration: 5, delay: 0.5, color: "bg-purple-400" },
  { top: "60%", left: "92%", size: 3.5, duration: 3.5, delay: 1.5, color: "bg-pink-400" },
  { top: "85%", left: "15%", size: 4, duration: 4.5, delay: 0.8, color: "bg-purple-300" },
  { top: "90%", left: "85%", size: 4.5, duration: 3.2, delay: 2, color: "bg-pink-300" },
  { top: "25%", left: "48%", size: 3, duration: 4, delay: 0.3, color: "bg-purple-400" },
  { top: "75%", left: "52%", size: 4, duration: 3.8, delay: 1.2, color: "bg-pink-300" }
];

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
      {/* Floating Pink & Lavender Stars & Particles Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        {floatingStars.map((star, index) => (
          <motion.div
            key={index}
            className={`absolute rounded-full ${star.color} shadow-[0_0_12px_rgba(216,133,181,0.8)]`}
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              y: [0, -30, 0],
              scale: [1, 1.6, 1],
            }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

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
          shadow-[0_25px_70px_rgba(126,68,95,0.3)]
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
          src="/photos/image.jpg"
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

        {/* Previous Date Badge Style inside top of image */}
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

      {/* Editorial Content Displayed Underneath the Image */}
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
          <p className="font-serif text-[10px] md:text-[11px] text-[#7e445f] tracking-[0.35em] uppercase font-semibold">
            Are Getting Married
          </p>
          <span className="h-[1px] w-8 bg-gradient-to-l from-transparent to-[#b8973c]/60"></span>
        </div>
      </motion.div>

      {/* Ambient Pulsing Glow Aura with Pink & Purple touch */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.25, 0.45, 0.25],
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
          from-pink-300/30
          via-purple-300/20
          to-lavender-400/15
          blur-[100px]
          rounded-full
          -z-10
          pointer-events-none
        "
      />
    </motion.div>
  );
}