import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

export default function Countdown({ targetDate }) {
  // Wrapped in useCallback to fix the ESLint warning safely
  const calculateTimeLeft = useCallback(() => {
    const formattedDate = targetDate.replace(/\//g, '-');
    const difference = +new Date(formattedDate) - +new Date();
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="py-12 md:py-20 px-4 text-center bg-gradient-to-b from-white to-blush-50/50 relative"
    >
      <motion.h3 
        whileHover={{ scale: 1.05 }}
        className="font-cursive text-5xl md:text-7xl text-blush-500 mb-10 md:mb-16 tracking-wide drop-shadow-sm cursor-default"
      >
        Just some hours...
      </motion.h3>
      
      <div className="flex justify-center gap-3 md:gap-8 max-w-3xl mx-auto">
        {Object.entries(timeLeft).map(([unit, value], index) => (
          <motion.div 
            key={unit}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -8, scale: 1.05 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, delay: index * 0.1 }}
            // Borderless frosted glass with a soft blush glow
            className="flex flex-col items-center justify-center w-20 h-28 md:w-36 md:h-44 bg-white/60 backdrop-blur-xl rounded-3xl shadow-[0_10px_40px_rgba(208,106,142,0.15)] transition-all"
          >
            <span className="text-4xl md:text-6xl font-serif text-blush-600 mb-1 md:mb-2">{value}</span>
            {/* Increased from text-[9px] to text-xs (mobile) and text-base (desktop) */}
            <span className="text-xs md:text-base uppercase tracking-[0.2em] text-blush-400 font-bold">{unit}</span>
          </motion.div>
        ))}
      </div>
      
      {/* Increased from text-sm to text-base (mobile) and text-xl (desktop) */}
      <p className="mt-12 md:mt-16 italic font-serif text-gray-400 text-base md:text-xl tracking-widest">
        ...until we say I do!
      </p>
    </motion.div>
  );
}