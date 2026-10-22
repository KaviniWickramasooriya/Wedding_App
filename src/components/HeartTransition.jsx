import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function HeartTransition({ onComplete }) {
  useEffect(() => {
    // Automatically finish transition after 3.2 seconds and open website
    const timer = setTimeout(() => {
      onComplete();
    }, 3200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[110] flex flex-col items-center justify-center bg-[#fcfbf9] overflow-hidden cursor-pointer"
      onClick={onComplete}
    >
      <div className="relative flex items-center justify-center w-64 h-64 sm:w-80 sm:h-80">
        {/* SVG Drawing Heart */}
        <svg
          className="absolute inset-0 w-full h-full text-[#7e445f]"
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M250 420C250 420 80 280 80 170C80 110 130 60 190 60C225 60 250 90 250 90C250 90 275 60 310 60C370 60 420 110 420 170C420 280 250 420 250 420Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>

        {/* Names Fading In Inside the Heart */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center z-10 font-serif"
        >
          <span className="text-xl sm:text-2xl text-gray-800 tracking-wider">
            Anuththara
          </span>
          <span className="font-cursive text-lg text-[#d4af37] my-0.5">
            &
          </span>
          <span className="text-xl sm:text-2xl text-gray-800 tracking-wider">
            Yasith
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}