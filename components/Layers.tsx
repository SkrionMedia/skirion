
import React from 'react';
import { motion } from 'framer-motion';

const Layers: React.FC = () => {
  const layers = [
    {
      title: 'Infraestructura Audiovisual',
      label: 'Capa 01',
      description: 'Producció premium sistematitzada a escala global. Els nostres hubs estan dissenyats per a la creació massiva de contingut cinematogràfic optimitzat per a plataformes socials.',
      features: ['Estudis de producció 8K', 'Pipeline d\'edició IA-Accelerat', 'Direcció creativa global'],
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Infraestructura de Conversió',
      label: 'Capa 02',
      description: 'L\'atenció sense monetització és soroll. Dissenyem sistemes d\'extracció de valor mitjançant afiliació avançada, negociació directa amb marques i xarxes d\'OTA (Online Travel Agencies).',
      features: ['Sistemes de monetització directa', 'Enginyeria d\'afiliació massiva', 'OTA Optimization'],
      image: 'https://images.unsplash.com/photo-1551288049-bbbda5366392?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Infraestructura Tecnològica (IA)',
      label: 'Capa 03',
      description: 'El cervell de l\'operació. Una suite de programari propietari que automatitza l\'anàlisi de dades, la generació de scripts i l\'optimització de contingut en temps real.',
      features: ['Anàlisi de dades de mercat', 'Algorismes de virilitat', 'Automatització d\'operacions'],
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <section id="layers" className="py-24 px-6 md:px-12 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="mb-32 text-left">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-[10px] uppercase tracking-[0.4em] text-brand-primary font-black mb-8"
          >
            <span>Arquitectura Operativa</span>
          </motion.div>
          <h3 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] text-white">Capes d'Impacte.</h3>
        </div>

        <div className="space-y-12">
          {layers.map((layer, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col md:flex-row glass-card rounded-[3rem] overflow-hidden group relative border-white/5 hover:border-brand-primary/20 transition-all duration-700"
            >
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700">
                <img 
                  src={layer.image} 
                  alt={layer.title} 
                  className="w-full h-full object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="md:w-1/3 bg-white/5 p-16 flex flex-col justify-center items-start border-r border-white/5 relative z-10">
                <span className="text-brand-primary font-black tracking-[0.4em] text-[10px] uppercase mb-4">{layer.label}</span>
                <h4 className="text-3xl font-black text-white uppercase tracking-tighter leading-tight">{layer.title}</h4>
              </div>
              <div className="md:w-2/3 p-16 relative z-10 flex flex-col justify-center">
                <p className="text-2xl text-gray-500 font-light leading-relaxed mb-10 max-w-2xl tracking-tight">
                  {layer.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  {layer.features.map((f, i) => (
                    <span key={i} className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.4em] text-gray-400 font-black">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Layers;
