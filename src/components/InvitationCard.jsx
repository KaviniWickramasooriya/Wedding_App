import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function InvitationCard({ onOpen }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onOpen();
    }, 60000);

    return () => clearTimeout(timer);
  }, [onOpen]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-lavender-900/50 backdrop-blur-md overflow-y-auto"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        onClick={onOpen}
        className="w-full max-w-md bg-[#fcfbf9] text-gray-800 p-6 sm:p-10 rounded-[2rem] shadow-[0_25px_70px_rgba(0,0,0,0.3)] border-[5px] sm:border-[6px] border-double border-[#b39263] relative cursor-pointer text-center font-serif my-auto"
      >
        <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:16px_16px] opacity-5 pointer-events-none rounded-[2rem]" />

        <div className="relative z-10 space-y-3 sm:space-y-4">
          <p className="text-[9px] sm:text-[10px] md:text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase text-gray-700 font-semibold leading-relaxed">
            MR. & MRS. WICKRAMASOORIYA <br />
            TOGETHER WITH <br />
            MR. & MRS. MADANAYAKE
          </p>

          <p className="text-[10px] sm:text-[11px] md:text-xs tracking-[0.2em] uppercase text-gray-600 pt-1">
            INVITE TO CELEBRATE THE MARRIAGE OF <br />
            THEIR CHILDREN
          </p>

          <div className="py-1 sm:py-2">
            <h2 
              className="text-4xl sm:text-5xl md:text-6xl text-[#a82462] drop-shadow-sm font-normal"
            >
              <span className="font-serif">A</span><span className="font-cursive">nuththara</span>
            </h2>
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gray-500 my-1 font-sans font-medium">
              AND
            </p>
            <h2 
              className="text-4xl sm:text-5xl md:text-6xl text-[#a82462] drop-shadow-sm font-normal"
            >
              <span className="font-serif">Y</span><span className="font-cursive">asith</span>
            </h2>
          </div>

          <div className="pt-1 sm:pt-2">
            <p className="text-[11px] sm:text-xs tracking-[0.3em] uppercase text-gray-700 font-bold">
              WEDNESDAY
            </p>
            <p className="font-serif italic text-2xl sm:text-3xl text-gray-800 mt-0.5">
              December 02, 2026
            </p>
          </div>

          <div className="text-[11px] sm:text-xs text-gray-700 tracking-wide pt-1 sm:pt-2 space-y-0.5 sm:space-y-1">
            <p className="font-semibold uppercase tracking-widest text-[10px] sm:text-[11px]">
              FROM 9:00 A.M. ONWARDS
            </p>
            <p className="font-serif uppercase tracking-wider text-[11px] sm:text-xs">
              AT THE EAGLE HALL, WATERS EDGE COLOMBO
            </p>
            <p className="text-[10px] sm:text-[11px] text-gray-500 italic">
              (Poruwa Ceremony will begin at 9:15 a.m.)
            </p>
          </div>

          <div className="pt-3 sm:pt-4 border-t border-gray-300/60 text-[10px] sm:text-[11px] text-gray-700 space-y-1">
            <p className="italic">Please RSVP (before 15<span className="align-super text-[8px] sm:text-[9px]">th</span> November)</p>
            <p className="font-semibold tracking-wider text-gray-800 text-[10px] sm:text-[11px]">
              KAVINI 0705320812 | YASITH - 0704070744
            </p>
          </div>

          <motion.div 
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="pt-4 sm:pt-5"
          >
            <span className="inline-block px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-lavender-700 text-white text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] uppercase font-bold shadow-md hover:bg-lavender-800 transition-colors">
              Click to Enter Website
            </span>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}