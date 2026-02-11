import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useSEO } from '../hooks/useSEO';
import {
  BoltIcon,
  Cog6ToothIcon,
  LockClosedIcon,
  CommandLineIcon,
  ServerStackIcon,
  KeyIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
  CubeIcon,
  CodeBracketSquareIcon,
  LifebuoyIcon,
  UserGroupIcon,
  ClipboardDocumentListIcon,
  CheckBadgeIcon,
  ArrowRightOnRectangleIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/outline';
import ModalInfoCard from '../components/ModalInfoCard';
import PricingCard from '../components/PricingCard';
import ComparisonSection from '../components/ComparisonSection';
import { fullControlPlans } from '../data/fullControlPlans';
import IncludedFeaturesSection from '../components/IncludedFeaturesSection';
import PageHero from '../components/PageHero';
import SectionFeatures from '../components/SectionFeatures';

type DynamicFullControlPlan = (typeof fullControlPlans)[number];

const FullControl = () => {
  const { t, tLang, language } = useLanguage();
  const location = useLocation();
  const [selectedPlan, setSelectedPlan] = useState<DynamicFullControlPlan | null>(null);

  // Scroll vers la section correspondant au hash (#hero, #forfaits, #missions, #processus)
  useEffect(() => {
    const hash = location.hash?.replace('#', '');
    if (!hash) return;
    const el = document.getElementById(hash);
    if (el) {
      const headerOffset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, [location.pathname, location.hash]);

  useSEO({
    title: t('fullControl.meta.title'),
    description: t('fullControl.meta.description'),
    path: '/full-control',
  });

  const featureIcons = [Cog6ToothIcon, LockClosedIcon, CommandLineIcon, ServerStackIcon];
  const features = [0, 1, 2, 3].map((i) => ({
    icon: featureIcons[i],
    titleFr: tLang(`fullControl.sectionFeatures.features.${i}.title`, 'fr'),
    titleEn: tLang(`fullControl.sectionFeatures.features.${i}.title`, 'en'),
    descriptionFr: tLang(`fullControl.sectionFeatures.features.${i}.description`, 'fr'),
    descriptionEn: tLang(`fullControl.sectionFeatures.features.${i}.description`, 'en'),
  }));

  const isUltra = selectedPlan?.id === 'ultra-speed';
  const isSpeed = selectedPlan?.id === 'speed';
  const isNormal = selectedPlan?.id === 'normal';

  return (
    <div className="min-h-screen bg-white">
      <section id="hero">
        <PageHero
          title={t('fullControl.hero.title')}
          subtitle={t('fullControl.hero.subtitle')}
          highlightLine={language === 'en' ? t('fullControl.hero.highlightLineEn') : undefined}
          primaryCta={{
            label: t('fullControl.hero.primaryCta'),
            href: '#forfaits',
            variant: 'primary',
          }}
secondaryCta={{
          label: t('fullControl.hero.secondaryCta'),
          href: '/contact',
          variant: 'outline',
        }}
        />
      </section>

      <section id="services">
        <SectionFeatures
          titleFr={tLang('fullControl.sectionFeatures.title', 'fr')}
          titleEn={tLang('fullControl.sectionFeatures.title', 'en')}
          subtitleFr={tLang('fullControl.sectionFeatures.subtitle', 'fr')}
          subtitleEn={tLang('fullControl.sectionFeatures.subtitle', 'en')}
          items={features}
        />
      </section>

      {/* Pricing Section */}
      <section id="forfaits" className="py-20 bg-gradient-to-b from-white to-brand-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold bg-brand-100 text-brand-600">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {t('fullControl.pricing.badge')}
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-ink leading-[1.1] tracking-tight mb-4">
              {t('fullControl.pricing.heading')}
            </h2>
            <p className="font-sans text-lg text-neutral-600 max-w-2xl mx-auto mb-6">
              {t('fullControl.pricing.description')}
            </p>
            {/* Délais mis en avant : 65 / 110 / 180 jours */}
            <p className="font-sans text-base font-semibold text-brand-600 mb-4">
              {t('fullControl.pricing.deliveryLevels')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium bg-brand-50 border border-brand-200">
                <KeyIcon className="h-4 w-4 text-brand-500" aria-hidden />
                <span className="text-neutral-700">{t('fullControl.pricing.badgeCodeOwnership')}</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium bg-emerald-50 border border-emerald-200 text-emerald-800">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{t('fullControl.pricing.badgeDevis48h')}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fullControlPlans.map((plan) => (
              <PricingCard
                key={plan.id}
                plan={plan}
                onSelect={(p) => setSelectedPlan(p as DynamicFullControlPlan)}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex flex-col items-center gap-3 p-6 rounded-2xl bg-white border border-neutral-200 shadow-subtle max-w-2xl mx-auto">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="font-sans text-sm font-semibold text-neutral-700">
                  {t('fullControl.pricing.paymentNote')}
                </p>
              </div>
              <p className="font-sans text-sm text-neutral-600">
                {t('fullControl.pricing.plansIncludeNote')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Features Section - Missions */}
      <section id="missions">
        <IncludedFeaturesSection
          titleFr={tLang('fullControl.included.title', 'fr')}
          titleEn={tLang('fullControl.included.title', 'en')}
          subtitleFr={tLang('fullControl.included.subtitle', 'fr')}
          subtitleEn={tLang('fullControl.included.subtitle', 'en')}
          items={[
            { icon: KeyIcon, titleFr: tLang('fullControl.included.items.0.title', 'fr'), titleEn: tLang('fullControl.included.items.0.title', 'en'), descFr: tLang('fullControl.included.items.0.desc', 'fr'), descEn: tLang('fullControl.included.items.0.desc', 'en') },
            { icon: ServerStackIcon, titleFr: tLang('fullControl.included.items.1.title', 'fr'), titleEn: tLang('fullControl.included.items.1.title', 'en'), descFr: tLang('fullControl.included.items.1.desc', 'fr'), descEn: tLang('fullControl.included.items.1.desc', 'en') },
            { icon: CommandLineIcon, titleFr: tLang('fullControl.included.items.2.title', 'fr'), titleEn: tLang('fullControl.included.items.2.title', 'en'), descFr: tLang('fullControl.included.items.2.desc', 'fr'), descEn: tLang('fullControl.included.items.2.desc', 'en') },
            { icon: DocumentTextIcon, titleFr: tLang('fullControl.included.items.3.title', 'fr'), titleEn: tLang('fullControl.included.items.3.title', 'en'), descFr: tLang('fullControl.included.items.3.desc', 'fr'), descEn: tLang('fullControl.included.items.3.desc', 'en') },
            { icon: ShieldCheckIcon, titleFr: tLang('fullControl.included.items.5.title', 'fr'), titleEn: tLang('fullControl.included.items.5.title', 'en'), descFr: tLang('fullControl.included.items.5.desc', 'fr'), descEn: tLang('fullControl.included.items.5.desc', 'en') },
            { icon: LockClosedIcon, titleFr: tLang('fullControl.included.items.6.title', 'fr'), titleEn: tLang('fullControl.included.items.6.title', 'en'), descFr: tLang('fullControl.included.items.6.desc', 'fr'), descEn: tLang('fullControl.included.items.6.desc', 'en') },
            { icon: AcademicCapIcon, titleFr: tLang('fullControl.included.items.7.title', 'fr'), titleEn: tLang('fullControl.included.items.7.title', 'en'), descFr: tLang('fullControl.included.items.7.desc', 'fr'), descEn: tLang('fullControl.included.items.7.desc', 'en') },
            { icon: Cog6ToothIcon, titleFr: tLang('fullControl.included.items.8.title', 'fr'), titleEn: tLang('fullControl.included.items.8.title', 'en'), descFr: tLang('fullControl.included.items.8.desc', 'fr'), descEn: tLang('fullControl.included.items.8.desc', 'en') },
          ]}
          cols={{ md: 2, lg: 3 }}
        />
      </section>

      {/* Stack Technique Section */}
      <section id="processus" className="py-20 bg-gradient-to-b from-brand-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-ink leading-[1.1] tracking-tight mb-4">
              {t('fullControl.stack.title')}
            </h2>
            <p className="font-sans text-lg text-neutral-600 max-w-2xl mx-auto">
              {t('fullControl.stack.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-white border border-neutral-200 shadow-subtle text-center"
              >
                <h3 className="font-display text-lg font-semibold text-ink mb-2">
                  {t(`fullControl.stack.items.${i}.title`)}
                </h3>
                <p className="font-sans text-sm text-neutral-600">
                  {t(`fullControl.stack.items.${i}.tech`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section>
        <ComparisonSection />
      </section>

      {/* Modal détails forfait Full-Control */}
      {selectedPlan && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
          role="dialog"
          aria-modal="true"
          aria-label={language === 'fr' ? `Détails du forfait ${selectedPlan.name}` : `Plan details ${selectedPlan.name}`}
        >
          <div className="relative w-full max-w-2xl max-h-[calc(100vh-2rem)] overflow-hidden rounded-3xl bg-white shadow-2xl border border-neutral-200">
            <button
              type="button"
              onClick={() => setSelectedPlan(null)}
              className="absolute right-4 top-4 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-500 hover:bg-neutral-50 hover:text-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
            >
              <span className="sr-only">{language === 'fr' ? 'Fermer la fenêtre' : 'Close dialog'}</span>
              ×
            </button>

            <div className="space-y-6 overflow-y-auto px-6 md:px-8 pb-5 md:pb-6 pt-24 max-h-[calc(100vh-2rem-3rem)]">
              <header className="sticky top-0 z-10 border-b border-neutral-100 bg-white/95 backdrop-blur pb-4 pr-8">
                <span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600 ring-1 ring-brand-200">
                  {language === 'fr' ? 'Détail du forfait Full-Control' : 'Full-Control plan details'}
                </span>
                <h3 className="mt-3 font-display text-3xl font-semibold text-ink leading-tight">
                  {selectedPlan.name}
                </h3>
                <p className="mt-2 text-sm text-neutral-600">
                  {selectedPlan.description}
                </p>
              </header>

              <section className="space-y-3 pt-1">
                <h4 className="text-sm font-semibold text-neutral-800">
                  {language === 'fr' ? 'Détails du forfait' : 'Plan details'}
                </h4>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                  <ModalInfoCard
                    icon={BoltIcon}
                    title={language === 'fr' ? 'Comment ce forfait fonctionne concrètement' : 'How this plan works in practice'}
                    description={
                      (isUltra && (language === 'fr'
                        ? 'Livraison express, coût premium. Équipe dédiée à temps plein sur votre projet.'
                        : 'Express delivery with premium cost. A dedicated full-time team works only on your project.')) ||
                      (isSpeed && (language === 'fr'
                        ? 'Équilibre optimal. Recommandé pour la plupart des projets métier.'
                        : 'Optimal balance. Recommended for most business projects.')) ||
                      (isNormal && (language === 'fr'
                        ? 'Budget optimisé, qualité maximale. Rythme de développement confortable.'
                        : 'Optimised budget with maximum quality. Comfortable development pace.')) ||
                      ''
                    }
                    tone="amber"
                  />
                  <ModalInfoCard
                    icon={CubeIcon}
                    title={language === 'fr' ? 'Que comprend chaque forfait Full Control ?' : 'What is included in every Full Control plan?'}
                    description={
                      language === 'fr'
                        ? "Tous les forfaits Full Control incluent : Code source (100% votre propriété), API REST (Backend), Front-end, Documentation complète, Serveur Virtuel Privé (personnalisable), Certificat SSL, Nom de domaine personnalisé, sauvegardes automatiques, sécurité maximale (HTTPS, JWT, protection contre piratage), contrats clairs et protecteurs, période de garantie incluse (1 à 6 mois selon forfait)."
                        : 'All Full Control plans include: Source code (100% your property), REST API (backend), front-end, full documentation, Virtual Private Server (customisable), SSL certificate, custom domain, automated backups, strong security (HTTPS, JWT, protection against hacking), clear and protective contracts, and an included warranty period (1 to 6 months depending on the plan).'
                    }
                    tone="blue"
                  />
                </div>
                <ModalInfoCard
                  icon={CodeBracketSquareIcon}
                  title={language === 'fr' ? 'Stack technique' : 'Technical stack'}
                  description={
                    <>
                      {language === 'fr'
                        ? "Technologies modernes, robustes et scalables : Backend Spring Boot (Kotlin/Java) - API RESTful JWT. Frontend React + Vite avec Tailwind CSS. Base de données MongoDB (NoSQL). Sécurité JWT, HTTPS/SSL, validation des entrées, protection XSS/CSRF. Infrastructure VPS (Ubuntu), Nginx, PM2, Docker (forfait Normal), CI/CD (Normal)."
                        : 'Modern, robust and scalable: Backend Spring Boot (Kotlin/Java) – REST API with JWT. Frontend React + Vite with Tailwind CSS. Database MongoDB (NoSQL). Security JWT, HTTPS/SSL, input validation, XSS/CSRF protection. Infrastructure VPS (Ubuntu), Nginx, PM2, Docker (Normal plan), CI/CD (Normal).'}
                      {' '}
                      {language === 'fr'
                        ? 'Compléments : Redis (Speed & Normal), Docker et CI/CD (Normal).'
                        : 'Extras: Redis (Speed & Normal), Docker and CI/CD (Normal).'}
                    </>
                  }
                  tone="neutral"
                />
                <ModalInfoCard
                  icon={ServerStackIcon}
                  title={language === 'fr' ? 'Infrastructure & hébergement' : 'Infrastructure & hosting'}
                  description={
                    (isUltra && (language === 'fr'
                      ? "VPS : 2 vCPU, 4GB RAM, 80GB SSD (année 1 offerte). Domaine : 1 personnalisé (.cm, .com, .fr, .net) – 1 an. SSL Let's Encrypt. Emails : non inclus. CDN Cloudflare Gratuit. Sauvegardes : hebdomadaires (14 jours)."
                      : 'VPS: 2 vCPU, 4 GB RAM, 80 GB SSD (first year included). Domain: 1 custom (.cm, .com, .fr, .net) – 1 year. SSL Let’s Encrypt. Emails: not included. CDN Cloudflare Free. Backups: weekly (14 days).')) ||
                    (isSpeed && (language === 'fr'
                      ? "VPS : 4 vCPU, 8GB RAM, 160GB SSD (année 1 offerte). Domaine : 1 personnalisé – 1 an. SSL Premium auto. Emails : 5 adresses (10 Go). CDN Cloudflare Pro (1 an). Sauvegardes : quotidiens (30j) + backup externe."
                      : 'VPS: 4 vCPU, 8 GB RAM, 160 GB SSD (first year). Domain: 1 custom – 1 year. SSL Premium auto. Emails: 5 (10 GB each). CDN Cloudflare Pro (1 year). Backups: daily (30 days) + external.')) ||
                    (isNormal && (language === 'fr'
                      ? "VPS : 8 vCPU, 16GB RAM, 320GB SSD (année 1 offerte). Domaine : 1 personnalisé – à vie. SSL Premium auto. Emails : 10 adresses (20 Go). CDN Cloudflare Pro + Argo (1 an). Sauvegardes : 6h/quotidien/hebdo + triple backup externe."
                      : 'VPS: 8 vCPU, 16 GB RAM, 320 GB SSD (first year). Domain: 1 custom – lifetime. SSL Premium auto. Emails: 10 (20 GB each). CDN Cloudflare Pro + Argo (1 year). Backups: 6h/daily/weekly + triple external.')) ||
                    ''
                  }
                  tone="slate"
                />
              </section>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                <ModalInfoCard
                  icon={ShieldCheckIcon}
                  title={language === 'fr' ? 'Mesures de sécurité' : 'Security measures'}
                  description={
                    <>
                      {language === 'fr'
                        ? "Authentification JWT + bcrypt. Validation des entrées, protection XSS/CSRF, rate limiting. Helmet.js, CORS. Serveur : UFW, SSH clés, Fail2ban, mises à jour."
                        : 'JWT + bcrypt authentication. Input validation, XSS/CSRF protection, rate limiting. Helmet.js, CORS. Server: UFW, SSH keys, Fail2ban, updates.'}
                      {(isSpeed || isNormal) && (
                        language === 'fr'
                          ? " Niveau avancé : tests sécurité auto, OWASP Top 10, CSP (Speed & Normal)."
                          : ' Advanced: automated security tests, OWASP Top 10, CSP (Speed & Normal).'
                      )}
                      {isNormal && (
                        language === 'fr'
                          ? ' Normal : pentest, WAF, anti-bots, anti-DDoS, RGPD.'
                          : ' Normal: pentest, WAF, bot/DDoS protection, GDPR.'
                      )}
                    </>
                  }
                  tone="indigo"
                />
                <ModalInfoCard
                  icon={AcademicCapIcon}
                  title={language === 'fr' ? 'Formation incluse' : 'Training included'}
                  description={
                    (isUltra && (language === 'fr'
                      ? '2 sessions (4h) : utilisation (2h) + admin & technique (2h). Visio enregistrée, 3–10 participants.'
                      : '2 sessions (4h): usage (2h) + admin & technical (2h). Recorded sessions, 3–10 participants.')) ||
                    (isSpeed && (language === 'fr'
                      ? '3 sessions (7h) : métier (3h) + admin (2h) + technique (2h). Visio enregistrée.'
                      : '3 sessions (7h): business (3h) + admin (2h) + technical (2h). Recorded.')) ||
                    (isNormal && (language === 'fr'
                      ? '4 sessions (12h) : utilisateurs (4h) + gestionnaires (3h) + admins (3h) + devs (2h).'
                      : '4 sessions (12h): users (4h) + managers (3h) + admins (3h) + devs (2h).')) ||
                    ''
                  }
                  tone="blue"
                />
                <ModalInfoCard
                  icon={LifebuoyIcon}
                  title={language === 'fr' ? 'Support post‑livraison' : 'Post‑delivery support'}
                  description={
                    (isUltra && (language === 'fr'
                      ? "1 mois : email 24h, WhatsApp urgence, 1 visio 30 min. Bugs : critiques 24–48h, majeurs 3–5 j, mineurs 7 j."
                      : '1 month: email 24h, WhatsApp emergency, 1 visio 30 min. Bugs: critical 24–48h, major 3–5 days, minor 7 days.')) ||
                    (isSpeed && (language === 'fr'
                      ? "3 mois : email 24h, WhatsApp 9h–18h, 2 appels/mois, 1 visio/mois. Critiques 24h, majeurs 48–72h."
                      : '3 months: email 24h, WhatsApp 9am–6pm, 2 calls/month, 1 visio/month. Critical 24h, major 48–72h.')) ||
                    (isNormal && (language === 'fr'
                      ? "6 mois : email prioritaire 12h 7j/7, WhatsApp VIP, appels illimités, Slack/Discord. Critiques 12h (week-ends inclus)."
                      : '6 months: priority email 12h 7/7, VIP WhatsApp, unlimited calls, Slack/Discord. Critical 12h (weekends).')) ||
                    ''
                  }
                  tone="neutral"
                />
                <ModalInfoCard
                  icon={ShieldCheckIcon}
                  title={language === 'fr' ? 'Garantie & assurances' : 'Warranty & guarantees'}
                  description={
                    (isUltra && (language === 'fr'
                      ? 'Garantie 1 mois : critiques 24–48h, majeurs 3–5 jours.'
                      : '1‑month warranty: critical 24–48h, major 3–5 days.')) ||
                    (isSpeed && (language === 'fr'
                      ? 'Garantie 3 mois : critiques 24h, majeurs 48–72h, mineurs 7 jours.'
                      : '3‑month: critical 24h, major 48–72h, minor 7 days.')) ||
                    (isNormal && (language === 'fr'
                      ? "Garantie 6 mois : zéro bug critique, corrections illimitées jusqu'à résolution."
                      : '6‑month: zero critical bug, unlimited fixes until resolution.')) ||
                    ''
                  }
                  tone="amber"
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                <ModalInfoCard
                  icon={UserGroupIcon}
                  title={language === 'fr' ? 'Pour qui est ce modèle ?' : 'Who is this model for?'}
                  description={
                    language === 'fr'
                      ? "Parfait pour les entreprises et projets où le logiciel est stratégique et doit être entièrement détenu (code, architecture, évolutions long terme). Idéal pour entrepreneurs avec deadline serrée (Ultra Speed), PME en croissance voulant équilibre qualité/prix (Speed), ou entreprises établies exigeant qualité premium (Normal)."
                      : 'Perfect for companies and projects where software is strategic and must be fully owned (code, architecture, long‑term evolutions). Ideal for entrepreneurs with tight deadlines (Ultra Speed), growing SMEs seeking a quality/price balance (Speed), or established companies demanding premium quality (Normal).'
                  }
                  tone="rose"
                />
                <ModalInfoCard
                  icon={KeyIcon}
                  title={language === 'fr' ? 'Propriété intellectuelle & droits' : 'Intellectual property & rights'}
                  description={
                    language === 'fr'
                      ? "Vous devenez propriétaire à 100% du code source et de toute la propriété intellectuelle une fois les jalons et paiements prévus atteints. Vous recevez : code source complet (repository Git), API REST backend, frontend, schéma de base de données, documentation et tous les assets associés. Vous pouvez librement modifier, distribuer, revendre ou créer des produits dérivés."
                      : 'You become 100% owner of the source code and all intellectual property once milestones and payments are completed. You receive: full source code (Git repository), REST API backend, frontend, database schema, documentation and all related assets. You can freely modify, distribute, resell or build derived products.'
                  }
                  tone="amber"
                />
                <ModalInfoCard
                  icon={ClipboardDocumentListIcon}
                  title={language === 'fr' ? 'Vos responsabilités' : 'Your responsibilities'}
                  description={
                    language === 'fr'
                      ? "Fournir un cahier des charges détaillé ou participer à un atelier de cadrage (J1–J5), valider les spécifications sous 48h à 5 jours (selon forfait), participer aux démos jalons et donner un feedback clair, fournir les contenus (textes, images, logos) sous 7 jours si demandé, désigner un interlocuteur principal et payer les acomptes à temps (50% à la signature, 50% à la livraison)."
                      : 'Provide a detailed specification or join a scoping workshop (D1–D5), validate specifications within 48h to 5 days (depending on the plan), attend milestone demos and give clear feedback, provide content (texts, images, logos) within 7 days when requested, nominate a main contact person and pay deposits on time (50% at signature, 50% on delivery).'
                  }
                  tone="neutral"
                />
                <ModalInfoCard
                  icon={CheckBadgeIcon}
                  title={language === 'fr' ? 'Nos responsabilités' : 'Our responsibilities'}
                  description={
                    language === 'fr'
                      ? "Respecter les délais de livraison (65–180 jours selon forfait), livrer un code fonctionnel et testé, fournir une documentation complète (40–200 pages selon forfait), réaliser les sessions de formation (2–4 sessions, 4–12h au total), assurer le support post‑livraison (1 à 6 mois), maintenir un haut standard de qualité de code et transférer tous les accès (serveur, domaine, dépôt Git) à la livraison."
                      : 'Respect delivery deadlines (65–180 days depending on the plan), deliver functional and tested code, provide full documentation (40–200 pages depending on the plan), run all training sessions (2–4 sessions, 4–12h total), ensure post‑delivery support (1 to 6 months), maintain high code quality standards and transfer all accesses (server, domain, Git repository) upon delivery.'
                  }
                  tone="indigo"
                />
                <ModalInfoCard
                  icon={ArrowRightOnRectangleIcon}
                  title={language === 'fr' ? 'Si vous arrêtez la collaboration' : 'If you stop the collaboration'}
                  description={
                    <>
                      <span>
                        {language === 'fr'
                          ? "Vous conservez tout le code livré et la documentation, conformément au contrat signé. Vous pouvez continuer avec votre équipe interne ou un autre prestataire : le code source reste 100% votre propriété. Vous pouvez migrer vos données vers une autre solution. Un support à la migration est disponible (optionnel, facturé séparément)."
                          : 'You keep all delivered code and documentation according to the signed contract. You can continue with your internal team or another provider: the source code remains 100% your property. You can migrate your data to another solution. Migration support is available as an optional, billed service.'}
                      </span>
                      <span className="mt-2 block text-xs text-neutral-500">
                        {language === 'fr'
                          ? "Cette fiche n'est pas un contrat juridique, mais une explication claire de la façon dont le modèle fonctionne. Le contrat final est validé ensemble lors de la discussion sur votre projet."
                          : 'This sheet is not a legal contract but a clear explanation of how the model works. The final contract is validated together when we discuss your project.'}
                      </span>
                    </>
                  }
                  tone="slate"
                />
              </div>


              {selectedPlan.priceRange && (
                <ModalInfoCard
                  icon={CurrencyDollarIcon}
                  title={language === 'fr' ? 'Mode de tarification' : 'Pricing mode'}
                  description={
                    <>
                      <span>
                        {language === 'fr'
                          ? 'Prix discutable selon le périmètre et la complexité du projet.'
                          : 'Negotiable price depending on scope and project complexity.'}
                      </span>
                      <span className="mt-1 block text-xs text-neutral-500">
                        {language === 'fr'
                          ? `Durée estimée : ${selectedPlan.priceRange.deliveryDays} jours de développement.`
                          : `Estimated duration: ${selectedPlan.priceRange.deliveryDays} development days.`}
                      </span>
                    </>
                  }
                  tone="amber"
                />
              )}

              <div>
                <p className="text-sm font-semibold text-neutral-700 mb-3">
                  {language === 'fr' ? 'Fonctionnalités détaillées du forfait :' : 'Detailed plan features:'}
                </p>
                <ul className="space-y-2 rounded-xl border border-neutral-200 bg-neutral-50/60 p-4">
                  {selectedPlan.features.map((feature) => (
                    <li key={feature.name} className="text-sm flex items-start gap-3">
                      {feature.included ? (
                        <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                          ✓
                        </span>
                      ) : (
                        <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
                          ×
                        </span>
                      )}
                      <span className={feature.included ? 'text-neutral-700' : 'text-red-600'}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-1 flex flex-col-reverse sm:flex-row sm:justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedPlan(null)}
                  className="inline-flex items-center justify-center rounded-xl border border-neutral-200 px-4 py-2.5 text-sm font-semibold text-neutral-700 hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                >
                  {language === 'fr' ? 'Fermer' : 'Close'}
                </button>
                <a
                  href={selectedPlan.ctaLink}
                  className="inline-flex items-center justify-center rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-brand-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                >
                  {selectedPlan.ctaText || (language === 'fr' ? 'Demander un devis' : 'Request a quote')}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FullControl;
