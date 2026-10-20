import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMusic, FaPause } from "react-icons/fa";

import Envelope from "./components/Envelope";
// import InvitationCard from "./components/InvitationCard"; // Commented out as requested
import TopNames from "./components/TopNames";
import VideoHero from "./components/VideoHero";
import DateDisplay from "./components/DateDisplay";
import Countdown from "./components/Countdown";
import Hero from "./components/Hero";
import Location from "./components/Location";
// import Gallery from "./components/Gallery";
import Schedule from "./components/Schedule";
import RSVP from "./components/RSVP";
import Footer from "./components/Footer";

export default function App() {
  const [stage, setStage] = useState("envelope"); // "envelope" -> "card" -> "website"
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(new Audio("/music/background.mp3"));
  const scrollIntervalRef = useRef(null);

  // Function to stop auto-scrolling upon user interaction
  const stopAutoScroll = useCallback(() => {
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
      scrollIntervalRef.current = null;
    }
  }, []);

  // Trigger auto-scroll specifically when entering the website stage
  const triggerAutoScroll = useCallback(() => {
    stopAutoScroll();
    setTimeout(() => {
      scrollIntervalRef.current = setInterval(() => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
          stopAutoScroll();
        } else {
          window.scrollBy({ top: 0.6, behavior: "auto" });
        }
      }, 25);
    }, 1500);
  }, [stopAutoScroll]);

  const handleOpenWebsite = useCallback(() => {
    setStage("website");
    audioRef.current.play().catch((e) => console.log("Audio play blocked:", e));
    setIsPlaying(true);
    triggerAutoScroll(); // Immediate gesture unlock for mobile browsers
  }, [triggerAutoScroll]);

  useEffect(() => {
    if (stage !== "website") return;

    triggerAutoScroll();

    window.addEventListener("wheel", stopAutoScroll, { passive: true });
    window.addEventListener("touchstart", stopAutoScroll, { passive: true });
    window.addEventListener("touchmove", stopAutoScroll, { passive: true });
    window.addEventListener("mousedown", stopAutoScroll, { passive: true });
    window.addEventListener("keydown", stopAutoScroll, { passive: true });

    return () => {
      stopAutoScroll();
      window.removeEventListener("wheel", stopAutoScroll);
      window.removeEventListener("touchstart", stopAutoScroll);
      window.removeEventListener("touchmove", stopAutoScroll);
      window.removeEventListener("mousedown", stopAutoScroll);
      window.removeEventListener("keydown", stopAutoScroll);
    };
  }, [stage, triggerAutoScroll, stopAutoScroll]);

  const handleOpenEnvelope = () => {
    setStage("card");
  };

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // 60-second auto-open timer for the card stage displaying card2.png
  useEffect(() => {
    if (stage !== "card") return;

    const timer = setTimeout(() => {
      handleOpenWebsite();
    }, 60000);

    return () => clearTimeout(timer);
  }, [stage, handleOpenWebsite]);

  return (
    <div
      className="
      min-h-screen
      bg-gradient-to-br from-gray-100 via-gray-50 to-slate-200
      font-serif
      text-gray-800
      flex justify-center
      selection:bg-[#7e445f]/20
      selection:text-[#7e445f]
      "
    >
      <AnimatePresence mode="wait">
        {stage === "envelope" && (
          <Envelope onOpen={handleOpenEnvelope} key="envelope" />
        )}

        {/* Card Stage displaying /photos/card2.png with border removed */}
        {stage === "card" && (
          <motion.div
            key="invitation-card-image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#7e445f]/60 backdrop-blur-md overflow-y-auto cursor-pointer"
            onClick={handleOpenWebsite}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="w-full max-w-lg rounded-2xl overflow-hidden shadow-[0_25px_70px_rgba(126,68,95,0.4)] bg-[#fcfbf9] relative my-auto flex flex-col items-center p-2 sm:p-4"
            >
              <img
                src="/photos/card2.png"
                alt="Wedding Invitation Card"
                className="w-full h-auto object-contain rounded-xl max-h-[80vh]"
              />
              <motion.div 
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mt-4 mb-2"
              >
                <span className="inline-block px-6 py-2.5 rounded-full bg-[#7e445f] text-white text-[10px] tracking-[0.25em] uppercase font-bold shadow-md hover:bg-[#6b3a51] transition-colors">
                  Click to Enter Website
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        )}

        {stage === "website" && (
          <motion.div
            key="main-content"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="
              w-full
              max-w-5xl
              mx-auto
              bg-white/95
              backdrop-blur-3xl
              min-h-screen
              shadow-[0_0_120px_rgba(126,68,95,0.15)]
              relative
              overflow-hidden
              border border-white
              pb-0
            "
          >
            {/* Music Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleMusic}
              className="
              fixed md:absolute
              top-6 right-6
              z-50
              bg-white
              backdrop-blur-xl
              p-4
              rounded-full
              text-[#7e445f]
              shadow-[0_8px_25px_rgba(126,68,95,0.3)]
              border border-gray-200
              transition-all
              "
            >
              {isPlaying ? <FaPause size={18} /> : <FaMusic size={18} />}
            </motion.button>

            {/* 1st Page Full-Screen Section for Video Hero across all devices */}
            <section
              className="
              min-h-screen
              w-full
              flex
              flex-col
              justify-center
              items-center
              overflow-hidden
              bg-gradient-to-b
              from-gray-200
              via-gray-100
              to-white
              pt-6
              pb-12
              "
            >
              <TopNames />
              <VideoHero />
            </section>

            <Countdown targetDate="2026-12-02T00:00:00" />

            <DateDisplay />

            <div className="space-y-4">
              <Hero />
              <Location />
            </div>

            {/* <Gallery /> */}
            <Schedule />
            <RSVP />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}