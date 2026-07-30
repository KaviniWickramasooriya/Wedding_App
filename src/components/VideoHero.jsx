import React from "react";
import { motion } from "framer-motion";

export default function VideoHero() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="
        flex
        flex-col
        justify-center
        items-center
        relative
        px-4
        py-12
        bg-gradient-to-b
        from-lavender-100/60
        via-lavender-200/40
        to-transparent
        overflow-hidden
        w-full
        lg:max-w-4xl
        mx-auto
      "
    >

      <motion.div
        whileHover={{
          scale: 1.02,
          y: -4,
        }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        className="
          w-[85vw]
          max-w-sm
          lg:max-w-md
          aspect-[4/5]
          rounded-t-[12rem]
          overflow-hidden
          shadow-[0_25px_70px_rgba(145,109,177,0.45)]
          border-[8px]
          border-white
          relative
          z-10
          cursor-pointer
          bg-lavender-100/50
        "
      >

        <img 
          src="/photos/hero.jpg"
          alt="Anu & Yasith"
          loading="eager"
          decoding="async"
          className="
            w-full
            h-full
            object-cover
          "
        />


        {/* Deepened bottom gradient overlay to make text completely crisp and legible */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-lavender-950/80
            via-lavender-950/30
            to-transparent
            pointer-events-none
          "
        />

        {/* Luxury Gold Inner Accent Border */}
        <div className="absolute inset-4 border border-[#d4af37]/70 rounded-t-[11rem] pointer-events-none z-20 transition-all duration-700 hover:border-[#d4af37]" />

        {/* Floating Text Overlay Inside the Arch Frame with clear contrast & drop shadows */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute bottom-8 w-full text-center z-30 pointer-events-none px-4"
        >
          <p className="font-cursive text-4xl md:text-5xl text-[#d4af37] drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] mb-2">
            Anu & Yasith
          </p>
          <div className="flex items-center justify-center gap-3">
            <span className="h-[1px] w-6 bg-lavender-200"></span>
            <p className="font-serif text-[10px] md:text-[11px] text-white tracking-[0.35em] uppercase drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] font-semibold">
              Are Getting Married
            </p>
            <span className="h-[1px] w-6 bg-lavender-200"></span>
          </div>
        </motion.div>

      </motion.div>


      {/* Darker Lavender Ambient Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          w-[130%]
          h-[130%]
          bg-lavender-400/30
          blur-3xl
          rounded-full
          -z-10
          pointer-events-none
        "
      />

    </motion.div>
  );
}