import { ReactNode } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

type FeatureItem = {
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
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
};

const SectionFeatures = ({
  titleFr,
  titleEn,
  subtitleFr,
  subtitleEn,
  items,
}: SectionFeaturesProps) => {
  const { language } = useLanguage();

  return (
    <section className="py-24 bg-neutral-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink tracking-tight mb-4">
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
