
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const currentLanguage = i18n.language?.split('-')[0] || 'ca';

  /*
   * Rutas equivalentes entre idiomas.
   * El catalán es el idioma principal y no lleva prefijo.
   */
  const routeMap: Record<string, Record<string, string>> = {
    ca: {
      '/': '/',
      '/serveis': '/serveis',
      '/agents-digitals': '/agents-digitals',
      '/casos': '/casos',
      '/recursos': '/recursos',
      '/contacte': '/contacte',
      '/checklist': '/checklist',
    },

    es: {
      '/': '/es/',
      '/serveis': '/es/servicios',
      '/agents-digitals': '/es/agentes-digitales',
      '/casos': '/es/casos',
      '/recursos': '/es/recursos',
      '/contacte': '/es/contacto',
      '/checklist': '/es/checklist',
    },

    en: {
      '/': '/en/',
      '/serveis': '/en/services',
      '/agents-digitals': '/en/digital-agents',
      '/casos': '/en/cases',
      '/recursos': '/en/resources',
      '/contacte': '/en/contact',
      '/checklist': '/en/checklist',
    },
  };

  /*
   * Convierte una URL localizada en su ruta base catalana.
   * Esto permite saber qué página equivalente debemos abrir.
   */
  const getBaseRoute = (pathname: string): string => {
    if (pathname === '/es' || pathname === '/es/') return '/';
    if (pathname === '/en' || pathname === '/en/') return '/';

    const routePrefixes = [
      { prefix: '/es/servicios', base: '/serveis' },
      { prefix: '/es/agentes-digitales', base: '/agents-digitals' },
      { prefix: '/es/casos', base: '/casos' },
      { prefix: '/es/recursos', base: '/recursos' },
      { prefix: '/es/contacto', base: '/contacte' },
      { prefix: '/es/checklist', base: '/checklist' },

      { prefix: '/en/services', base: '/serveis' },
      { prefix: '/en/digital-agents', base: '/agents-digitals' },
      { prefix: '/en/cases', base: '/casos' },
      { prefix: '/en/resources', base: '/recursos' },
      { prefix: '/en/contact', base: '/contacte' },
      { prefix: '/en/checklist', base: '/checklist' },
    ];

    const match = routePrefixes.find(
      (route) =>
        pathname === route.prefix ||
        pathname.startsWith(`${route.prefix}/`)
    );

    if (match) {
      return match.base;
    }

    return pathname;
  };

  const getLocalizedPath = (language: string): string => {
    const baseRoute = getBaseRoute(location.pathname);

    return routeMap[language]?.[baseRoute] || routeMap[language]?.['/'] || '/';
  };

  const changeLanguage = (lng: string) => {
    const newPath = getLocalizedPath(lng);

    i18n.changeLanguage(lng);
    setIsMenuOpen(false);
    navigate(newPath);
  };

  const navLinks = [
    {
      name: t('nav.services'),
      path: routeMap[currentLanguage]?.['/serveis'] || '/serveis',
    },
    {
      name: t('nav.agents'),
      path:
        routeMap[currentLanguage]?.['/agents-digitals'] ||
        '/agents-digitals',
    },
    {
      name: t('nav.cases'),
      path: routeMap[currentLanguage]?.['/casos'] || '/casos',
    },
    {
      name: t('nav.resources'),
      path: routeMap[currentLanguage]?.['/recursos'] || '/recursos',
    },
    {
      name: t('nav.contact'),
      path: routeMap[currentLanguage]?.['/contacte'] || '/contacte',
    },
  ];

  const localizedHome =
    routeMap[currentLanguage]?.['/'] || '/';

  const localizedContact =
    routeMap[currentLanguage]?.['/contacte'] || '/contacte';

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 md:px-6 py-6 md:py-8">
      <div className="max-w-7xl mx-auto bg-white/5 backdrop-blur-2xl rounded-full px-6 md:px-8 py-3 md:py-4 flex items-center justify-between border border-white/10 shadow-2xl relative">

        {/* LOGO */}
        <Link
          to={localizedHome}
          className="flex items-center space-x-3 md:space-x-4 group shrink-0"
        >
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

        {/* DESKTOP NAVIGATION */}
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

          {/* LANGUAGE SELECTOR */}
          <div className="hidden md:flex items-center space-x-3 text-[10px] font-black text-gray-600 uppercase tracking-widest">
            {['ca', 'es', 'en'].map((lng, idx) => (
              <React.Fragment key={lng}>
                <button
                  onClick={() => changeLanguage(lng)}
                  className={cn(
                    "hover:text-white transition-colors",
                    currentLanguage === lng && "text-brand-primary"
                  )}
                >
                  {lng}
                </button>

                {idx < 2 && (
                  <span className="opacity-10">/</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* DESKTOP CTA */}
          <Link
            to={localizedContact}
            className="hidden sm:block px-6 md:px-8 py-2.5 md:py-3 text-[9px] md:text-[10px] bg-white text-black font-black rounded-full hover:bg-brand-primary hover:text-white transition-all duration-500 uppercase tracking-[0.3em] shadow-xl shadow-white/5"
          >
            {t('nav.diagnostic')}
          </Link>

          {/* MOBILE BUTTON */}
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
                    location.pathname === link.path
                      ? "text-brand-primary"
                      : "text-gray-400"
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
                        className={cn(
                          "hover:text-white transition-colors",
                          currentLanguage === lng &&
                            "text-brand-primary"
                        )}
                      >
                        {lng}
                      </button>

                      {idx < 2 && (
                        <span className="opacity-10">/</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                <Link
                  to={localizedContact}
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
