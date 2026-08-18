import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import { Loader2 } from 'lucide-react';

const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const DigitalAgents = lazy(() => import('./pages/Agents'));
const SectorsDetail = lazy(() => import('./pages/SectorsDetail'));
const Contact = lazy(() => import('./pages/Contact'));
const AutomationGuide = lazy(() => import('./pages/AutomationGuide'));
const Masterclass = lazy(() => import('./pages/Masterclass'));
const Checklist = lazy(() => import('./pages/Checklist'));

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

const PageLoader = () => (
  <div className="min-h-screen bg-brand-surface flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <Loader2 className="w-8 h-8 text-brand-primary animate-spin" />
      <span className="text-xs uppercase tracking-widest text-gray-500 font-bold">Cargando SKIRION...</span>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Servicios & Agentes */}
            <Route path="/servicios" element={<Services />} />
            <Route path="/serveis" element={<Services />} />
            <Route path="/services" element={<Services />} />
            <Route path="/agentes-digitales" element={<DigitalAgents />} />
            <Route path="/agents-digitals" element={<DigitalAgents />} />
            <Route path="/digital-agents" element={<DigitalAgents />} />
            
            {/* Sectores */}
            <Route path="/sectors/:id" element={<SectorsDetail />} />
            <Route path="/sectores/:id" element={<SectorsDetail />} />
            <Route path="/sectors" element={<Home />} />
            <Route path="/sectores" element={<Home />} />
            
            {/* Planes & Contacto */}
            <Route path="/planes" element={<Home />} />
            <Route path="/plans" element={<Home />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/contacte" element={<Contact />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Diagnóstico & Recursos */}
            <Route path="/checklist" element={<Checklist />} />
            <Route path="/diagnostic" element={<Checklist />} />
            <Route path="/diagnostico" element={<Checklist />} />
            <Route path="/recursos/guia-automatizacion" element={<AutomationGuide />} />
            <Route path="/recursos/masterclass-content-engine" element={<Masterclass />} />
            
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
