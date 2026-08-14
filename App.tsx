
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Cases from './pages/Cases';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import Checklist from './pages/Checklist';
import Agents from './pages/Agents';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>

          {/* =========================
              CATALÀ — IDIOMA PRINCIPAL
              ========================= */}

          <Route path="/" element={<Home />} />
          <Route path="/serveis" element={<Services />} />
          <Route path="/agents-digitals" element={<Agents />} />
          <Route path="/casos" element={<Cases />} />
          <Route path="/recursos" element={<Resources />} />
          <Route path="/contacte" element={<Contact />} />
          <Route path="/checklist" element={<Checklist />} />


          {/* =========================
              CASTELLANO
              ========================= */}

          <Route path="/es" element={<Home />} />
          <Route path="/es/" element={<Home />} />

          <Route path="/es/servicios" element={<Services />} />
          <Route path="/es/agentes-digitales" element={<Agents />} />
          <Route path="/es/casos" element={<Cases />} />
          <Route path="/es/recursos" element={<Resources />} />
          <Route path="/es/contacto" element={<Contact />} />
          <Route path="/es/checklist" element={<Checklist />} />


          {/* =========================
              ENGLISH
              ========================= */}

          <Route path="/en" element={<Home />} />
          <Route path="/en/" element={<Home />} />

          <Route path="/en/services" element={<Services />} />
          <Route path="/en/digital-agents" element={<Agents />} />
          <Route path="/en/cases" element={<Cases />} />
          <Route path="/en/resources" element={<Resources />} />
          <Route path="/en/contact" element={<Contact />} />
          <Route path="/en/checklist" element={<Checklist />} />

        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
