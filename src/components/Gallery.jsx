import { motion } from 'framer-motion';

export default function Gallery() {
  const images = ["/couple-1.jpg", "/couple-2.jpg", "/couple-1.jpg"];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="py-16 md:py-28 bg-white text-center"
    >
      <h3 className="font-cursive text-5xl md:text-7xl text-blush-500 mb-12 md:mb-20 drop-shadow-sm">Ever After Begins</h3>
      
      <div className="flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-visible hide-scrollbar gap-6 md:gap-10 px-6 md:px-12 snap-x snap-mandatory max-w-6xl mx-auto pb-8">
        {images.map((src, index) => (
          <motion.img 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -15, scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            key={index}
            src={src} 
            alt={`Gallery ${index}`} 
            // Borderless with rich shadows
            className="w-72 md:w-full h-[24rem] md:h-[32rem] object-cover rounded-3xl shadow-[0_15px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_25px_50px_rgba(208,106,142,0.3)] snap-center flex-shrink-0 cursor-pointer"
          />
        ))}
      </div>
    </motion.div>
  );
}