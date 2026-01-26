import Header from './components/Header';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';
import { pricingPlans } from './data/pricingPlans';
import { companyInfo } from './data/companyInfo';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <PricingSection plans={pricingPlans} />

        {/* Section Contact */}
        <section id="contact" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl font-semibold text-ink mb-4">
              Des questions sur nos forfaits ?
            </h2>
            <p className="font-sans text-lg text-neutral-600 mb-8">
              Contactez notre équipe pour obtenir plus d'informations
            </p>
            <a
              href={`mailto:${companyInfo.contact.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-8 py-3.5 text-sm font-semibold text-white shadow-md hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-lg transition-all"
            >
              Nous contacter
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
