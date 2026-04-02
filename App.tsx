
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
          <Route path="/" element={<Home />} />
          <Route path="/serveis" element={<Services />} />
          <Route path="/casos" element={<Cases />} />
          <Route path="/recursos" element={<Resources />} />
          <Route path="/contacte" element={<Contact />} />
          <Route path="/checklist" element={<Checklist />} />
          <Route path="/agents-digitals" element={<Agents />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
