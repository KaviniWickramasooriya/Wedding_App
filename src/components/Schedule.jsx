import React from 'react';
import { motion } from 'framer-motion';

export default function Schedule() {
  const events = [
    { time: "8:45 AM", title: "Groom Entrance" },
    { time: "10:00 AM", title: "Poruwa Ceremony" },
    { time: "12:40 PM", title: "Lunch" },
    { time: "2:30 PM", title: "First Dance" },
    { time: "4:00 PM", title: "Going Down" }
  ];

  const handleAddToCalendar = () => { /* Add logic */ };

  return (
    <div className="py-20 md:py-36 px-6 bg-gradient-to-b from-transparent to-lavender-50/40">
      <div className="max-w-3xl mx-auto">
        <h3 className="font-cursive text-6xl md:text-8xl text-center text-lavender-500 mb-16 md:mb-24 drop-shadow-sm">Schedule</h3>
        
        <div className="space-y-5 md:space-y-8">
          {events.map((item, index) => (
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02, x: 10 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 80, damping: 15, delay: index * 0.1 }}
              key={index} 
              className="bg-white/80 backdrop-blur-sm px-10 py-8 rounded-[2rem] shadow-[0_10px_30px_rgba(145,109,177,0.08)] border border-white flex flex-col md:flex-row md:justify-between items-center text-center md:text-left cursor-default group"
            >
              <span className="text-lavender-500 font-semibold mb-3 md:mb-0 text-2xl md:text-3xl font-serif tracking-wide group-hover:text-lavender-600 transition-colors">{item.time}</span>
              <span className="text-gray-500 tracking-wider text-xl md:text-2xl font-light">{item.title}</span>
            </motion.div>
          ))}
        </div>

        <motion.button 
          whileHover={{ scale: 1.03, backgroundColor: "#fff", boxShadow: "0 15px 35px rgba(145,109,177,0.2)" }}
          whileTap={{ scale: 0.97 }}
          onClick={handleAddToCalendar}
          className="mt-20 w-full py-6 bg-white/70 backdrop-blur-md text-lavender-500 rounded-full text-xs md:text-sm uppercase tracking-[0.2em] font-semibold shadow-[0_10px_30px_rgba(145,109,177,0.12)] border border-lavender-100 transition-all"
        >
          Add to Google Calendar
        </motion.button>
      </div>
    </div>
  );
}