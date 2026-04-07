import { motion } from 'framer-motion';

export default function Location() {
  const mapUrl = "https://www.google.com/maps/search/?api=1&query=Hilton+Colombo";

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="px-6 py-12 md:py-24 text-center bg-blush-50/30"
    >
      <motion.div 
        whileHover={{ y: -10 }}
        className="max-w-xl mx-auto bg-white rounded-[2.5rem] p-10 md:p-14 shadow-[0_15px_40px_rgba(208,106,142,0.1)] transition-all duration-300"
      >
        <h3 className="font-semibold text-2xl md:text-3xl text-gray-800 mb-2 font-serif">The Grand Ballroom</h3>
        <p className="text-gray-500 text-sm md:text-lg mb-10 tracking-wide font-light">Hotel</p>
        
        <motion.a 
          whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(208,106,142,0.3)" }}
          whileTap={{ scale: 0.95 }}
          href={mapUrl}
          target="_blank" 
          rel="noreferrer"
          className="inline-block px-10 py-4 bg-gradient-to-r from-blush-400 to-blush-500 text-white rounded-full text-sm md:text-base font-semibold transition-all tracking-wider"
        >
          Get Directions
        </motion.a>
      </motion.div>
    </motion.div>
  );
}