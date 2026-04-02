
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
        >
          <video 
            autoPlay 
            muted 
            playsInline
            onEnded={() => setIsVisible(false)}
            className="w-full h-full object-cover"
          >
            <source 
              src="https://raw.githubusercontent.com/SkrionMedia/skirion/main/Crear_una_animacin_cinematogrf_Kling_30__81132.mp4" 
              type="video/mp4" 
            />
            Your browser does not support the video tag.
          </video>
          
          {/* Skip button for accessibility/UX */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            onClick={() => setIsVisible(false)}
            className="absolute bottom-8 right-8 px-6 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-[10px] uppercase tracking-[0.4em] text-white font-black transition-all z-10"
          >
            Saltar Intro
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
