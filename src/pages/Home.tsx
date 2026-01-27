import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import PricingSection from '../components/PricingSection';
import FAQ from '../components/FAQ';
import { pricingPlans } from '../data/pricingPlans';
import { companyInfo } from '../data/companyInfo';
import { useLanguage } from '../contexts/LanguageContext';
import Button from '../components/Button';

const Home = () => {
  const { t, language } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <PricingSection plans={pricingPlans} />
      <FAQ />

      {/* Section Contact */}
      <section id="contact" className="py-20 bg-gradient-to-b from-brand-50/50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4">
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
              style={{ backgroundColor: '#e0efff', color: '#0066e6' }}
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              {t('contact.title')}
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-4">
            {t('contact.subtitle')}
          </h2>
          <p className="font-sans text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
            {language === 'fr'
              ? 'Notre équipe est prête à répondre à toutes vos questions et à vous aider à choisir le forfait idéal.'
              : 'Our team is ready to answer all your questions and help you choose the perfect plan.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="primary" size="lg" href={`mailto:${companyInfo.contact.email}`}>
              {t('contact.cta')}
            </Button>
            <Button variant="outline" size="lg" href={`tel:${companyInfo.contact.phone}`}>
              {companyInfo.contact.phone}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
