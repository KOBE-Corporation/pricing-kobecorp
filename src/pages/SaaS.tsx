import { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { CodeBracketIcon, ServerIcon, ChartBarIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import PricingCard from '../components/PricingCard';
import ComparisonSection from '../components/ComparisonSection';
import { saasPlans } from '../data/saasPlans';
import IncludedFeaturesSection from '../components/IncludedFeaturesSection';
import ContactCTA from '../components/ContactCTA';
import PageHero from '../components/PageHero';
import SectionFeatures from '../components/SectionFeatures';

const SaaS = () => {
  const { language } = useLanguage();
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');

  // SEO : titre par page
  useEffect(() => {
    document.title =
      language === 'fr'
        ? 'Services SaaS – Kobe Corporation'
        : 'SaaS Services – Kobe Corporation';
  }, [language]);

  // Prix annuels avec économie de 16%
  const annualPrices = {
    'good-deal': 156000,
    'pro': 258400,
    'ultra': 430800,
  };

  // Créer les plans avec prix dynamiques
  const plansWithDynamicPricing = saasPlans.map((plan) => {
    if (billingPeriod === 'annual') {
      return {
        ...plan,
        price: annualPrices[plan.id as keyof typeof annualPrices],
        period: language === 'fr' ? 'an' : 'year',
        originalPrice: plan.price,
      };
    }
    return {
      ...plan,
      period: language === 'fr' ? 'mois' : 'month',
    };
  });

  const features = [
    {
      icon: CodeBracketIcon,
      titleFr: 'Développement SaaS sur mesure',
      titleEn: 'Custom SaaS Development',
      descriptionFr:
        'Créez des applications SaaS scalables et performantes adaptées à vos besoins spécifiques.',
      descriptionEn: 'Build scalable and performant SaaS applications tailored to your specific needs.',
    },
    {
      icon: ServerIcon,
      titleFr: 'Infrastructure Cloud',
      titleEn: 'Cloud Infrastructure',
      descriptionFr:
        'Déploiement et gestion de votre infrastructure cloud pour une disponibilité maximale.',
      descriptionEn: 'Deploy and manage your cloud infrastructure for maximum availability.',
    },
    {
      icon: ChartBarIcon,
      titleFr: 'Analytics & Reporting',
      titleEn: 'Analytics & Reporting',
      descriptionFr:
        'Intégration d\'outils d\'analyse avancés pour suivre les performances de votre SaaS.',
      descriptionEn: 'Integration of advanced analytics tools to track your SaaS performance.',
    },
    {
      icon: ShieldCheckIcon,
      titleFr: 'Sécurité & Conformité',
      titleEn: 'Security & Compliance',
      descriptionFr:
        'Mise en place de mesures de sécurité robustes et conformité aux standards internationaux.',
      descriptionEn: 'Implementation of robust security measures and compliance with international standards.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title={language === 'fr' ? 'Services SaaS' : 'SaaS Services'}
        subtitle={
          language === 'fr'
            ? 'Solution rapide et autonome : applications disponibles et configurées en 15 jours maximum. Développez et déployez des applications SaaS performantes et scalables pour transformer votre entreprise.'
            : 'Fast, autonomous solution: applications available and configured within 15 days max. Develop and deploy performant, scalable SaaS applications to transform your business.'
        }
        highlightLine={
          language === 'fr'
            ? '✓ Mise en production rapide — ✓ Hébergement et maintenance inclus — ✓ Sans équipe technique'
            : '✓ Quick launch — ✓ Hosting & maintenance included — ✓ No technical team required'
        }
        primaryCta={{
          label: language === 'fr' ? 'Voir les forfaits' : 'View Plans',
          href: '#forfaits',
          variant: 'primary',
        }}
        secondaryCta={{
          label: language === 'fr' ? 'Nous contacter' : 'Contact Us',
          href: '#contact',
          variant: 'outline',
        }}
      />

      <SectionFeatures
        titleFr="Nos Services SaaS"
        titleEn="Our SaaS Services"
        subtitleFr="Des solutions complètes pour créer, déployer et maintenir vos applications SaaS."
        subtitleEn="Complete solutions to create, deploy and maintain your SaaS applications."
        items={features}
      />

      {/* Pricing Section */}
      <section id="forfaits" className="py-20 bg-gradient-to-b from-white to-brand-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
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
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {language === 'fr' ? 'Nos Forfaits SaaS' : 'Our SaaS Plans'}
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-4">
              {language === 'fr'
                ? 'Choisissez le forfait adapté à vos besoins'
                : 'Choose the plan that fits your needs'}
            </h2>
            <p className="font-sans text-lg text-neutral-600 max-w-2xl mx-auto mb-6">
              {language === 'fr'
                ? 'Tous nos forfaits incluent l\'hébergement sécurisé, la maintenance, les mises à jour de sécurité, l\'accès 24/7, le certificat SSL et les sauvegardes automatisées.'
                : 'All our plans include secure hosting, maintenance, security updates, 24/7 access, SSL certificate and automated backups.'}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-2">
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium bg-brand-50 border border-brand-200">
                <svg className="h-4 w-4" style={{ color: '#0a7aff' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-neutral-700">
                  {language === 'fr'
                    ? 'Applications disponibles et configurées : 15 jours maximum'
                    : 'Applications available and configured: 15 days maximum'}
                </span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium bg-green-50 border border-green-200 text-green-800">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>
                  {language === 'fr' ? 'Solution rapide et autonome' : 'Fast & autonomous solution'}
                </span>
              </div>
            </div>
          </div>

          {/* Billing Toggle */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-3 p-1 rounded-full bg-white border border-neutral-200 shadow-subtle">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`px-6 py-2 rounded-full font-semibold text-sm transition-all ${
                  billingPeriod === 'monthly'
                    ? 'text-white shadow-md'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
                style={
                  billingPeriod === 'monthly'
                    ? { backgroundColor: '#0a7aff' }
                    : { backgroundColor: 'transparent' }
                }
                onMouseEnter={(e) => {
                  if (billingPeriod !== 'monthly') {
                    e.currentTarget.style.backgroundColor = '#f0f7ff';
                  }
                }}
                onMouseLeave={(e) => {
                  if (billingPeriod !== 'monthly') {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                {language === 'fr' ? 'Mensuel' : 'Monthly'}
              </button>
              <button
                onClick={() => setBillingPeriod('annual')}
                className={`px-6 py-2 rounded-full font-semibold text-sm transition-all relative ${
                  billingPeriod === 'annual'
                    ? 'text-white shadow-md'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
                style={
                  billingPeriod === 'annual'
                    ? { backgroundColor: '#0a7aff' }
                    : { backgroundColor: 'transparent' }
                }
                onMouseEnter={(e) => {
                  if (billingPeriod !== 'annual') {
                    e.currentTarget.style.backgroundColor = '#f0f7ff';
                  }
                }}
                onMouseLeave={(e) => {
                  if (billingPeriod !== 'annual') {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                {language === 'fr' ? 'Annuel' : 'Annual'}
                {billingPeriod === 'annual' && (
                  <span className="absolute -top-2 -right-2 bg-accent-500 text-white text-xs px-2 py-0.5 rounded-full">
                    -16%
                  </span>
                )}
              </button>
            </div>
          </div>
          {billingPeriod === 'annual' && (
            <p className="text-center text-sm font-semibold text-green-700 mb-6">
              {language === 'fr'
                ? 'Économisez 30 000 F à 60 000 F selon le forfait (jusqu\'à 60 000 F sur Ultra)'
                : 'Save 30,000 to 60,000 FCFA depending on plan (up to 60,000 F on Ultra)'}
            </p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plansWithDynamicPricing.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex flex-col items-center gap-3 p-6 rounded-2xl bg-white border border-neutral-200 shadow-subtle max-w-2xl mx-auto">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5" style={{ color: '#0a7aff' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="font-sans text-sm font-semibold text-neutral-700">
                  {language === 'fr'
                    ? 'Tous les prix sont hors taxes (HT)'
                    : 'All prices are excluding taxes (HT)'}
                </p>
              </div>
              <p className="font-sans text-sm text-neutral-600">
                {language === 'fr'
                  ? '💰 Économisez 16% avec le paiement annuel (30 000 F à 60 000 F d\'économies selon le forfait)'
                  : '💰 Save 16% with annual payment (30,000 to 60,000 FCFA savings depending on plan)'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Features Section */}
      <IncludedFeaturesSection
        titleFr="Inclus dans tous les forfaits"
        titleEn="Included in all plans"
        subtitleFr="Ces fonctionnalités sont communes à tous nos forfaits SaaS"
        subtitleEn="These features are common to all our SaaS plans"
        items={[
          {
            titleFr: 'Hébergement sécurisé',
            titleEn: 'Secure hosting',
            descFr: 'Application hébergée sur des serveurs sécurisés',
            descEn: 'Application hosted on secure servers',
          },
          {
            titleFr: 'Maintenance & mises à jour',
            titleEn: 'Maintenance & updates',
            descFr: 'Maintenance régulière et mises à jour de sécurité',
            descEn: 'Regular maintenance and security updates',
          },
          {
            titleFr: 'Accès 24/7',
            titleEn: '24/7 access',
            descFr: 'Disponibilité continue de l\'application',
            descEn: 'Continuous application availability',
          },
          {
            titleFr: 'Certificat SSL (HTTPS)',
            titleEn: 'SSL Certificate (HTTPS)',
            descFr: 'Connexion sécurisée et chiffrée',
            descEn: 'Secure and encrypted connection',
          },
          {
            titleFr: 'Sauvegardes automatisées',
            titleEn: 'Automated backups',
            descFr: 'Sauvegardes régulières des données',
            descEn: 'Regular data backups',
          },
          {
            titleFr: 'Support technique',
            titleEn: 'Technical support',
            descFr: 'Assistance technique selon le niveau du forfait',
            descEn: 'Technical assistance according to plan level',
          },
        ]}
        cols={{ md: 2, lg: 2 }}
      />

      {/* Comparison Section */}
      <ComparisonSection />

      {/* CTA Section commune */}
      <ContactCTA
        id="contact"
        titleFr="Prêt à lancer votre SaaS ?"
        titleEn="Ready to launch your SaaS?"
        subtitleFr="Contactez-nous pour discuter de votre projet SaaS."
        subtitleEn="Contact us to discuss your SaaS project."
        mailSubjectSuffix="Projet SaaS"
      />
    </div>
  );
};

export default SaaS;
