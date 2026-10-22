import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="
        w-full 
        bg-[#946378] 
        text-white 
        text-center 
        py-10 
        px-6 
        md:px-12 
        relative 
        overflow-hidden 
        shadow-[0_-10px_35px_rgba(126,68,95,0.35)]
      "
    >

      {/* Ambient Pink & Purple Glow */}
      <motion.div
        animate={{
          opacity: [0.15, 0.35, 0.15],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="
          absolute 
          inset-0 
          bg-[radial-gradient(circle_at_center,_rgba(216,133,181,0.3),transparent_65%)]
          pointer-events-none
        "
      />

      {/* Decorative Top Line with Gold Accent */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#d4af37]/70 to-transparent opacity-80" />


      <div className="relative z-10 flex flex-col items-center">


        <motion.p
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="
            font-serif 
            text-[10px] 
            tracking-[0.4em] 
            uppercase 
            text-pink-200 
            mb-2
          "
        >
          Save The Date
        </motion.p>


        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="
            font-serif 
            text-2xl 
            tracking-[0.3em] 
            font-light 
            mb-3
          "
        >
          02 . 12 . 26
        </motion.p>


        {/* Names */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-2"
        >
          <motion.h3
            whileHover={{
              scale: 1.08,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="
              font-serif 
              text-4xl 
              tracking-[0.35em] 
              cursor-pointer 
              inline-block
            "
          >
            <motion.span 
              whileHover={{ scale: 1.15 }} 
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="inline-block"
            >
              A
            </motion.span> 
            <span className="text-[#b59a48] mx-2">♥</span>
            <motion.span 
              whileHover={{ scale: 1.15 }} 
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="inline-block"
            >
              Y
            </motion.span>
          </motion.h3>
        </motion.div>


        <p
          className="
            font-serif 
            text-[11px] 
            uppercase 
            tracking-[0.35em] 
            text-pink-100/90 
            mb-6
          "
        >
          Anu & Yasith
        </p>



        {/* Call Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md mb-6">

          <motion.a
            href="tel:+94705320812"
            whileHover={{
              scale: 1.06,
              y: -4,
              boxShadow: "0 10px 25px rgba(212,175,55,0.35)",
              backgroundColor: "rgba(107, 58, 81, 0.9)"
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              flex-1 
              flex 
              items-center 
              justify-center 
              gap-2 
              py-3 
              px-5
              rounded-full
              bg-[#6b3a51]/80
              border 
              border-pink-300/40
              backdrop-blur-md
              uppercase
              text-[10px]
              tracking-widest
              transition-all
            "
          >
            <FaPhoneAlt className="text-pink-200 animate-pulse" />
            Call Bride
          </motion.a>



          <motion.a
            href="tel:+94701086343"
            whileHover={{
              scale: 1.06,
              y: -4,
              boxShadow: "0 10px 25px rgba(212,175,55,0.35)",
              backgroundColor: "rgba(107, 58, 81, 0.9)"
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              flex-1 
              flex 
              items-center 
              justify-center 
              gap-2 
              py-3 
              px-5
              rounded-full
              bg-[#6b3a51]/80
              border 
              border-pink-300/40
              backdrop-blur-md
              uppercase
              text-[10px]
              tracking-widest
              transition-all
            "
          >
            <FaPhoneAlt className="text-pink-200 animate-pulse" />
            Call Groom
          </motion.a>

        </div>



        {/* Divider */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 70 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="
            h-px 
            bg-gradient-to-r 
            from-transparent 
            via-[#d4af37]/60 
            to-transparent
            mb-0
          "
        />



        {/* Footer Text */}
        {/* <motion.p
          animate={{
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="
            font-serif 
            text-[10px] 
            uppercase 
            tracking-[0.25em] 
            text-pink-100/90
          "
        >
          Created with{" "}
          <FaHeart
            className="inline mx-1 text-[#d4af37] animate-pulse"
            size={11}
          />
            {" "}for Our Special Day
        </motion.p> */}


      </div>

    </motion.footer>
  );
}