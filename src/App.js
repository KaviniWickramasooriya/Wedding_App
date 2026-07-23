import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMusic, FaPause } from "react-icons/fa";

import Envelope from "./components/Envelope";
import TopNames from "./components/TopNames";
import VideoHero from "./components/VideoHero";
import DateDisplay from "./components/DateDisplay";
import Countdown from "./components/Countdown";
import Hero from "./components/Hero";
import Location from "./components/Location";
import Gallery from "./components/Gallery";
import Schedule from "./components/Schedule";
import RSVP from "./components/RSVP";
import Footer from "./components/Footer";

export default function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(new Audio("/music/background.mp3"));

  const handleOpen = () => {
    setIsOpened(true);

    audioRef.current
      .play()
      .catch((e) => console.log("Audio play blocked:", e));

    setIsPlaying(true);
  };

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div
      className="
      min-h-screen
      bg-gradient-to-br from-lavender-50 via-white to-lavender-100
      font-serif
      text-gray-800
      flex justify-center
      selection:bg-lavender-200
      selection:text-lavender-900
      "
    >
      <AnimatePresence mode="wait">

        {!isOpened ? (
          <Envelope 
            onOpen={handleOpen} 
            key="envelope" 
          />

        ) : (

          <motion.div
            key="main-content"
            initial={{
              opacity: 0,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              w-full
              max-w-5xl
              mx-auto
              bg-white/80
              backdrop-blur-3xl
              min-h-screen
              shadow-[0_0_120px_rgba(145,109,177,0.15)]
              relative
              overflow-hidden
              border border-white
              pb-0
            "
          >

            {/* Music Button */}
            <motion.button
              whileHover={{
                scale: 1.1,
                rotate: 10,
              }}
              whileTap={{
                scale: 0.9,
              }}
              onClick={toggleMusic}
              className="
              fixed md:absolute
              top-6 right-6
              z-50
              bg-lavender-100/90
              backdrop-blur-xl
              p-4
              rounded-full
              text-lavender-700
              shadow-[0_8px_25px_rgba(145,109,177,0.25)]
              border border-lavender-200
              transition-all
              "
            >
              {isPlaying ? (
                <FaPause size={18} />
              ) : (
                <FaMusic size={18} />
              )}

            </motion.button>


            <section
              className="
              min-h-screen
              flex
              flex-col
              justify-center
              items-center
              overflow-hidden
              "
            >
              <TopNames />
              <VideoHero />
            </section>


            <DateDisplay />

            <Countdown 
              targetDate="2026-12-02T00:00:00" 
            />


            {/* Reduced spacing between Hero and Location */}
            <div className="space-y-4">

              <Hero />

              <Location />

            </div>


            <Gallery />

            <Schedule />

            <RSVP />

            <Footer />


          </motion.div>

        )}

      </AnimatePresence>

    </div>
  );
}