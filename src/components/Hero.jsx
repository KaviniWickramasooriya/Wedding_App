import { motion } from 'framer-motion';

export default function Hero({ guestName }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="px-6 pt-12 md:pt-20 pb-12 md:pb-20 text-center bg-white"
    >
      <div className="max-w-3xl mx-auto">     
        <motion.div 
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          // Borderless with a vibrant soft shadow
          className="w-72 h-72 md:w-[28rem] md:h-[28rem] mx-auto rounded-full overflow-hidden shadow-[0_0_50px_rgba(208,106,142,0.4)] mb-12 md:mb-20"
        >
          <img 
            src="/couple-1.jpg" 
            alt="Anu and Yasith" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        <p className="text-base md:text-xl italic text-gray-600 mb-8 px-2 md:px-8 leading-loose md:leading-loose font-light">
          With hearts full of love and happiness, we are delighted to announce our wedding. We would be honored to have
        </p>
        
        <motion.h2 
          whileHover={{ scale: 1.05 }}
          className="font-cursive text-5xl md:text-7xl text-blush-500 mb-6 drop-shadow-sm cursor-default"
        >
          {guestName}
        </motion.h2>
        
        <p className="text-base md:text-xl italic text-gray-600 leading-loose md:leading-loose px-2 md:px-8 font-light">
          join us as we celebrate this precious milestone.
        </p>
      </div>
    </motion.div>
  );
}