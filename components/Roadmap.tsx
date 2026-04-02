
import React from 'react';
import { motion } from 'framer-motion';

const Roadmap: React.FC = () => {
  const regions = [
    {
      region: 'Espanya',
      status: 'Operatiu',
      hubs: ['Barcelona (HQ)', 'Madrid'],
      color: 'bg-green-500'
    },
    {
      region: 'França',
      status: 'Expansió Q3 2024',
      hubs: ['París', 'Lió'],
      color: 'bg-brand-primary'
    },
    {
      region: 'Golf Aràbic',
      status: 'Estratègic 2025',
      hubs: ['Dubai', 'Riyadh'],
      color: 'bg-yellow-500'
    },
    {
      region: 'EUA',
      status: 'Escalat 2025',
      hubs: ['New York', 'Silicon Valley'],
      color: 'bg-purple-500'
    }
  ];

  return (
    <section id="roadmap" className="py-24 px-6 md:px-12 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-32 text-left">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-[10px] uppercase tracking-[0.4em] text-brand-primary font-black mb-8"
          >
            <span>Presència Global</span>
          </motion.div>
          <h3 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] text-white">Roadmap d'Escalat.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {regions.map((region, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-16 border border-white/5 flex flex-col justify-between min-h-[400px] hover:bg-white/5 transition-all rounded-[3rem] group"
            >
              <div>
                <div className="flex items-center space-x-3 mb-10">
                  <div className={`w-2 h-2 rounded-full ${region.color} shadow-lg shadow-current`}></div>
                  <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-black">{region.status}</span>
                </div>
                <h4 className="text-4xl font-black mb-12 text-white uppercase tracking-tighter leading-tight">{region.region}</h4>
              </div>
              
              <ul className="space-y-4">
                {region.hubs.map((hub, i) => (
                  <li key={i} className="text-lg text-gray-500 flex items-center space-x-3 font-light tracking-tight">
                    <span className="w-1.5 h-1.5 bg-brand-primary/30 rounded-full"></span>
                    <span>{hub}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
