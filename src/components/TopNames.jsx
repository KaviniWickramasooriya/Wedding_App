import { motion } from 'framer-motion';

export default function TopNames() {
  const wordAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1, y: 0,
      transition: { delay: i * 0.15, duration: 1, type: "spring", stiffness: 50 }
    }),
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="px-6 pt-16 md:pt-24 pb-8 md:pb-12 text-center bg-gradient-to-b from-blush-100/40 to-white"
    >
      {/* Increased from text-[10px] to text-xs (mobile) and text-lg (desktop) */}
      <motion.h3 
        custom={0} initial="hidden" animate="visible" variants={wordAnimation}
        className="uppercase tracking-[0.4em] md:tracking-[0.5em] text-xs md:text-lg text-gray-400 mb-6 font-semibold"
      >
        The Wedding Of
      </motion.h3>
      
      <div className="flex justify-center items-center gap-3 md:gap-8 mb-2">
        <motion.h1 
          custom={1} initial="hidden" animate="visible" variants={wordAnimation}
          whileHover={{ scale: 1.1, rotate: -2 }}
          className="font-cursive text-7xl md:text-9xl bg-gradient-to-r from-blush-400 via-blush-500 to-blush-600 bg-clip-text text-transparent pb-2 cursor-default transition-transform"
        >
          Anu
        </motion.h1>
        
        <motion.span 
          animate={{ y: [0, -10, 0], scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="text-blush-300 text-5xl md:text-7xl mt-4 md:mt-8 font-light drop-shadow-md"
        >
          &
        </motion.span>
        
        <motion.h1 
          custom={2} initial="hidden" animate="visible" variants={wordAnimation}
          whileHover={{ scale: 1.1, rotate: 2 }}
          className="font-cursive text-7xl md:text-9xl bg-gradient-to-r from-blush-600 via-blush-500 to-blush-400 bg-clip-text text-transparent pb-2 cursor-default transition-transform"
        >
          Yasith
        </motion.h1>
      </div>
    </motion.div>
  );
}