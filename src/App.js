import { useState, useRef, useEffect } from "react";
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

  // Enhanced Auto-scroll effect optimized for iPhone & Mobile deployment
  useEffect(() => {
    if (stage !== "website") return;

    let animationFrameId;
    let startTimeout;

    const startScroll = () => {
      startTimeout = setTimeout(() => {
        const step = () => {
          window.scrollBy({ top: 2, behavior: "auto" });
          animationFrameId = requestAnimationFrame(step);
        };
        animationFrameId = requestAnimationFrame(step);
      }, 1200);
    };

    startScroll();

    const stopAutoScroll = () => {
      if (startTimeout) clearTimeout(startTimeout);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };

    window.addEventListener("wheel", stopAutoScroll, { passive: true });
    window.addEventListener("touchstart", stopAutoScroll, { passive: true });
    window.addEventListener("mousedown", stopAutoScroll, { passive: true });
    window.addEventListener("scroll", stopAutoScroll, { passive: true });

    return () => {
      if (startTimeout) clearTimeout(startTimeout);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      window.removeEventListener("wheel", stopAutoScroll);
      window.removeEventListener("touchstart", stopAutoScroll);
      window.removeEventListener("mousedown", stopAutoScroll);
      window.removeEventListener("scroll", stopAutoScroll);
    };
  }, [stage]);

  const handleOpenEnvelope = () => {
    setStage("card");
  };

  const handleOpenWebsite = () => {
    setStage("website");
    audioRef.current.play().catch((e) => console.log("Audio play blocked:", e));
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

  // 60-second auto-open timer for the card stage displaying card.png
  useEffect(() => {
    if (stage !== "card") return;

    const timer = setTimeout(() => {
      handleOpenWebsite();
    }, 60000);

    return () => clearTimeout(timer);
  }, [stage]);

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
        {stage === "envelope" && (
          <Envelope onOpen={handleOpenEnvelope} key="envelope" />
        )}

        {/* Card Stage displaying /photos/card.png with 60s auto-open & click-to-enter */}
        {stage === "card" && (
          <motion.div
            key="invitation-card-image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-lavender-900/60 backdrop-blur-md overflow-y-auto cursor-pointer"
            onClick={handleOpenWebsite}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="w-full max-w-lg rounded-2xl overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.4)] border-4 border-[#b39263] bg-[#fcfbf9] relative my-auto flex flex-col items-center p-2 sm:p-4"
            >
              <img
                src="/photos/card.jpg"
                alt="Wedding Invitation Card"
                className="w-full h-auto object-contain rounded-xl max-h-[80vh]"
              />
              <motion.div 
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mt-4 mb-2"
              >
                <span className="inline-block px-6 py-2.5 rounded-full bg-lavender-700 text-white text-[10px] tracking-[0.25em] uppercase font-bold shadow-md">
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
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
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
              {isPlaying ? <FaPause size={18} /> : <FaMusic size={18} />}
            </motion.button>

            {/* 1st Page Section with Unified Background Color */}
            <section
              className="
              min-h-screen
              flex
              flex-col
              justify-center
              items-center
              overflow-hidden
              bg-gradient-to-b
              from-lavender-100/70
              via-lavender-200/50
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