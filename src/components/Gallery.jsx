import React from 'react';
import { motion } from 'framer-motion';

export default function Gallery() {
  // 8 Images mapped from your public folder
  const images = [
    "/photos/1.jpg", "/photos/2.jpg", "/photos/3.jpg", "/photos/4.jpg",
    "/photos/5.jpg", "/photos/6.jpg", "/photos/7.jpg", "/photos/8.jpg"
  ];

  const container = { 
    hidden: { opacity: 0 }, 
    show: { 
      opacity: 1, 
      transition: { staggerChildren: 0.12 } 
    } 
  };

  const item = { 
    hidden: { opacity: 0, y: 30, scale: 0.95 }, 
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
    } 
  };

  return (
    <motion.div 
      initial="hidden" 
      whileInView="show" 
      viewport={{ once: true, amount: 0.1 }} 
      variants={container}
      className="py-24 px-6 md:px-12 bg-white relative overflow-hidden"
    >
      {/* Subtle soft lavender ambient glow behind the grid */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-lavender-100/40 rounded-full blur-[140px] pointer-events-none -z-0" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-cursive text-4xl text-[#d4af37] mb-2 drop-shadow-sm"
          >
            Precious Moments
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl md:text-5xl text-lavender-700 tracking-[0.2em] uppercase"
          >
            Photo Gallery
          </motion.h2>
          <div className="h-[2px] w-20 bg-[#d4af37]/60 mx-auto mt-4 rounded-full" />
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {images.map((src, i) => (
            <motion.div 
              key={i} 
              variants={item} 
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`rounded-[2rem] overflow-hidden shadow-[0_15px_40px_rgba(145,109,177,0.12)] border-4 border-lavender-50 relative group cursor-pointer
                ${(i === 0 || i === 4) ? 'md:col-span-2 row-span-2 h-64 md:h-[28rem]' : 'col-span-1 h-48 md:h-[21rem]'}
              `}
            >
              {/* Image with smooth zoom on hover */}
              <img 
                src={src} 
                alt={`Anu & Yasith Pre-shoot ${i+1}`} 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
              />
              
              {/* Professional Dark Vignette Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-lavender-950/70 via-lavender-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Luxury Gold Border Frame that scales in */}
              <div className="absolute inset-4 border border-[#d4af37]/70 rounded-[1.5rem] opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none scale-95 group-hover:scale-100" />

              {/* Floating Professional Caption on Hover */}
              <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 pointer-events-none">
                <span className="font-cursive text-3xl text-[#d4af37] drop-shadow-md mb-1">Anu & Yasith</span>
                <span className="font-serif text-[10px] md:text-xs text-lavender-100 tracking-[0.3em] uppercase">Memory {i + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.div>
  );
}