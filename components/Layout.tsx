
import React from 'react';
import Navbar from './Navbar';
import BackgroundGrid from './BackgroundGrid';
import Chatbot from './Chatbot';
import LoadingScreen from './LoadingScreen';
import { useTranslation } from 'react-i18next';
import { Mail, Phone } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen text-white selection:bg-brand-primary/30">
      <LoadingScreen />
      <BackgroundGrid />
      <Navbar />
      <Chatbot />
      <main>{children}</main>
      <footer className="py-24 border-t border-white/5 px-6 bg-transparent">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start text-[10px] uppercase tracking-[0.3em] text-gray-500 font-black space-y-12 md:space-y-0">
          <div className="flex flex-col items-start space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center overflow-hidden border border-white/10 shadow-sm">
                <img 
                  src="https://storage.googleapis.com/static.aistudio.google.com/content/27vjgglgck4fmrtcdkvunu/321295361279/dragon_s_logo.png" 
                  alt="SKIRION Logo" 
                  className="w-full h-full object-contain p-2"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-2xl font-black tracking-tighter uppercase text-white">
                SKIRION<span className="text-brand-primary">.MEDIA</span>
              </span>
            </div>
            <div className="text-brand-primary font-black text-lg tracking-tighter normal-case italic">{t('footer.phrase')}</div>
            <div className="text-gray-500 font-medium text-sm tracking-tight">SKIRION.MEDIA · SYSTEM VERSION 3.0.0</div>
          </div>
          
          <div className="flex flex-col space-y-6 items-start md:items-end">
            <div className="flex flex-col space-y-4 items-start md:items-end">
              <a href={`mailto:${t('footer.email')}`} className="flex items-center gap-3 text-sm text-gray-300 hover:text-brand-primary transition-colors normal-case tracking-tight font-medium">
                <Mail size={16} className="text-brand-primary" />
                {t('footer.email')}
              </a>
              <a href={`tel:${t('footer.phone').replace(/\s/g, '')}`} className="flex items-center gap-3 text-sm text-gray-300 hover:text-brand-primary transition-colors normal-case tracking-tight font-medium">
                <Phone size={16} className="text-brand-primary" />
                {t('footer.phone')}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
