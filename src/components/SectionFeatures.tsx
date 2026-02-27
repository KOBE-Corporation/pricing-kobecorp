import type { ComponentType, CSSProperties } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

type FeatureItem = {
  icon: ComponentType<{ className?: string; style?: CSSProperties }>;
  titleFr: string;
  titleEn: string;
  descriptionFr: string;
  descriptionEn: string;
};

type SectionFeaturesProps = {
  titleFr: string;
  titleEn: string;
  subtitleFr: string;
  subtitleEn: string;
  items: FeatureItem[];
  badgeLabelFr?: string;
  badgeLabelEn?: string;
};

const SectionFeatures = ({
  titleFr,
  titleEn,
  subtitleFr,
  subtitleEn,
  items,
  badgeLabelFr,
  badgeLabelEn,
}: SectionFeaturesProps) => {
  const { language } = useLanguage();

  return (
    <section className="py-24 bg-neutral-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          {badgeLabelFr || badgeLabelEn ? (
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-2 text-sm font-semibold text-brand-600 ring-1 ring-brand-500/10 mb-4">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              {language === 'fr' ? badgeLabelFr ?? badgeLabelEn : badgeLabelEn ?? badgeLabelFr}
            </span>
          ) : null}
          <h2 className="mb-6 font-display text-4xl leading-[1.1] text-ink transition-all duration-1000 ease-out md:text-5xl lg:text-6xl">
            {language === 'fr' ? titleFr : titleEn}
          </h2>
          <p className="font-sans text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            {language === 'fr' ? subtitleFr : subtitleEn}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group rounded-2xl border border-neutral-200 bg-white p-8 shadow-pricing hover:shadow-pricing-hover hover:border-brand-200 transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <div className="flex items-start gap-5">
                  <div className="rounded-xl p-3.5 flex-shrink-0 bg-brand-50 border border-brand-100 group-hover:bg-brand-100/80 transition-colors">
                    <Icon className="h-8 w-8 text-brand-600" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-xl font-semibold text-ink mb-2">
                      {language === 'fr' ? item.titleFr : item.titleEn}
                    </h3>
                    <p className="font-sans text-neutral-600 leading-relaxed">
                      {language === 'fr' ? item.descriptionFr : item.descriptionEn}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionFeatures;
