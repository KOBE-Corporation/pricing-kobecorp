import { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useSEO } from '../hooks/useSEO';
import { companyInfo } from '../data/companyInfo';
import FAQ from '../components/FAQ';
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
  XCircleIcon,
  PaperClipIcon,
} from '@heroicons/react/24/outline';

const projectTypes = [
  { value: 'web', label: 'Développement Web', labelEn: 'Web Development' },
  { value: 'mobile', label: 'Développement Mobile', labelEn: 'Mobile Development' },
  { value: 'hosting', label: 'Hébergement', labelEn: 'Hosting' },
  { value: 'training', label: 'Formation', labelEn: 'Training' },
  { value: 'consulting', label: 'Consultation', labelEn: 'Consulting' },
  { value: 'other', label: 'Autre', labelEn: 'Other' },
];

const budgetRanges = [
  { value: 'lt500k', label: '< 500 000 FCFA', labelEn: '< 500,000 FCFA' },
  { value: '500k-1m', label: '500 000 – 1 000 000 FCFA', labelEn: '500k – 1M FCFA' },
  { value: '1m-5m', label: '1 000 000 – 5 000 000 FCFA', labelEn: '1M – 5M FCFA' },
  { value: '5m-10m', label: '5 000 000 – 10 000 000 FCFA', labelEn: '5M – 10M FCFA' },
  { value: 'gt10m', label: '> 10 000 000 FCFA', labelEn: '> 10M FCFA' },
  { value: 'discuss', label: 'À discuter', labelEn: 'To discuss' },
];

const contactInfo = [
  { icon: MapPinIcon, label: 'Adresse', labelEn: 'Address', value: companyInfo.address.full, link: null },
  { icon: PhoneIcon, label: 'Téléphone', labelEn: 'Phone', value: companyInfo.contact.phone, link: `tel:${companyInfo.contact.phone.replace(/\s/g, '')}` },
  { icon: EnvelopeIcon, label: 'Email', labelEn: 'Email', value: companyInfo.contact.email, link: `mailto:${companyInfo.contact.email}` },
];

type SubmitStatus = 'idle' | 'sending' | 'success' | 'error';

const Contact = () => {
  const { language, t } = useLanguage();
  const [heroVisible, setHeroVisible] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    message: '',
    consent: false,
  });

  useSEO({
    title: t('contact.meta.title'),
    description: t('contact.meta.description'),
    path: '/contact',
  });

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('sending');
    const subject = encodeURIComponent(`Contact: ${form.projectType || 'Général'}`);
    const body = encodeURIComponent(
      `${form.message}\n\n---\nNom: ${form.name}\nEmail: ${form.email}\nTéléphone: ${form.phone || '-'}\nEntreprise: ${form.company || '-'}\nType: ${form.projectType || '-'}\nBudget: ${form.budget || '-'}`
    );
    try {
      window.open(`mailto:${companyInfo.contact.email}?subject=${subject}&body=${body}`, '_blank');
      setTimeout(() => {
        setSubmitStatus('success');
        setForm({ name: '', email: '', phone: '', company: '', projectType: '', budget: '', message: '', consent: false });
      }, 800);
    } catch {
      setSubmitStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        {/* Hero #hero */}
        <section
          id="hero"
          className="relative overflow-hidden pt-4 pb-6 md:pt-6 md:pb-8 lg:pt-8 lg:pb-10 min-h-[450px] lg:min-h-[500px] xl:min-h-[550px] mb-20"
          style={{ isolation: 'isolate' }}
        >
          <div className="absolute inset-0 overflow-hidden bg-white z-0" aria-hidden="true">
            <div
              className="absolute inset-0 bg-[size:40px_40px]"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(10,122,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,122,255,0.15) 1px, transparent 1px)`,
              }}
            />
            <div className="absolute top-20 right-20 h-32 w-32 rounded-2xl border-2 border-brand-300/70 animate-float-shape" />
            <div className="absolute bottom-32 left-16 h-24 w-24 rounded-full border-2 border-brand-300/65 animate-float-gentle animate-pulse-border" />
            <div
              className="absolute top-1/2 right-1/4 h-20 w-20 border-2 border-brand-300/60 animate-rotate-slow"
              style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
            />
            <div className="absolute top-40 left-1/3 h-16 w-16 rounded-lg border-2 border-accent-300/60 -rotate-15 animate-float-shape" />
            <div className="absolute bottom-40 right-1/3 h-12 w-12 rounded-full border-2 border-accent-300/55 animate-float-gentle animate-pulse-border" />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-brand-50/20 to-transparent" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <div
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold shadow-sm bg-gradient-to-r from-brand-50 to-brand-100 text-brand-600 transition-all duration-800 ease-out ${heroVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-90'}`}
                style={{ transitionDelay: '150ms' }}
              >
                <RocketLaunchIcon className="h-4 w-4 animate-pulse" />
                {language === 'fr' ? 'Contactez-Nous' : 'Contact Us'}
              </div>
              <h1
                className={`mb-6 font-display text-4xl leading-[1.1] text-ink transition-all duration-1000 ease-out md:text-5xl lg:text-6xl ${heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                style={{ transitionDelay: '300ms' }}
              >
                {language === 'fr' ? 'Contactez-Nous' : 'Contact Us'}
              </h1>
              <p
                className={`mx-auto mb-4 max-w-3xl text-lg leading-relaxed text-neutral-700 md:text-xl ${heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: '450ms' }}
              >
                {language === 'fr'
                  ? 'Nous sommes disponibles 24/7 pour répondre à vos besoins et transformer vos idées en réalité.'
                  : 'We are available 24/7 to meet your needs and turn your ideas into reality.'}
              </p>
              <p
                className={`mx-auto mb-6 max-w-2xl text-base leading-relaxed text-neutral-600 ${heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: '600ms' }}
              >
                {language === 'fr'
                  ? 'Discutons de votre projet, explorons vos besoins et trouvons ensemble la solution adaptée à votre entreprise.'
                  : 'Let\'s discuss your project, explore your needs and find the right solution for your business together.'}
              </p>
            </div>
          </div>
        </section>

        {/* Grille formulaire + colonne droite */}
        <div className="grid gap-12 lg:grid-cols-3 mb-16">
          {/* Carte formulaire lg:col-span-2 */}
          <div className="lg:col-span-2">
            <div className="group relative rounded-2xl border border-neutral-200 bg-white p-8 md:p-10 shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
              <h2 className="mb-6 font-display text-2xl text-ink md:text-3xl">
                {language === 'fr' ? 'Envoyez-nous un message' : 'Send us a message'}
              </h2>

              {submitStatus === 'success' && (
                <div className="mb-6 flex items-center gap-3 rounded-xl bg-green-50 p-4 text-sm text-green-800 shadow-sm transition-all duration-500">
                  <CheckCircleIcon className="h-5 w-5 flex-shrink-0 text-green-600" />
                  <div>
                    <p className="font-semibold">{language === 'fr' ? 'Message envoyé avec succès !' : 'Message sent successfully!'}</p>
                    <p className="text-xs text-green-700">{language === 'fr' ? 'Nous vous répondrons sous 24h.' : 'We will reply within 24 hours.'}</p>
                  </div>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mb-6 flex items-center gap-3 rounded-xl bg-red-50 p-4 text-sm text-red-800 shadow-sm">
                  <XCircleIcon className="h-5 w-5 flex-shrink-0 text-red-600" />
                  <div>
                    <p className="font-semibold">{language === 'fr' ? "Erreur lors de l'envoi" : 'Error sending message'}</p>
                    <p className="text-xs text-red-700">{language === 'fr' ? 'Veuillez réessayer plus tard.' : 'Please try again later.'}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="group/field">
                    <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-ink transition-colors duration-300 group-focus-within/field:text-brand-600">
                      {language === 'fr' ? 'Nom complet' : 'Full name'} *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      placeholder={language === 'fr' ? 'Votre nom' : 'Your name'}
                      className="w-full rounded-xl border-2 border-neutral-200 bg-white px-4 py-3 text-sm text-ink transition-all duration-300 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 group-hover/field:border-neutral-300"
                    />
                  </div>
                  <div className="group/field">
                    <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-ink transition-colors duration-300 group-focus-within/field:text-brand-600">
                      Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      placeholder="votre@email.com"
                      className="w-full rounded-xl border-2 border-neutral-200 bg-white px-4 py-3 text-sm text-ink transition-all duration-300 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 group-hover/field:border-neutral-300"
                    />
                  </div>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="group/field">
                    <label htmlFor="contact-phone" className="mb-2 block text-sm font-medium text-ink transition-colors duration-300 group-focus-within/field:text-brand-600">
                      {language === 'fr' ? 'Téléphone' : 'Phone'}
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                      placeholder="+237 XXX XXX XXX"
                      className="w-full rounded-xl border-2 border-neutral-200 bg-white px-4 py-3 text-sm text-ink transition-all duration-300 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 group-hover/field:border-neutral-300"
                    />
                  </div>
                  <div className="group/field">
                    <label htmlFor="contact-company" className="mb-2 block text-sm font-medium text-ink transition-colors duration-300 group-focus-within/field:text-brand-600">
                      {language === 'fr' ? 'Entreprise' : 'Company'}
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
                      placeholder={language === 'fr' ? 'Nom de votre entreprise' : 'Company name'}
                      className="w-full rounded-xl border-2 border-neutral-200 bg-white px-4 py-3 text-sm text-ink transition-all duration-300 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 group-hover/field:border-neutral-300"
                    />
                  </div>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="group/field">
                    <label htmlFor="contact-project" className="mb-2 block text-sm font-medium text-ink transition-colors duration-300 group-focus-within/field:text-brand-600">
                      {language === 'fr' ? 'Type de projet' : 'Project type'}
                    </label>
                    <select
                      id="contact-project"
                      value={form.projectType}
                      onChange={(e) => setForm((f) => ({ ...f, projectType: e.target.value }))}
                      className="w-full rounded-xl border-2 border-neutral-200 bg-white px-4 py-3 text-sm text-ink transition-all duration-300 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 group-hover/field:border-neutral-300"
                    >
                      <option value="">—</option>
                      {projectTypes.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {language === 'fr' ? opt.label : opt.labelEn}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="group/field">
                    <label htmlFor="contact-budget" className="mb-2 block text-sm font-medium text-ink transition-colors duration-300 group-focus-within/field:text-brand-600">
                      {language === 'fr' ? 'Budget estimé' : 'Estimated budget'}
                    </label>
                    <select
                      id="contact-budget"
                      value={form.budget}
                      onChange={(e) => setForm((f) => ({ ...f, budget: e.target.value }))}
                      className="w-full rounded-xl border-2 border-neutral-200 bg-white px-4 py-3 text-sm text-ink transition-all duration-300 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 group-hover/field:border-neutral-300"
                    >
                      <option value="">—</option>
                      {budgetRanges.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {language === 'fr' ? opt.label : opt.labelEn}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="group/field">
                  <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-ink transition-colors duration-300 group-focus-within/field:text-brand-600">
                    {language === 'fr' ? 'Message' : 'Message'} *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    placeholder={language === 'fr' ? 'Décrivez votre projet, vos objectifs ou posez votre question…' : 'Describe your project, goals or ask your question…'}
                    className="w-full resize-none rounded-xl border-2 border-neutral-200 bg-white px-4 py-3 text-sm text-ink transition-all duration-300 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 group-hover/field:border-neutral-300"
                  />
                </div>
                <div className="group/field">
                  <label className="mb-2 flex items-center gap-2 text-sm font-medium text-ink transition-colors duration-300 group-focus-within/field:text-brand-600">
                    <PaperClipIcon className="h-4 w-4" />
                    {language === 'fr' ? 'Pièce jointe (optionnel)' : 'Attachment (optional)'}
                  </label>
                  <input
                    type="file"
                    onChange={() => {}}
                    className="w-full rounded-xl border-2 border-neutral-200 bg-white px-4 py-3 text-sm text-ink file:mr-4 file:rounded-lg file:border-0 file:bg-brand-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-brand-600 hover:file:bg-brand-100 transition-all duration-300 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                  />
                </div>
                <div className="flex items-start gap-3 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
                  <input
                    id="contact-consent"
                    type="checkbox"
                    required
                    checked={form.consent}
                    onChange={(e) => setForm((f) => ({ ...f, consent: e.target.checked }))}
                    className="mt-1 h-4 w-4 rounded border-neutral-300 text-brand-500 focus:ring-2 focus:ring-brand-500/20"
                  />
                  <label htmlFor="contact-consent" className="text-sm leading-relaxed text-neutral-600">
                    {language === 'fr'
                      ? "J'accepte que mes données soient utilisées pour me recontacter *"
                      : 'I agree that my data may be used to contact me *'}
                  </label>
                </div>
                <button
                  type="submit"
                  disabled={submitStatus === 'sending'}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-8 py-4 text-base font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 disabled:opacity-70"
                >
                  {submitStatus === 'sending' ? (
                    <>
                      <span className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      {language === 'fr' ? 'Envoi en cours…' : 'Sending…'}
                    </>
                  ) : (
                    <>
                      {language === 'fr' ? 'Envoyer le message' : 'Send message'}
                      <RocketLaunchIcon className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Colonne droite : Informations de contact */}
          <div className="space-y-6">
            <h2 className="mb-6 font-display text-2xl text-ink md:text-3xl">
              {language === 'fr' ? 'Informations de Contact' : 'Contact Information'}
            </h2>
            <div className="space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="group flex items-start gap-3 rounded-2xl border border-neutral-200 bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
                    style={{
                      transform: heroVisible ? 'translateY(0)' : 'translateY(8px)',
                      opacity: heroVisible ? 1 : 0,
                      transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
                      transitionDelay: `${index * 100}ms`,
                    }}
                  >
                    <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-500 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-neutral-500">
                        {language === 'fr' ? item.label : item.labelEn}
                      </p>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-sm font-semibold text-ink transition-colors duration-300 hover:text-brand-600 focus:outline-none"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold text-ink">{item.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            <h3 className="mb-4 text-sm font-semibold text-ink">
              {language === 'fr' ? 'Suivez-Nous' : 'Follow Us'}
            </h3>
            <div className="flex gap-3">
              <a
                href={companyInfo.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#25D366]/10 text-[#25D366] transition-all duration-300 hover:scale-110 hover:bg-[#25D366] hover:text-white hover:shadow-lg"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.372a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
              <a
                href={companyInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1877F2]/10 text-[#1877F2] transition-all duration-300 hover:scale-110 hover:bg-[#1877F2] hover:text-white hover:shadow-lg"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href={companyInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0A66C2]/10 text-[#0A66C2] transition-all duration-300 hover:scale-110 hover:bg-[#0A66C2] hover:text-white hover:shadow-lg"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href={companyInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E4405F]/10 text-[#E4405F] transition-all duration-300 hover:scale-110 hover:bg-[#E4405F] hover:text-white hover:shadow-lg"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <FAQ />
      </div>
    </div>
  );
};

export default Contact;
