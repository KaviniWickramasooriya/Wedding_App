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

  const handleAddToCalendar = () => { /* ... keeps existing logic ... */ };

  return (
    <div className="py-20 md:py-32 px-6 bg-gradient-to-b from-white to-blush-50/50">
      <div className="max-w-2xl mx-auto">
        <h3 className="font-cursive text-5xl md:text-7xl text-center text-blush-500 mb-12 md:mb-20 drop-shadow-sm">Schedule</h3>
        
        <div className="space-y-4 md:space-y-6">
          {events.map((item, index) => (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.03, x: 5 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, delay: index * 0.1 }}
              key={index} 
              // Borderless pill design
              className="bg-white px-8 py-6 rounded-2xl shadow-[0_8px_20px_rgba(208,106,142,0.08)] flex flex-col md:flex-row md:justify-between items-center text-center md:text-left cursor-default"
            >
              <span className="text-blush-500 font-semibold mb-2 md:mb-0 text-xl md:text-2xl">{item.time}</span>
              <span className="text-gray-600 tracking-wide text-lg md:text-xl font-light">{item.title}</span>
            </motion.div>
          ))}
        </div>

        <motion.button 
          whileHover={{ scale: 1.05, backgroundColor: "#fff" }}
          whileTap={{ scale: 0.95 }}
          onClick={handleAddToCalendar}
          className="mt-16 w-full py-5 bg-white/60 backdrop-blur-md text-blush-500 rounded-full text-sm md:text-base uppercase tracking-widest font-semibold shadow-[0_10px_30px_rgba(208,106,142,0.15)] transition-all"
        >
          Add to Google Calendar
        </motion.button>
      </div>
    </div>
  );
}