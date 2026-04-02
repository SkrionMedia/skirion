
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  Mail,
  Phone,
  ArrowRight, 
  AlertCircle, 
  TrendingUp, 
  CheckCircle2,
  Zap,
  Activity,
  ShieldCheck,
  Clock,
  Play,
  FileDown,
  MessageCircle,
  BarChart3,
  Cpu,
  Layers,
  Calendar as CalendarIcon
} from 'lucide-react';
import MarginLeakCalculator from '../components/MarginLeakCalculator';
import Testimonials from '../components/Testimonials';

const Home: React.FC = () => {
  const { t } = useTranslation();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const realCasesImages: Record<number, string> = {
    0: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop", // Immobiliària (Casa moderna)
    1: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop", // Clínica (Consulta mèdica)
    2: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop", // B2B (Reunió d'equip)
    3: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop"  // E-commerce (Retail/Pagament)
  };

  const problemImage = "https://images.unsplash.com/photo-1598128558393-70ff21433be0?q=80&w=1200&auto=format&fit=crop"; // Mòbil amb notificació de trucada perduda
  const profitImage = "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop"; // AI brain

  const VIDEOS = {
    hero: "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-circuit-board-1662-large.mp4",
    problem: "https://assets.mixkit.co/videos/preview/mixkit-man-working-on-his-laptop-at-night-40340-large.mp4",
    solution: "https://assets.mixkit.co/videos/preview/mixkit-digital-connection-lines-and-dots-background-27351-large.mp4"
  };

  const POSTERS = {
    hero: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?q=80&w=1200&auto=format&fit=crop", // Futuristic AI
    problem: "https://images.unsplash.com/photo-1598128558393-70ff21433be0?q=80&w=1200&auto=format&fit=crop", // Mòbil trucada perduda
    solution: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop"
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-0"
    >
      {/* HERO SECTION */}
      <section id="hero" className="min-h-[100vh] flex items-center justify-center pt-24 pb-16 px-6 relative overflow-hidden bg-transparent">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-[110px] font-black mb-12 uppercase tracking-tighter leading-[0.85] text-white break-words"
          >
            {t('hero.title')}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl text-gray-500 font-light mb-20 max-w-4xl mx-auto leading-tight tracking-tight whitespace-pre-line"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col md:flex-row items-center justify-center gap-8"
          >
            <button 
              onClick={() => scrollToSection('calculator')}
              className="px-14 py-8 bg-brand-primary text-black font-black rounded-full hover:scale-105 transition-all duration-500 text-xs uppercase tracking-[0.4em] flex items-center gap-3 shadow-[0_0_60px_-10px_rgba(0,82,255,0.5)]"
            >
              {t('hero.cta')} <ArrowRight size={20} />
            </button>
            <button 
              onClick={() => window.location.href = '/checklist'}
              className="px-14 py-8 bg-white/5 border border-white/10 text-white font-black rounded-full hover:bg-white/10 transition-all text-xs uppercase tracking-[0.4em] flex items-center gap-3"
            >
              <Activity size={20} className="text-brand-primary" /> {t('lead_magnet.cta')}
            </button>
          </motion.div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-brand-primary/5 blur-[250px] -z-10 rounded-full" />
      </section>

      {/* LEAD MAGNET SECTION */}
      <section className="py-16 px-6 bg-transparent border-y border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white break-words">
              {t('lead_magnet.title')}
            </h3>
          </div>
          <button 
            onClick={() => window.location.href = '/checklist'}
            className="px-12 py-6 bg-white text-black font-black rounded-full hover:scale-105 transition-all duration-500 text-[10px] uppercase tracking-[0.4em] flex items-center gap-3 shadow-xl shadow-white/5"
          >
            <Activity size={18} /> {t('lead_magnet.cta')}
          </button>
        </div>
      </section>

      {/* SECTION 2 – THE PROBLEM (DARK) */}
      <section id="problem" className="py-16 px-6 relative bg-transparent section-light overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
            <div className="mb-20">
              <h2 className="text-5xl md:text-[100px] font-black mb-10 uppercase tracking-tighter leading-[0.85] text-white break-words">
                {t('problem.title')}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {(t('problem.items', { returnObjects: true }) as string[] || []).map((item, i) => (
                <motion.div 
                  key={i} 
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 glass-card-light flex flex-col justify-between group rounded-[2.5rem] border border-white/5"
                >
                  <div className="w-12 h-12 bg-red-500/5 rounded-xl flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform mb-6">
                    <AlertCircle size={24} />
                  </div>
                  <span className="text-xl font-light text-gray-400 leading-tight tracking-tight">{item}</span>
                </motion.div>
              ))}
            </div>

            <p className="text-3xl md:text-4xl font-black text-gray-400 tracking-tighter italic break-words">
              {t('problem.footer')}
            </p>
          </div>
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl bg-black"
            >
              <div className="relative w-full h-[600px] overflow-hidden">
                <img 
                  src={POSTERS.problem} 
                  alt="Problem Visual" 
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-10 left-10 p-6 glass-card rounded-2xl border border-white/10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                    <span className="text-xs font-black uppercase tracking-widest text-white">{t('problem.missed_call')}</span>
                  </div>
                  <p className="text-sm text-gray-400 font-light">{t('problem.potential_customer')}</p>
                </div>
              </div>
            </motion.div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-primary/10 blur-[100px] -z-10 rounded-full" />
          </div>
        </div>
      </section>

      {/* SECTION 2.1 – CONSECUENCIA (DARK) */}
      <section id="consequence" className="py-16 px-6 bg-transparent section-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-[100px] font-black uppercase tracking-tighter mb-10 leading-[0.85] text-white break-words">
              {t('consequence.title')}
            </h2>
            <p className="text-3xl md:text-5xl font-black text-red-500 italic tracking-tighter mb-20 break-words">
              {t('consequence.subtitle')}
            </p>
            <p className="text-2xl md:text-3xl text-gray-500 font-light leading-relaxed tracking-tight max-w-4xl mx-auto">
              {t('consequence.footer')}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 – THE SOLUTION (DARK BENTO) */}
      <section id="solution" className="py-16 px-6 bg-transparent section-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-[100px] font-black uppercase tracking-tighter mb-10 leading-[0.85] text-white break-words">
              {t('solution.title')}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {(t('solution.items', { returnObjects: true }) as any[] || []).map((item, i) => (
              <motion.div 
                key={i} 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.1 }}
                className="p-12 glass-card-light text-center space-y-8 group rounded-[3rem] flex flex-col border border-white/5"
              >
                <div className="w-20 h-20 mx-auto bg-brand-primary/5 rounded-[2rem] flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform duration-500">
                  {i === 0 ? <MessageCircle size={32} /> : i === 1 ? <ShieldCheck size={32} /> : i === 2 ? <CalendarIcon size={32} /> : <Layers size={32} />}
                </div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter text-white break-words">{item.title}</h3>
                <p className="text-lg text-gray-500 font-light leading-relaxed tracking-tight">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 – CASOS REALES (DARK) */}
      <section id="real-cases" className="py-16 px-6 bg-transparent border-y border-white/5 section-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full bg-brand-primary/5 border border-brand-primary/10 text-[10px] uppercase tracking-[0.4em] text-brand-primary font-black mb-10"
            >
              <span>{t('real_cases.badge')}</span>
            </motion.div>
            <h2 className="text-5xl md:text-[100px] font-black uppercase tracking-tighter mb-10 leading-[0.85] text-white break-words">
              {t('real_cases.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {(t('real_cases.items', { returnObjects: true }) as any[] || []).map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card-light rounded-[3rem] overflow-hidden group flex flex-col h-full hover:shadow-2xl transition-all duration-700 border border-white/5"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={realCasesImages[i]} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 left-4 w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center shadow-lg text-brand-primary">
                    <TrendingUp size={24} />
                  </div>
                </div>
                <div className="p-10 text-center space-y-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-black uppercase tracking-tighter text-white group-hover:text-brand-primary transition-colors break-words">{item.title}</h3>
                  <p className="text-lg text-gray-500 font-light leading-relaxed tracking-tight">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <Testimonials />

      {/* SECTION 5 – HOW WE INCREASE PROFIT (DARK BENTO) */}
      <section id="profit" className="py-16 px-6 bg-transparent section-light relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-20 mb-16">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-5xl md:text-[100px] font-black uppercase tracking-tighter mb-10 leading-[0.85] text-white break-words">
                {t('profit.title')}
              </h2>
              <p className="text-3xl md:text-4xl text-brand-primary font-black italic tracking-tighter break-words">
                {t('profit.text')}
              </p>
            </div>
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="rounded-[3rem] overflow-hidden shadow-2xl border border-white/5 bg-black"
              >
                <div className="relative w-full h-[400px] overflow-hidden">
                  <img 
                    src={POSTERS.solution} 
                    alt="Profit Visual" 
                    className="w-full h-full object-cover opacity-90"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {(t('profit.stats', { returnObjects: true }) as any[] || []).map((stat, i) => (
              <motion.div 
                key={i}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.1 }}
                className="p-16 glass-card-light text-center space-y-8 group rounded-[3rem] border border-white/5"
              >
                <div className="text-7xl font-black text-brand-primary tracking-tighter group-hover:scale-110 transition-transform break-words">
                  {stat.value}
                </div>
                <p className="text-xl font-black uppercase tracking-tighter text-white break-words">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 – 4 CORE SERVICES (DARK BENTO) */}
      <section id="services" className="py-16 px-6 bg-transparent border-y border-white/5 section-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-[100px] font-black uppercase tracking-tighter leading-[0.85] text-white mb-10 break-words">
              {t('offers.title')}
            </h2>
            <p className="text-2xl md:text-3xl text-gray-500 font-light max-w-3xl mx-auto tracking-tight">
              {t('offers.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {(t('offers.items', { returnObjects: true }) as any[] || []).map((offer, i) => (
              <motion.div 
                key={i}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.1 }}
                className="p-12 glass-card-light group rounded-[3rem] flex flex-col h-full text-center border border-white/5"
              >
                <div className="w-20 h-20 mx-auto bg-brand-primary/5 rounded-[2rem] flex items-center justify-center text-brand-primary mb-12 group-hover:scale-110 transition-transform">
                  {i === 0 ? <TrendingUp size={40} /> : i === 1 ? <CalendarIcon size={40} /> : i === 2 ? <ShieldCheck size={40} /> : <BarChart3 size={40} />}
                </div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-6 break-words">{offer.title}</h3>
                <p className="text-lg text-gray-500 font-light leading-relaxed tracking-tight">{offer.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 – RESULTS (DARK VISUAL) */}
      <section id="results" className="pt-12 pb-16 px-6 bg-transparent section-light">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-[100px] font-black uppercase tracking-tighter leading-[0.85] text-white break-words">
              {t('results_section.title')}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="p-16 glass-card-light rounded-[3rem] border-red-500/10 bg-red-500/5"
            >
              <p className="text-3xl md:text-4xl font-light text-gray-500 tracking-tight italic">
                {t('results_section.example.before')}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="p-16 glass-card-light rounded-[3rem] border-brand-primary/20 bg-brand-primary/5"
            >
              <p className="text-3xl md:text-4xl font-black text-brand-primary tracking-tighter italic break-words">
                {t('results_section.example.after')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CALCULATOR SECTION (DARK) */}
      <section id="calculator" className="py-16 px-6 bg-transparent border-y border-white/5 section-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-[100px] font-black uppercase tracking-tighter mb-10 leading-[0.85] text-white break-words">{t('calculator.title')}</h2>
            <p className="text-3xl text-brand-primary font-black mb-6 tracking-tighter italic break-words">{t('calculator.subtitle')}</p>
          </div>
          <div className="glass-card-light p-12 md:p-20 rounded-[4rem] border border-white/5">
            <MarginLeakCalculator />
          </div>
        </div>
      </section>

      {/* SECTION 9 – EMAIL CAPTURE (DARK) */}
      <section id="email-capture" className="py-16 px-6 bg-transparent section-light">
        <div className="max-w-5xl mx-auto text-center glass-card-light p-16 md:p-24 rounded-[4rem] relative overflow-hidden border border-white/5">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-brand-primary/5 blur-[120px] pointer-events-none"></div>
          <h2 className="text-5xl md:text-8xl font-black mb-10 uppercase tracking-tighter leading-[0.85] relative z-10 text-white break-words">
            {t('email_capture.title')}
          </h2>
          <p className="text-2xl text-gray-500 mb-16 relative z-10 max-w-2xl mx-auto font-light tracking-tight whitespace-pre-line">
            {t('email_capture.subtitle')}
          </p>
          
          <form className="relative z-10 flex flex-col md:flex-row gap-6 max-w-2xl mx-auto">
            <input 
              type="email" 
              placeholder={t('email_capture.placeholder') || "Tu email profesional"}
              className="flex-1 px-10 py-6 bg-white/5 border border-white/10 rounded-full focus:outline-none focus:border-brand-primary transition-colors text-lg shadow-sm text-white"
              required
            />
            <button className="px-12 py-6 bg-brand-primary text-black font-black rounded-full hover:scale-105 transition-all text-xs uppercase tracking-[0.4em] shadow-xl shadow-brand-primary/20">
              {t('email_capture.button')}
            </button>
          </form>
        </div>
      </section>

      {/* SECTION 10 – FINAL CTA (DARK) */}
      <section id="diagnostic" className="py-16 px-6 bg-transparent relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-[100px] font-black tracking-tighter mb-12 text-white uppercase leading-[0.85] break-words">
            {t('final_cta.title')}
          </h2>
          <p className="text-2xl md:text-3xl text-gray-500 mb-20 font-light max-w-4xl mx-auto tracking-tight leading-relaxed whitespace-pre-line">
            {t('final_cta.subtitle')}
          </p>
          <button 
            onClick={() => window.location.href = '/contacte'}
            className="px-16 py-8 bg-brand-primary text-black font-black rounded-full hover:scale-105 transition-all text-xs uppercase tracking-[0.4em] flex items-center gap-4 mx-auto shadow-[0_0_80px_-10px_rgba(0,82,255,0.5)]"
          >
            {t('final_cta.cta')} <ArrowRight size={24} />
          </button>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-brand-primary/5 blur-[250px] -z-10 rounded-full" />
      </section>

      {/* WhatsApp Floating Button removed as per user request */}
    </motion.div>
  );
};

export default Home;

