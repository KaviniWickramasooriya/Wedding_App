import { motion } from 'framer-motion';

export default function Envelope({ onOpen }) {
  return (
    <motion.div 
      exit={{ y: "-100%", opacity: 0, scale: 0.9 }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }} 
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-blush-50 via-[#fcf9f8] to-[#f4ebe9] cursor-pointer overflow-hidden"
      onClick={onOpen}
    >
      <motion.div 
        whileHover={{ scale: 1.03, y: -10 }}
        whileTap={{ scale: 0.95 }}
        // Removed borders, added heavy cinematic shadow
        className="relative w-80 h-56 md:w-[600px] md:h-[400px] bg-white shadow-[0_30px_60px_rgba(208,106,142,0.15)] rounded-lg md:rounded-2xl flex items-center justify-center transition-all duration-300"
      >
        <div className="absolute top-0 left-0 w-full overflow-hidden h-1/2 pointer-events-none rounded-t-lg md:rounded-t-2xl">
          <div className="absolute top-[-60%] left-1/2 w-[120%] h-[200%] bg-[#faf7f5] shadow-sm transform -translate-x-1/2 rotate-45 origin-center rounded-br-[40px] md:rounded-br-[60px]"></div>
        </div>
        
        <div className="text-center z-10 flex flex-col items-center mt-8 md:mt-12">
          <motion.div 
            animate={{ scale: [1, 1.08, 1], boxShadow: ["0 5px 15px rgba(185,28,28,0.3)", "0 10px 30px rgba(185,28,28,0.5)", "0 5px 15px rgba(185,28,28,0.3)"] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="relative w-20 h-20 md:w-32 md:h-32 bg-gradient-to-br from-red-800 to-red-900 rounded-full flex items-center justify-center mb-6 md:mb-10"
          >
            <div className="absolute inset-2 md:inset-3 border-2 border-red-400/30 rounded-full"></div>
            <span className="text-white font-cursive text-3xl md:text-5xl drop-shadow-md">A&Y</span>
          </motion.div>
          
          <p className="font-serif italic text-gray-500 tracking-[0.3em] text-[10px] md:text-sm uppercase opacity-70">
            Tap to Open
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}