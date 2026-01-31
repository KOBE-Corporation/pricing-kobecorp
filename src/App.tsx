import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SaaS from './pages/SaaS';
import FullControl from './pages/FullControl';
import Hosting from './pages/Hosting';
import Applications from './pages/Applications';

const AppContent = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<SaaS />} />
          <Route path="/saas" element={<SaaS />} />
          <Route path="/full-control" element={<FullControl />} />
          <Route path="/hebergement" element={<Hosting />} />
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
