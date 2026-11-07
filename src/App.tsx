import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SaaS from './pages/SaaS';
import FullControl from './pages/FullControl';
import Hosting from './pages/Hosting';
import Applications from './pages/Applications';
import Contact from './pages/Contact';
import SaaSPlanDetail from './pages/SaaSPlanDetail';
import { OFFICIAL_SITE_URL } from './constants/brand';
import { useLanguage } from './contexts/useLanguage';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const timer = window.setTimeout(() => {
        const element = document.getElementById(id);
        if (!element) return;
        const offsetPosition =
          element.getBoundingClientRect().top + window.pageYOffset - 96;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }, 80);
      return () => window.clearTimeout(timer);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
};

function LanguageQueryNormalizer() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { setLanguage } = useLanguage();

  useEffect(() => {
    const lang = params.get('lang');
    if (lang !== 'fr' && lang !== 'en') return;

    setLanguage(lang);
    const next = new URLSearchParams(params);
    next.delete('lang');
    const search = next.toString();
    const cleanPath = location.pathname.replace(/\/$/, '') || '/';
    navigate({ pathname: cleanPath, search: search ? `?${search}` : '' }, { replace: true });
  }, [params, setLanguage, navigate, location.pathname]);

  return null;
}

function getOfficialRedirect(path: string): string | null {
  if (path === '/privacy') return `${OFFICIAL_SITE_URL}/fr/privacy`;
  if (path === '/legal') return `${OFFICIAL_SITE_URL}/fr/legal`;
  if (path === '/terms') return `${OFFICIAL_SITE_URL}/fr/terms`;
  if (path === '/about') return `${OFFICIAL_SITE_URL}/fr/about`;
  return null;
}

const AppContent = () => {
  const location = useLocation();
  const normalizedPath = location.pathname.replace(/\/$/, '') || '/';
  const isPlanDetailPage = /^\/saas\/[^/]+$/.test(normalizedPath);
  const officialRedirect = getOfficialRedirect(normalizedPath);

  useEffect(() => {
    if (officialRedirect) {
      window.location.replace(officialRedirect);
    }
  }, [officialRedirect]);

  if (officialRedirect) {
    return (
      <div className="flex min-h-screen items-center justify-center text-sm text-neutral-600">
        Redirection…
      </div>
    );
  }

  if (normalizedPath === '/services') {
    return <Navigate to={`/applications${location.search}`} replace />;
  }

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <LanguageQueryNormalizer />
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
          <Route path="/services" element={<Navigate to="/applications" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
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
