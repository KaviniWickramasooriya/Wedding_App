import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarPlus } from 'react-icons/fa';

export default function DateDisplay() {
  const calendarLink = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+of+Anu+and+Yasith&dates=20261202T093000Z/20261202T163000Z&details=Join+us+to+celebrate+our+wedding!&location=Water%27s+Edge,+Battaramulla";

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center px-6 mb-16 flex flex-col items-center relative"
    >
      <p className="font-serif italic text-lavender-500 mb-4 text-lg">Together with their families</p>
      
      <div className="flex flex-col items-center">
        <h2 className="font-serif text-5xl text-transparent bg-clip-text bg-gradient-to-r from-lavender-700 to-lavender-500 tracking-widest mb-1">ANU</h2>
        <p className="font-cursive text-4xl text-[#d4af37] my-1 drop-shadow-sm">and</p>
        <h2 className="font-serif text-5xl text-transparent bg-clip-text bg-gradient-to-r from-lavender-500 to-lavender-700 tracking-widest mt-1 mb-8">YASITH</h2>
      </div>
      
      <p className="font-serif text-sm text-gray-500 tracking-[0.15em] uppercase mb-6 max-w-[280px] mx-auto leading-loose">
        Request the honour of your presence at the celebration of their marriage
      </p>
      
      <motion.div 
        whileInView={{ scale: [0.95, 1] }}
        className="py-5 border-y-2 border-lavender-200 mt-6 mb-8 w-full max-w-sm bg-gradient-to-r from-transparent via-lavender-50 to-transparent"
      >
        <p className="font-serif tracking-[0.2em] text-lavender-700 uppercase font-bold text-lg drop-shadow-sm">
          Wednesday, December 2, 2026
        </p>
      </motion.div>

      <motion.a 
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        href={calendarLink} target="_blank" rel="noopener noreferrer"
        className="flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-lavender-600 to-lavender-500 text-white text-xs font-bold tracking-[0.15em] uppercase shadow-[0_10px_20px_rgba(145,109,177,0.3)] hover:shadow-[0_15px_30px_rgba(145,109,177,0.4)] transition-all"
      >
        <FaCalendarPlus size={16} />
        Add to Calendar
      </motion.a>
    </motion.div>
  );
}