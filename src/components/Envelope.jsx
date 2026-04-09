import { motion } from 'framer-motion';

export default function Envelope({ onOpen }) {
  return (
    <motion.div 
      exit={{ y: "-100%", opacity: 0, scale: 0.9 }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }} 
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-lavender-50 via-[#fcfbfe] to-[#f5f3f8] cursor-pointer overflow-hidden"
      onClick={onOpen}
    >
      <motion.div 
        whileHover={{ scale: 1.04, y: -12 }}
        whileTap={{ scale: 0.96 }}
        className="relative w-[85vw] h-60 max-w-[600px] md:h-[400px] bg-white shadow-[0_40px_80px_rgba(145,109,177,0.15)] rounded-xl md:rounded-3xl flex items-center justify-center transition-all duration-500 border border-lavender-50/50"
      >
        <div className="absolute top-0 left-0 w-full overflow-hidden h-1/2 pointer-events-none rounded-t-xl md:rounded-t-3xl">
          <div className="absolute top-[-60%] left-1/2 w-[120%] h-[200%] bg-[#faf9fc] shadow-sm transform -translate-x-1/2 rotate-45 origin-center rounded-br-[40px] md:rounded-br-[60px] border-b border-r border-lavender-100/50"></div>
        </div>
        
        <div className="text-center z-10 flex flex-col items-center mt-12 md:mt-16">
          <motion.div 
            animate={{ scale: [1, 1.06, 1], boxShadow: ["0 8px 20px rgba(120,83,150,0.2)", "0 15px 35px rgba(120,83,150,0.4)", "0 8px 20px rgba(120,83,150,0.2)"] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="relative w-24 h-24 md:w-36 md:h-36 bg-gradient-to-br from-lavender-600 to-lavender-800 rounded-full flex items-center justify-center mb-6 md:mb-10"
          >
            <div className="absolute inset-2 md:inset-3 border-[1.5px] border-lavender-200/40 rounded-full"></div>
            <span className="text-white font-cursive text-4xl md:text-6xl drop-shadow-lg tracking-wide">A&Y</span>
          </motion.div>
          
          <p className="font-serif italic text-lavender-400/80 tracking-[0.35em] text-[11px] md:text-sm uppercase font-semibold">
            Tap to Open
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}