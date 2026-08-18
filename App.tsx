import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import { Loader2 } from 'lucide-react';

// Lazy loading pages for optimal performance
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const DigitalAgents = lazy(() => import('./pages/DigitalAgents'));
const Sectors = lazy(() => import('./pages/Sectors'));
const SectorDetail = lazy(() => import('./pages/SectorDetail'));
const Contact = lazy(() => import('./pages/Contact'));
const Plans = lazy(() => import('./pages/MembershipPlans'));
const Careers = lazy(() => import('./pages/Careers'));
const AutomationGuide = lazy(() => import('./pages/AutomationGuide'));
const Masterclass = lazy(() => import('./pages/Masterclass'));
const Checklist = lazy(() => import('./pages/Checklist'));
const Diagnostic = lazy(() => import('./pages/Diagnostic'));
const LegalNotice = lazy(() => import('./pages/LegalNotice'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const CookiePolicy = lazy(() => import('./pages/CookiePolicy'));
const NotFound = lazy(() => import('./pages/NotFound'));

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
            <Route path="/sectores" element={<Sectors />} />
            <Route path="/sectors" element={<Sectors />} />
            <Route path="/sectores/:id" element={<SectorDetail />} />
            <Route path="/sectors/:id" element={<SectorDetail />} />
            
            {/* Planes & Precios */}
            <Route path="/planes" element={<Plans />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/precios" element={<Plans />} />
            <Route path="/preus" element={<Plans />} />
            <Route path="/pricing" element={<Plans />} />
            
            {/* Contacto & Diagnóstico */}
            <Route path="/contacto" element={<Contact />} />
            <Route path="/contacte" element={<Contact />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/checklist" element={<Checklist />} />
            <Route path="/diagnostic" element={<Diagnostic />} />
            <Route path="/diagnostico" element={<Diagnostic />} />
            <Route path="/diagnòstic" element={<Diagnostic />} />
            
            {/* Recursos & Formación */}
            <Route path="/recursos/guia-automatizacion" element={<AutomationGuide />} />
            <Route path="/recursos/masterclass-content-engine" element={<Masterclass />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/carreres" element={<Careers />} />
            
            {/* Legal */}
            <Route path="/aviso-legal" element={<LegalNotice />} />
            <Route path="/avis-legal" element={<LegalNotice />} />
            <Route path="/politica-privacidad" element={<PrivacyPolicy />} />
            <Route path="/politica-privacitat" element={<PrivacyPolicy />} />
            <Route path="/politica-cookies" element={<CookiePolicy />} />
            
            {/* 404 Not Found */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
