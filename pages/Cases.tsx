
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Clock, TrendingUp, Zap, ArrowRight, ExternalLink } from 'lucide-react';

const Cases: React.FC = () => {
  const { t } = useTranslation();
  const cases = t('cases.items', { returnObjects: true }) as any[];

  const successPosters = [
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop"
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-0 min-h-screen bg-brand-surface"
    >
      {/* Header Section (DARK) */}
      <section className="pt-24 pb-12 px-6 bg-brand-surface text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(112,0,255,0.1)_0%,transparent_50%)]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-left space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full bg-brand-secondary/10 border border-brand-secondary/20 text-[10px] uppercase tracking-[0.4em] text-brand-secondary font-black"
            >
              <TrendingUp size={12} className="fill-brand-secondary" />
              <span>{t('common.results_real')}</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-[100px] font-black tracking-tighter uppercase leading-[0.85] mb-10 break-words text-gradient"
            >
              {t('cases.title')}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-2xl md:text-4xl text-gray-500 max-w-3xl font-light tracking-tight leading-relaxed"
            >
              {t('cases.subtitle')}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Cases List (DARK) */}
      <section className="py-24 px-6 bg-brand-surface section-light">
        <div className="max-w-7xl mx-auto space-y-16">
          {cases.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card-light rounded-[4rem] overflow-hidden border border-white/5 group shadow-sm hover:shadow-2xl transition-all duration-700"
            >
              <div className="grid md:grid-cols-2">
                <div className="p-16 md:p-24 space-y-16">
                  <div className="space-y-6">
                    <div className="text-brand-primary text-[10px] uppercase tracking-[0.5em] font-black">{item.client}</div>
                    <h2 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter leading-tight break-words">{item.title}</h2>
                  </div>
                  
                  <p className="text-2xl text-gray-400 font-light leading-relaxed tracking-tight">{item.desc}</p>
                  
                  <div className="grid grid-cols-2 gap-12 py-12 border-y border-white/5">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-gray-500 text-[10px] uppercase tracking-[0.4em] font-black">
                        <Clock size={16} /> {t('cases.time')}
                      </div>
                      <div className="text-3xl font-black text-white italic tracking-tighter">{item.time}</div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-brand-secondary text-[10px] uppercase tracking-[0.4em] font-black">
                        <TrendingUp size={16} /> {t('cases.impact')}
                      </div>
                      <div className="text-3xl font-black text-brand-secondary italic tracking-tighter">{item.impact}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-12">
                    <div className="space-y-6">
                      <div className="text-[10px] text-gray-500 uppercase font-black tracking-[0.4em]">{t('cases.before')}</div>
                      <p className="text-xl text-gray-500 italic font-light leading-relaxed tracking-tight">"{item.before}"</p>
                    </div>
                    <div className="space-y-6">
                      <div className="text-[10px] text-brand-primary uppercase font-black tracking-[0.4em]">{t('cases.after')}</div>
                      <p className="text-xl text-white font-black leading-relaxed tracking-tight uppercase">"{item.after}"</p>
                    </div>
                  </div>

                  <button className="flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] font-black text-white hover:text-brand-primary transition-colors group">
                    {t('common.read_more')} <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
                
                <div className="bg-brand-surface relative aspect-square md:aspect-auto overflow-hidden group border-l border-white/5">
                  <img 
                    src={successPosters[i % successPosters.length]} 
                    alt={item.title} 
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Cases;

