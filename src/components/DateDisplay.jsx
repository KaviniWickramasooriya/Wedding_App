import { motion } from 'framer-motion';

export default function DateDisplay() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2 }}
      className="py-14 md:py-24 text-center flex flex-col items-center relative"
    >
      <motion.p 
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="text-2xl md:text-4xl tracking-[0.5em] md:tracking-[0.8em] text-gray-500 font-light cursor-default ml-4 md:ml-6"
      >
        02 . 12 . 2026
      </motion.p>
      
      <motion.div 
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "100%", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
        className="h-[1px] bg-gradient-to-r from-transparent via-lavender-300 to-transparent mt-10 md:mt-14 w-[200px] md:max-w-[400px]"
      />
    </motion.div>
  );
}