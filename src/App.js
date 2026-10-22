import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Envelope from "./components/Envelope";
import HeartTransition from "./components/HeartTransition";
import MusicPlayerBar from "./components/MusicPlayerBar";
import TopNames from "./components/TopNames";
import VideoHero from "./components/VideoHero";
import DateDisplay from "./components/DateDisplay";
import Countdown from "./components/Countdown";
import Hero from "./components/Hero";
import Location from "./components/Location";
import Schedule from "./components/Schedule";
import RSVP from "./components/RSVP";
import Footer from "./components/Footer";

export default function App() {
  const [stage, setStage] = useState("envelope"); // "envelope" -> "card" -> "heart" -> "website"
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const audioRef = useRef(new Audio("/music/background.mp3"));
  const scrollIntervalRef = useRef(null);
  const resumeTimeoutRef = useRef(null);

  // Function to stop auto-scrolling
  const stopAutoScroll = useCallback(() => {
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
      scrollIntervalRef.current = null;
    }
  }, []);

  // Start smooth slow auto-scroll loop
  const startAutoScrollLoop = useCallback(() => {
    stopAutoScroll();
    scrollIntervalRef.current = setInterval(() => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
        stopAutoScroll();
      } else {
        window.scrollBy({ top: 1, behavior: "auto" });
      }
    }, 30);
  }, [stopAutoScroll]);

  // Handle manual interaction: stop scroll immediately, then wait 5 seconds to resume
  const handleUserScrollInteraction = useCallback(() => {
    stopAutoScroll();
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);

    resumeTimeoutRef.current = setTimeout(() => {
      startAutoScrollLoop();
    }, 5000);
  }, [stopAutoScroll, startAutoScrollLoop]);

  // Exactly 5-second wait on the 1st page before auto-scroll starts upon entering the website
  const triggerInitialAutoScroll = useCallback(() => {
    stopAutoScroll();
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);

    resumeTimeoutRef.current = setTimeout(() => {
      startAutoScrollLoop();
    }, 5000);
  }, [stopAutoScroll, startAutoScrollLoop]);

  const handleOpenWebsite = useCallback(() => {
    setStage("website");
    audioRef.current.play().catch((e) => console.log("Audio play blocked:", e));
    setIsPlaying(true);
    triggerInitialAutoScroll();
  }, [triggerInitialAutoScroll]);

  const handleStartHeartTransition = () => {
    setStage("heart");
    audioRef.current.play().catch((e) => console.log("Audio play blocked:", e));
    setIsPlaying(true);
  };

  useEffect(() => {
    if (stage !== "website") return;

    triggerInitialAutoScroll();

    window.addEventListener("wheel", handleUserScrollInteraction, { passive: true });
    window.addEventListener("touchstart", handleUserScrollInteraction, { passive: true });
    window.addEventListener("touchmove", handleUserScrollInteraction, { passive: true });
    window.addEventListener("mousedown", handleUserScrollInteraction, { passive: true });
    window.addEventListener("keydown", handleUserScrollInteraction, { passive: true });

    return () => {
      stopAutoScroll();
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
      window.removeEventListener("wheel", handleUserScrollInteraction);
      window.removeEventListener("touchstart", handleUserScrollInteraction);
      window.removeEventListener("touchmove", handleUserScrollInteraction);
      window.removeEventListener("mousedown", handleUserScrollInteraction);
      window.removeEventListener("keydown", handleUserScrollInteraction);
    };
  }, [stage, triggerInitialAutoScroll, handleUserScrollInteraction, stopAutoScroll]);

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

  const toggleMute = () => {
    const nextMutedState = !isMuted;
    audioRef.current.muted = nextMutedState;
    setIsMuted(nextMutedState);
  };

  useEffect(() => {
    if (stage !== "card") return;

    const timer = setTimeout(() => {
      handleStartHeartTransition();
    }, 15000);

    return () => clearTimeout(timer);
  }, [stage]);

  return (
    <div
      className="
      min-h-screen
      bg-gradient-to-br from-pink-50/50 via-gray-50 to-slate-100
      font-serif
      text-gray-800
      flex justify-center
      selection:bg-[#7e445f]/20
      selection:text-[#7e445f]
      relative
      "
    >
      {/* Global Screen-Fixed Music Toggle Bar with Mute and Play props */}
      {stage === "website" && (
        <MusicPlayerBar 
          isPlaying={isPlaying} 
          toggleMusic={toggleMusic} 
          isMuted={isMuted} 
          toggleMute={toggleMute} 
        />
      )}

      <AnimatePresence mode="wait">
        {stage === "envelope" && (
          <Envelope onOpen={handleOpenEnvelope} key="envelope" />
        )}

        {stage === "card" && (
          <motion.div
            key="invitation-card-image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#7e445f]/60 backdrop-blur-md overflow-y-auto cursor-pointer"
            onClick={handleStartHeartTransition}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="w-full max-w-lg rounded-2xl overflow-hidden shadow-[0_25px_70px_rgba(126,68,95,0.4)] bg-[#fcfbf9] relative my-auto flex flex-col items-center p-0"
            >
              <img
                src="/photos/card2.png"
                alt="Wedding Invitation Card"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="w-full h-auto object-contain rounded-xl max-h-[85vh]"
              />
              <motion.div 
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mt-0 mb-0"
              >
                {/* <span className="inline-block px-6 py-2.5 rounded-full bg-[#7e445f] text-white text-[10px] tracking-[0.25em] uppercase font-bold shadow-md hover:bg-[#6b3a51] transition-colors">
                  Click to Enter Website
                </span> */}
              </motion.div>
            </motion.div>
          </motion.div>
        )}

        {stage === "heart" && (
          <HeartTransition onComplete={handleOpenWebsite} key="heart-transition" />
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
              from-pink-50/30
              via-white
              to-gray-50
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

            <Schedule />
            <RSVP />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}