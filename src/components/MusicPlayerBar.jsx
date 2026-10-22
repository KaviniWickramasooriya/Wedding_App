import React from "react";
import { motion } from "framer-motion";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from "react-icons/fa";

export default function MusicPlayerBar({ isPlaying, toggleMusic, isMuted, toggleMute }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="fixed bottom-6 right-6 z-50 flex items-center"
    >
      <div className="flex items-center justify-between gap-4 px-5 py-2.5 rounded-full bg-[#fcfbf9]/95 backdrop-blur-md border border-[#d4af37]/40 shadow-[0_8px_25px_rgba(126,68,95,0.2)] text-[#7e445f] text-xs font-serif tracking-widest uppercase">
        {/* Left Side: Play / Pause Button */}
        <button
          onClick={toggleMusic}
          className="hover:text-[#d4af37] transition-colors cursor-pointer flex items-center justify-center p-1"
          aria-label={isPlaying ? "Pause Music" : "Play Music"}
        >
          {isPlaying ? <FaPause size={11} /> : <FaPlay size={11} />}
        </button>

        {/* Center: Music Word and Animated Sound Wave Bars */}
        {/* <div className="flex items-center gap-2.5 px-3 border-x border-gray-300/60">
          <span className="font-semibold text-gray-800 text-[11px] tracking-[0.2em]">MUSIC</span>
          <div className="flex items-end gap-0.5 h-3 w-3">
            {[0.4, 0.8, 0.5].map((scale, i) => (
              <motion.span
                key={i}
                animate={
                  isPlaying && !isMuted
                    ? { scaleY: [0.3, 1, 0.3] }
                    : { scaleY: 0.3 }
                }
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
                className="w-[2px] bg-[#7e445f] rounded-full h-full origin-bottom"
              />
            ))}
          </div>
        </div> */}

        {/* Right Side: Mute / Unmute Button */}
        <button
          onClick={toggleMute}
          className="hover:text-[#d4af37] transition-colors cursor-pointer flex items-center justify-center p-1"
          aria-label={isMuted ? "Unmute Audio" : "Mute Audio"}
        >
          {isMuted ? <FaVolumeMute size={13} /> : <FaVolumeUp size={13} />}
        </button>
      </div>
    </motion.div>
  );
}