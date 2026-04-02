
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Search, Zap, Video, CheckCircle2, ArrowRight, BarChart3, Activity } from 'lucide-react';

const Services: React.FC = () => {
  const { t } = useTranslation();
  
  const services = [
    {
      id: "audit",
      title: t('services.items.audit.title'),
      icon: <BarChart3 size={32} />,
      desc: t('services.items.audit.desc'),
      features: t('services.items.audit.features', { returnObjects: true }) as string[],
      color: "brand-primary",
      price: t('services.items.audit.price')
    },
    {
      id: "automation",
      title: t('services.items.automation.title'),
      icon: <Zap size={32} />,
      desc: t('services.items.automation.desc'),
      features: t('services.items.automation.features', { returnObjects: true }) as string[],
      color: "brand-secondary",
      price: t('services.items.automation.price')
    },
    {
      id: "content",
      title: t('services.items.content.title'),
      icon: <Video size={32} />,
      desc: t('services.items.content.desc'),
      features: t('services.items.content.features', { returnObjects: true }) as string[],
      color: "brand-accent",
      price: t('services.items.content.price')
    }
  ];

  const servicePosters: Record<string, string> = {
    audit: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    automation: "https://images.unsplash.com/photo-1518433278988-2b2f197c9480?q=80&w=800&auto=format&fit=crop",
    content: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=800&auto=format&fit=crop"
  };

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
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(0,82,255,0.1)_0%,transparent_50%)]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-left space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-[10px] uppercase tracking-[0.4em] text-brand-primary font-black"
            >
              <Activity size={12} className="fill-brand-primary" />
              <span>{t('common.operating_systems')}</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-[100px] font-black tracking-tighter uppercase leading-[0.85] mb-10 break-words text-gradient"
            >
              {t('services.title')}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-2xl md:text-4xl text-gray-500 max-w-3xl font-light tracking-tight leading-relaxed"
            >
              {t('services.subtitle')}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services List (DARK) */}
      <section className="py-24 px-6 bg-brand-surface section-light">
        <div className="max-w-7xl mx-auto space-y-16">
          {services.map((service, i) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card-light rounded-[4rem] overflow-hidden group border border-white/5 shadow-sm hover:shadow-2xl transition-all duration-700"
            >
              <div className="grid md:grid-cols-2">
                <div className="p-16 md:p-24 flex flex-col justify-center space-y-12">
                  <div className="w-24 h-24 bg-brand-primary/5 rounded-[2rem] flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <div className="space-y-6">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-tight break-words hyphens-auto">{service.title}</h2>
                    <div className="text-3xl font-black text-brand-primary italic tracking-tighter whitespace-pre-line break-words">{service.price}</div>
                  </div>
                  <p className="text-gray-400 text-2xl font-light leading-relaxed tracking-tight">{service.desc}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-4 text-lg text-gray-500 font-medium tracking-tight">
                        <CheckCircle2 size={24} className="text-brand-primary" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <button className="w-fit px-12 py-6 bg-brand-primary text-black rounded-full font-black text-[10px] uppercase tracking-[0.4em] flex items-center gap-4 hover:scale-105 transition-all duration-500 shadow-xl shadow-brand-primary/20">
                    {t('services.cta')} <ArrowRight size={20} />
                  </button>
                </div>
                <div className="bg-brand-surface p-16 md:p-24 flex items-center justify-center border-l border-white/5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-brand-primary/[0.02] blur-[100px] pointer-events-none"></div>
                  <div className="w-full aspect-square max-w-md rounded-[3rem] border border-white/5 bg-black shadow-2xl relative overflow-hidden flex flex-col items-center justify-center group/asset">
                    <img 
                      src={servicePosters[service.id]} 
                      alt={service.title} 
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Services;

