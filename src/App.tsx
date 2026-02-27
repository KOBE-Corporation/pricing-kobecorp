import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SaaS from './pages/SaaS';
import FullControl from './pages/FullControl';
import Hosting from './pages/Hosting';
import Applications from './pages/Applications';
import Contact from './pages/Contact';
import SaaSPlanDetail from './pages/SaaSPlanDetail';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppContent = () => {
  const { pathname } = useLocation();
  const isPlanDetailPage = /^\/saas\/[^/]+$/.test(pathname);

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      {!isPlanDetailPage && <Header />}
      <main>
        <Routes>
          <Route path="/" element={<SaaS />} />
          <Route path="/saas" element={<SaaS />} />
          <Route path="/saas/:planId" element={<SaaSPlanDetail />} />
          <Route path="/full-control" element={<FullControl />} />
          <Route path="/hebergement" element={<Hosting />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/applications" element={<Applications />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
