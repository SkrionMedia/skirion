
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FileText, Video, CheckSquare, Download, ArrowRight, Play, FileDown, Activity } from 'lucide-react';

const Resources: React.FC = () => {
  const { t } = useTranslation();
  
  const getIcon = (type: string) => {
    const tLower = type.toLowerCase();
    if (tLower.includes('pdf') || tLower.includes('guia') || tLower.includes('guide')) return <FileText size={24} />;
    if (tLower.includes('checklist')) return <CheckSquare size={24} />;
    if (tLower.includes('vídeo') || tLower.includes('video')) return <Video size={24} />;
    return <FileText size={24} />;
  };

  const resourceItems = t('resources.items', { returnObjects: true }) as any[];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-0 min-h-screen bg-brand-surface text-white"
    >
      {/* Header Section (DARK) */}
      <section className="pt-48 pb-32 px-6 bg-brand-surface text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(112,0,255,0.1)_0%,transparent_50%)]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-left space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-[10px] uppercase tracking-[0.4em] text-brand-accent font-black"
            >
              <FileText size={12} className="fill-brand-accent" />
              <span>{t('common.knowledge_base')}</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-[120px] font-black tracking-tighter uppercase leading-[0.85] mb-10 break-words text-gradient"
            >
              {t('resources.title')}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-2xl md:text-4xl text-gray-500 max-w-3xl font-light tracking-tight leading-relaxed"
            >
              {t('resources.subtitle')}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Resources Grid (DARK) */}
      <section className="py-48 px-6 bg-brand-surface section-light">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {resourceItems.map((res, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card-light p-12 rounded-[3.5rem] border border-white/5 flex flex-col hover:border-brand-accent/30 transition-all duration-500 group shadow-sm hover:shadow-xl"
              >
                <div className="w-20 h-20 bg-brand-accent/5 rounded-[2rem] flex items-center justify-center mb-10 text-brand-accent group-hover:scale-110 transition-transform duration-500">
                  {getIcon(res.type)}
                </div>
                <div className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-black mb-6">{res.type}</div>
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-8 leading-tight break-words">{res.title}</h3>
                <p className="text-gray-500 font-light mb-12 flex-grow leading-relaxed text-lg tracking-tight">{res.desc}</p>
                <button 
                  onClick={() => res.type.toLowerCase().includes('checklist') ? window.location.href = '/checklist' : null}
                  className="flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] font-black text-white hover:text-brand-accent transition-colors group/btn"
                >
                  <Activity size={20} /> {res.cta || t('resources.download')} <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>

          <div className="mt-48 glass-card-light p-16 md:p-32 rounded-[5rem] border border-white/5 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full bg-brand-primary/[0.02] blur-[100px] pointer-events-none"></div>
            <div className="relative z-10 space-y-16">
              <div className="space-y-6">
                <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.85] break-words">{t('resources.newsletter.title')}</h2>
                <p className="text-2xl text-gray-500 font-light max-w-2xl mx-auto tracking-tight">{t('resources.newsletter.subtitle')}</p>
              </div>
              <div className="flex flex-col md:flex-row gap-6 max-w-3xl mx-auto">
                <input 
                  type="email" 
                  placeholder={t('resources.newsletter.placeholder')} 
                  className="flex-grow bg-white/5 border border-white/10 rounded-3xl px-10 py-7 text-lg focus:outline-none focus:border-brand-primary transition-colors font-black tracking-tight text-white"
                />
                <button className="bg-brand-primary text-black px-16 py-7 rounded-3xl font-black text-[10px] uppercase tracking-[0.5em] hover:scale-105 transition-all duration-500 shadow-xl shadow-brand-primary/20">
                  {t('resources.newsletter.button')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Resources;

