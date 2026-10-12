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
        pt-24 
        pb-16
        px-8 
        md:px-12 
        text-center 
        bg-gradient-to-b 
        from-lavender-100 
        via-lavender-400/60 
        to-white
        relative 
        overflow-hidden
      "
    >

      {/* Decorative ambient background glow */}
      <div className="
        absolute 
        top-1/2 
        left-1/2 
        -translate-x-1/2 
        -translate-y-1/2 
        w-[80%] 
        h-[80%] 
        bg-lavender-200/30 
        rounded-full 
        blur-[120px] 
        pointer-events-none 
        -z-0
      " />

      <div className="max-w-3xl mx-auto relative z-10">

        <motion.h2 
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="
            font-serif 
            text-4xl 
            text-lavender-700 
            tracking-[0.2em] 
            uppercase 
            mb-6 
            flex 
            items-center 
            justify-center 
            gap-4
          "
        >
          <span className="h-[1px] w-12 bg-lavender-300"></span>
          Our Story
          <span className="h-[1px] w-12 bg-lavender-300"></span>
        </motion.h2>


        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="
            font-serif 
            text-xl 
            text-gray-600 
            leading-relaxed 
            italic 
            mb-10 
            px-4
          "
        >
          "Every love story is beautiful, but ours is our absolute favourite. Here are a few of the precious moments that brought us to this day."
        </motion.p>


        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          whileHover={{ scale: 1.02, y: -4 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 300, damping: 20 }}
          className="
            w-full 
            aspect-video 
            rounded-[2rem] 
            overflow-hidden 
            shadow-[0_20px_50px_rgba(145,109,177,0.2)] 
            border-8 
            border-white 
            mb-6 
            relative 
            group
            cursor-pointer
          "
        >

          <img 
            src="/photos/image.jpeg" 
            alt="Anu & Yasith Story" 
            className="
              w-full 
              h-full 
              object-cover 
              transition-transform 
              duration-1000 
              group-hover:scale-105
            "
            style={{ objectPosition: 'center 75%' }}
          />

          <div className="
            absolute 
            inset-0 
            bg-lavender-900/10 
            group-hover:bg-transparent 
            transition-colors 
            duration-500
          " />

        </motion.div>

      </div>

    </motion.div>
  );
}