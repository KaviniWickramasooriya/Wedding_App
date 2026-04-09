import { motion } from 'framer-motion';

export default function TopNames() {
  const wordAnimation = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1, y: 0,
      transition: { delay: i * 0.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    }),
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="px-6 pt-20 md:pt-32 pb-10 md:pb-16 text-center bg-gradient-to-b from-lavender-50/60 to-transparent"
    >
      <motion.h3 
        custom={0} initial="hidden" animate="visible" variants={wordAnimation}
        className="uppercase tracking-[0.45em] md:tracking-[0.6em] text-[10px] md:text-sm text-lavender-400 mb-8 font-semibold"
      >
        The Wedding Of
      </motion.h3>
      
      <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-10 mb-4">
        <motion.h1 
          custom={1} initial="hidden" animate="visible" variants={wordAnimation}
          whileHover={{ scale: 1.05, rotate: -1 }}
          transition={{ duration: 0.4 }}
          className="font-cursive text-8xl md:text-9xl lg:text-[11rem] bg-gradient-to-r from-lavender-400 via-lavender-500 to-lavender-600 bg-clip-text text-transparent pb-4 cursor-default leading-none"
        >
          Anu
        </motion.h1>
        
        <motion.span 
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="text-lavender-300 text-5xl md:text-7xl font-light drop-shadow-sm my-2 md:my-0"
        >
          &
        </motion.span>
        
        <motion.h1 
          custom={2} initial="hidden" animate="visible" variants={wordAnimation}
          whileHover={{ scale: 1.05, rotate: 1 }}
          transition={{ duration: 0.4 }}
          className="font-cursive text-8xl md:text-9xl lg:text-[11rem] bg-gradient-to-r from-lavender-600 via-lavender-500 to-lavender-400 bg-clip-text text-transparent pb-4 cursor-default leading-none"
        >
          Yasith
        </motion.h1>
      </div>
    </motion.div>
  );
}