import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;

      if (distance < 0) {
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const TimeBlock = ({ label, value }) => (
    <motion.div 
      whileHover={{ scale: 1.08, y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className="flex flex-col items-center justify-center bg-[#7e445f] text-white w-16 h-16 md:w-20 md:h-20 rounded-2xl shadow-[0_10px_25px_rgba(126,68,95,0.3)] border border-[#9d5d82] cursor-pointer"
    >
      <span className="font-serif text-2xl md:text-3xl font-semibold tracking-wide">
        {value.toString().padStart(2, '0')}
      </span>
      <span className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase opacity-90 mt-0.5 font-medium">
        {label}
      </span>
    </motion.div>
  );

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      // Re-triggers smooth animation every time it comes back into view on scroll or page refresh
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center py-20 px-6 bg-gray-200 relative overflow-hidden"
    >
      {/* Decorative ambient background glow with pink & purple touch */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-gradient-to-tr from-pink-300/20 via-purple-300/20 to-lavender-300/20 rounded-full blur-[100px] pointer-events-none -z-0" />

      {/* <motion.h3 
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="font-cursive text-4xl md:text-5xl text-[#d4af37] mb-8 drop-shadow-sm relative z-10"
      >
        We are getting married
      </motion.h3> */}

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex gap-3 md:gap-6 relative z-10"
      >
        <TimeBlock label="Days" value={timeLeft.days} />
        <TimeBlock label="Hours" value={timeLeft.hours} />
        <TimeBlock label="Mins" value={timeLeft.minutes} />
        <TimeBlock label="Secs" value={timeLeft.seconds} />
      </motion.div>

      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-8 text-xs font-serif tracking-[0.3em] text-[#7e445f] uppercase font-medium relative z-10"
      >
        Until our forever begins
      </motion.p>
    </motion.div>
  );
}