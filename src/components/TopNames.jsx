import React from "react";
import { motion } from "framer-motion";

export default function TopNames() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: -10 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration: 1,
        delay: 0.3,
      }}
      className="
        flex 
        justify-center 
        items-center 
        gap-6
        pt-4
        pb-3
        lg:mt-6
      "
    >

      <motion.span
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.25 }}
        className="
          font-serif
          text-6xl
          text-[#8064A2]
          tracking-widest
          font-light
          drop-shadow-[0_4px_12px_rgba(128,100,162,0.4)]
          cursor-pointer
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
          drop-shadow-[0_0_12px_rgba(212,175,55,0.6)]
        "
      >
        ♥
      </motion.span>


      <motion.span
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        whileHover={{ scale: 1.25 }}
        className="
          font-serif
          text-6xl
          text-[#8064A2]
          tracking-widest
          font-light
          drop-shadow-[0_4px_12px_rgba(128,100,162,0.4)]
          cursor-pointer
        "
      >
        Y
      </motion.span>

    </motion.div>
  );
}