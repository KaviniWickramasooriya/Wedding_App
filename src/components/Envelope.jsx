import React from 'react';
import { motion } from 'framer-motion';

export default function Envelope({ onOpen }) {
  const urlParams = new URLSearchParams(window.location.search);
  const guestName = urlParams.get('guest') || 'Dear Guest';

  // CSS for the curtain folds/pleats to create a 3D fabric effect
  const pleatStyle = {
    backgroundImage: 'repeating-linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.25) 25%, rgba(0,0,0,0) 50%, rgba(255,255,255,0.08) 75%, rgba(0,0,0,0) 100%)',
    backgroundSize: '120px 100%' // Width of each curtain fold
  };

  // Slower, heavier easing curve for the curtain opening
  const curtainTransition = { 
    duration: 2.0, // Increased duration for a much slower opening
    ease: [0.65, 0, 0.35, 1] 
  };

  return (
    <motion.div
      // Kept opaque longer to match the slow curtain speed
      exit={{ opacity: 1, transition: { duration: 2.5 } }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-transparent"
    >
      {/* --- LEFT CURTAIN HALF --- */}
      <motion.div
        exit={{ x: '-100%', transition: curtainTransition }}
        className="absolute top-0 left-0 w-1/2 h-full bg-lavender-700 shadow-[15px_0_40px_rgba(0,0,0,0.4)] z-10 overflow-hidden"
      >
        {/* Fabric Texture & Lighting */}
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-lavender-300 via-transparent to-transparent pointer-events-none" />
        {/* Vertical Folds/Pleats */}
        <div className="absolute inset-0 pointer-events-none" style={pleatStyle} />
        {/* Edge Highlight */}
        <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-transparent via-lavender-300 to-transparent opacity-50" />
      </motion.div>

      {/* --- RIGHT CURTAIN HALF --- */}
      <motion.div
        exit={{ x: '100%', transition: curtainTransition }}
        className="absolute top-0 right-0 w-1/2 h-full bg-lavender-700 shadow-[-15px_0_40px_rgba(0,0,0,0.4)] z-10 overflow-hidden"
      >
        {/* Fabric Texture & Lighting */}
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-lavender-300 via-transparent to-transparent pointer-events-none" />
        {/* Vertical Folds/Pleats */}
        <div className="absolute inset-0 pointer-events-none" style={pleatStyle} />
        {/* Edge Highlight */}
        <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-transparent via-lavender-300 to-transparent opacity-50" />
      </motion.div>

      {/* --- CENTRAL CONTENT --- */}
      <motion.div 
        // The content fades out slightly slower now (0.6s) but still vanishes before the slow curtains fully open
        exit={{ opacity: 0, scale: 0.95, filter: "blur(12px)", transition: { duration: 0.6, ease: "easeOut" } }}
        className="relative z-20 flex flex-col items-center text-center px-6 w-full max-w-md pointer-events-auto"
      >
        
        {/* Heart Icon */}
        <motion.div 
          initial={{ scale: 0, rotate: -15 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
          className="mb-6 text-[#d4af37] drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9">
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
        </motion.div>

        {/* Guest Greeting */}
        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif italic text-2xl text-lavender-100 mb-2 drop-shadow-md"
        >
          {guestName},
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="tracking-[0.35em] text-xs uppercase text-lavender-300 mb-10"
        >
          You're Invited
        </motion.p>

        {/* Names */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center mb-10"
        >
          <h1 className="font-serif text-5xl md:text-6xl tracking-[0.2em] text-white mb-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
            ANU
          </h1>
          <span className="font-cursive text-4xl md:text-5xl text-[#d4af37] my-3 drop-shadow-sm">
            and
          </span>
          <h1 className="font-serif text-5xl md:text-6xl tracking-[0.2em] text-white mt-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
            YASITH
          </h1>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="font-serif text-[15px] text-lavender-100 mb-12 tracking-widest font-light opacity-90"
        >
          Request the honour of your presence
        </motion.p>

        {/* Glassmorphism Open Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          whileHover={{ scale: 1.05, backgroundColor: "rgba(212, 175, 55, 0.15)" }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpen}
          className="px-8 py-3.5 rounded-full bg-white/5 backdrop-blur-md border border-[#d4af37]/60 text-[#d4af37] tracking-[0.2em] text-xs font-semibold uppercase flex items-center justify-center gap-3 transition-all w-64 shadow-[0_0_20px_rgba(212,175,55,0.15)] hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:border-[#d4af37]"
        >
          {/* Envelope Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
          Open Invitation
        </motion.button>

        {/* Pulse Indicator */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 2, ease: "easeInOut" }}
          className="mt-8 text-[10px] tracking-[0.4em] text-lavender-300 uppercase"
        >
          Tap to Open
        </motion.p>

      </motion.div>
    </motion.div>
  );
}