import { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import PageHero from '../components/PageHero';
import { companyInfo } from '../data/companyInfo';
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/24/outline';

const Contact = () => {
  const { language, t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  useEffect(() => {
    document.title = t('contact.meta.title');
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', t('contact.meta.description'));
    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', `${window.location.origin}/contact`);
    }
  }, [language, t]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject || 'Contact depuis le site');
    const body = encodeURIComponent(
      `${form.message}\n\n--\n${form.name}\n${form.email}`
    );
    window.open(`mailto:${companyInfo.contact.email}?subject=${subject}&body=${body}`, '_blank');
    setSubmitted(true);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  const contactPage = (key: string) => t(`contact.page.${key}`);

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        title={contactPage('title')}
        subtitle={contactPage('subtitle')}
        primaryCta={{
          label: t('contact.cta'),
          href: '#contact-form',
          variant: 'primary',
        }}
      />

      <section
        id="contact-form"
        className="relative py-16 md:py-24 bg-gradient-to-b from-white via-neutral-50/30 to-white"
        aria-label={language === 'fr' ? 'Formulaire de contact' : 'Contact form'}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
            {/* Infos de contact */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="rounded-2xl border border-neutral-200 bg-white shadow-subtle p-6 md:p-8 sticky top-24">
                <h2 className="font-display text-xl font-semibold text-ink mb-6">
                  {language === 'fr' ? 'Nous trouver' : 'Find us'}
                </h2>
                <ul className="space-y-5">
                  <li className="flex gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                      <MapPinIcon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-0.5">
                        {contactPage('address')}
                      </p>
                      <p className="text-sm text-neutral-700">{companyInfo.address.full}</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <a
                      href={`tel:${companyInfo.contact.phone.replace(/\s/g, '')}`}
                      className="flex gap-3 text-neutral-700 hover:text-brand-600 transition-colors"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                        <PhoneIcon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-0.5">
                          {contactPage('phone')}
                        </p>
                        <p className="text-sm">{companyInfo.contact.phone}</p>
                      </div>
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <a
                      href={`mailto:${companyInfo.contact.email}`}
                      className="flex gap-3 text-neutral-700 hover:text-brand-600 transition-colors"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                        <EnvelopeIcon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-0.5">
                          {contactPage('email')}
                        </p>
                        <p className="text-sm break-all">{companyInfo.contact.email}</p>
                      </div>
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                      <ClockIcon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-0.5">
                        {contactPage('availability')}
                      </p>
                      <p className="text-sm text-neutral-700">{companyInfo.contact.availability}</p>
                    </div>
                  </li>
                </ul>
                <a
                  href="https://ben-djibril.kobecorporation.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center justify-center gap-2 w-full rounded-xl px-4 py-3 text-sm font-semibold text-white shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all"
                  style={{ backgroundColor: '#0a7aff' }}
                >
                  Discuter avec Ben Djibril
                </a>
              </div>
            </div>

            {/* Formulaire */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <div className="rounded-2xl border border-neutral-200 bg-white shadow-subtle p-6 md:p-8 lg:p-10">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-brand-600 mb-4">
                      <PaperAirplaneIcon className="h-7 w-7" />
                    </div>
                    <p className="font-sans text-lg text-neutral-700">{contactPage('success')}</p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-6 text-sm font-semibold text-brand-600 hover:text-brand-700"
                    >
                      {language === 'fr' ? 'Envoyer un autre message' : 'Send another message'}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="contact-name" className="block text-sm font-semibold text-neutral-700 mb-2">
                          {contactPage('formName')} <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                          className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-neutral-800 shadow-subtle focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 focus:outline-none transition-all"
                          placeholder={language === 'fr' ? 'Jean Dupont' : 'John Doe'}
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="block text-sm font-semibold text-neutral-700 mb-2">
                          {contactPage('formEmail')} <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                          className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-neutral-800 shadow-subtle focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 focus:outline-none transition-all"
                          placeholder="vous@exemple.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="contact-subject" className="block text-sm font-semibold text-neutral-700 mb-2">
                        {contactPage('formSubject')}
                      </label>
                      <input
                        id="contact-subject"
                        type="text"
                        value={form.subject}
                        onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                        className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-neutral-800 shadow-subtle focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 focus:outline-none transition-all"
                        placeholder={language === 'fr' ? 'Devis, projet, question…' : 'Quote, project, question…'}
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-message" className="block text-sm font-semibold text-neutral-700 mb-2">
                        {contactPage('formMessage')} <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                        className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-neutral-800 shadow-subtle focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 focus:outline-none transition-all resize-y min-h-[120px]"
                        placeholder={language === 'fr' ? 'Décrivez votre besoin ou votre question…' : 'Describe your need or question…'}
                      />
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                        style={{ backgroundColor: '#0a7aff' }}
                      >
                        <PaperAirplaneIcon className="h-5 w-5" />
                        {contactPage('submit')}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
