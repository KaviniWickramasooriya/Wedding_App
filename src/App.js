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
    <div className="min-h-screen bg-gradient-to-br from-[#fdfafb] via-white to-blush-50 font-serif text-gray-800 flex justify-center selection:bg-blush-200 selection:text-blush-900">
      <AnimatePresence>
        {!isOpened ? (
          <Envelope onOpen={handleOpen} />
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            // Softened the main container shadow to be almost invisible
            className="w-full max-w-5xl mx-auto bg-white/40 backdrop-blur-3xl min-h-screen shadow-[0_0_100px_rgba(208,106,142,0.05)] relative pb-20 md:my-10 md:rounded-[4rem] overflow-hidden"
          >
            <motion.button 
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleMusic}
              className="fixed md:absolute top-6 right-6 z-50 bg-white/80 backdrop-blur-xl p-4 rounded-full text-blush-500 shadow-[0_8px_20px_rgba(208,106,142,0.2)] transition-colors"
            >
              {isPlaying ? <FaPause size={16} /> : <FaMusic size={16} />}
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