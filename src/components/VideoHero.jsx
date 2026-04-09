import { motion } from 'framer-motion';

export default function VideoHero() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      className="w-full px-5 md:px-16 py-8 bg-transparent flex justify-center"
    >
      <motion.div 
        whileHover={{ scale: 1.015 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-5xl h-[55vh] md:h-[70vh] min-h-[400px] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-[0_30px_80px_rgba(145,109,177,0.2)] border border-white/60"
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
        <div className="absolute inset-0 bg-gradient-to-t from-lavender-900/40 via-transparent to-black/10 pointer-events-none mix-blend-overlay"></div>
      </motion.div>
    </motion.div>
  );
}