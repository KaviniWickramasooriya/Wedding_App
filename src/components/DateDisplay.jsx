import { motion } from 'framer-motion';

export default function DateDisplay() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="py-10 md:py-16 bg-white text-center flex flex-col items-center"
    >
      <motion.p 
        animate={{ scale: [1, 1.02, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="text-3xl md:text-5xl tracking-[0.4em] md:tracking-[0.6em] text-gray-600 font-light cursor-default"
      >
        02 . 12 . 2026
      </motion.p>
      
      <motion.div 
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "150px", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        className="h-[2px] bg-gradient-to-r from-transparent via-blush-300 to-transparent mt-8 md:mt-10 md:w-[300px]"
      />
    </motion.div>
  );
}