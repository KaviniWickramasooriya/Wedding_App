import { motion } from 'framer-motion';

export default function Gallery() {
  const images = ["/couple-1.jpg", "/couple-2.jpg", "/couple-1.jpg"];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className="py-20 md:py-32 bg-transparent text-center"
    >
      <h3 className="font-cursive text-6xl md:text-8xl text-lavender-500 mb-16 md:mb-24 drop-shadow-sm">Ever After Begins</h3>
      
      <div className="flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-visible hide-scrollbar gap-8 md:gap-12 px-8 md:px-16 snap-x snap-mandatory max-w-7xl mx-auto pb-10">
        {images.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="snap-center flex-shrink-0 w-[80vw] md:w-full"
          >
            <motion.img 
              whileHover={{ y: -15, scale: 1.03 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              src={src} 
              alt={`Gallery ${index}`} 
              className="w-full h-[28rem] md:h-[40rem] object-cover rounded-[2.5rem] shadow-[0_20px_40px_rgba(145,109,177,0.15)] hover:shadow-[0_30px_60px_rgba(145,109,177,0.3)] cursor-pointer border border-white/50"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}