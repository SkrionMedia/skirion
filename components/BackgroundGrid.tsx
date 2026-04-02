
import React from 'react';

const BackgroundGrid: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-brand-primary/10 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[1000px] h-[1000px] bg-purple-500/10 blur-[200px] rounded-full" />
      
      {/* Watermark Logo */}
      <div className="fixed inset-0 flex items-center justify-center opacity-[0.35] pointer-events-none z-[-1]">
        <img 
          src="https://storage.googleapis.com/static.aistudio.google.com/content/27vjgglgck4fmrtcdkvunu/321295361279/dragon_s_logo.png" 
          alt="" 
          className="w-[80%] max-w-4xl h-auto object-contain"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  );
};

export default BackgroundGrid;
