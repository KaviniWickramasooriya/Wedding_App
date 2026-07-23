import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaDirections } from 'react-icons/fa';

export default function Location() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}

      className="
        pt-8
        pb-24
        px-6 
        md:px-12 
        bg-gradient-to-b 
        from-white 
        via-gray-200 
        to-[#e2e4e6] 
        flex 
        flex-col 
        items-center 
        relative 
        overflow-hidden
      "
    >

      {/* Decorative ambient background glow */}
      <div className="
        absolute 
        top-1/2 
        left-1/2 
        -translate-x-1/2 
        -translate-y-1/2 
        w-[70%] 
        h-[70%] 
        bg-lavender-300/25 
        rounded-full 
        blur-[120px] 
        pointer-events-none 
        -z-0
      " />


      <div className="
        relative 
        z-10 
        w-full 
        max-w-lg 
        flex 
        flex-col 
        items-center
      ">


        {/* Section Header */}
        <div className="text-center mb-16">

          <p className="
            font-cursive 
            text-4xl 
            text-[#d4af37] 
            mb-2 
            drop-shadow-sm
          ">
            How to find us
          </p>


          <h2 className="
            font-serif 
            text-3xl 
            md:text-5xl 
            text-lavender-700 
            tracking-[0.2em] 
            uppercase
          ">
            The Location
          </h2>


          <div className="
            h-[2px] 
            w-20 
            bg-[#d4af37]/60 
            mx-auto 
            mt-4 
            rounded-full
          " />

        </div>


        {/* Location Card */}
        <motion.div 
          whileHover={{ y: -5 }}
          transition={{ type:"spring", stiffness:300, damping:20 }}
          className="
            w-full 
            bg-white/90 
            backdrop-blur-md 
            rounded-[2.5rem] 
            overflow-hidden 
            shadow-[0_20px_50px_rgba(145,109,177,0.15)] 
            border-4 
            border-white 
            flex 
            flex-col
          "
        >

          <div className="w-full h-72 bg-gray-200 relative">

            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.91681745428!2d79.90799197475685!3d6.89973809310014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25a2b3b789945%3A0xc3b84497be4f57c!2sWaters%20Edge!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{border:0}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Waters Edge Map"
            />

          </div>


          <div className="
            p-10 
            text-center 
            flex 
            flex-col 
            items-center 
            bg-gradient-to-t 
            from-lavender-50/50 
            to-white
          ">

            <div className="
              w-14 
              h-14 
              rounded-2xl 
              bg-lavender-100 
              text-lavender-600 
              flex 
              items-center 
              justify-center 
              shadow-inner 
              mb-4
            ">
              <FaMapMarkerAlt size={24}/>
            </div>


            <h4 className="
              font-serif 
              text-2xl 
              md:text-3xl 
              text-lavender-700 
              font-bold 
              mb-1
            ">
              Eagle Banquet Hall
            </h4>


            <p className="
              font-serif 
              text-lg 
              text-[#d4af37] 
              mb-2 
              italic
            ">
              Waters Edge
            </p>


            <p className="
              text-sm 
              font-serif 
              text-gray-500 
              mb-8 
              tracking-wide
            ">
              316 Ethul Kotte Road, Battaramulla
            </p>


            <motion.a 
              whileHover={{scale:1.05, backgroundColor:"#785396"}}
              whileTap={{scale:0.95}}
              href="https://maps.app.goo.gl/ZvE6k7QgJPRHkpvk6"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex 
                items-center 
                gap-3 
                px-10 
                py-4 
                rounded-full 
                bg-lavender-600 
                text-white 
                text-xs 
                tracking-[0.2em] 
                uppercase 
                font-semibold 
                shadow-[0_10px_25px_rgba(109,74,138,0.3)]
              "
            >
              <FaDirections size={15}/>
              Get Directions
            </motion.a>


          </div>

        </motion.div>


      </div>

    </motion.div>
  );
}