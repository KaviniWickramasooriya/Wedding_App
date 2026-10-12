import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarPlus } from 'react-icons/fa';

export default function DateDisplay() {
  const calendarLink = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+of+Anu+and+Yasith&dates=20261202T093000Z/20261202T163000Z&details=Join+us+to+celebrate+our+wedding!&location=Water%27s+Edge,+Battaramulla";

  // Shared scroll/refresh re-triggerable animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.15 // Staggers children sequentially from names down to button
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <motion.div 
      initial="hidden"
      // Re-triggers every time you scroll back to it or refresh the page
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
      className="text-center px-6 pt-16 mb-16 flex flex-col items-center relative overflow-hidden"
    >
      {/* Soft decorative background lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-lavender-200/20 rounded-full blur-[100px] pointer-events-none -z-0" />

      <motion.p variants={itemVariants} className="font-serif italic text-lavender-500 mb-4 text-lg">
        Mr. & Mrs. Wickramasooriya <br />
            Together with <br />
            Mr. & Mrs. Madanayake <br/>
            invite to celebrate the marriage of<br/>
            their children
      </motion.p>
      
      {/* Names Container with staggered entrance */}
      <motion.div variants={itemVariants} className="flex flex-col items-center w-full">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-lavender-700 to-lavender-500 tracking-[0.1em] md:tracking-widest mb-1 whitespace-nowrap">
          ANUTHTHARA
        </h2>

        <p className="font-cursive text-3xl sm:text-4xl text-[#d4af37] my-1 drop-shadow-sm">
          and
        </p>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-lavender-500 to-lavender-700 tracking-[0.1em] md:tracking-widest mt-1 mb-6 md:mb-8 whitespace-nowrap">
          YASITH
        </h2>
      </motion.div>
      
      <motion.p variants={itemVariants} className="font-serif text-sm text-gray-500 tracking-[0.15em] uppercase mb-6 max-w-[280px] mx-auto leading-loose">
        Request the honour of your presence at the celebration of their marriage
      </motion.p>
      
      {/* Date Banner with smooth scaling entrance */}
      <motion.div 
        variants={itemVariants}
        whileInView={{ scale: [0.95, 1], opacity: [0, 1] }}
        viewport={{ once: false }}
        className="py-5 border-y-2 border-lavender-200 mt-6 mb-4 w-full max-w-sm bg-gradient-to-r from-transparent via-lavender-50 to-transparent shadow-sm flex flex-col items-center justify-center gap-1.5"
      >
        <p className="font-serif tracking-[0.15em] md:tracking-[0.2em] text-lavender-700 uppercase font-bold text-base md:text-lg drop-shadow-sm">
          Wednesday, December 2, 2026
        </p>
        <p className="font-serif tracking-[0.2em] text-gray-600 uppercase font-semibold text-xs">
          From 9:00 A.M. Onwards
        </p>
      </motion.div>

      {/* Action Button */}
      <motion.div variants={itemVariants} className="mt-4">
        <motion.a 
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          href={calendarLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-lavender-600 to-lavender-500 text-white text-xs font-bold tracking-[0.15em] uppercase shadow-[0_10px_20px_rgba(145,109,177,0.3)] hover:shadow-[0_15px_30px_rgba(145,109,177,0.4)] transition-all"
        >
          <FaCalendarPlus size={16} />
          Add to Calendar
        </motion.a>
      </motion.div>
    </motion.div>
  );
}