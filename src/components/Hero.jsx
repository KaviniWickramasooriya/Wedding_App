import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="
        py-16
        px-6 
        md:px-12 
        text-center 
        relative 
        overflow-hidden
        w-full
        min-h-[85vh]
        flex
        items-end
        justify-center
        pb-16
      "
    >
      {/* Background Image Container with full native resolution & clarity */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="/photos/DSC06478.jpg" 
          alt="Anu & Yasith Background" 
          className="
            w-full 
            h-full 
            object-cover 
            object-center
            [image-rendering:-webkit-optimize-contrast]
            transform-gpu
          "
        />
        {/* Gentle dark gradient overlay for text readability without reducing image sharpness */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
      </div>

      {/* Glassmorphic Content Card positioned lower */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, type: "spring", stiffness: 250, damping: 20 }}
        className="
          max-w-xl 
          mx-auto 
          relative 
          z-10
          bg-white/90
          backdrop-blur-xl
          p-8
          md:p-12
          rounded-[2.5rem]
          border border-white/90
          shadow-[0_25px_60px_rgba(0,0,0,0.35)]
        "
      >

        <motion.h2 
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="
            font-serif 
            text-2xl 
            md:text-3xl 
            text-[#7e445f] 
            tracking-[0.25em] 
            uppercase 
            mb-4
            flex 
            flex-col
            items-center 
            justify-center 
            gap-2
            font-light
          "
        >
          {/* <div className="flex items-center gap-3">
            <span className="h-[1px] w-6 bg-[#d4af37]"></span>
            {/* <span>OUR STORY</span> */}
            {/* <span className="h-[1px] w-6 bg-[#d4af37]"></span>
          </div>
          <span className="font-normal text-[#8e4a5d]">STORY</span> */} 

              {/* Decorative Gold Divider Line with Diamond Accent */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-center justify-center gap-4 w-full max-w-xs mt-0"
              >
                <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#d4af37]/60" />
                <div className="w-2 h-2 rotate-45 bg-[#d4af37]" />
                <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#d4af37]/60" />
              </motion.div>
        </motion.h2>


        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="
            font-serif 
            text-base 
            md:text-lg 
            text-gray-800 
            leading-relaxed 
            italic
            mt-6 
            px-2
          "
        >
          "Our hearts chose one another when our paths first crossed, and every step since has led us happily to this forever."
        </motion.p>

      </motion.div>

    </motion.div>
  );
}