import { motion } from 'framer-motion';

export default function Hero({ guestName }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className="px-6 pt-16 md:pt-28 pb-16 md:pb-28 text-center bg-transparent"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center">     
        <motion.div 
          whileHover={{ scale: 1.03, rotate: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-80 h-80 md:w-[32rem] md:h-[32rem] mx-auto rounded-full overflow-hidden shadow-[0_0_80px_rgba(145,109,177,0.25)] border-4 border-white mb-16 md:mb-24"
        >
          <img 
            src="/couple-1.jpg" 
            alt="Anu and Yasith" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
          />
        </motion.div>

        <p className="text-lg md:text-2xl italic text-gray-500 mb-10 px-4 md:px-12 leading-loose md:leading-[2.5] font-light max-w-2xl">
          With hearts full of love and happiness, we are delighted to announce our wedding. We would be honored to have
        </p>
        
        <motion.h2 
          whileHover={{ scale: 1.02 }}
          className="font-cursive text-6xl md:text-8xl text-lavender-500 mb-10 drop-shadow-sm cursor-default px-4"
        >
          {guestName}
        </motion.h2>
        
        <p className="text-lg md:text-2xl italic text-gray-500 leading-loose md:leading-[2.5] px-4 md:px-12 font-light max-w-2xl">
          join us as we celebrate this precious milestone.
        </p>
      </div>
    </motion.div>
  );
}