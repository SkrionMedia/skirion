
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Globe, Cpu, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navLinks = [
    { name: t('nav.services'), path: '/serveis' },
    { name: t('nav.agents'), path: '/agents-digitals' },
    { name: t('nav.cases'), path: '/casos' },
    { name: t('nav.resources'), path: '/recursos' },
    { name: t('nav.contact'), path: '/contacte' },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 md:px-6 py-6 md:py-8">
      <div className="max-w-7xl mx-auto bg-white/5 backdrop-blur-2xl rounded-full px-6 md:px-8 py-3 md:py-4 flex items-center justify-between border border-white/10 shadow-2xl relative">
        <Link to="/" className="flex items-center space-x-3 md:space-x-4 group shrink-0">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-xl md:rounded-2xl flex items-center justify-center overflow-hidden border border-white/20 shadow-[0_0_30px_rgba(0,82,255,0.3)] group-hover:scale-110 transition-transform duration-500">
            <img 
              src="https://storage.googleapis.com/static.aistudio.google.com/content/27vjgglgck4fmrtcdkvunu/321295361279/dragon_s_logo.png" 
              alt="SKIRION Logo" 
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="text-xl md:text-2xl font-black tracking-tighter uppercase text-white">
            SKIRION<span className="text-brand-primary">.MEDIA</span>
          </span>
        </Link>
        
        <div className="hidden lg:flex items-center space-x-10 text-[10px] uppercase tracking-[0.3em] text-gray-500 font-black">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "hover:text-white transition-colors relative group",
                location.pathname === link.path && "text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        <div className="flex items-center space-x-4 md:space-x-8">
          <div className="hidden md:flex items-center space-x-3 text-[10px] font-black text-gray-600 uppercase tracking-widest">
            {['ca', 'es', 'en'].map((lng, idx) => (
              <React.Fragment key={lng}>
                <button 
                  onClick={() => changeLanguage(lng)} 
                  className={cn("hover:text-white transition-colors", i18n.language === lng && "text-brand-primary")}
                >
                  {lng}
                </button>
                {idx < 2 && <span className="opacity-10">/</span>}
              </React.Fragment>
            ))}
          </div>
          
          <Link 
            to="/contacte"
            className="hidden sm:block px-6 md:px-8 py-2.5 md:py-3 text-[9px] md:text-[10px] bg-white text-black font-black rounded-full hover:bg-brand-primary hover:text-white transition-all duration-500 uppercase tracking-[0.3em] shadow-xl shadow-white/5"
          >
            {t('nav.diagnostic')}
          </Link>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white border border-white/10"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="absolute top-full left-0 right-0 mt-4 bg-black/95 backdrop-blur-2xl rounded-[2rem] p-8 border border-white/10 shadow-2xl lg:hidden flex flex-col space-y-6"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "text-lg font-black uppercase tracking-[0.2em] transition-colors",
                    location.pathname === link.path ? "text-brand-primary" : "text-gray-400"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center space-x-4 text-xs font-black text-gray-500 uppercase tracking-widest">
                  {['ca', 'es', 'en'].map((lng, idx) => (
                    <React.Fragment key={lng}>
                      <button 
                        onClick={() => changeLanguage(lng)} 
                        className={cn("hover:text-white transition-colors", i18n.language === lng && "text-brand-primary")}
                      >
                        {lng}
                      </button>
                      {idx < 2 && <span className="opacity-10">/</span>}
                    </React.Fragment>
                  ))}
                </div>
                <Link 
                  to="/contacte"
                  onClick={() => setIsMenuOpen(false)}
                  className="px-6 py-3 text-[10px] bg-brand-primary text-white font-black rounded-full uppercase tracking-[0.3em]"
                >
                  {t('nav.diagnostic')}
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
