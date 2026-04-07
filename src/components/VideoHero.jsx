import { motion } from 'framer-motion';

export default function VideoHero() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, type: "spring" }}
      className="w-full px-4 md:px-12 py-8 bg-white flex justify-center"
    >
      <motion.div 
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.6 }}
        // Removed borders, added a glowing shadow
        className="relative w-full max-w-4xl h-[50vh] md:h-[65vh] min-h-[400px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_20px_60px_rgba(208,106,142,0.25)]"
      >
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/wedding-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
      </motion.div>
    </motion.div>
  );
}