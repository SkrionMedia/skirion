
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Mail, MessageSquare, Calendar, Send, ArrowRight, Phone, CheckCircle2, X } from 'lucide-react';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    // In a real app, you would send the form data here
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-0 min-h-screen bg-brand-surface text-white"
    >
      {/* Success Popup */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center px-6 bg-black/80 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="glass-card rounded-[3rem] p-12 max-w-xl w-full border border-white/10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-full h-full bg-brand-primary/5 blur-[100px] pointer-events-none"></div>
              <button 
                onClick={() => setShowSuccess(false)}
                className="absolute top-8 right-8 text-gray-500 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="relative z-10 text-center space-y-8">
                <div className="w-24 h-24 bg-brand-primary/10 rounded-[2.5rem] flex items-center justify-center text-brand-primary mx-auto">
                  <CheckCircle2 size={48} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-4xl font-black text-white uppercase tracking-tighter leading-[0.85] break-words">
                    {t('contact.success_title')}
                  </h3>
                  <p className="text-xl text-gray-500 font-light tracking-tight">
                    {t('contact.success_subtitle')}
                  </p>
                </div>
                <button 
                  onClick={() => setShowSuccess(false)}
                  className="w-full py-6 bg-brand-primary text-black rounded-2xl font-black text-[10px] uppercase tracking-[0.4em] hover:scale-105 transition-all duration-500 shadow-2xl shadow-brand-primary/20"
                >
                  {t('contact.success_button')}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
              className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full bg-brand-secondary/10 border border-brand-secondary/20 text-[10px] uppercase tracking-[0.4em] text-brand-secondary font-black"
            >
              <Mail size={12} className="fill-brand-secondary" />
              <span>{t('contact.protocol_connection')}</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-[120px] font-black tracking-tighter uppercase leading-[0.85] mb-10 break-words text-gradient"
            >
              {t('contact.title')}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-2xl md:text-4xl text-gray-500 max-w-3xl font-light tracking-tight leading-relaxed"
            >
              {t('contact.subtitle')}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Content (DARK) */}
      <section className="py-48 px-6 bg-brand-surface section-light">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-32">
            <div className="space-y-24">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-tight break-words">{t('contact.intro_title')}</h2>
                <p className="text-2xl text-gray-500 font-light leading-relaxed tracking-tight">
                  {t('contact.intro_text')}
                </p>
              </div>

              <div className="space-y-8">
                <a href="https://calendly.com/skirion" target="_blank" rel="noopener noreferrer" className="flex items-center gap-8 p-12 glass-card-light rounded-[3rem] border border-white/5 hover:border-brand-primary/30 transition-all duration-500 group shadow-sm hover:shadow-xl">
                  <div className="w-20 h-20 bg-brand-primary/5 rounded-[2rem] flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform duration-500">
                    <Calendar size={32} />
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-black text-white uppercase tracking-tighter">{t('contact.calendar_title')}</div>
                    <div className="text-sm text-gray-500 font-black uppercase tracking-widest">{t('contact.calendar_subtitle')}</div>
                  </div>
                  <ArrowRight className="ml-auto text-gray-300 group-hover:text-brand-primary group-hover:translate-x-2 transition-all" />
                </a>

                <a href={`https://wa.me/34644869615?text=${encodeURIComponent(t('contact.whatsapp_message'))}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-8 p-12 glass-card-light rounded-[3rem] border border-white/5 hover:border-brand-secondary/30 transition-all duration-500 group shadow-sm hover:shadow-xl">
                  <div className="w-20 h-20 bg-brand-secondary/5 rounded-[2rem] flex items-center justify-center text-brand-secondary group-hover:scale-110 transition-transform duration-500">
                    <MessageSquare size={32} />
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-black text-white uppercase tracking-tighter">{t('contact.whatsapp_title')}</div>
                    <div className="text-sm text-gray-500 font-black uppercase tracking-widest">{t('contact.whatsapp_subtitle')}</div>
                  </div>
                  <ArrowRight className="ml-auto text-gray-300 group-hover:text-brand-secondary group-hover:translate-x-2 transition-all" />
                </a>

                <a href="mailto:info@skirionmedia.com" className="flex items-center gap-8 p-12 glass-card-light rounded-[3rem] border border-white/5 hover:border-brand-primary/30 transition-all duration-500 group shadow-sm hover:shadow-xl">
                  <div className="w-20 h-20 bg-white/5 rounded-[2rem] flex items-center justify-center text-gray-400 group-hover:scale-110 transition-transform duration-500">
                    <Mail size={32} />
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-black text-white uppercase tracking-tighter">info@skirionmedia.com</div>
                    <div className="text-sm text-gray-500 font-black uppercase tracking-widest">{t('contact.email_subtitle')}</div>
                  </div>
                  <ArrowRight className="ml-auto text-gray-300 group-hover:text-brand-primary group-hover:translate-x-2 transition-all" />
                </a>
              </div>
            </div>

            <div className="glass-card-light p-16 md:p-24 rounded-[4rem] border border-white/5 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-full h-full bg-brand-primary/[0.02] blur-[100px] pointer-events-none"></div>
              <div className="relative z-10 space-y-12">
                <h3 className="text-4xl font-black text-white uppercase tracking-tighter leading-tight break-words">{t('contact.form_title')}</h3>
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <label className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-black ml-4">{t('contact.form.name')}</label>
                      <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 text-lg focus:outline-none focus:border-brand-primary transition-colors font-black tracking-tight text-white" placeholder={t('contact.form.name_placeholder')} />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-black ml-4">{t('contact.form.company')}</label>
                      <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 text-lg focus:outline-none focus:border-brand-primary transition-colors font-black tracking-tight text-white" placeholder={t('contact.form.company_placeholder')} />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-black ml-4">{t('contact.form.email')}</label>
                    <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 text-lg focus:outline-none focus:border-brand-primary transition-colors font-black tracking-tight text-white" placeholder={t('contact.form.email_placeholder')} />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-black ml-4">{t('contact.form.message')}</label>
                    <textarea required rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 text-lg focus:outline-none focus:border-brand-primary transition-colors resize-none font-black tracking-tight text-white" placeholder={t('contact.form.message_placeholder')}></textarea>
                  </div>
                  <button type="submit" className="w-full py-8 bg-brand-primary text-black rounded-2xl font-black text-[10px] uppercase tracking-[0.4em] flex items-center justify-center gap-4 hover:scale-105 transition-all duration-500 shadow-xl shadow-brand-primary/20">
                    {t('contact.form.send')} <Send size={20} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;

