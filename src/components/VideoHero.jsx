import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Expanded array of floating stars & sparkling particles with smoothly shifting, vibrant theme colors
const floatingStars = [
  { top: "10%", left: "5%", size: 4, duration: 3, delay: 0 },
  { top: "18%", left: "90%", size: 3, duration: 4, delay: 1 },
  { top: "40%", left: "8%", size: 5, duration: 5, delay: 0.5 },
  { top: "60%", left: "92%", size: 3.5, duration: 3.5, delay: 1.5 },
  { top: "85%", left: "15%", size: 4, duration: 4.5, delay: 0.8 },
  { top: "90%", left: "85%", size: 4.5, duration: 3.2, delay: 2 },
  { top: "25%", left: "48%", size: 3, duration: 4, delay: 0.3 },
  { top: "75%", left: "52%", size: 4, duration: 3.8, delay: 1.2 }
];

export default function VideoHero() {
  const [colorIndex, setColorIndex] = useState(0);

  const dynamicColors = [
    "bg-pink-400 shadow-[0_0_15px_rgba(244,114,182,0.9)]",
    "bg-[#7e445f] shadow-[0_0_15px_rgba(126,68,95,0.9)]",
    "bg-rose-400 shadow-[0_0_15px_rgba(251,113,133,0.9)]",
    "bg-[#b39263] shadow-[0_0_15px_rgba(179,146,99,0.9)]",
    "bg-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.9)]"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % dynamicColors.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [dynamicColors.length]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="
        flex
        flex-col
        justify-center
        items-center
        relative
        px-6
        py-6
        bg-gradient-to-b
        from-white
        via-pink-50/40
        to-gray-50
        overflow-hidden
        w-full
        lg:max-w-5xl
        mx-auto
        rounded-3xl
        shadow-sm
      "
    >
      {/* Floating Dynamic Color-Changing Particles Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        {floatingStars.map((star, index) => (
          <motion.div
            key={index}
            className={`absolute rounded-full transition-colors duration-1000 ${dynamicColors[(index + colorIndex) % dynamicColors.length]}`}
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              y: [0, -35, 0],
              scale: [1, 1.7, 1],
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
          duration: 0.4,
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
          shadow-[0_25px_70px_rgba(126,68,95,0.25)]
          border-[6px]
          border-white
          relative
          z-10
          cursor-pointer
          group
        "
      >
        <img 
          src="/photos/image.jpg"
          alt="Anu & Yasith"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="
            w-full
            h-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
            transform-gpu
          "
        />

        {/* Luxury Gold Inner Border Accent */}
        <div className="absolute inset-3.5 border border-[#d4af37]/80 rounded-t-[11rem] pointer-events-none z-20 shadow-[inset_0_0_15px_rgba(212,175,55,0.2)] transition-colors duration-500 group-hover:border-[#d4af37]" />

        {/* Date Badge Style inside top of image */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-30 bg-white/30 backdrop-blur-md border border-white/50 px-3.5 py-1 rounded-full shadow-md">
          <p className="text-[9px] tracking-[0.3em] uppercase text-[#7e445f] font-serif font-bold">
            02 . 12 . 2026
          </p>
        </div>
      </motion.div>

      {/* Editorial Content Displayed Underneath the Image */}
      <div className="mt-8 text-center z-30 px-4">
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
      </div>

      {/* Ambient Luminous Glow Aura */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.15, 0.3, 0.15],
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
          via-[#7e445f]/15
          to-rose-200/30
          blur-[100px]
          rounded-full
          -z-10
          pointer-events-none
        "
      />
    </motion.div>
  );
}