import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

export default function Countdown({ targetDate }) {
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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="py-16 md:py-28 px-4 text-center bg-gradient-to-b from-transparent to-lavender-50/40 relative"
    >
      <motion.h3 
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4 }}
        className="font-cursive text-6xl md:text-8xl text-lavender-500 mb-14 md:mb-20 tracking-wide drop-shadow-sm cursor-default"
      >
        Just some hours...
      </motion.h3>
      
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-4xl mx-auto">
        {Object.entries(timeLeft).map(([unit, value], index) => (
          <motion.div 
            key={unit}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ y: -10, scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, damping: 15, delay: index * 0.15 }}
            className="flex flex-col items-center justify-center w-[4.5rem] h-28 md:w-40 md:h-48 bg-white/70 backdrop-blur-2xl rounded-2xl md:rounded-[2rem] shadow-[0_15px_35px_rgba(145,109,177,0.12)] border border-white/80 transition-all group"
          >
            <span className="text-4xl md:text-7xl font-serif text-lavender-600 mb-1 md:mb-3 group-hover:text-lavender-500 transition-colors">{value}</span>
            <span className="text-[10px] md:text-sm uppercase tracking-[0.25em] text-lavender-400 font-bold ml-1">{unit}</span>
          </motion.div>
        ))}
      </div>
      
      <p className="mt-16 md:mt-24 italic font-serif text-gray-400 text-lg md:text-2xl tracking-widest font-light">
        ...until we say I do.
      </p>
    </motion.div>
  );
}