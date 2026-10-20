import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaDirections } from 'react-icons/fa';

export default function Location() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="
        pt-12
        pb-24
        px-6 
        md:px-12 
        bg-gradient-to-b 
        from-white 
        via-pink-50/30 
        to-purple-100/50
        flex 
        flex-col 
        items-center 
        relative 
        overflow-hidden
      "
    >

      {/* Decorative ambient background glow with pink & purple touch */}
      <div className="
        absolute 
        top-1/2 
        left-1/2 
        -translate-x-1/2 
        -translate-y-1/2 
        w-[70%] 
        h-[70%] 
        bg-gradient-to-tr from-pink-300/15 via-purple-300/15 to-lavender-300/15 
        rounded-full 
        blur-[140px] 
        pointer-events-none 
        -z-0
      " />


      <div className="
        relative 
        z-10 
        w-full 
        max-w-xl 
        flex 
        flex-col 
        items-center
      ">


        {/* Section Header */}
        <div className="text-center mb-12">

          <motion.p 
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="
              font-cursive 
              text-4xl 
              md:text-5xl
              text-[#d4af37] 
              mb-1 
              drop-shadow-sm
            "
          >
            How to find us
          </motion.p>


          <motion.h2 
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="
              font-serif 
              text-3xl 
              md:text-4xl 
              text-[#7e445f] 
              tracking-[0.2em] 
              uppercase
              font-light
            "
          >
            The Location
          </motion.h2>


          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 90 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="
              h-[1px] 
              bg-[#d4af37] 
              mx-auto 
              mt-4 
              rounded-full
            " 
          />

        </div>


        {/* Location Card with Luxury Glassmorphism */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          whileHover={{ y: -4 }}
          transition={{ type:"spring", stiffness:300, damping:20 }}
          className="
            w-full 
            bg-white/80 
            backdrop-blur-xl 
            rounded-[2.5rem] 
            overflow-hidden 
            shadow-[0_25px_60px_rgba(126,68,95,0.15)] 
            border border-white/80
            flex 
            flex-col
          "
        >

          {/* Map Container precisely centered on Waters Edge */}
          <div className="w-full h-72 bg-purple-100/50 relative overflow-hidden">

            <iframe 
              src="https://maps.google.com/maps?q=Waters%20Edge,%20Battaramulla&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{border:0}}
              allowFullScreen=""
              loading="eager"
              referrerPolicy="no-referrer-when-downgrade"
              title="Waters Edge Map"
              className="grayscale-[20%] contrast-[105%]"
            />

          </div>


          <div className="
            p-8
            md:p-12
            text-center 
            flex 
            flex-col 
            items-center 
            bg-gradient-to-t 
            from-pink-50/40 
            to-white/90
          ">

            <div className="
              w-12 
              h-12 
              rounded-2xl 
              bg-[#7e445f]/10 
              text-[#7e445f] 
              flex 
              items-center 
              justify-center 
              shadow-sm
              border border-[#7e445f]/20
              mb-4
            ">
              <FaMapMarkerAlt size={20}/>
            </div>


            <h4 className="
              font-serif 
              text-xl 
              md:text-2xl 
              text-[#7e445f] 
              font-normal 
              mb-1
            ">
              Eagle Hall
            </h4> 


            <p className="
              font-serif 
              text-2xl
              md:text-2xl 
              text-[#b8973c] 
              mb-2 
              italic
            ">
              Waters Edge, Colombo
            </p>


            <p className="
              text-xs 
              font-serif 
              text-gray-500 
              mb-8 
              tracking-[0.15em]
            ">
              316 Ethul Kotte Road, Battaramulla
            </p>


            <motion.a 
              whileHover={{ scale: 1.05, backgroundColor: "#6b3a51" }}
              whileTap={{ scale: 0.95 }}
              href="https://maps.app.goo.gl/miNKr8uEbpws7HCaA"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex 
                items-center 
                gap-3 
                px-8 
                py-3.5 
                rounded-full 
                bg-[#7e445f] 
                text-white 
                text-[10px] 
                tracking-[0.25em] 
                uppercase 
                font-bold 
                shadow-[0_10px_25px_rgba(126,68,95,0.3)]
                transition-all
              "
            >
              <FaDirections size={14}/>
              Get Directions 
            </motion.a>


          </div>

        </motion.div>


      </div>

    </motion.div>
  );
}