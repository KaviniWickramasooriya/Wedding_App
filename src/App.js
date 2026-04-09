import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMusic, FaPause } from 'react-icons/fa';

import Envelope from './components/Envelope';
import TopNames from './components/TopNames';
import VideoHero from './components/VideoHero';
import DateDisplay from './components/DateDisplay';
import Countdown from './components/Countdown';
import Hero from './components/Hero';
import Location from './components/Location';
import Gallery from './components/Gallery';
import Schedule from './components/Schedule';
import RSVP from './components/RSVP';

export default function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio('/music.mp3')); 

  const urlParams = new URLSearchParams(window.location.search);
  const guestName = urlParams.get('guest') || 'Dear Guest';

  const handleOpen = () => {
    setIsOpened(true);
    audioRef.current.play().catch(e => console.log("Audio play blocked by browser:", e));
    setIsPlaying(true);
  };

  const toggleMusic = () => {
    if (isPlaying) { audioRef.current.pause(); } 
    else { audioRef.current.play(); }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fbfbfe] via-white to-lavender-50 font-serif text-gray-800 flex justify-center selection:bg-lavender-200 selection:text-lavender-900">
      <AnimatePresence>
        {!isOpened ? (
          <Envelope onOpen={handleOpen} />
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-5xl mx-auto bg-white/60 backdrop-blur-3xl min-h-screen shadow-[0_0_120px_rgba(145,109,177,0.08)] relative pb-2 md:my-10 md:rounded-[4rem] overflow-hidden border border-white/50"
          >
            <motion.button 
              whileHover={{ scale: 1.1, rotate: 10, backgroundColor: "#f8f7fb" }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleMusic}
              className="fixed md:absolute top-6 right-6 z-50 bg-white/90 backdrop-blur-xl p-4 rounded-full text-lavender-500 shadow-[0_8px_25px_rgba(145,109,177,0.2)] transition-all border border-lavender-50"
            >
              {isPlaying ? <FaPause size={18} /> : <FaMusic size={18} />}
            </motion.button>
            
            <TopNames /> 
            <VideoHero />
            <DateDisplay />
            <Countdown targetDate="2026-12-02T00:00:00" />
            <Hero guestName={guestName} />
            <Location />
            <Gallery />
            <Schedule />
            <RSVP />
            
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}