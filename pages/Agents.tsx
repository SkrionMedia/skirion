
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Phone, 
  RefreshCw, 
  UserCircle, 
  CheckCircle2, 
  ArrowRight,
  Building2,
  Stethoscope,
  ShoppingCart,
  Factory,
  Search,
  LayoutDashboard,
  Zap,
  Clock
} from 'lucide-react';
import BackgroundGrid from '../components/BackgroundGrid';
import CTA from '../components/CTA';

const Agents: React.FC = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const typesIcons: Record<string, React.ReactNode> = {
    text: <MessageSquare className="w-8 h-8 text-brand-primary" />,
    voice: <Phone className="w-8 h-8 text-brand-primary" />,
    followup: <RefreshCw className="w-8 h-8 text-brand-primary" />,
    avatar: <UserCircle className="w-8 h-8 text-brand-primary" />
  };

  const sectorIcons: Record<number, React.ReactNode> = {
    0: <Building2 className="w-6 h-6 text-brand-primary" />,
    1: <Stethoscope className="w-6 h-6 text-brand-primary" />,
    2: <ShoppingCart className="w-6 h-6 text-brand-primary" />,
    3: <Factory className="w-6 h-6 text-brand-primary" />
  };

  const sectorImages: Record<number, string> = {
    0: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop", // Immobiliària
    1: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop", // Clínica
    2: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop", // E-commerce
    3: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop"  // Industrial
  };

  const processIcons: Record<number, React.ReactNode> = {
    0: <Search className="w-6 h-6" />,
    1: <LayoutDashboard className="w-6 h-6" />,
    2: <Zap className="w-6 h-6" />,
    3: <Clock className="w-6 h-6" />
  };

  const agentVideos: Record<string, string> = {
    text: "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-circuit-board-1662-large.mp4",
    voice: "https://assets.mixkit.co/videos/preview/mixkit-man-working-on-his-laptop-at-night-40340-large.mp4",
    followup: "https://assets.mixkit.co/videos/preview/mixkit-digital-connection-lines-and-dots-background-27351-large.mp4",
    avatar: "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-circuit-board-1662-large.mp4"
  };

  const agentPosters: Record<string, string> = {
    text: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop",
    voice: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop",
    followup: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop",
    avatar: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop"
  };

  return (
    <div className="relative min-h-[80vh] bg-brand-surface text-white pt-24 pb-12 overflow-hidden">
      <BackgroundGrid />
      
      {/* Background elements for technological feel */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-0">
        <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-brand-primary/5 blur-[150px] rounded-full" />
        <div className="absolute top-[40%] right-[5%] w-[600px] h-[600px] bg-brand-primary/10 blur-[200px] rounded-full" />
        <div className="absolute bottom-[10%] left-[20%] w-[400px] h-[400px] bg-brand-primary/5 blur-[120px] rounded-full" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.div variants={itemVariants} className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 text-brand-primary text-[10px] font-black uppercase tracking-[0.3em]">
            SKIRION Industrial Intelligence
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-5xl md:text-8xl font-black mb-8 tracking-tighter uppercase leading-[0.85] text-gradient break-words">
            {t('agents_page.hero.title')}
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl text-gray-500 max-w-3xl mx-auto mb-12 whitespace-pre-line leading-relaxed tracking-tight font-light">
            {t('agents_page.hero.subtitle')}
          </motion.p>
          <motion.div variants={itemVariants}>
            <a 
              href="#diagnostico"
              className="inline-flex items-center space-x-4 px-10 py-5 bg-white text-black rounded-full font-black text-xs uppercase tracking-[0.3em] hover:scale-105 transition-all duration-500 group shadow-xl shadow-white/5"
            >
              <span>{t('agents_page.hero.cta')}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </a>
          </motion.div>
        </motion.div>

        {/* Problem Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-20 grid lg:grid-cols-2 gap-20 items-center"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter uppercase leading-[0.9] whitespace-pre-line text-white break-words">
              {t('agents_page.problem.title')}
            </h2>
            <div className="text-lg text-gray-500 whitespace-pre-line leading-relaxed mb-12 tracking-tight font-light">
              {t('agents_page.problem.text')}
            </div>
            <a 
              href="#diagnostico"
              className="inline-flex items-center space-x-4 text-brand-primary font-black text-xs uppercase tracking-[0.3em] hover:text-white transition-colors group"
            >
              <span>{t('agents_page.problem.cta')}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </a>
          </motion.div>
          <motion.div variants={itemVariants} className="relative">
            <div className="absolute inset-0 bg-brand-primary/5 blur-[120px]" />
            <div className="relative glass-card rounded-[3rem] p-12 flex flex-col justify-center min-h-[400px] border border-white/5">
              <div className="space-y-6">
                <p className="text-xl text-gray-400 italic leading-relaxed whitespace-pre-line font-light tracking-tight">
                  {t('agents_page.problem.text')}
                </p>
                <div className="pt-8 border-t border-white/5">
                  <p className="text-2xl font-black text-brand-primary uppercase tracking-tighter leading-tight break-words">
                    {t('agents_page.problem.reflection')}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Definition Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-16 text-center max-w-4xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-black mb-12 tracking-tighter uppercase leading-[0.9] whitespace-pre-line text-white break-words">
            {t('agents_page.definition.title')}
          </motion.h2>
          <motion.div variants={itemVariants} className="text-xl text-gray-500 whitespace-pre-line leading-relaxed tracking-tight font-light">
            {t('agents_page.definition.text')}
          </motion.div>
        </motion.div>

        {/* Types Section */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-black mb-12 tracking-tighter uppercase text-center text-white break-words">
            {t('agents_page.types.title')}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {(t('agents_page.types.items', { returnObjects: true }) as any[] || []).map((item) => (
              <motion.div 
                key={item.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariants}
                className="glass-card rounded-[3rem] p-10 border border-white/5 hover:border-brand-primary/30 transition-all duration-700 group"
              >
                <div className="flex flex-col lg:flex-row gap-10">
                  <div className="lg:w-2/3 space-y-8">
                    <div className="mb-8 p-4 bg-brand-primary/10 rounded-2xl inline-block group-hover:scale-110 transition-transform duration-500">
                      {typesIcons[item.id]}
                    </div>
                    <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter text-white">{item.title}</h3>
                    <div className="space-y-6">
                      <div>
                        <span className="text-[10px] font-black text-brand-primary uppercase tracking-widest block mb-2">{t('agents_page.types.ideal_for_label')}</span>
                        <p className="text-gray-500 font-light tracking-tight">{item.ideal_for}</p>
                      </div>
                      <div>
                        <span className="text-[10px] font-black text-brand-primary uppercase tracking-widest block mb-2">{t('agents_page.types.how_it_works_label')}</span>
                        <p className="text-gray-500 font-light tracking-tight">{item.how_it_works}</p>
                      </div>
                      <div className="pt-6 border-t border-white/5 flex items-center space-x-3 text-white font-black tracking-tight">
                        <CheckCircle2 className="w-5 h-5 text-brand-primary" />
                        <span>{item.result}</span>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/3">
                    <div className="relative h-full min-h-[250px] rounded-3xl overflow-hidden bg-black shadow-xl border border-white/5">
                      <img 
                        src={agentPosters[item.id]} 
                        alt={item.title} 
                        className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-700"
                        referrerPolicy="no-referrer"
                      />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 p-4 glass-card rounded-xl border border-white/10">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-brand-primary rounded-full animate-pulse" />
                          <span className="text-[8px] font-black uppercase tracking-widest text-white">{t('agents_page.types.live_demo')}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sectors Section */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-brand-primary text-[10px] font-black uppercase tracking-[0.3em] mb-8"
            >
              <span>{t('agents_page.sectors.badge')}</span>
            </motion.div>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] text-white break-words">
              {t('agents_page.sectors.title')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(t('agents_page.sectors.items', { returnObjects: true }) as any[] || []).map((sector, idx) => (
              <motion.div 
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariants}
                className="glass-card rounded-[2.5rem] overflow-hidden flex flex-col group hover:shadow-2xl transition-all duration-700 border border-white/5"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={sectorImages[idx]} 
                    alt={sector.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 left-4 w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/10 shadow-lg">
                    {sectorIcons[idx]}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-black mb-6 uppercase tracking-tighter text-white group-hover:text-brand-primary transition-colors">{sector.title}</h3>
                  <ul className="space-y-4 mb-8 flex-grow">
                    {sector.points.map((point: string, pIdx: number) => (
                      <li key={pIdx} className="flex items-start space-x-3 text-sm text-gray-500 font-light tracking-tight">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-1.5 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-6 border-t border-white/5 text-brand-primary font-black text-[10px] uppercase tracking-widest flex items-center justify-between">
                    <span>{sector.result}</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-16 bg-white/5 border border-white/5 rounded-[40px] p-12 md:p-20"
        >
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black mb-6 tracking-tighter uppercase text-white break-words">
              {t('agents_page.process.title')}
            </h2>
            <p className="text-brand-primary font-black text-xs uppercase tracking-[0.4em]">
              {t('agents_page.process.footer')}
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-12">
            {(t('agents_page.process.steps', { returnObjects: true }) as any[] || []).map((step, idx) => (
              <div key={idx} className="relative">
                <div className="mb-8 w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-white border border-white/10">
                  {processIcons[idx]}
                </div>
                <div className="text-[10px] font-black text-brand-primary mb-2 uppercase tracking-widest">{t('agents_page.process.step_label')} {idx + 1}</div>
                <h3 className="text-xl font-black mb-4 uppercase tracking-tighter text-white">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light tracking-tight">{step.desc}</p>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-8 -right-6 text-white/10">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Real Results Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-20 grid lg:grid-cols-2 gap-20 items-center"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter uppercase leading-[0.9] text-white break-words">
              {t('agents_page.real_results.title')}
            </h2>
            <p className="text-lg text-gray-500 mb-12 font-light tracking-tight">
              {t('agents_page.real_results.intro')}
            </p>
            <div className="space-y-6">
              {(t('agents_page.real_results.items', { returnObjects: true }) as string[] || []).map((item, idx) => (
                <div key={idx} className="flex items-center space-x-4">
                  <div className="w-6 h-6 rounded-full bg-brand-primary/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-brand-primary" />
                  </div>
                  <span className="font-black text-gray-300 uppercase tracking-tight text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-12 pt-12 border-t border-white/5">
              <p className="text-2xl font-black uppercase tracking-tighter text-white break-words">
                {t('agents_page.real_results.footer')}
              </p>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="h-48 glass-card rounded-3xl p-8 flex flex-col justify-end border border-white/5">
                <div className="text-3xl font-black text-brand-primary mb-2">-90%</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-gray-500">{t('agents_page.real_results.stats.response_time')}</div>
              </div>
              <div className="h-64 bg-brand-primary rounded-3xl p-8 flex flex-col justify-end text-black shadow-2xl shadow-brand-primary/20">
                <div className="text-3xl font-black mb-2">+45%</div>
                <div className="text-[10px] font-black uppercase tracking-widest opacity-60">{t('agents_page.real_results.stats.conversion')}</div>
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="h-64 bg-white/5 border border-white/5 rounded-3xl p-8 flex flex-col justify-end text-white">
                <div className="text-3xl font-black text-white mb-2">24/7</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-gray-500">{t('agents_page.real_results.stats.availability')}</div>
              </div>
              <div className="h-48 glass-card rounded-3xl p-8 flex flex-col justify-end border border-white/5">
                <div className="text-3xl font-black text-brand-primary mb-2">0</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-gray-500">{t('agents_page.real_results.stats.human_errors')}</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Final CTA Section */}
        <motion.div 
          id="diagnostico"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-black mb-12 tracking-tighter uppercase leading-tight text-white break-words">
            {t('agents_page.final_cta.title')}
          </motion.h2>
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center justify-center gap-6 mb-20">
            <a 
              href="/checklist"
              className="w-full md:w-auto px-10 py-5 bg-brand-primary text-black rounded-full font-black text-xs uppercase tracking-[0.3em] hover:scale-105 transition-all duration-500 shadow-2xl shadow-brand-primary/20"
            >
              {t('agents_page.final_cta.button1')}
            </a>
          </motion.div>
          
          <motion.div variants={itemVariants} className="pt-20 border-t border-white/5">
            <p className="text-gray-600 font-black text-[10px] uppercase tracking-[0.4em] mb-8">
              {t('agents_page.final_cta.direct_title')}
            </p>
            <a 
              href="/contacte"
              className="inline-flex items-center space-x-4 text-white hover:text-brand-primary transition-colors group px-8 py-4 border border-white/10 rounded-full hover:border-brand-primary/50"
            >
              <span className="font-black text-xs uppercase tracking-[0.3em]">{t('agents_page.final_cta.button2')}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <CTA />
    </div>
  );
};

export default Agents;
