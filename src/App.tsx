import Header from './components/Header';
import PricingSection from './components/PricingSection';
import { pricingPlans } from './data/pricingPlans';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <PricingSection plans={pricingPlans} />
        
        {/* Section Contact */}
        <section id="contact" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Des questions sur nos forfaits ?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Contactez notre équipe pour obtenir plus d'informations
            </p>
            <a
              href="mailto:contact@kobecorp.com"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Nous contacter
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Kobe Corporation. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
