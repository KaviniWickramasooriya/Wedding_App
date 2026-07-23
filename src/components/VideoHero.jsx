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
          shadow-[0_25px_60px_rgba(145,109,177,0.35)]
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
            from-lavender-700/40
            via-transparent
            to-transparent
          "
        />

      </motion.div>


      {/* Lavender Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2,0.35,0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="
          absolute
          w-[130%]
          h-[130%]
          bg-lavender-300/20
          blur-3xl
          rounded-full
          -z-10
        "
      />

    </motion.div>
  );
}