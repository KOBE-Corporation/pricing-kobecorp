import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import PricingSection from './components/PricingSection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { pricingPlans } from './data/pricingPlans';
import { companyInfo } from './data/companyInfo';
import { useLanguage } from './contexts/LanguageContext';
import Button from './components/Button';

const AppContent = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <PricingSection plans={pricingPlans} />

        <FAQ />

        {/* Section Contact */}
        <section id="contact" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl font-semibold text-ink mb-4">
              {t('contact.title')}
            </h2>
            <p className="font-sans text-lg text-neutral-600 mb-8">
              {t('contact.subtitle')}
            </p>
            <Button
              variant="primary"
              size="lg"
              href={`mailto:${companyInfo.contact.email}`}
            >
              {t('contact.cta')}
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
