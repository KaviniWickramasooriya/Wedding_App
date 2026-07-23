import React from "react";
import { motion } from "framer-motion";

export default function VideoHero() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
      className="
        flex
        justify-center
        items-center
        relative
        px-4
        py-8
        bg-gradient-to-b
        from-lavender-100/60
        via-lavender-200/40
        to-transparent
      "
    >

      <motion.div
        whileHover={{
          scale: 1.02,
        }}
        transition={{
          duration: 0.5,
        }}
        className="
          w-[85vw]
          max-w-sm
          aspect-[4/5]
          rounded-t-[12rem]
          overflow-hidden
          shadow-[0_25px_70px_rgba(145,109,177,0.45)]
          border-[8px]
          border-white
          relative
          z-10
        "
      >

        <motion.img
          animate={{
            scale: [1, 1.04, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
          src="/photos/hero.jpg"
          alt="Anu & Yasith"
          className="
            w-full
            h-full
            object-cover
          "
        />


        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-lavender-800/40
            via-transparent
            to-transparent
          "
        />

      </motion.div>


      {/* Darker Lavender Ambient Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25,0.45,0.25],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="
          absolute
          w-[130%]
          h-[130%]
          bg-lavender-400/30
          blur-3xl
          rounded-full
          -z-10
        "
      />

    </motion.div>
  );
}