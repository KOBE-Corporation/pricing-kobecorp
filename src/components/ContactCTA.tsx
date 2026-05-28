import { useLanguage } from '../contexts/useLanguage';
import Button from './Button';

type ContactCTAProps = {
  id?: string;
  titleFr: string;
  titleEn: string;
  subtitleFr: string;
  subtitleEn: string;
  mailSubjectSuffix?: string;
};

const ContactCTA = ({
  id = 'contact',
  titleFr,
  titleEn,
  subtitleFr,
  subtitleEn,
  mailSubjectSuffix,
}: ContactCTAProps) => {
  const { t, language } = useLanguage();

  const subject =
    mailSubjectSuffix && mailSubjectSuffix.trim().length > 0
      ? encodeURIComponent(mailSubjectSuffix)
      : '';
  const mailto =
    subject.length > 0
      ? `mailto:contact@kobecorporation.com?subject=${subject}`
      : 'mailto:contact@kobecorporation.com';

  return (
    <section id={id} className="py-24 bg-gradient-to-b from-brand-50/60 via-brand-50/30 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl border-2 border-brand-200/80 bg-white/90 backdrop-blur-sm shadow-pricing overflow-hidden text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-50/50 to-transparent pointer-events-none" />
          <div className="relative z-10 px-8 py-14 md:px-12 md:py-16">
            <h2 className="mb-6 font-display text-4xl leading-[1.1] text-ink transition-all duration-1000 ease-out md:text-5xl lg:text-6xl">
              {language === 'fr' ? titleFr : titleEn}
            </h2>
            <p className="font-sans text-lg text-neutral-600 mb-10 max-w-xl mx-auto leading-relaxed">
              {language === 'fr' ? subtitleFr : subtitleEn}
            </p>
            <Button variant="primary" size="lg" href={mailto}>
              {t('contact.cta')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
