
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MessageSquare, CheckCircle2, AlertCircle } from 'lucide-react';

const Testimonials: React.FC = () => {
  const { t } = useTranslation();
  
  const testimonials = t('testimonials.items', { returnObjects: true }) as any[] || [];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-[10px] uppercase tracking-[0.3em] font-black mb-6"
          >
            <MessageSquare size={12} />
            <span>{t('testimonials.badge')}</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6"
          >
            {t('testimonials.title')} <span className="text-brand-primary">{t('testimonials.title_accent')}</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-[2rem] flex flex-col h-full group"
            >
              <div className="mb-8">
                <div className="flex items-center space-x-2 text-red-400/80 mb-4 text-[10px] uppercase tracking-widest font-bold">
                  <AlertCircle size={14} />
                  <span>{t('testimonials.problem_label')}</span>
                </div>
                <p className="text-gray-400 italic text-lg leading-relaxed">
                  "{item.problem}"
                </p>
              </div>

              <div className="mt-auto pt-8 border-t border-white/5">
                <div className="flex items-center space-x-2 text-brand-primary mb-4 text-[10px] uppercase tracking-widest font-bold">
                  <CheckCircle2 size={14} />
                  <span>{t('testimonials.solution_label')}</span>
                </div>
                <p className="text-white font-medium text-lg leading-relaxed mb-8">
                  {item.solution}
                </p>
                
                <div className="flex flex-col">
                  <span className="text-white font-black uppercase tracking-tighter">{item.author}</span>
                  <span className="text-brand-primary/60 text-[10px] uppercase tracking-widest font-bold">{item.company}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
