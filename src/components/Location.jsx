import { motion } from 'framer-motion';

export default function Location() {
  const mapUrl = "https://www.google.com/maps/search/?api=1&query=Hilton+Colombo";

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="px-6 py-16 md:py-32 text-center bg-lavender-50/30"
    >
      <motion.div 
        whileHover={{ y: -8 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto bg-white/80 backdrop-blur-md rounded-[3rem] p-12 md:p-20 shadow-[0_20px_60px_rgba(145,109,177,0.12)] border border-white transition-all"
      >
        <h3 className="font-semibold text-3xl md:text-5xl text-gray-800 mb-4 font-serif">The Grand Ballroom</h3>
        <p className="text-gray-500 text-base md:text-xl mb-12 tracking-widest font-light uppercase">Hilton Hotel</p>
        
        <motion.a 
          whileHover={{ scale: 1.04, boxShadow: "0px 15px 30px rgba(145,109,177,0.3)" }}
          whileTap={{ scale: 0.96 }}
          href={mapUrl}
          target="_blank" 
          rel="noreferrer"
          className="inline-block px-12 py-5 bg-gradient-to-r from-lavender-400 to-lavender-500 text-white rounded-full text-xs md:text-sm uppercase tracking-[0.2em] font-semibold transition-all border border-lavender-300/50"
        >
          Get Directions
        </motion.a>
      </motion.div>
    </motion.div>
  );
}