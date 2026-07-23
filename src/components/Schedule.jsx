import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaUserTie, 
  FaRing, 
  FaUtensils, 
  FaGlassCheers, 
  FaCameraRetro, 
  FaCalendarPlus,
  FaCarSide
} from 'react-icons/fa';

export default function Schedule() {

  const events = [
    { 
      time: "8:45 AM", 
      title: "Groom & Bride Entourage Arrival", 
      icon: <FaUserTie size={18} /> 
    },
    { 
      time: "9:30 AM", 
      title: "Poruwa Ceremony & Auspicious Rituals", 
      icon: <FaRing size={18} /> 
    },
    { 
      time: "11:00 AM", 
      title: "Signing of the Register & Family Photos", 
      icon: <FaCameraRetro size={18} /> 
    },
    { 
      time: "12:00 PM", 
      title: "Wedding Reception & Cocktail Hour", 
      icon: <FaGlassCheers size={18} /> 
    },
    { 
      time: "12:45 PM", 
      title: "Grand Wedding Lunch Buffet", 
      icon: <FaUtensils size={18} /> 
    },
    { 
      time: "3:45 PM", 
      title: "Going Away", 
      icon: <FaCarSide size={18} /> 
    }
  ];


  const calendarLink = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+of+Anu+and+Yasith&dates=20261202T093000Z/20261202T163000Z&details=Join+us+to+celebrate+our+wedding+at+Eagle+Banquet+Hall,+Water's+Edge!&location=Eagle+Banquet+Hall,+Water's+Edge,+Battaramulla";


  return (
    <div className="
      py-16 
      md:py-28 
      px-6 
      bg-gradient-to-b 
      from-[#e2e4e6] 
      via-lavender-50 
      to-white 
      relative 
      overflow-hidden
    ">

      {/* Background Decorative Glow */}
      <div className="
        absolute 
        top-1/2 
        left-1/2 
        -translate-x-1/2 
        -translate-y-1/2 
        w-[150%] 
        h-[150%] 
        bg-lavender-200/20 
        rounded-full 
        blur-[100px] 
        pointer-events-none 
        -z-0
      " />


      <div className="max-w-3xl mx-auto relative z-10">


        {/* Header */}
        <motion.div 
          initial={{ opacity:0, y:-20 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.8 }}
          className="text-center mb-12 md:mb-16"
        >

          <p className="
            font-cursive 
            text-3xl 
            md:text-4xl 
            text-[#d4af37] 
            mb-2
          ">
            Order of Events
          </p>


          <h2 className="
            font-serif 
            text-4xl 
            md:text-5xl 
            text-lavender-700 
            tracking-[0.2em] 
            uppercase
          ">
            The Schedule
          </h2>


          <div className="
            h-[2px] 
            w-16 
            bg-[#d4af37]/60 
            mx-auto 
            mt-4 
            rounded-full
          " />

        </motion.div>



        {/* Timeline Cards */}
        <div className="space-y-3 md:space-y-4">

          {events.map((item,index)=>(

            <motion.div

              initial={{opacity:0,x:-30}}
              whileInView={{opacity:1,x:0}}
              whileHover={{
                scale:1.01,
                y:-2,
                backgroundColor:"rgba(255,255,255,0.95)"
              }}
              viewport={{once:true}}
              transition={{
                type:"spring",
                stiffness:80,
                damping:15,
                delay:index*0.1
              }}

              key={index}

              className="
                bg-white/80 
                backdrop-blur-md 
                px-5 
                py-4
                rounded-[1.5rem]
                shadow-[0_10px_25px_rgba(145,109,177,0.1)]
                border 
                border-white/90
                flex 
                flex-col 
                md:flex-row 
                md:justify-between 
                items-center 
                text-center 
                md:text-left
                cursor-default 
                group 
                transition-all
                duration-300
                relative
                overflow-hidden
              "
            >


              {/* Gold hover line */}
              <div className="
                absolute 
                left-0 
                top-0 
                bottom-0 
                w-1 
                bg-[#d4af37]
                opacity-0
                group-hover:opacity-100
                transition-opacity
              "/>



              {/* Time */}
              <div className="
                flex 
                items-center 
                gap-4 
                mb-2 
                md:mb-0
              ">

                <div className="
                  w-10 
                  h-10 
                  rounded-xl 
                  bg-lavender-100 
                  text-lavender-600
                  flex 
                  items-center 
                  justify-center
                  shadow-inner
                  group-hover:bg-lavender-700
                  group-hover:text-white
                  transition-all
                ">
                  {item.icon}
                </div>


                <span className="
                  text-lavender-700
                  font-semibold
                  text-xl
                  md:text-2xl
                  font-serif
                  tracking-wide
                ">
                  {item.time}
                </span>

              </div>



              {/* Title */}
              <span className="
                text-gray-600
                tracking-wide
                text-base
                md:text-lg
                font-light
                font-serif
              ">
                {item.title}
              </span>


            </motion.div>

          ))}

        </div>




        {/* Calendar Button */}
        <motion.div
          initial={{opacity:0,y:20}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{delay:0.6,duration:0.8}}
          className="mt-12 text-center"
        >

          <motion.a
            whileHover={{scale:1.03}}
            whileTap={{scale:0.97}}
            href={calendarLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex 
              items-center 
              justify-center 
              gap-3
              w-full
              md:w-auto
              px-10
              py-4
              bg-white/90
              backdrop-blur-md
              text-lavender-700
              rounded-full
              text-xs
              uppercase
              tracking-[0.2em]
              font-semibold
              shadow-[0_10px_30px_rgba(145,109,177,0.12)]
              border
              border-lavender-200
            "
          >

            <FaCalendarPlus 
              size={15} 
              className="text-[#d4af37]"
            />

            Add to Google Calendar

          </motion.a>

        </motion.div>


      </div>

    </div>
  );
}