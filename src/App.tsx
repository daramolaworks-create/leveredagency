import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar, Footer } from './components/layout/Layout';
import { SEOManager } from './components/SEO';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Methodology } from './pages/Methodology';
import { Services } from './pages/Services';
import { Experiments } from './pages/Experiments';
import { ExperimentDetail } from './pages/ExperimentDetail';
import { CaseStudies } from './pages/CaseStudies';
import { CaseStudyDetail } from './pages/CaseStudyDetail';
import { Insights } from './pages/Insights';
import { InsightDetail } from './pages/InsightDetail';
import { Contact } from './pages/Contact';
import { Privacy, Terms } from './pages/Legal';

function ScrollToTop() {
 const { pathname } = useLocation();
 useEffect(() => {
 window.scrollTo(0, 0);
 }, [pathname]);
 return null;
}

export default function App() {
 return (
 <Router>
 <ScrollToTop />
 <SEOManager />
 <div className="min-h-screen flex flex-col">
 <Navbar />
 <main className="flex-grow">
 <Routes>
 <Route path="/" element={<Home />} />
 <Route path="/about" element={<About />} />
 <Route path="/methodology" element={<Methodology />} />
 <Route path="/services" element={<Services />} />
 <Route path="/experiments" element={<Experiments />} />
 <Route path="/experiments/:id" element={<ExperimentDetail />} />
 <Route path="/case-studies" element={<CaseStudies />} />
 <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
 <Route path="/insights" element={<Insights />} />
 <Route path="/insights/:id" element={<InsightDetail />} />
 <Route path="/contact" element={<Contact />} />
 <Route path="/privacy" element={<Privacy />} />
 <Route path="/terms" element={<Terms />} />
 </Routes>
 </main>
 <Footer />
 </div>
 </Router>
 );
}
