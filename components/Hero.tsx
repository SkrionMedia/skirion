
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center pt-20 overflow-hidden bg-brand-surface">
      {/* Background Image with Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" 
          alt="Futuristic Technology" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-surface via-transparent to-brand-surface"></div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/5 blur-[150px] rounded-full pointer-events-none z-0"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.3em] text-brand-primary font-bold"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary/40 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
          </span>
          <span>{t('hero.badge')}</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-8xl font-black mb-8 leading-[1] tracking-tighter text-gradient uppercase"
        >
          {t('hero.title')}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-12 font-light leading-relaxed tracking-tight"
        >
          {t('hero.subtitle')}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16"
        >
          <Link to="/contacte" className="px-10 py-5 bg-white text-black font-black rounded-full hover:scale-105 transition-all text-xs uppercase tracking-[0.3em] flex items-center gap-2 shadow-xl shadow-white/5">
            {t('contact.calendar_title')} <ArrowRight size={16} />
          </Link>
          <Link to="/serveis" className="px-10 py-5 border border-white/10 text-white font-black rounded-full hover:bg-white/5 transition-all text-xs uppercase tracking-[0.3em]">
            {t('nav.services')}
          </Link>
        </motion.div>

        {/* Trust Hooks */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto pt-12 border-t border-white/5"
        >
          <div className="flex items-center justify-center gap-3 text-gray-600">
            <Clock size={18} className="text-brand-primary" />
            <span className="text-[10px] uppercase tracking-widest font-black">{t('security.timeline')}</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-gray-600">
            <ShieldCheck size={18} className="text-brand-primary" />
            <span className="text-[10px] uppercase tracking-widest font-black">{t('security.tags.0')}</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-gray-600">
            <Zap size={18} className="text-brand-primary" />
            <span className="text-[10px] uppercase tracking-widest font-black">{t('hero.points.0')}</span>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-primary to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
