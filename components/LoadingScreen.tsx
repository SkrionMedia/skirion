
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';

const LoadingScreen: React.FC = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window !== 'undefined') {
      return !sessionStorage.getItem('skirion_intro_played');
    }
    return true;
  });
  const [needsInteraction, setNeedsInteraction] = useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const handleFinish = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('skirion_intro_played', 'true');
    }
    setIsVisible(false);
  };

  useEffect(() => {
    let mounted = true;

    if (!isVisible) return;

    // Fallback timeout to ensure we don't get stuck if video fails completely
    const timer = setTimeout(() => {
      if (mounted) handleFinish();
    }, 12000);

    return () => {
      mounted = false;
      clearTimeout(timer);
    };
  }, [isVisible]);

  const handleCanPlay = async () => {
    if (videoRef.current) {
      try {
        // Force muted to ensure absolute automatic playback without user interaction
        videoRef.current.muted = true;
        await videoRef.current.play();
      } catch (error) {
        console.warn("Autoplay failed:", error);
        // If even muted fails (rare), then we show interaction
        setNeedsInteraction(true);
      }
    }
  };
  
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
            ref={videoRef}
            autoPlay
            muted
            playsInline
            preload="auto"
            onCanPlay={handleCanPlay}
            onEnded={handleFinish}
            onError={() => {
              console.error("Loading Screen Video failed to load");
              handleFinish();
            }}
            className="w-full h-full object-contain relative z-10"
          >
            <source 
              src="https://raw.githubusercontent.com/SkrionMedia/skirion/main/LOGO%20DRAC%20HORITZONATL%20YT%20(1).mp4" 
              type="video/mp4" 
            />
            <source 
              src="https://media.githubusercontent.com/media/SkrionMedia/skirion/main/LOGO%20DRAC%20HORITZONATL%20YT%20(1).mp4" 
              type="video/mp4" 
            />
            Your browser does not support the video tag.
          </video>
          
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />
          
          {/* Controls Overlay Contextual */}
          {needsInteraction && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="absolute inset-0 z-20 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            >
              <button 
                onClick={() => {
                  if (videoRef.current) {
                    videoRef.current.muted = false;
                    videoRef.current.play();
                    setNeedsInteraction(false);
                  }
                }}
                className="px-10 py-5 bg-brand-primary text-black font-black rounded-full uppercase tracking-[0.4em] text-sm hover:scale-105 transition-all shadow-[0_0_50px_-10px_rgba(0,82,255,0.5)]"
              >
                {t('common.loading.click_start')}
              </button>
            </motion.div>
          )}

          {/* Skip button for accessibility/UX */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3 }}
            onClick={handleFinish}
            className="absolute bottom-8 right-8 px-6 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-[12px] uppercase tracking-[0.4em] text-white font-black transition-all z-10"
          >
            {t('common.loading.skip')}
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
