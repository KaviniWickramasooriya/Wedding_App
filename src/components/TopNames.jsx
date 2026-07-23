import React from "react";
import { motion } from "framer-motion";

export default function TopNames() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: -10 }}
      transition={{
        duration: 1,
        delay: 0.3,
      }}
      className="
        flex 
        justify-center 
        items-center 
        gap-5
        pt-4
        pb-3
      "
    >

      <motion.span
        whileHover={{ scale: 1.1 }}
        className="
          font-serif
          text-5xl
          text-lavender-700
          tracking-widest
          font-light
        "
      >
        A
      </motion.span>


      <motion.span
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          text-[#d4af37]
          text-4xl
          drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]
        "
      >
        ♥
      </motion.span>


      <motion.span
        whileHover={{ scale: 1.1 }}
        className="
          font-serif
          text-5xl
          text-lavender-700
          tracking-widest
          font-light
        "
      >
        Y
      </motion.span>

    </motion.div>
  );
}