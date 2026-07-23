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
    <div className="flex flex-col items-center justify-center bg-lavender-700 text-white w-16 h-16 md:w-20 md:h-20 rounded-lg shadow-lg">
      <span className="font-serif text-2xl md:text-3xl">{value.toString().padStart(2, '0')}</span>
      <span className="text-[9px] md:text-[10px] tracking-widest uppercase opacity-80 mt-1">{label}</span>
    </div>
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      // Changed the background to a soft ash color
      className="flex flex-col items-center py-12 px-6 bg-gray-200"
    >
      <h3 className="font-cursive text-4xl text-[#d4af37] mb-8">We are getting married</h3>
      <div className="flex gap-3 md:gap-6">
        <TimeBlock label="Days" value={timeLeft.days} />
        <TimeBlock label="Hours" value={timeLeft.hours} />
        <TimeBlock label="Mins" value={timeLeft.minutes} />
        <TimeBlock label="Secs" value={timeLeft.seconds} />
      </div>
      <p className="mt-6 text-xs font-serif tracking-[0.2em] text-lavender-600 uppercase">
        Until our forever begins
      </p>
    </motion.div>
  );
}