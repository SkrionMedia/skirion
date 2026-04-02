
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const CTA: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="cta" className="py-24 px-6 md:px-12 relative overflow-hidden bg-transparent">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000" 
          alt="Tech background" 
          className="w-full h-full object-cover grayscale"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-brand-primary/10 blur-[100px] rounded-full animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-secondary/10 blur-[100px] rounded-full animate-pulse delay-1000"></div>
        
        <h2 className="text-[10px] uppercase tracking-[0.5em] text-brand-primary font-black mb-10">{t('cta.badge')}</h2>
        <h3 className="text-5xl md:text-8xl font-black tracking-tighter mb-12 text-gradient uppercase leading-[0.85]">
          {t('cta.title')}
        </h3>
        <p className="text-2xl text-gray-500 mb-16 font-light max-w-2xl mx-auto tracking-tight">
          {t('cta.subtitle')}
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <Link to="/contacte" className="w-full md:w-auto px-14 py-7 bg-brand-primary text-black font-black uppercase tracking-[0.4em] text-xs hover:scale-105 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-brand-primary/20 rounded-full">
            {t('cta.button_primary')} <ArrowRight size={20} />
          </Link>
          <Link to="/casos" className="w-full md:w-auto px-14 py-7 bg-white/5 border border-white/10 text-white font-black uppercase tracking-[0.4em] text-xs hover:bg-white/10 transition-all rounded-full">
            {t('cta.button_secondary')}
          </Link>
        </div>
        
        <div className="mt-20 text-[10px] text-gray-600 uppercase tracking-[0.4em] font-black">
          {t('cta.footer')}
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-brand-primary/5 blur-[200px] -z-10 rounded-full" />
    </section>
  );
};

export default CTA;
