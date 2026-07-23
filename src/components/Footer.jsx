import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="
        w-full 
        bg-gray-500/90 
        text-white 
        text-center 
        py-10 
        px-6 
        md:px-12 
        relative 
        overflow-hidden 
        shadow-[0_-10px_35px_rgba(145,109,177,0.25)]
      "
    >

      {/* Lavender Ambient Glow */}
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
          bg-[radial-gradient(circle_at_center,_rgba(216,180,254,0.35),transparent_65%)]
          pointer-events-none
        "
      />

      {/* Decorative Lavender Lines */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-lavender-300 to-transparent opacity-70" />


      <div className="relative z-10 flex flex-col items-center">


        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="
            font-serif 
            text-[10px] 
            tracking-[0.4em] 
            uppercase 
            text-gray-200 
            mb-2
          "
        >
          Save The Date
        </motion.p>


        <motion.p
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.3 }}
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


        <motion.p
          animate={{
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="
            font-serif 
            italic 
            text-xs 
            text-lavender-200 
            mb-5
          "
        >
          Styled with love 
        </motion.p>



        {/* Names */}
        <motion.h3
          whileHover={{
            scale: 1.08,
            letterSpacing: "0.5em",
          }}
          transition={{ duration: 0.3 }}
          className="
            font-serif 
            text-4xl 
            tracking-[0.35em] 
            mb-2 
            cursor-default
          "
        >
          A 
          <span className="text-lavender-200 mx-2">♥</span>
          Y
        </motion.h3>


        <p
          className="
            font-serif 
            text-[11px] 
            uppercase 
            tracking-[0.35em] 
            text-gray-200 
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
              boxShadow: "0 10px 25px rgba(216,180,254,0.35)",
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
              bg-gradient-to-r 
              from-lavender-300/40 
              to-lavender-500/40
              border 
              border-lavender-200/60
              backdrop-blur-md
              uppercase
              text-[10px]
              tracking-widest
              transition-all
            "
          >
            <FaPhoneAlt className="text-lavender-100 animate-pulse" />
            Call Bride
          </motion.a>



          <motion.a
            href="tel:+94702300790"
            whileHover={{
              scale: 1.06,
              y: -4,
              boxShadow: "0 10px 25px rgba(216,180,254,0.35)",
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
              bg-gradient-to-r 
              from-lavender-300/40 
              to-lavender-500/40
              border 
              border-lavender-200/60
              backdrop-blur-md
              uppercase
              text-[10px]
              tracking-widest
              transition-all
            "
          >
            <FaPhoneAlt className="text-lavender-100 animate-pulse" />
            Call Groom
          </motion.a>

        </div>



        {/* Divider */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 70 }}
          transition={{ duration: 0.8 }}
          className="
            h-px 
            bg-gradient-to-r 
            from-transparent 
            via-lavender-200 
            to-transparent
            mb-4
          "
        />



        {/* Footer Text */}
        <motion.p
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
            text-gray-200
          "
        >
          Created with{" "}
          <FaHeart
            className="inline mx-1 text-lavender-200 animate-pulse"
            size={11}
          />
           for Our Special Day
        </motion.p>


      </div>

    </motion.footer>
  );
}