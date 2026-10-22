import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaUserTie, 
  FaRing, 
  FaUtensils, 
  FaGlassCheers, 
  FaCameraRetro, 
  // FaCalendarPlus,
  FaCarSide
} from 'react-icons/fa';

// Array of floating stars & sparkling particles for background animation
const floatingStars = [
  { top: "10%", left: "10%", size: 4, duration: 3, delay: 0 },
  { top: "25%", left: "85%", size: 3, duration: 4, delay: 1 },
  { top: "45%", left: "12%", size: 5, duration: 5, delay: 0.5 },
  { top: "65%", left: "88%", size: 3.5, duration: 3.5, delay: 1.5 },
  { top: "82%", left: "18%", size: 4, duration: 4.5, delay: 0.8 },
  { top: "20%", left: "50%", size: 3, duration: 4, delay: 0.3 },
  { top: "75%", left: "55%", size: 4.5, duration: 3.8, delay: 1.2 }
];

export default function Schedule() {
  // Color shifting state for continuous dynamic color transitions (Pinks, Roses, Dark Pinks, and Gold - NO purple)
  const [colorIndex, setColorIndex] = useState(0);

  const dynamicColors = [
    "bg-pink-400 shadow-[0_0_12px_rgba(244,114,182,0.8)]",
    "bg-[#7e445f] shadow-[0_0_12px_rgba(126,68,95,0.8)]",
    "bg-rose-400 shadow-[0_0_12px_rgba(251,113,133,0.8)]",
    "bg-[#d4af37] shadow-[0_0_12px_rgba(212,175,55,0.8)]",
    "bg-pink-500 shadow-[0_0_12px_rgba(236,72,153,0.8)]"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % dynamicColors.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [dynamicColors.length]);

  const events = [
    { 
      time: "8:45 AM", 
      title: "Groom & Bride Entourage Arrival", 
      icon: <FaUserTie size={16} /> 
    },
    { 
      time: "9:15 AM", 
      title: "Poruwa Ceremony & Auspicious Rituals", 
      icon: <FaRing size={16} /> 
    },
    { 
      time: "11:00 AM", 
      title: "Signing of the Register & Family Photos", 
      icon: <FaCameraRetro size={16} /> 
    },
    { 
      time: "11:30 AM", 
      title: "Wedding Reception & Cocktail Hour", 
      icon: <FaGlassCheers size={16} /> 
    },
    { 
      time: "1:00 PM", 
      title: "Grand Wedding Lunch Buffet", 
      icon: <FaUtensils size={16} /> 
    },
    { 
      time: "4:00 PM", 
      title: "Going Away", 
      icon: <FaCarSide size={16} /> 
    }
  ];

  return (
    <div className="
      py-16 
      md:py-28 
      px-6 
      bg-gradient-to-b 
      from-[#e2e4e6] 
      via-pink-50/40 
      to-white 
      relative 
      overflow-hidden
    ">

      {/* Floating Dynamic Color-Changing Particles Background Animation (No Purple) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        {floatingStars.map((star, index) => (
          <motion.div
            key={index}
            className={`absolute rounded-full transition-colors duration-1000 ${dynamicColors[(index + colorIndex) % dynamicColors.length]}`}
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              y: [0, -25, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Background Decorative Glow with pink & gold warmth */}
      <div className="
        absolute 
        top-1/2 
        left-1/2 
        -translate-x-1/2 
        -translate-y-1/2 
        w-[150%] 
        h-[150%] 
        bg-gradient-to-tr from-pink-300/15 via-rose-300/15 to-pink-200/15 
        rounded-full 
        blur-[100px] 
        pointer-events-none 
        -z-0
      " />

      <div className="max-w-2xl mx-auto relative z-10">

        {/* Header with 'Order of Events' */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >

          <motion.h2 
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="
              font-serif 
              text-xl 
              md:text-3xl 
              text-[#7e445f] 
              tracking-[0.2em] 
              uppercase
              font-light
            "
          >
            Order of Events
          </motion.h2>


          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 90 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="
              h-[1px] 
              bg-[#d4af37] 
              mx-auto 
              mt-4 
              rounded-full
            " 
          />

        </motion.div>


        {/* Professional Row-wise Timeline Cards */}
        <div className="space-y-4">

          {events.map((item, index) => (

            <motion.div

              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.015,
                y: -2,
                backgroundColor: "rgba(255,255,255,0.95)",
                boxShadow: "0 15px 35px rgba(126,68,95,0.18)"
              }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 18,
                delay: index * 0.08
              }}

              key={index}

              className="
                bg-white/85 
                backdrop-blur-md 
                px-6 
                py-5
                rounded-[1.5rem]
                shadow-[0_8px_25px_rgba(126,68,95,0.1)]
                border 
                border-white/90
                flex 
                flex-col 
                sm:flex-row 
                items-center 
                justify-between
                gap-2 
                sm:gap-4
                cursor-pointer 
                group 
                transition-all
                duration-300
                relative
                overflow-hidden
              "
            >

              {/* Gold hover accent line on left */}
              <div className="
                absolute 
                left-0 
                top-0 
                bottom-0 
                w-1.5 
                bg-[#797979]
                opacity-0
                group-hover:opacity-100
                transition-opacity
              "/>

              {/* Time & Icon Block (Left Side) */}
              <div className="flex items-center gap-3 w-full sm:w-40 justify-center sm:justify-start">
                <div className="
                  w-10 
                  h-10 
                  rounded-xl 
                  bg-[#7e445f]/10 
                  text-[#7e445f]
                  flex 
                  items-center 
                  justify-center
                  shadow-inner
                  group-hover:bg-[#7e445f]
                  group-hover:text-white
                  transition-all
                  shrink-0
                ">
                  {item.icon}
                </div>

                <span className="
                  text-[#7e445f]
                  font-bold
                  text-lg
                  md:text-xl
                  font-serif
                  tracking-wider
                  whitespace-nowrap
                ">
                  {item.time}
                </span>
              </div>

              {/* Title Block (Right Side - Professional Row Alignment) */}
              <div className="w-full sm:flex-1 text-center sm:text-right">
                <span className="
                  text-gray-700
                  tracking-wide
                  text-sm
                  md:text-base
                  font-serif
                  font-light
                ">
                  {item.title}
                </span>
              </div>

            </motion.div>

          ))}

        </div>

        {/* Decorative Gold Divider Line with Diamond Accent at Bottom */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-4 w-full max-w-xs mx-auto mt-12"
        >
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#d4af37]/60" />
          <div className="w-2 h-2 rotate-45 bg-[#d4af37]" />
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#d4af37]/60" />
        </motion.div>

      </div>

    </div>
  );
}