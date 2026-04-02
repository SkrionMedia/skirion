
import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Settings, Share2, TrendingUp } from 'lucide-react';

const Method: React.FC = () => {
  const steps = [
    {
      id: '01',
      title: 'Anàlisi Predictiva',
      description: 'Utilitzem el nostre propi motor d\'IA per identificar nínxols d\'atenció abans que es tornin virals.',
      icon: <BarChart3 className="text-brand-primary" size={24} />
    },
    {
      id: '02',
      title: 'Producció Sistematitzada',
      description: 'Pipeline de producció audiovisual d\'altíssima qualitat capaç de generar contingut 24/7 sense degradació creativa.',
      icon: <Settings className="text-brand-primary" size={24} />
    },
    {
      id: '03',
      title: 'Distribucio Algorítmica',
      description: 'Enginyeria de publicació multicanal optimitzada per al retenció màxima en les plataformes globals.',
      icon: <Share2 className="text-brand-primary" size={24} />
    },
    {
      id: '04',
      title: 'Monetització de Precisió',
      description: 'Conversió del trànsit en capital mitjançant sistemes directes d\'afiliació i infraestructures OTA.',
      icon: <TrendingUp className="text-brand-primary" size={24} />
    }
  ];

  return (
    <section id="method" className="py-24 px-6 md:px-12 bg-transparent relative overflow-hidden">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '80px 80px' }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 space-y-8">
          <div className="max-w-xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-[10px] uppercase tracking-[0.4em] text-brand-primary font-black mb-8"
            >
              <span>Enginyeria de Viralitat</span>
            </motion.div>
            <h3 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] text-white">El Mètode SKIRION.</h3>
          </div>
          <p className="text-gray-500 max-w-sm text-2xl font-light tracking-tight leading-tight">
            Hem eliminat l'atzar del procés de creació. Apliquem rigor de programari a la producció creativa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-12 group hover:border-brand-primary/30 transition-all duration-700 relative overflow-hidden rounded-[3rem] border-white/5"
            >
              <div className="absolute -right-8 -top-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700">
                {React.cloneElement(step.icon as React.ReactElement, { size: 160 })}
              </div>
              <div className="flex items-center justify-between mb-10">
                <div className="text-brand-primary font-black text-2xl group-hover:translate-x-2 transition-transform italic">{step.id}</div>
                <div className="opacity-50 group-hover:opacity-100 transition-opacity text-brand-primary">{step.icon}</div>
              </div>
              <h4 className="text-2xl font-black mb-6 text-white uppercase tracking-tighter leading-tight">{step.title}</h4>
              <p className="text-gray-500 text-lg leading-relaxed font-light tracking-tight">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Method;
