
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import BackgroundGrid from './BackgroundGrid';
import VirtualAssistant from './VirtualAssistant';
import LoadingScreen from './LoadingScreen';
import BookVisitModal from './BookVisitModal';
import CVModal from './CVModal';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, ArrowLeft, Briefcase, Send, Sparkles, Copy, Check, ExternalLink, X, MessageSquare } from 'lucide-react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleOpenBookModal = () => setIsBookModalOpen(true);
    const handleOpenCVModal = () => setIsCVModalOpen(true);
    window.addEventListener('open-book-modal', handleOpenBookModal);
    window.addEventListener('open-cv-modal', handleOpenCVModal);
    return () => {
      window.removeEventListener('open-book-modal', handleOpenBookModal);
      window.removeEventListener('open-cv-modal', handleOpenCVModal);
    };
  }, []);

  const email = t('footer.email', 'info@skirionmedia.com');
  const subject = t('footer.careers.subject', 'VULL TREBALLAR AMB VOSALTRES');
  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}`;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleCVButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsCVModalOpen(true);
  };
  
  return (
    <div className="min-h-screen text-white selection:bg-brand-primary/30">
      <LoadingScreen />
      <BackgroundGrid />
      <Navbar />
      <VirtualAssistant />
      <main className="relative z-10" style={{ paddingTop: 'var(--navbar-height, 160px)' }}>{children}</main>
      
      {/* Persistant Global Watermark */}
      <div className="fixed inset-0 flex items-center justify-center opacity-[0.12] pointer-events-none z-0">
        <img 
          src="https://raw.githubusercontent.com/SkrionMedia/skirion/main/LOGO%20SENSE%20LLETRA%20TRANS.png" 
          alt="" 
          className="w-[80%] max-w-5xl h-auto object-contain"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Back Button for Mobile */}
      {!isHome && (
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={() => {
            if (window.history.length > 2 && window.history.state?.idx > 0) {
              navigate(-1);
            } else {
              navigate('/');
            }
          }}
          className="fixed bottom-6 left-4 z-[99] px-4 py-3 bg-brand-primary text-black rounded-full shadow-[0_10px_30px_rgba(0,82,255,0.5)] lg:hidden flex items-center justify-center gap-2 font-black uppercase text-xs tracking-wider border border-white/20 active:scale-95 transition-transform cursor-pointer"
        >
          <ArrowLeft size={16} />
          <span>{t('common.back', 'Tornar')}</span>
        </motion.button>
      )}

      <footer className="py-24 border-t border-white/5 px-6 bg-black relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-16 lg:gap-24">
          {/* LEFT: LOGO & PHRASE */}
          <div className="flex flex-col items-start space-y-10 lg:w-1/3">
            <div className="flex items-center space-x-6">
              <div className="w-20 h-20 md:w-32 md:h-32 bg-white/5 rounded-2xl md:rounded-[2.5rem] flex items-center justify-center overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="https://raw.githubusercontent.com/SkrionMedia/skirion/main/LOGO%20SENSE%20LLETRA%20TRANS.png" 
                  alt="SKIRION Logo" 
                  className="w-full h-full object-contain p-1 md:p-2"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-xl md:text-3xl font-black tracking-tighter uppercase text-white">
                SKIRION<span className="text-brand-primary">.MEDIA</span>
              </span>
            </div>
            <div className="text-white/80 font-medium text-2xl md:text-3xl tracking-tight leading-[1.2] whitespace-pre-line w-full max-w-md lg:max-w-lg mt-4">
              {t('footer.phrase')}
            </div>
          </div>
          
          {/* RIGHT: MENU GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 lg:gap-24 lg:w-2/3 lg:pt-12">
            {/* SOLUTIONS */}
            <div className="flex flex-col space-y-6">
              <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] border-b border-brand-primary/30 pb-4 inline-block">
                <span>{t('footer.menu.solutions.title')}</span>
              </h4>
              <ul className="flex flex-col space-y-3">
                {(t('footer.menu.solutions.items', { returnObjects: true }) as any[]).map((item, i) => (
                  <li key={i}>
                    <span className="text-gray-500 text-sm font-medium tracking-tight normal-case cursor-default">
                      {item.label}
                    </span>
                  </li>
                ))}
              </ul>
            <div className="w-full bg-neutral-950/95 border-b border-white/10 backdrop-blur-2xl px-3 sm:px-6 lg:px-8 py-2 md:py-3 shadow-2xl relative z-[100]">
  <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 md:gap-6">
    
    {/* ESQUERRA: LOGO & SELECTOR D'IDIOMES D'ESCRIPTORI */}
    <div className="flex items-center gap-3 sm:gap-5 shrink-0">
      <Link to="/" className="flex items-center space-x-2.5 sm:space-x-3 group shrink-0">
        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-13 md:h-13 bg-white/5 backdrop-blur-md rounded-2xl flex items-center justify-center overflow-hidden border border-white/10 shadow-[0_0_20px_rgba(0,82,255,0.2)] group-hover:scale-105 transition-transform duration-300">
          <img 
            src="/logo.png" 
            alt="SKIRION Logo" 
            className="w-full h-full object-contain p-1"
            referrerPolicy="no-referrer"
          />
        </div>
        <span className="text-base sm:text-lg md:text-xl font-black tracking-tighter uppercase text-white hidden sm:block">
          SKIRION<span className="text-brand-primary">.MEDIA</span>
        </span>
      </Link>

      {/* SELECTOR D'IDIOMA (CAT / CAST / ENG) */}
      <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 bg-white/5 rounded-full border border-white/10">
        {[
          { code: 'ca', label: 'CAT' },
          { code: 'es', label: 'CAST' },
          { code: 'en', label: 'ENG' }
        ].map((lang) => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={cn(
              "px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer",
              i18n.language === lang.code 
                ? "bg-brand-primary text-white shadow-[0_0_10px_rgba(0,82,255,0.5)]" 
                : "text-gray-400 hover:text-white"
            )}
          >
            {lang.label}
          </button>
        ))}
      </div>
    </div>
    
    {/* DRETA: NAVEGACIÓ I BOTONS D'ACCIÓ */}
    <div className="flex items-center gap-2 sm:gap-3 shrink-0">
      
      {/* SELECTOR D'IDIOMA PER A MÒBIL */}
      <div className="flex md:hidden items-center gap-1 bg-white/5 px-2 py-1 rounded-full border border-white/10">
        {[
          { code: 'ca', label: 'CAT' },
          { code: 'es', label: 'CAST' },
          { code: 'en', label: 'ENG' }
        ].map((lang) => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={cn(
              "px-1.5 py-0.5 rounded text-[9px] font-black uppercase tracking-wider transition-all cursor-pointer",
              i18n.language === lang.code ? "text-brand-primary font-black" : "text-gray-400 hover:text-white"
            )}
          >
            {lang.label}
          </button>
        ))}
      </div>

      {/* MENÚ D'ENLLAÇOS EN PÍNDOLA (DESKTOP) */}
      <div className="hidden lg:flex items-center bg-white/5 backdrop-blur-2xl rounded-full px-4 xl:px-5 py-2 border border-white/10 shadow-2xl gap-x-3.5 xl:gap-x-5 text-xs uppercase tracking-wider text-gray-400 font-extrabold">
        {navLinks.map((link) => {
          const isSectors = link.path.includes('agentes-digitales') || link.path.includes('agents-digitals');
          if (isSectors) {
            return (
              <div key={link.path} className="relative group/nav-dropdown py-1">
                <Link
                  to={link.path}
                  className={cn(
                    "hover:text-white transition-colors relative flex items-center gap-1 cursor-pointer",
                    (location.pathname === link.path || location.pathname.startsWith('/sectors/') || location.pathname.startsWith('/sectores/')) && "text-white"
                  )}
                >
                  <span>{link.name}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-gray-500 group-hover/nav-dropdown:text-white transition-colors" />
                </Link>

                {/* Submenú desplegable de sectors */}
                <div className="absolute top-[100%] left-1/2 -translate-x-1/2 w-56 bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl p-3 shadow-2xl opacity-0 translate-y-2 pointer-events-none group-hover/nav-dropdown:opacity-100 group-hover/nav-dropdown:translate-y-0 group-hover/nav-dropdown:pointer-events-auto transition-all duration-200 flex flex-col gap-1 z-50">
                  {[
                    { name: t('verticals.hotels.name', 'Hotels i Càmpings'), path: '/sectors/hotels' },
                    { name: t('verticals.real_estate.name', 'Immobiliària'), path: '/sectors/real-estate' },
                    { name: t('verticals.clinics.name', 'Clíniques Privades'), path: '/sectors/clinics' },
                  ].map((sec) => (
                    <Link
                      key={sec.path}
                      to={sec.path}
                      className={cn(
                        "px-3 py-2 text-[10px] text-gray-400 hover:text-brand-primary hover:bg-white/5 rounded-lg text-left transition-all flex items-center justify-between border border-transparent hover:border-brand-primary/10",
                        location.pathname === sec.path && "text-brand-primary bg-brand-primary/5"
                      )}
                    >
                      <span className="font-bold uppercase tracking-wider">{sec.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          }

          return (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "hover:text-white transition-colors relative group whitespace-nowrap cursor-pointer",
                location.pathname === link.path && "text-white"
              )}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
      
      {/* BOTONS D'ACCIÓ: "DÉJANOS TU CV" + "DIAGNÒSTIC" */}
      <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
        <button
          type="button"
          onClick={() => window.dispatchEvent(new CustomEvent('open-cv-modal'))}
          className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-[10px] xl:text-[11px] text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 hover:border-brand-primary/50 rounded-full transition-all uppercase tracking-wider font-mono cursor-pointer shrink-0"
        >
          <Briefcase size={13} className="text-brand-primary" />
          <span>{t('footer.careers.button', "Déjanos tu CV")}</span>
        </button>
        <Link 
          to="/contacto"
          className="px-3.5 sm:px-4 md:px-5 py-2 text-[10px] sm:text-xs bg-white text-black font-black rounded-full hover:bg-brand-primary hover:text-white transition-all duration-300 uppercase tracking-wider shadow-lg shadow-white/5 whitespace-nowrap shrink-0 cursor-pointer"
        >
          {t('nav.diagnostic')}
        </Link>
      </div>

      {/* BOTÓ DE MENÚ PER A DISPOSITIUS MÒBILS */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden w-8 h-8 sm:w-9 sm:h-9 bg-white/5 rounded-full flex items-center justify-center text-white border border-white/10 ml-1 cursor-pointer shrink-0"
        aria-label="Toggle mobile menu"
      >
        {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
      </button>
    </div>
  </div>
</div>

export default Layout;
